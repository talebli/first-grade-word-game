/**
 * هسته منطق وب‌اپلیکیشن بازی کلمه‌سازی اول دبستان
 * نسخه تکمیلی با پشتیبانی از کیبورد، کشیدن و رها کردن (Drag & Drop)، و پیش‌نمایش کلمات
 */

class WordGameApp {
  constructor() {
    this.selectedLetterIds = new Set();
    this.currentMode = 'builder'; // 'builder', 'missing', 'sandbox', 'notebook'
    this.availableWords = [];
    this.currentWord = null;
    this.placedTiles = []; // حروف چیده شده در جورچین
    this.remainingTiles = []; // حروف باقیمانده در مخزن
    this.score = 0;
    this.streak = 0;
    this.discoveredWords = new Set(); // کلمات حل شده ذخیره در حافظه

    // وضعیت بازی جای خالی
    this.missingGame = {
      word: null,
      missingIndex: 0,
      options: []
    };

    // وضعیت کارگاه آزاد
    this.sandboxTiles = [];

    this.init();
  }

  init() {
    this.loadState();
    this.renderCurriculumPresets();
    this.renderLettersGrid();

    // اگر هیچ نشانه‌ای انتخاب نشده بود، پیش‌فرض تا درس ۳ را انتخاب کن
    if (this.selectedLetterIds.size === 0) {
      this.applyLessonPreset(3);
    } else {
      this.updateAvailableWords();
    }

    this.setupEventListeners();
    this.setupKeyboardSupport();
    this.startNewRound();
    this.updateStatsUI();
  }

  // بارگذاری داده‌ها از LocalStorage
  loadState() {
    try {
      const savedLetters = localStorage.getItem('grade1_selected_letters');
      if (savedLetters) {
        const arr = JSON.parse(savedLetters);
        this.selectedLetterIds = new Set(arr);
      }

      const savedWords = localStorage.getItem('grade1_discovered_words');
      if (savedWords) {
        this.discoveredWords = new Set(JSON.parse(savedWords));
      }

      const savedScore = localStorage.getItem('grade1_score');
      if (savedScore) {
        this.score = parseInt(savedScore, 10) || 0;
      }
    } catch (e) {
      console.warn("Storage load error:", e);
    }
  }

  saveState() {
    try {
      localStorage.setItem('grade1_selected_letters', JSON.stringify([...this.selectedLetterIds]));
      localStorage.setItem('grade1_discovered_words', JSON.stringify([...this.discoveredWords]));
      localStorage.setItem('grade1_score', this.score.toString());
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  // تبدیل اعداد به ارقام فارسی
  toPersianDigits(n) {
    if (n === undefined || n === null) return '۰';
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return n.toString().replace(/\d/g, x => farsiDigits[x]);
  }

  // تولید دکمه‌های پیش‌تنظیم درس‌های کتاب فارسی
  renderCurriculumPresets() {
    const container = document.getElementById('lesson-presets-container');
    if (!container) return;

    const quickPresets = [
      { label: "درس ۱ (آ، ب)", maxLesson: 1 },
      { label: "تا درس ۲ (د)", maxLesson: 2 },
      { label: "تا درس ۳ (م، س)", maxLesson: 3 },
      { label: "تا درس ۴ (او، ت)", maxLesson: 4 },
      { label: "تا درس ۵ (ر)", maxLesson: 5 },
      { label: "تا درس ۶ (ن، ای)", maxLesson: 6 },
      { label: "تا درس ۷ (ز، اِ)", maxLesson: 7 },
      { label: "تا درس ۸ (ش، ی)", maxLesson: 8 },
      { label: "تا درس ۱۰ (ک، و)", maxLesson: 10 },
      { label: "تا درس ۱۲ (ف، خ)", maxLesson: 12 },
      { label: "تا درس ۱۵ (چ، هـ)", maxLesson: 15 },
      { label: "کل نشانه‌های ۱ (تا ژ)", maxLesson: 16 },
      { label: "تمام نشانه‌ها (۱ و ۲)", maxLesson: 20 }
    ];

    container.innerHTML = quickPresets.map(preset => `
      <button class="preset-btn" data-lesson="${preset.maxLesson}">
        <span class="icon">📖</span> ${preset.label}
      </button>
    `).join('');

    container.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const maxL = parseInt(btn.dataset.lesson, 10);
        this.applyLessonPreset(maxL);
        window.soundEngine.playPop(580);
      });
    });
  }

  // انتخاب خودکار نشانه‌ها تا یک درس مشخص
  applyLessonPreset(maxLesson) {
    this.selectedLetterIds.clear();
    ALL_LETTERS.forEach(letter => {
      if (letter.lesson <= maxLesson) {
        this.selectedLetterIds.add(letter.id);
      }
    });

    this.saveState();
    this.syncLetterChipsUI();
    this.updateAvailableWords();
    this.startNewRound();
  }

  // رندر شبکه تک‌تک نشانه‌ها جهت انتخاب دستی
  renderLettersGrid() {
    const group1Container = document.getElementById('letters-group-1');
    const group2Container = document.getElementById('letters-group-2');

    if (!group1Container || !group2Container) return;

    const createChip = (letter) => `
      <button class="letter-chip ${this.selectedLetterIds.has(letter.id) ? 'active' : ''} ${letter.isVowel ? 'vowel' : ''}" 
              data-id="${letter.id}" title="${letter.name} (درس ${letter.lesson})">
        <span class="letter-display">${letter.display}</span>
        <span class="letter-name">${letter.id}</span>
      </button>
    `;

    group1Container.innerHTML = ALL_LETTERS.filter(l => l.group === 1).map(createChip).join('');
    group2Container.innerHTML = ALL_LETTERS.filter(l => l.group === 2).map(createChip).join('');

    // ثبت رویداد کلیک روی هر نشانه
    document.querySelectorAll('.letter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const id = chip.dataset.id;
        if (this.selectedLetterIds.has(id)) {
          this.selectedLetterIds.delete(id);
        } else {
          this.selectedLetterIds.add(id);
        }
        window.soundEngine.playPop(480);
        this.saveState();
        this.syncLetterChipsUI();
        this.updateAvailableWords();
        this.startNewRound();
      });
    });
  }

  // همگام‌سازی وضعیت ظاهری چیپ‌های نشانه‌ها
  syncLetterChipsUI() {
    document.querySelectorAll('.letter-chip').forEach(chip => {
      const id = chip.dataset.id;
      if (this.selectedLetterIds.has(id)) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  }

  // محاسبه کلماتی که با حروف انتخاب‌شده قابل ساخت هستند
  updateAvailableWords() {
    this.availableWords = WORDS_DATABASE.filter(w => {
      // آیا تمام نشانه‌های مورد نیاز این کلمه در نشانه‌های فعال دانش‌آموز وجود دارد؟
      return w.reqLetters.every(req => this.selectedLetterIds.has(req));
    });

    // به‌روزرسانی برچسب‌ها در رابط کاربری
    const countEl = document.getElementById('active-words-count');
    if (countEl) {
      countEl.textContent = this.toPersianDigits(this.availableWords.length);
    }

    const badgeEl = document.getElementById('letters-count-badge');
    if (badgeEl) {
      badgeEl.textContent = `${this.toPersianDigits(this.selectedLetterIds.size)} نشانه انتخاب شده`;
    }

    // پیش‌نمایش لیست کلمات فعال در مودال تنظیمات
    this.renderSettingsWordListPreview();

    // بررسی خالی بودن
    const warningEl = document.getElementById('no-words-warning');
    if (warningEl) {
      if (this.availableWords.length === 0) {
        warningEl.classList.remove('hidden');
      } else {
        warningEl.classList.add('hidden');
      }
    }

    this.renderNotebook();
  }

  // نمایش لیست کلمات فعال در پنجره تنظیمات برای معلمان و اولیاء
  renderSettingsWordListPreview() {
    const previewContainer = document.getElementById('settings-words-preview-list');
    if (!previewContainer) return;

    if (this.availableWords.length === 0) {
      previewContainer.innerHTML = `<span style="color: #94a3b8; font-size: 0.9rem;">هنوز کلمه‌ای با این نشانه‌ها فعال نشده است.</span>`;
      return;
    }

    previewContainer.innerHTML = this.availableWords.map(w => `
      <span class="preview-word-tag" title="درس ${w.lesson}">
        ${w.emoji} ${w.vocalized || w.word}
      </span>
    `).join(' ');
  }

  setupEventListeners() {
    // تب‌های انتخاب حالت بازی (فقط بخش فارسی)
    document.querySelectorAll('#section-farsi .mode-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        if (mode) {
          this.switchMode(mode);
          window.soundEngine.playPop(520);
        }
      });
    });

    // باز و بسته کردن پنل انتخاب نشانه‌ها (Modal)
    const toggleSettingsBtn = document.getElementById('toggle-settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsBtn = document.getElementById('close-settings-btn');

    if (toggleSettingsBtn && settingsModal) {
      toggleSettingsBtn.addEventListener('click', () => {
        settingsModal.classList.add('open');
        window.soundEngine.playPop(600);
      });
    }

    if (closeSettingsBtn && settingsModal) {
      closeSettingsBtn.addEventListener('click', () => {
        settingsModal.classList.remove('open');
        window.soundEngine.playPop(420);
      });
    }

    // دکمه‌های انتخاب همه / پاک کردن همه
    const selectAllBtn = document.getElementById('select-all-letters-btn');
    if (selectAllBtn) {
      selectAllBtn.addEventListener('click', () => {
        ALL_LETTERS.forEach(l => this.selectedLetterIds.add(l.id));
        this.saveState();
        this.syncLetterChipsUI();
        this.updateAvailableWords();
        this.startNewRound();
        window.soundEngine.playPop(650);
      });
    }

    const clearAllBtn = document.getElementById('clear-all-letters-btn');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', () => {
        this.selectedLetterIds.clear();
        this.saveState();
        this.syncLetterChipsUI();
        this.updateAvailableWords();
        this.startNewRound();
        window.soundEngine.playPop(350);
      });
    }

    // دکمه کلمه بعدی
    const nextBtn = document.getElementById('next-word-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.startNewRound();
        window.soundEngine.playPop(500);
      });
    }

    // دکمه تلفظ کلمه
    const speakerBtn = document.getElementById('speak-btn');
    if (speakerBtn) {
      speakerBtn.addEventListener('click', () => {
        if (this.currentWord) {
          window.soundEngine.speakWord(this.currentWord.word);
        }
      });
    }

    // دکمه راهنما (لامپ جادویی)
    const hintBtn = document.getElementById('hint-btn');
    if (hintBtn) {
      hintBtn.addEventListener('click', () => {
        this.giveHint();
      });
    }

    // دکمه بازنشانی حروف کلمه فعلی
    const resetWordBtn = document.getElementById('reset-word-btn');
    if (resetWordBtn) {
      resetWordBtn.addEventListener('click', () => {
        this.resetCurrentTiles();
        window.soundEngine.playPop(400);
      });
    }

    // دکمه‌های کنترل صوت
    const soundToggle = document.getElementById('toggle-sound-btn');
    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        const active = window.soundEngine.toggleSound();
        soundToggle.classList.toggle('muted', !active);
        soundToggle.title = active ? "صدا فعال است" : "صدا قطع است";
      });
    }

    const voiceToggle = document.getElementById('toggle-voice-btn');
    if (voiceToggle) {
      voiceToggle.addEventListener('click', () => {
        const active = window.soundEngine.toggleVoice();
        voiceToggle.classList.toggle('muted', !active);
        voiceToggle.title = active ? "تلفظ خودکار فعال است" : "تلفظ خودکار قطع است";
      });
    }

    // دکمه‌های کارگاه کلمه‌سازی آزاد (سفره کلمات)
    const sandboxCheckBtn = document.getElementById('sandbox-check-btn');
    if (sandboxCheckBtn) {
      sandboxCheckBtn.addEventListener('click', () => {
        this.checkSandboxWord();
      });
    }

    const sandboxClearBtn = document.getElementById('sandbox-clear-btn');
    if (sandboxClearBtn) {
      sandboxClearBtn.addEventListener('click', () => {
        this.clearSandbox();
      });
    }
  }

  // پشتیبانی از تایپ با صفحه‌کلید (Keyboard typing)
  setupKeyboardSupport() {
    window.addEventListener('keydown', (e) => {
      // فقط زمانی که مودال باز نیست
      const modal = document.getElementById('settings-modal');
      if (modal && modal.classList.contains('open')) return;

      if (this.currentMode === 'builder') {
        if (e.key === 'Backspace') {
          // بازگرداندن آخرین حرف قرار داده شده
          for (let i = this.placedTiles.length - 1; i >= 0; i--) {
            if (this.placedTiles[i]) {
              this.returnTileFromSlot(i);
              break;
            }
          }
        } else if (e.key === 'Enter') {
          // اگر کلمه کامل شده بود، دکمه کلمه بعدی
          const banner = document.getElementById('celebration-banner');
          if (banner && !banner.classList.contains('hidden')) {
            this.startNewRound();
          }
        } else {
          // تطبیق کلید فشرده شده با حروف مخزن
          const typedChar = e.key;
          const matchIndex = this.remainingTiles.findIndex(t => t.char === typedChar);
          if (matchIndex !== -1) {
            this.placeTile(this.remainingTiles[matchIndex].id);
          }
        }
      }
    });
  }

  switchMode(mode) {
    if (!mode) return;
    this.currentMode = mode;

    document.querySelectorAll('#section-farsi .mode-tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.mode === mode);
    });

    document.querySelectorAll('#section-farsi .game-view-panel').forEach(panel => {
      panel.classList.add('hidden');
    });

    const activePanel = document.getElementById(`view-${mode}`);
    if (activePanel) {
      activePanel.classList.remove('hidden');
    }

    if (mode === 'builder') {
      this.initBuilderRound();
    } else if (mode === 'missing') {
      this.initMissingRound();
    } else if (mode === 'sandbox') {
      this.initSandbox();
    } else if (mode === 'notebook') {
      this.renderNotebook();
    }
  }

  startNewRound() {
    if (this.availableWords.length === 0) return;

    if (this.currentMode === 'builder') {
      this.initBuilderRound();
    } else if (this.currentMode === 'missing') {
      this.initMissingRound();
    }
  }

  // --- حالت ۱: جورچین کلمه‌سازی (Builder) ---
  initBuilderRound() {
    if (this.availableWords.length === 0) return;

    // انتخاب یک کلمه تصادفی با اولویت کلماتی که هنوز حل نشده‌اند
    const unsolved = this.availableWords.filter(w => !this.discoveredWords.has(w.word));
    const pool = unsolved.length > 0 ? unsolved : this.availableWords;
    this.currentWord = pool[Math.floor(Math.random() * pool.length)];

    // آماده‌سازی خانه‌ها و حروف
    this.placedTiles = new Array(this.currentWord.tiles.length).fill(null);

    // به هم ریختن حروف (Scramble)
    const shuffled = [...this.currentWord.tiles].map((char, originalIndex) => ({
      id: Math.random().toString(36).substring(2, 9),
      char: char,
      originalIndex: originalIndex
    }));

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    this.remainingTiles = shuffled;
    this.renderBuilderUI();
    this.hideCelebration();
  }

  renderBuilderUI() {
    if (!this.currentWord) return;

    // نمایش اطلاعات و راهنمای کلمه
    const emojiEl = document.getElementById('target-emoji');
    const hintEl = document.getElementById('target-hint');
    const lessonEl = document.getElementById('target-lesson-tag');

    if (emojiEl) emojiEl.textContent = this.currentWord.emoji;
    if (hintEl) hintEl.textContent = this.currentWord.hint;
    if (lessonEl) lessonEl.textContent = `درس ${this.toPersianDigits(this.currentWord.lesson)}`;

    // رندر خانه‌های کلمه (Slots)
    const slotsContainer = document.getElementById('word-slots-container');
    if (slotsContainer) {
      slotsContainer.innerHTML = this.placedTiles.map((tile, index) => {
        if (tile) {
          return `
            <div class="word-slot filled bounce-in" data-index="${index}" title="لمس کن تا برگردد">
              <span class="slot-letter">${tile.char}</span>
            </div>
          `;
        } else {
          return `
            <div class="word-slot empty" data-index="${index}">
              <span class="slot-dot">•</span>
            </div>
          `;
        }
      }).join('');

      // بازگرداندن حرف هنگام لمس خانه پر شده
      slotsContainer.querySelectorAll('.word-slot.filled').forEach(slot => {
        slot.addEventListener('click', () => {
          const idx = parseInt(slot.dataset.index, 10);
          this.returnTileFromSlot(idx);
        });
      });

      // پشتیبانی از درگ اند دراپ در خانه‌ها
      slotsContainer.querySelectorAll('.word-slot').forEach(slot => {
        slot.addEventListener('dragover', (e) => e.preventDefault());
        slot.addEventListener('drop', (e) => {
          e.preventDefault();
          const tileId = e.dataTransfer.getData('text/plain');
          if (tileId) this.placeTile(tileId);
        });
      });
    }

    // رندر مخزن حروف باقیمانده (Letter Pool)
    const poolContainer = document.getElementById('letter-pool-container');
    if (poolContainer) {
      poolContainer.innerHTML = this.remainingTiles.map(tile => `
        <button class="tile-btn pop-in" data-tile-id="${tile.id}" draggable="true">
          <span class="tile-char">${tile.char}</span>
        </button>
      `).join('');

      poolContainer.querySelectorAll('.tile-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const tileId = btn.dataset.tileId;
          this.placeTile(tileId);
        });

        btn.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', btn.dataset.tileId);
        });
      });
    }

    // رندر بخش و صداکشی
    this.renderSyllablesAndSounds();
  }

  placeTile(tileId) {
    const tileIndex = this.remainingTiles.findIndex(t => t.id === tileId);
    if (tileIndex === -1) return;

    // پیدا کردن اولین خانه خالی
    const emptySlotIndex = this.placedTiles.findIndex(t => t === null);
    if (emptySlotIndex === -1) return;

    const [tile] = this.remainingTiles.splice(tileIndex, 1);
    this.placedTiles[emptySlotIndex] = tile;

    window.soundEngine.playSnap();
    this.renderBuilderUI();

    // بررسی تکمیل کلمه
    if (!this.placedTiles.includes(null)) {
      this.checkBuilderWord();
    }
  }

  returnTileFromSlot(slotIndex) {
    const tile = this.placedTiles[slotIndex];
    if (!tile) return;

    this.placedTiles[slotIndex] = null;
    this.remainingTiles.push(tile);

    window.soundEngine.playPop(380);
    this.renderBuilderUI();
  }

  resetCurrentTiles() {
    this.placedTiles.forEach(tile => {
      if (tile) this.remainingTiles.push(tile);
    });
    this.placedTiles = new Array(this.currentWord.tiles.length).fill(null);
    this.renderBuilderUI();
  }

  // بررسی درستی کلمه در حالت جورچین
  checkBuilderWord() {
    const constructedWord = this.placedTiles.map(t => t.char).join('');
    const targetWord = this.currentWord.tiles.join('');

    if (constructedWord === targetWord) {
      this.handleSuccess(this.currentWord);
    } else {
      window.soundEngine.playSoftError();
      const slotsContainer = document.getElementById('word-slots-container');
      if (slotsContainer) {
        slotsContainer.classList.add('shake');
        setTimeout(() => slotsContainer.classList.remove('shake'), 600);
      }
    }
  }

  // کمک جادویی (راهنما)
  giveHint() {
    if (!this.currentWord) return;

    let targetIndex = -1;
    for (let i = 0; i < this.currentWord.tiles.length; i++) {
      const correctChar = this.currentWord.tiles[i];
      if (!this.placedTiles[i] || this.placedTiles[i].char !== correctChar) {
        targetIndex = i;
        break;
      }
    }

    if (targetIndex === -1) return;

    if (this.placedTiles[targetIndex]) {
      this.returnTileFromSlot(targetIndex);
    }

    const expectedChar = this.currentWord.tiles[targetIndex];
    const matchIndex = this.remainingTiles.findIndex(t => t.char === expectedChar);

    if (matchIndex !== -1) {
      const [tile] = this.remainingTiles.splice(matchIndex, 1);
      this.placedTiles[targetIndex] = tile;
      window.soundEngine.playHint();
      this.renderBuilderUI();

      if (!this.placedTiles.includes(null)) {
        this.checkBuilderWord();
      }
    }
  }

  // نمایش بخش‌ها و صداکشی کلمه
  renderSyllablesAndSounds() {
    const container = document.getElementById('word-breakdown-container');
    if (!container || !this.currentWord) return;

    const syllablesHtml = this.currentWord.syllables.map(s => `
      <span class="syllable-badge">${s}</span>
    `).join(' <span class="sep">-</span> ');

    const soundsHtml = this.currentWord.sounds.map(s => `
      <span class="sound-badge">${s}</span>
    `).join(' ');

    container.innerHTML = `
      <div class="breakdown-card">
        <div class="breakdown-row">
          <span class="breakdown-title">بخش‌های کلمه:</span>
          <div class="badges-wrapper">${syllablesHtml}</div>
          <span class="count-tag">(${this.toPersianDigits(this.currentWord.syllables.length)} بخش)</span>
        </div>
        <div class="breakdown-row">
          <span class="breakdown-title">صداکشی (صداها):</span>
          <div class="badges-wrapper">${soundsHtml}</div>
          <span class="count-tag">(${this.toPersianDigits(this.currentWord.sounds.length)} صدا)</span>
        </div>
      </div>
    `;
  }

  // --- حالت ۲: حرف گم‌شده (Missing Letter) ---
  initMissingRound() {
    if (this.availableWords.length === 0) return;

    const word = this.availableWords[Math.floor(Math.random() * this.availableWords.length)];
    const missingIdx = Math.floor(Math.random() * word.tiles.length);
    const correctLetter = word.tiles[missingIdx];

    const options = [correctLetter];
    const otherLetters = ALL_LETTERS
      .map(l => l.id)
      .filter(l => l !== correctLetter && this.selectedLetterIds.has(l));

    const shuffledOthers = [...otherLetters].sort(() => Math.random() - 0.5);
    while (options.length < 4 && shuffledOthers.length > 0) {
      options.push(shuffledOthers.pop());
    }

    options.sort(() => Math.random() - 0.5);

    this.missingGame = {
      word: word,
      missingIndex: missingIdx,
      correctLetter: correctLetter,
      options: options
    };

    this.renderMissingUI();
  }

  renderMissingUI() {
    const container = document.getElementById('missing-game-container');
    if (!container || !this.missingGame.word) return;

    const { word, missingIndex, options } = this.missingGame;

    const tilesHtml = word.tiles.map((char, idx) => {
      if (idx === missingIndex) {
        return `<div class="missing-slot empty-question">؟</div>`;
      } else {
        return `<div class="missing-slot visible">${char}</div>`;
      }
    }).join('');

    const optionsHtml = options.map(opt => `
      <button class="missing-option-btn pop-in" data-char="${opt}">
        ${opt}
      </button>
    `).join('');

    container.innerHTML = `
      <div class="missing-card">
        <div class="missing-emoji-clue">${word.emoji}</div>
        <div class="missing-hint-text">${word.hint}</div>
        <div class="missing-slots-row">${tilesHtml}</div>
        <div class="missing-prompt">کدام نشانه در جای خالی قرار می‌گیرد؟</div>
        <div class="missing-options-grid">${optionsHtml}</div>
      </div>
    `;

    container.querySelectorAll('.missing-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = btn.dataset.char;
        this.checkMissingChoice(chosen, btn);
      });
    });
  }

  checkMissingChoice(chosen, btnElement) {
    if (chosen === this.missingGame.correctLetter) {
      btnElement.classList.add('correct');
      window.soundEngine.playSuccess();
      window.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 45);

      this.score += 10;
      this.streak += 1;
      this.discoveredWords.add(this.missingGame.word.word);
      this.saveState();
      this.updateStatsUI();

      setTimeout(() => {
        this.initMissingRound();
      }, 1200);
    } else {
      btnElement.classList.add('wrong');
      window.soundEngine.playSoftError();
      setTimeout(() => {
        btnElement.classList.remove('wrong');
      }, 500);
    }
  }

  // --- حالت ۳: کارگاه کلمه‌سازی آزاد (سفره کلمات - Sandbox) ---
  initSandbox() {
    this.sandboxTiles = [];
    this.renderSandboxUI();
  }

  renderSandboxUI() {
    const workbench = document.getElementById('sandbox-workbench');
    const shelf = document.getElementById('sandbox-letters-shelf');

    if (!workbench || !shelf) return;

    if (this.sandboxTiles.length === 0) {
      workbench.innerHTML = `<span class="workbench-empty-tip">نشانه‌ها را از پایین انتخاب کن و روی میز بچین!</span>`;
    } else {
      workbench.innerHTML = this.sandboxTiles.map((char, index) => `
        <div class="sandbox-placed-tile pop-in" data-index="${index}" title="لمس کن تا برداشته شود">
          ${char}
        </div>
      `).join('');

      workbench.querySelectorAll('.sandbox-placed-tile').forEach(t => {
        t.addEventListener('click', () => {
          const idx = parseInt(t.dataset.index, 10);
          this.sandboxTiles.splice(idx, 1);
          window.soundEngine.playPop(360);
          this.renderSandboxUI();
        });
      });
    }

    const activeLetters = ALL_LETTERS.filter(l => this.selectedLetterIds.has(l.id));
    shelf.innerHTML = activeLetters.map(letter => `
      <button class="shelf-letter-btn pop-in" data-id="${letter.id}">
        <span class="shelf-char">${letter.id}</span>
        <span class="shelf-forms">${letter.display}</span>
      </button>
    `).join('');

    shelf.querySelectorAll('.shelf-letter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        this.sandboxTiles.push(id);
        window.soundEngine.playSnap();
        this.renderSandboxUI();
      });
    });
  }

  checkSandboxWord() {
    const constructed = this.sandboxTiles.join('');
    const statusEl = document.getElementById('sandbox-result-message');
    if (!statusEl) return;

    if (!constructed) {
      statusEl.textContent = "ابتدا چند نشانه روی میز بچین!";
      statusEl.className = "sandbox-msg warning";
      return;
    }

    const match = WORDS_DATABASE.find(w => w.tiles.join('') === constructed || w.word === constructed);

    if (match) {
      statusEl.textContent = `آفرین قهرمان! کلمه زیبای «${match.word}» ${match.emoji} ساخته شد!`;
      statusEl.className = "sandbox-msg success";
      this.handleSuccess(match);
      setTimeout(() => {
        this.sandboxTiles = [];
        this.renderSandboxUI();
      }, 1800);
    } else {
      statusEl.textContent = `کلمه «${constructed}» در کتاب اول دبستان پیدا نشد، دوباره امتحان کن!`;
      statusEl.className = "sandbox-msg note";
      window.soundEngine.playSoftError();
    }
  }

  clearSandbox() {
    this.sandboxTiles = [];
    const statusEl = document.getElementById('sandbox-result-message');
    if (statusEl) {
      statusEl.textContent = "";
      statusEl.className = "sandbox-msg";
    }
    window.soundEngine.playPop(340);
    this.renderSandboxUI();
  }

  // --- حالت ۴: دفترچه افتخارات (کلمات کشف شده) ---
  renderNotebook() {
    const container = document.getElementById('notebook-words-grid');
    const badgeCount = document.getElementById('notebook-count-badge');
    if (!container) return;

    if (badgeCount) {
      badgeCount.textContent = `${this.toPersianDigits(this.discoveredWords.size)} از ${this.toPersianDigits(this.availableWords.length)}`;
    }

    if (this.discoveredWords.size === 0) {
      container.innerHTML = `
        <div class="notebook-empty-box">
          <span class="empty-icon">🎒</span>
          <p>هنوز کلمه‌ای در بازی نساخته‌ای! به بازی برگرد و اولین ستاره‌ات را بگیر.</p>
        </div>
      `;
      return;
    }

    const words = WORDS_DATABASE.filter(w => this.discoveredWords.has(w.word));

    container.innerHTML = words.map(w => `
      <div class="notebook-word-card pop-in" data-word="${w.word}">
        <span class="card-emoji">${w.emoji}</span>
        <span class="card-word">${w.vocalized || w.word}</span>
        <span class="card-lesson">درس ${this.toPersianDigits(w.lesson)}</span>
        <button class="card-audio-btn" title="شنیدن تلفظ">🔊</button>
      </div>
    `).join('');

    container.querySelectorAll('.notebook-word-card').forEach(card => {
      const wordText = card.dataset.word;
      card.querySelector('.card-audio-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        window.soundEngine.speakWord(wordText);
      });

      card.addEventListener('click', () => {
        window.soundEngine.speakWord(wordText);
      });
    });
  }

  // رسیدگی به پاسخ درست
  handleSuccess(wordObj) {
    this.score += 15;
    this.streak += 1;
    this.discoveredWords.add(wordObj.word);
    this.saveState();
    this.updateStatsUI();

    window.soundEngine.playSuccess();
    window.soundEngine.speakWord(wordObj.word);
    window.confetti.burst(window.innerWidth / 2, window.innerHeight * 0.4, 75);

    if (this.streak > 0 && this.streak % 5 === 0) {
      setTimeout(() => window.soundEngine.playFanfare(), 450);
    }

    this.showCelebration(wordObj);
  }

  showCelebration(wordObj) {
    const banner = document.getElementById('celebration-banner');
    const wordDisplay = document.getElementById('celebration-word');
    const breakdownDisplay = document.getElementById('celebration-breakdown');

    if (banner && wordDisplay) {
      wordDisplay.textContent = `${wordObj.emoji} ${wordObj.vocalized || wordObj.word}`;
      if (breakdownDisplay) {
        breakdownDisplay.textContent = `بخش‌ها: ${wordObj.syllables.join(' - ')} | صداها: ${wordObj.sounds.join(' / ')}`;
      }
      banner.classList.remove('hidden');
      banner.classList.add('pop-in');
    }
  }

  hideCelebration() {
    const banner = document.getElementById('celebration-banner');
    if (banner) {
      banner.classList.add('hidden');
    }
  }

  updateStatsUI() {
    const scoreEl = document.getElementById('user-score-badge');
    const streakEl = document.getElementById('user-streak-badge');

    if (scoreEl) scoreEl.textContent = this.toPersianDigits(this.score);
    if (streakEl) streakEl.textContent = this.toPersianDigits(this.streak);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new WordGameApp();
});

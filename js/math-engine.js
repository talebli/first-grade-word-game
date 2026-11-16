/**
 * موتور بازی‌های ریاضی اول دبستان
 * نسخه اصلاح‌شده و پایدار با پشتیبانی کامل از ۵ بازی:
 * ۱. شمارش و چوب‌خط
 * ۲. جمع و تفریق تصویری
 * ۳. الگویابی شگفت‌انگیز
 * ۴. مقایسه کمتر، بیشتر و مساوی
 * ۵. جدول شگفت‌انگیز (سودوکوی ۳×۳)
 */

class MathEngine {
  constructor() {
    this.currentThemeLevel = 1; // 1: تا ۵ | 2: تا ۱۰ | 3: تا ۲۰
    this.currentMode = 'counting'; // 'counting', 'addition', 'pattern', 'compare', 'sudoku'
    this.score = 0;
    this.streak = 0;
    this.isProcessing = false;

    this.init();
  }

  init() {
    this.loadState();
    this.setupEventListeners();
  }

  loadState() {
    try {
      const savedLevel = localStorage.getItem('grade1_math_level');
      if (savedLevel) this.currentThemeLevel = parseInt(savedLevel, 10) || 1;
      const savedScore = localStorage.getItem('grade1_math_score');
      if (savedScore) this.score = parseInt(savedScore, 10) || 0;
    } catch (e) {
      console.warn("Math storage load error:", e);
    }
  }

  saveState() {
    try {
      localStorage.setItem('grade1_math_level', this.currentThemeLevel.toString());
      localStorage.setItem('grade1_math_score', this.score.toString());
    } catch (e) {
      console.warn("Math storage save error:", e);
    }
  }

  toPersianDigits(n) {
    if (n === undefined || n === null) return '۰';
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return n.toString().replace(/\d/g, x => farsiDigits[x]);
  }

  getMaxNumber() {
    if (this.currentThemeLevel === 1) return 5;
    if (this.currentThemeLevel === 2) return 10;
    return 20;
  }

  setupEventListeners() {
    // تب‌های انتخاب بازی‌های ریاضی (فقط در بخش ریاضی)
    document.querySelectorAll('#section-math .math-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const mode = btn.dataset.mathMode;
        if (mode) {
          this.switchMathMode(mode);
          window.soundEngine.playPop(520);
        }
      });
    });

    // دکمه‌های انتخاب سطح تم‌ها (تا ۵، تا ۱۰، تا ۲۰)
    document.querySelectorAll('#section-math .math-level-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lvl = parseInt(btn.dataset.mathLevel, 10);
        if (lvl) {
          this.setThemeLevel(lvl);
          window.soundEngine.playPop(600);
        }
      });
    });
  }

  setThemeLevel(lvl) {
    this.currentThemeLevel = lvl;
    this.saveState();

    document.querySelectorAll('#section-math .math-level-btn').forEach(b => {
      b.classList.toggle('active', parseInt(b.dataset.mathLevel, 10) === lvl);
    });

    const levelBadge = document.getElementById('math-active-level-label');
    if (levelBadge) {
      const titles = { 1: "تا عدد ۵ (تم ۱ تا ۵)", 2: "تا عدد ۱۰ (تم ۶ تا ۱۵)", 3: "تا عدد ۲۰ (تم ۱۶ تا ۲۵)" };
      levelBadge.textContent = titles[lvl] || "تا عدد ۱۰";
    }

    this.startNewRound();
  }

  switchMathMode(mode) {
    if (!mode) return;
    this.currentMode = mode;

    document.querySelectorAll('#section-math .math-tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.mathMode === mode);
    });

    document.querySelectorAll('#section-math .math-view-panel').forEach(panel => {
      panel.classList.add('hidden');
    });

    const activePanel = document.getElementById(`math-view-${mode}`);
    if (activePanel) {
      activePanel.classList.remove('hidden');
    }

    this.startNewRound();
  }

  startNewRound() {
    this.isProcessing = false;

    if (this.currentMode === 'counting') {
      this.initCountingRound();
    } else if (this.currentMode === 'addition') {
      this.initAdditionRound();
    } else if (this.currentMode === 'pattern') {
      this.initPatternRound();
    } else if (this.currentMode === 'compare') {
      this.initCompareRound();
    } else if (this.currentMode === 'sudoku') {
      this.initSudokuRound();
    }
    this.updateStatsUI();
  }

  // =========================================================================
  // ۱. بازی شمارش و چوب‌خط (Counting & Tally Marks)
  // =========================================================================
  initCountingRound() {
    const max = this.getMaxNumber();
    const count = Math.floor(Math.random() * max) + 1;
    const item = MATH_ITEMS[Math.floor(Math.random() * MATH_ITEMS.length)];
    const displayType = Math.random() > 0.45 ? 'items' : 'tally';

    // گزینه‌های چندگزینه‌ای ایمن
    const options = [count];
    let attempts = 0;
    while (options.length < 4 && attempts < 30) {
      attempts++;
      const wrong = Math.floor(Math.random() * max) + 1;
      if (!options.includes(wrong)) options.push(wrong);
    }
    for (let i = 1; options.length < 4; i++) {
      if (!options.includes(i)) options.push(i);
    }
    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById('math-counting-container');
    if (!container) return;

    let visualContent = '';
    if (displayType === 'items') {
      const itemsHtml = Array(count).fill(item.emoji).map(em => `
        <span class="counting-item-pop pop-in">${em}</span>
      `).join(' ');
      visualContent = `<div class="counting-items-grid">${itemsHtml}</div>`;
    } else {
      visualContent = `
        <div class="tally-display-box pop-in">
          ${generateTallySvg(count)}
        </div>
        <div class="counting-helper-label">چوب‌خط‌ها را بشمار!</div>
      `;
    }

    const optionsHtml = options.map(opt => `
      <button class="math-answer-btn pop-in" data-val="${opt}">
        ${this.toPersianDigits(opt)}
      </button>
    `).join('');

    container.innerHTML = `
      <div class="math-card">
        <div class="math-question-title">چند تا می‌بینی؟ عدد درست را انتخاب کن:</div>
        <div class="math-visual-stage">${visualContent}</div>
        <div class="math-answers-row">${optionsHtml}</div>
      </div>
    `;

    container.querySelectorAll('.math-answer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.dataset.val, 10);
        this.checkAnswer(val === count, btn, () => this.initCountingRound());
      });
    });
  }

  // =========================================================================
  // ۲. بازی جمع و تفریق تصویری (Visual Addition & Subtraction)
  // =========================================================================
  initAdditionRound() {
    const max = this.getMaxNumber();
    const isSubtraction = (this.currentThemeLevel >= 2) && (Math.random() > 0.5);
    const item = MATH_ITEMS[Math.floor(Math.random() * MATH_ITEMS.length)];

    let a, b, result, opSymbol;
    if (isSubtraction) {
      opSymbol = '-';
      a = Math.floor(Math.random() * (max - 1)) + 2;
      b = Math.floor(Math.random() * (a - 1)) + 1;
      result = a - b;
    } else {
      opSymbol = '+';
      const halfMax = Math.max(2, Math.floor(max / 2));
      a = Math.floor(Math.random() * halfMax) + 1;
      b = Math.floor(Math.random() * (max - a)) + 1;
      result = a + b;
    }

    // گزینه‌های چندگزینه‌ای ایمن
    const options = [result];
    let attempts = 0;
    while (options.length < 4 && attempts < 30) {
      attempts++;
      const wrong = Math.floor(Math.random() * (max + 1));
      if (!options.includes(wrong) && wrong >= 0) options.push(wrong);
    }
    for (let i = 0; options.length < 4; i++) {
      if (!options.includes(i)) options.push(i);
    }
    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById('math-addition-container');
    if (!container) return;

    const groupAHtml = Array(a).fill(item.emoji).map(em => `<span class="calc-item">${em}</span>`).join('');
    const groupBHtml = Array(b).fill(item.emoji).map(em => `<span class="calc-item">${em}</span>`).join('');

    const optionsHtml = options.map(opt => `
      <button class="math-answer-btn pop-in" data-val="${opt}">
        ${this.toPersianDigits(opt)}
      </button>
    `).join('');

    container.innerHTML = `
      <div class="math-card">
        <div class="math-question-title">حاصل این عبارت چند می‌شود؟</div>
        <div class="math-calc-stage">
          <div class="calc-group">
            <div class="calc-items-row">${groupAHtml}</div>
            <span class="calc-digit-badge">${this.toPersianDigits(a)}</span>
          </div>

          <span class="calc-operator-badge">${opSymbol === '+' ? '➕' : '➖'}</span>

          <div class="calc-group">
            <div class="calc-items-row">${groupBHtml}</div>
            <span class="calc-digit-badge">${this.toPersianDigits(b)}</span>
          </div>

          <span class="calc-operator-badge">🟰</span>

          <div class="calc-group question-target">
            <span class="calc-question-mark">؟</span>
          </div>
        </div>

        <div class="math-answers-row">${optionsHtml}</div>
      </div>
    `;

    container.querySelectorAll('.math-answer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.dataset.val, 10);
        this.checkAnswer(val === result, btn, () => this.initAdditionRound());
      });
    });
  }

  // =========================================================================
  // ۳. بازی الگویابی شگفت‌انگیز (Pattern Recognition)
  // =========================================================================
  initPatternRound() {
    const countShapes = this.currentThemeLevel === 1 ? 2 : 3;
    const shuffled = [...SHAPES].sort(() => Math.random() - 0.5).slice(0, countShapes);

    let patternSeq = [];
    for (let cycle = 0; cycle < 3; cycle++) {
      shuffled.forEach(s => patternSeq.push(s));
    }

    const totalLength = countShapes === 2 ? 5 : 6;
    const activePattern = patternSeq.slice(0, totalLength);
    const correctShape = activePattern[activePattern.length - 1];

    const options = [correctShape];
    SHAPES.forEach(s => {
      if (options.length < 4 && !options.some(o => o.id === s.id)) {
        options.push(s);
      }
    });
    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById('math-pattern-container');
    if (!container) return;

    const patternTilesHtml = activePattern.map((shape, idx) => {
      if (idx === activePattern.length - 1) {
        return `<div class="pattern-cell target-empty pop-in">؟</div>`;
      } else {
        return `<div class="pattern-cell filled pop-in">${shape.char}</div>`;
      }
    }).join(' <span class="pattern-arrow">➔</span> ');

    const optionsHtml = options.map(opt => `
      <button class="pattern-option-btn pop-in" data-shape-id="${opt.id}">
        <span class="opt-char">${opt.char}</span>
        <span class="opt-label">${opt.name}</span>
      </button>
    `).join('');

    container.innerHTML = `
      <div class="math-card">
        <div class="math-question-title">به الگوی زیر نگاه کن؛ شکل بعدی کدام است؟</div>
        <div class="pattern-track-stage">${patternTilesHtml}</div>
        <div class="math-answers-row">${optionsHtml}</div>
      </div>
    `;

    container.querySelectorAll('.pattern-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const shapeId = btn.dataset.shapeId;
        this.checkAnswer(shapeId === correctShape.id, btn, () => this.initPatternRound());
      });
    });
  }

  // =========================================================================
  // ۴. بازی کمتر، بیشتر و مساوی (Comparison: <, >, =)
  // =========================================================================
  initCompareRound() {
    const max = this.getMaxNumber();
    const item = MATH_ITEMS[Math.floor(Math.random() * MATH_ITEMS.length)];

    let a = Math.floor(Math.random() * max) + 1;
    let b;
    if (Math.random() < 0.3) {
      b = a;
    } else {
      b = Math.floor(Math.random() * max) + 1;
      if (a === b) b = Math.min(max, a + 1);
    }

    let correctOp = '=';
    if (a < b) correctOp = '<';
    if (a > b) correctOp = '>';

    const container = document.getElementById('math-compare-container');
    if (!container) return;

    const groupAHtml = Array(a).fill(item.emoji).join(' ');
    const groupBHtml = Array(b).fill(item.emoji).join(' ');

    container.innerHTML = `
      <div class="math-card">
        <div class="math-question-title">علامت مناسب را انتخاب کن (دهان تمساح به سمت عدد بزرگ‌تر):</div>
        
        <div class="compare-stage">
          <div class="compare-side">
            <span class="compare-digit">${this.toPersianDigits(a)}</span>
            <div class="compare-items-box">${groupAHtml}</div>
          </div>

          <div class="compare-slot-target">؟</div>

          <div class="compare-side">
            <span class="compare-digit">${this.toPersianDigits(b)}</span>
            <div class="compare-items-box">${groupBHtml}</div>
          </div>
        </div>

        <div class="math-answers-row">
          <button class="compare-btn pop-in" data-op="<">
            <span class="op-sym">&lt;</span>
            <span class="op-title">کمتر از</span>
          </button>
          <button class="compare-btn pop-in" data-op="=">
            <span class="op-sym">=</span>
            <span class="op-title">مساوی</span>
          </button>
          <button class="compare-btn pop-in" data-op=">">
            <span class="op-sym">&gt;</span>
            <span class="op-title">بیشتر از</span>
          </button>
        </div>
      </div>
    `;

    container.querySelectorAll('.compare-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const op = btn.dataset.op;
        this.checkAnswer(op === correctOp, btn, () => this.initCompareRound());
      });
    });
  }

  // =========================================================================
  // ۵. جدول شگفت‌انگیز ۳×۳ (Sudoku with Shapes/Colors)
  // =========================================================================
  initSudokuRound() {
    const symbols = [SHAPES[0], SHAPES[1], SHAPES[2]]; // دایره قرمز، مربع آبی، مثلث قرمز

    const shift = Math.floor(Math.random() * 3);
    const syms = [symbols[shift], symbols[(shift + 1) % 3], symbols[(shift + 2) % 3]];

    const grid = [
      [syms[0], syms[1], syms[2]],
      [syms[1], syms[2], syms[0]],
      [syms[2], syms[0], syms[1]]
    ];

    const targetRow = Math.floor(Math.random() * 3);
    const targetCol = Math.floor(Math.random() * 3);
    const correctShape = grid[targetRow][targetCol];

    const container = document.getElementById('math-sudoku-container');
    if (!container) return;

    let gridHtml = '<div class="sudoku-grid-3x3">';
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (r === targetRow && c === targetCol) {
          gridHtml += `<div class="sudoku-cell empty-target pop-in">؟</div>`;
        } else {
          gridHtml += `<div class="sudoku-cell filled">${grid[r][c].char}</div>`;
        }
      }
    }
    gridHtml += '</div>';

    const optionsHtml = symbols.map(opt => `
      <button class="sudoku-choice-btn pop-in" data-shape-id="${opt.id}">
        <span class="sym-char">${opt.char}</span>
      </button>
    `).join('');

    container.innerHTML = `
      <div class="math-card">
        <div class="math-question-title">جدول شگفت‌انگیز: در هر سطر و ستون هر شکل فقط یک‌بار می‌آید!</div>
        <div class="sudoku-stage">${gridHtml}</div>
        <div class="sudoku-prompt">کدام شکل باید در خانه علامت سؤال قرار بگیرد؟</div>
        <div class="math-answers-row">${optionsHtml}</div>
      </div>
    `;

    container.querySelectorAll('.sudoku-choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const shapeId = btn.dataset.shapeId;
        this.checkAnswer(shapeId === correctShape.id, btn, () => this.initSudokuRound());
      });
    });
  }

  // رسیدگی به پاسخ‌های ریاضی با محافظت در برابر کلیک مکرر
  checkAnswer(isCorrect, btnElement, nextRoundCallback) {
    if (this.isProcessing) return;

    if (isCorrect) {
      this.isProcessing = true;
      btnElement.classList.add('correct');
      window.soundEngine.playSuccess();
      window.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 55);

      this.score += 10;
      this.streak += 1;
      this.saveState();
      this.updateStatsUI();

      setTimeout(() => {
        this.isProcessing = false;
        nextRoundCallback();
      }, 1000);
    } else {
      btnElement.classList.add('wrong');
      window.soundEngine.playSoftError();
      setTimeout(() => {
        btnElement.classList.remove('wrong');
      }, 500);
    }
  }

  updateStatsUI() {
    const scoreBadge = document.getElementById('user-score-badge');
    const streakBadge = document.getElementById('user-streak-badge');
    if (scoreBadge) scoreBadge.textContent = this.toPersianDigits(this.score);
    if (streakBadge) streakBadge.textContent = this.toPersianDigits(this.streak);
  }
}

// راه‌اندازی پس از بارگذاری DOM
window.addEventListener('DOMContentLoaded', () => {
  window.mathEngine = new MathEngine();
});

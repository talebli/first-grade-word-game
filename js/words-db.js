/**
 * بانک اطلاعات نشانه‌ها و کلمات کتاب فارسی اول دبستان
 * منطبق بر سرفصل رسمی آموزش و پرورش (نشانه‌های ۱ و ۲)
 */

const LESSONS_CONFIG = [
  {
    id: 1,
    title: "درس ۱: آ ا - بـ ب",
    desc: "نخستین درس فارسی؛ آ اول، ا غیر اول، بـ غیرآخر، ب آخر",
    letters: ["آ", "ا", "ب"],
    group: 1
  },
  {
    id: 2,
    title: "درس ۲: اَ ـَ - د",
    desc: "صدای اَ اول، ـَ غیر اول و نشانه د",
    letters: ["اَ", "د"],
    group: 1
  },
  {
    id: 3,
    title: "درس ۳: مـ م - سـ س",
    desc: "نشانه‌های م و س",
    letters: ["م", "س"],
    group: 1
  },
  {
    id: 4,
    title: "درس ۴: او و - تـ ت",
    desc: "صدای او اول، و غیر اول و نشانه ت",
    letters: ["او", "و", "ت"],
    group: 1
  },
  {
    id: 5,
    title: "درس ۵: ر",
    desc: "نشانه ر",
    letters: ["ر"],
    group: 1
  },
  {
    id: 6,
    title: "درس ۶: نـ ن - ایـ یـ ی ای",
    desc: "نشانه‌های ن و صدای ای",
    letters: ["ن", "ای", "ی"],
    group: 1
  },
  {
    id: 7,
    title: "درس ۷: ز - اِ ـِ ـه ه",
    desc: "نشانه ز و صدای اِ",
    letters: ["ز", "اِ", "ه"],
    group: 1
  },
  {
    id: 8,
    title: "درس ۸: شـ ش - یـ ی",
    desc: "نشانه ش و ی میانجی",
    letters: ["ش"],
    group: 1
  },
  {
    id: 9,
    title: "درس ۹: اُ ـُ",
    desc: "صدای کوتاه اُ",
    letters: ["اُ"],
    group: 1
  },
  {
    id: 10,
    title: "درس ۱۰: کـ ک - و",
    desc: "نشانه ک و و صامت (مثل ورزش)",
    letters: ["ک"],
    group: 1
  },
  {
    id: 11,
    title: "درس ۱۱: پـ پ - گـ گ",
    desc: "نشانه‌های پ و گ",
    letters: ["پ", "گ"],
    group: 1
  },
  {
    id: 12,
    title: "درس ۱۲: فـ ف - خـ خ",
    desc: "نشانه‌های ف و خ",
    letters: ["ف", "خ"],
    group: 1
  },
  {
    id: 13,
    title: "درس ۱۳: قـ ق - لـ ل",
    desc: "نشانه‌های ق و ل",
    letters: ["ق", "ل"],
    group: 1
  },
  {
    id: 14,
    title: "درس ۱۴: جـ ج",
    desc: "نشانه ج و استثنا",
    letters: ["ج"],
    group: 1
  },
  {
    id: 15,
    title: "درس ۱۵: چـ چ - هـ ـهـ",
    desc: "نشانه‌های چ و هـ چهارشکلی",
    letters: ["چ"],
    group: 1
  },
  {
    id: 16,
    title: "درس ۱۶: ژ",
    desc: "نشانه ژ (آخرین نشانه از نشانه‌های ۱)",
    letters: ["ژ"],
    group: 1
  },
  {
    id: 17,
    title: "نشانه‌های ۲: ص - ذ",
    desc: "نشانه‌های دو شکلی و پرکاربرد",
    letters: ["ص", "ذ"],
    group: 2
  },
  {
    id: 18,
    title: "نشانه‌های ۲: ع - ث",
    desc: "ع چهارشکلی و ث",
    letters: ["ع", "ث"],
    group: 2
  },
  {
    id: 19,
    title: "نشانه‌های ۲: ح - ض",
    desc: "نشانه‌های ح و ض",
    letters: ["ح", "ض"],
    group: 2
  },
  {
    id: 20,
    title: "نشانه‌های ۲: ط - غ - ظ",
    desc: "نشانه‌های ط و غ و ظ",
    letters: ["ط", "غ", "ظ"],
    group: 2
  }
];

const ALL_LETTERS = [
  // نشانه‌های ۱
  { id: "آ", display: "آ ا", name: "آ اول / ا غیر اول", lesson: 1, group: 1, isVowel: true },
  { id: "ب", display: "بـ ب", name: "بـ غیرآخر / ب آخر", lesson: 1, group: 1 },
  { id: "اَ", display: "اَ ـَ", name: "اَ اول / ـَ غیر اول", lesson: 2, group: 1, isVowel: true },
  { id: "د", display: "د", name: "د", lesson: 2, group: 1 },
  { id: "م", display: "مـ م", name: "مـ غیرآخر / م آخر", lesson: 3, group: 1 },
  { id: "س", display: "سـ س", name: "سـ غیرآخر / س آخر", lesson: 3, group: 1 },
  { id: "او", display: "او و", name: "او اول / و غیر اول", lesson: 4, group: 1, isVowel: true },
  { id: "ت", display: "تـ ت", name: "تـ غیرآخر / ت آخر", lesson: 4, group: 1 },
  { id: "ر", display: "ر", name: "ر", lesson: 5, group: 1 },
  { id: "ن", display: "نـ ن", name: "نـ غیرآخر / ن آخر", lesson: 6, group: 1 },
  { id: "ای", display: "ایـ یـ ی ای", name: "ایـ اول / یـ وسط / ی آخر / ای آخرتنها", lesson: 6, group: 1, isVowel: true },
  { id: "ز", display: "ز", name: "ز", lesson: 7, group: 1 },
  { id: "اِ", display: "اِ ـِ ـه ه", name: "اِ اول / ـِ چسبان / ـه چسبان / ه آخر", lesson: 7, group: 1, isVowel: true },
  { id: "ش", display: "شـ ش", name: "شـ غیرآخر / ش آخر", lesson: 8, group: 1 },
  { id: "اُ", display: "اُ ـُ", name: "اُ اول / ـُ دوم", lesson: 9, group: 1, isVowel: true },
  { id: "ک", display: "کـ ک", name: "کـ غیرآخر / ک آخر", lesson: 10, group: 1 },
  { id: "و", display: "و (صامت)", name: "و صامت (ورزش، گاو)", lesson: 10, group: 1 },
  { id: "پ", display: "پـ پ", name: "پـ غیرآخر / پ آخر", lesson: 11, group: 1 },
  { id: "گ", display: "گـ گ", name: "گـ غیرآخر / گ آخر", lesson: 11, group: 1 },
  { id: "ف", display: "فـ ف", name: "فـ غیرآخر / ف آخر", lesson: 12, group: 1 },
  { id: "خ", display: "خـ خ", name: "خـ غیرآخر / خ آخر", lesson: 12, group: 1 },
  { id: "ق", display: "قـ ق", name: "قـ غیرآخر / ق آخر", lesson: 13, group: 1 },
  { id: "ل", display: "لـ ل", name: "لـ غیرآخر / ل آخر", lesson: 13, group: 1 },
  { id: "ج", display: "جـ ج", name: "جـ غیرآخر / ج آخر", lesson: 14, group: 1 },
  { id: "چ", display: "چـ چ", name: "چـ غیرآخر / چ آخر", lesson: 15, group: 1 },
  { id: "ه", display: "هـ ـهـ", name: "هـ اول / ـهـ وسط", lesson: 15, group: 1 },
  { id: "ژ", display: "ژ", name: "ژ", lesson: 16, group: 1 },

  // نشانه‌های ۲
  { id: "ص", display: "صـ ص", name: "صـ غیرآخر / ص آخر", lesson: 17, group: 2 },
  { id: "ذ", display: "ذ", name: "ذ", lesson: 17, group: 2 },
  { id: "ع", display: "عـ ـعـ ـع ع", name: "ع چهارشکلی", lesson: 18, group: 2 },
  { id: "ث", display: "ثـ ث", name: "ثـ غیرآخر / ث آخر", lesson: 18, group: 2 },
  { id: "ح", display: "حـ ح", name: "حـ غیرآخر / ح آخر", lesson: 19, group: 2 },
  { id: "ض", display: "ضـ ض", name: "ضـ غیرآخر / ض آخر", lesson: 19, group: 2 },
  { id: "ط", display: "ط", name: "ط", lesson: 20, group: 2 },
  { id: "غ", display: "غـ ـغـ ـغ غ", name: "غ چهارشکلی", lesson: 20, group: 2 },
  { id: "ظ", display: "ظ", name: "ظ", lesson: 20, group: 2 }
];

/**
 * بانک جامع کلمات کلاس اول دبستان
 * هر کلمه دارای:
 * word: نگارش ساده کلمه
 * vocalized: نگارش با اعراب مصوب کتاب فارسی اول
 * tiles: حروفی که برای ساخت کلمه به کودک داده می‌شود (به تفکیک جهت جورچین)
 * reqLetters: نشانه‌هایی که باید حتماً آموخته شده باشند تا کلمه فعال شود
 * syllables: بخش‌های کلمه
 * sounds: صداهای کلمه (صداکشی)
 * emoji: تصویر راهنما
 * hint: توضیح ساده یا شعر کوتاه
 */
const WORDS_DATABASE = [
  // --- درس ۱: آ ا - بـ ب ---
  {
    word: "آب",
    vocalized: "آب",
    tiles: ["آ", "ب"],
    reqLetters: ["آ", "ب"],
    lesson: 1,
    syllables: ["آب"],
    sounds: ["آ", "ب"],
    emoji: "💧",
    hint: "مایه‌ای پاک و گوارا که می‌نوشیم"
  },
  {
    word: "بابا",
    vocalized: "بابا",
    tiles: ["ب", "ا", "ب", "ا"],
    reqLetters: ["آ", "ب"],
    lesson: 1,
    syllables: ["با", "با"],
    sounds: ["بـ", "ا", "بـ", "ا"],
    emoji: "👨",
    hint: "پدر مهربان خانواده"
  },

  // --- درس ۲: اَ ـَ - د ---
  {
    word: "باد",
    vocalized: "باد",
    tiles: ["ب", "ا", "د"],
    reqLetters: ["آ", "ب", "د"],
    lesson: 2,
    syllables: ["باد"],
    sounds: ["بـ", "ا", "د"],
    emoji: "💨",
    hint: "هوای متحرک و خنک در آسمان"
  },
  {
    word: "داد",
    vocalized: "داد",
    tiles: ["د", "ا", "د"],
    reqLetters: ["آ", "د"],
    lesson: 2,
    syllables: ["داد"],
    sounds: ["د", "ا", "د"],
    emoji: "🎁",
    hint: "بابا آب داد"
  },
  {
    word: "آباد",
    vocalized: "آباد",
    tiles: ["آ", "ب", "ا", "د"],
    reqLetters: ["آ", "ب", "د"],
    lesson: 2,
    syllables: ["آ", "باد"],
    sounds: ["آ", "بـ", "ا", "د"],
    emoji: "🏡",
    hint: "سرسبز، خرم و ساخته‌شده"
  },
  {
    word: "بد",
    vocalized: "بَد",
    tiles: ["ب", "د"],
    reqLetters: ["ب", "د", "اَ"],
    lesson: 2,
    syllables: ["بَد"],
    sounds: ["بـ", "ـَ", "د"],
    emoji: "👎",
    hint: "مخالف خوب"
  },
  {
    word: "ادب",
    vocalized: "اَدَب",
    tiles: ["ا", "د", "ب"],
    reqLetters: ["آ", "د", "ب", "اَ"],
    lesson: 2,
    syllables: ["اَ", "دَب"],
    sounds: ["اَ", "د", "ـَ", "ب"],
    emoji: "🙇‍♂️",
    hint: "رفتار نیکو و احترام گذاشتن"
  },

  // --- درس ۳: مـ م - سـ س ---
  {
    word: "دام",
    vocalized: "دام",
    tiles: ["د", "ا", "م"],
    reqLetters: ["د", "آ", "م"],
    lesson: 3,
    syllables: ["دام"],
    sounds: ["د", "ا", "م"],
    emoji: "🕸️",
    hint: "تله صیاد"
  },
  {
    word: "بام",
    vocalized: "بام",
    tiles: ["ب", "ا", "م"],
    reqLetters: ["ب", "آ", "م"],
    lesson: 3,
    syllables: ["بام"],
    sounds: ["بـ", "ا", "م"],
    emoji: "🏠",
    hint: "پشت‌بام خانه"
  },
  {
    word: "سام",
    vocalized: "سام",
    tiles: ["س", "ا", "م"],
    reqLetters: ["س", "آ", "م"],
    lesson: 3,
    syllables: ["سام"],
    sounds: ["سـ", "ا", "م"],
    emoji: "👦",
    hint: "نام یک پسر دانا"
  },
  {
    word: "بادام",
    vocalized: "بادام",
    tiles: ["ب", "ا", "د", "ا", "م"],
    reqLetters: ["ب", "آ", "د", "م"],
    lesson: 3,
    syllables: ["با", "دام"],
    sounds: ["بـ", "ا", "د", "ا", "م"],
    emoji: "🥜",
    hint: "یک آجیل خوشمزه و مقوی"
  },
  {
    word: "آدم",
    vocalized: "آدَم",
    tiles: ["آ", "د", "م"],
    reqLetters: ["آ", "د", "م", "اَ"],
    lesson: 3,
    syllables: ["آ", "دَم"],
    sounds: ["آ", "د", "ـَ", "م"],
    emoji: "🧍",
    hint: "انسان مهربان"
  },
  {
    word: "سبد",
    vocalized: "سَبَد",
    tiles: ["س", "ب", "د"],
    reqLetters: ["س", "ب", "د", "اَ"],
    lesson: 3,
    syllables: ["سَ", "بَد"],
    sounds: ["سـ", "ـَ", "بـ", "ـَ", "د"],
    emoji: "🧺",
    hint: "سبد میوه یا نان"
  },
  {
    word: "اسب",
    vocalized: "اَسب",
    tiles: ["ا", "س", "ب"],
    reqLetters: ["آ", "س", "ب", "اَ"],
    lesson: 3,
    syllables: ["اَسب"],
    sounds: ["اَ", "سـ", "ب"],
    emoji: "🐎",
    hint: "حیوانی نجیب و تندرو"
  },
  {
    word: "آمد",
    vocalized: "آمَد",
    tiles: ["آ", "م", "د"],
    reqLetters: ["آ", "م", "د", "اَ"],
    lesson: 3,
    syllables: ["آ", "مَد"],
    sounds: ["آ", "مـ", "ـَ", "د"],
    emoji: "🚶",
    hint: "بابا با اسب آمد"
  },
  {
    word: "دست",
    vocalized: "دَست",
    tiles: ["د", "س", "ت"],
    reqLetters: ["د", "س", "ت", "اَ"],
    lesson: 4,
    syllables: ["دَست"],
    sounds: ["د", "ـَ", "سـ", "ت"],
    emoji: "✋",
    hint: "با آن قلم می‌گیریم و نقاشی می‌کشیم"
  },

  // --- درس ۴: او و - تـ ت ---
  {
    word: "توت",
    vocalized: "توت",
    tiles: ["ت", "و", "ت"],
    reqLetters: ["ت", "او"],
    lesson: 4,
    syllables: ["توت"],
    sounds: ["تـ", "او", "ت"],
    emoji: "🫐",
    hint: "میوه شیرین درخت توت"
  },
  {
    word: "تاب",
    vocalized: "تاب",
    tiles: ["ت", "ا", "ب"],
    reqLetters: ["ت", "آ", "ب"],
    lesson: 4,
    syllables: ["تاب"],
    sounds: ["تـ", "ا", "ب"],
    emoji: "🎪",
    hint: "تاب تاب عباسی، بازی در پارک"
  },
  {
    word: "سوت",
    vocalized: "سوت",
    tiles: ["س", "و", "ت"],
    reqLetters: ["س", "او", "ت"],
    lesson: 4,
    syllables: ["سوت"],
    sounds: ["سـ", "او", "ت"],
    emoji: "📢",
    hint: "داور بازی با آن سوت می‌زند"
  },
  {
    word: "ماست",
    vocalized: "ماست",
    tiles: ["م", "ا", "س", "ت"],
    reqLetters: ["م", "آ", "س", "ت"],
    lesson: 4,
    syllables: ["ماست"],
    sounds: ["مـ", "ا", "سـ", "ت"],
    emoji: "🥣",
    hint: "لبنیات سفید و خوشمزه"
  },
  {
    word: "دوست",
    vocalized: "دوست",
    tiles: ["د", "و", "س", "ت"],
    reqLetters: ["د", "او", "س", "ت"],
    lesson: 4,
    syllables: ["دوست"],
    sounds: ["د", "او", "سـ", "ت"],
    emoji: "🤝",
    hint: "یار مهربان و همبازی خوب"
  },
  {
    word: "بو",
    vocalized: "بو",
    tiles: ["ب", "و"],
    reqLetters: ["ب", "او"],
    lesson: 4,
    syllables: ["بو"],
    sounds: ["بـ", "او"],
    emoji: "👃",
    hint: "بوی گل یا غذای مادر"
  },
  {
    word: "مو",
    vocalized: "مو",
    tiles: ["م", "و"],
    reqLetters: ["م", "او"],
    lesson: 4,
    syllables: ["مو"],
    sounds: ["مـ", "او"],
    emoji: "💇",
    hint: "موهای قشنگ روی سر"
  },
  {
    word: "او",
    vocalized: "او",
    tiles: ["او"],
    reqLetters: ["او"],
    lesson: 4,
    syllables: ["او"],
    sounds: ["او"],
    emoji: "👉",
    hint: "او آمد"
  },

  // --- درس ۵: ر ---
  {
    word: "بار",
    vocalized: "بار",
    tiles: ["ب", "ا", "ر"],
    reqLetters: ["ب", "آ", "ر"],
    lesson: 5,
    syllables: ["بار"],
    sounds: ["بـ", "ا", "ر"],
    emoji: "📦",
    hint: "بسته‌ای که با ماشین جابه‌جا می‌شود"
  },
  {
    word: "دار",
    vocalized: "دار",
    tiles: ["د", "ا", "ر"],
    reqLetters: ["د", "آ", "ر"],
    lesson: 5,
    syllables: ["دار"],
    sounds: ["د", "ا", "ر"],
    emoji: "🧵",
    hint: "دار قالی‌بافی"
  },
  {
    word: "مادر",
    vocalized: "مادَر",
    tiles: ["م", "ا", "د", "ر"],
    reqLetters: ["م", "آ", "د", "ر", "اَ"],
    lesson: 5,
    syllables: ["ما", "دَر"],
    sounds: ["مـ", "ا", "د", "ـَ", "ر"],
    emoji: "👩",
    hint: "فرشته مهربان خانه"
  },
  {
    word: "برادر",
    vocalized: "بَرادَر",
    tiles: ["ب", "ر", "ا", "د", "ر"],
    reqLetters: ["ب", "ر", "آ", "د", "اَ"],
    lesson: 5,
    syllables: ["بـَ", "را", "دَر"],
    sounds: ["بـ", "ـَ", "ر", "ا", "د", "ـَ", "ر"],
    emoji: "👦",
    hint: "داداش مهربان"
  },
  {
    word: "سر",
    vocalized: "سَر",
    tiles: ["س", "ر"],
    reqLetters: ["س", "ر", "اَ"],
    lesson: 5,
    syllables: ["سَر"],
    sounds: ["سـ", "ـَ", "ر"],
    emoji: "🗣️",
    hint: "عضوی از بدن که چشم و گوش روی آن است"
  },
  {
    word: "تار",
    vocalized: "تار",
    tiles: ["ت", "ا", "ر"],
    reqLetters: ["ت", "آ", "ر"],
    lesson: 5,
    syllables: ["تار"],
    sounds: ["تـ", "ا", "ر"],
    emoji: "🪕",
    hint: "ساز موسیقی سنتی"
  },
  {
    word: "ابر",
    vocalized: "اَبر",
    tiles: ["ا", "ب", "ر"],
    reqLetters: ["آ", "ب", "ر", "اَ"],
    lesson: 5,
    syllables: ["اَبر"],
    sounds: ["اَ", "بـ", "ر"],
    emoji: "☁️",
    hint: "توده‌های سفید و باران‌زا در آسمان"
  },
  {
    word: "آرد",
    vocalized: "آرد",
    tiles: ["آ", "ر", "د"],
    reqLetters: ["آ", "ر", "د"],
    lesson: 5,
    syllables: ["آرد"],
    sounds: ["آ", "ر", "د"],
    emoji: "🌾",
    hint: "پودر سفیدی که با آن نان می‌پزند"
  },
  {
    word: "رود",
    vocalized: "رود",
    tiles: ["ر", "و", "د"],
    reqLetters: ["ر", "او", "د"],
    lesson: 5,
    syllables: ["رود"],
    sounds: ["ر", "او", "د"],
    emoji: "🏞️",
    hint: "جریان آب زلال و پرخروش"
  },
  {
    word: "سرد",
    vocalized: "سَرد",
    tiles: ["س", "ر", "د"],
    reqLetters: ["س", "ر", "د", "اَ"],
    lesson: 5,
    syllables: ["سَرد"],
    sounds: ["سـ", "ـَ", "ر", "د"],
    emoji: "❄️",
    hint: "هوای زمستانی"
  },

  // --- درس ۶: نـ ن - ایـ یـ ی ای ---
  {
    word: "نان",
    vocalized: "نان",
    tiles: ["ن", "ا", "ن"],
    reqLetters: ["ن", "آ"],
    lesson: 6,
    syllables: ["نان"],
    sounds: ["نـ", "ا", "ن"],
    emoji: "🍞",
    hint: "برکت سفره که نانوا می‌پزد"
  },
  {
    word: "انار",
    vocalized: "اَنار",
    tiles: ["ا", "ن", "ا", "ر"],
    reqLetters: ["آ", "ن", "ر", "اَ"],
    lesson: 6,
    syllables: ["اَ", "نار"],
    sounds: ["اَ", "نـ", "ا", "ر"],
    emoji: "🍎",
    hint: "صد دانه یاقوت دسته به دسته"
  },
  {
    word: "دندان",
    vocalized: "دَندان",
    tiles: ["د", "ن", "د", "ا", "ن"],
    reqLetters: ["د", "ن", "آ", "اَ"],
    lesson: 6,
    syllables: ["دَن", "دان"],
    sounds: ["د", "ـَ", "نـ", "د", "ا", "ن"],
    emoji: "🦷",
    hint: "با آن غذا می‌جویم و مسواک می‌زنیم"
  },
  {
    word: "باران",
    vocalized: "باران",
    tiles: ["ب", "ا", "ر", "ا", "ن"],
    reqLetters: ["ب", "آ", "ر", "ن"],
    lesson: 6,
    syllables: ["با", "ران"],
    sounds: ["بـ", "ا", "ر", "ا", "ن"],
    emoji: "🌧️",
    hint: "قطره‌های قشنگ آب از آسمان"
  },
  {
    word: "ایران",
    vocalized: "ایران",
    tiles: ["ای", "ر", "ا", "ن"],
    reqLetters: ["ای", "ر", "آ", "ن"],
    lesson: 6,
    syllables: ["ای", "ران"],
    sounds: ["ایـ", "ر", "ا", "ن"],
    emoji: "🇮🇷",
    hint: "میهن زیبا و عزیز ما"
  },
  {
    word: "سیب",
    vocalized: "سیب",
    tiles: ["س", "ی", "ب"],
    reqLetters: ["س", "ای", "ب"],
    lesson: 6,
    syllables: ["سیب"],
    sounds: ["سـ", "یـ", "ب"],
    emoji: "🍏",
    hint: "میوه قرمز و شیرین و بهشتی"
  },
  {
    word: "سینی",
    vocalized: "سینی",
    tiles: ["س", "ی", "ن", "ی"],
    reqLetters: ["س", "ای", "ن"],
    lesson: 6,
    syllables: ["سی", "نی"],
    sounds: ["سـ", "یـ", "نـ", "ی"],
    emoji: "🍽️",
    hint: "ظرفی برای آوردن چای و میوه"
  },
  {
    word: "آبی",
    vocalized: "آبی",
    tiles: ["آ", "ب", "ی"],
    reqLetters: ["آ", "ب", "ای"],
    lesson: 6,
    syllables: ["آ", "بی"],
    sounds: ["آ", "بـ", "ی"],
    emoji: "🔷",
    hint: "رنگ آسمان و دریا"
  },
  {
    word: "تیر",
    vocalized: "تیر",
    tiles: ["ت", "ی", "ر"],
    reqLetters: ["ت", "ای", "ر"],
    lesson: 6,
    syllables: ["تیر"],
    sounds: ["تـ", "یـ", "ر"],
    emoji: "🏹",
    hint: "تیر و کمان آرش کمانگیر"
  },
  {
    word: "آسان",
    vocalized: "آسان",
    tiles: ["آ", "س", "ا", "ن"],
    reqLetters: ["آ", "س", "ن"],
    lesson: 6,
    syllables: ["آ", "سان"],
    sounds: ["آ", "سـ", "ا", "ن"],
    emoji: "👌",
    hint: "کاری که انجامش راحت است"
  },

  // --- درس ۷: ز - اِ ـِ ـه ه ---
  {
    word: "زرد",
    vocalized: "زَرد",
    tiles: ["ز", "ر", "د"],
    reqLetters: ["ز", "ر", "د", "اَ"],
    lesson: 7,
    syllables: ["زَرد"],
    sounds: ["ز", "ـَ", "ر", "د"],
    emoji: "🟡",
    hint: "رنگ خورشید و موز"
  },
  {
    word: "ساز",
    vocalized: "ساز",
    tiles: ["س", "ا", "ز"],
    reqLetters: ["س", "آ", "ز"],
    lesson: 7,
    syllables: ["ساز"],
    sounds: ["سـ", "ا", "ز"],
    emoji: "🎵",
    hint: "وسیله نواختن آهنگ زیبا"
  },
  {
    word: "میز",
    vocalized: "میز",
    tiles: ["م", "ی", "ز"],
    reqLetters: ["م", "ای", "ز"],
    lesson: 7,
    syllables: ["میز"],
    sounds: ["مـ", "یـ", "ز"],
    emoji: "🪑",
    hint: "پشت آن می‌نشینیم و درس می‌خوانیم"
  },
  {
    word: "نامه",
    vocalized: "نامِه",
    tiles: ["ن", "ا", "م", "ه"],
    reqLetters: ["ن", "آ", "م", "اِ"],
    lesson: 7,
    syllables: ["نا", "مِه"],
    sounds: ["نـ", "ا", "مـ", "ـِ"],
    emoji: "✉️",
    hint: "پیامی که برای دوستان می‌فرستیم"
  },
  {
    word: "دانه",
    vocalized: "دانِه",
    tiles: ["د", "ا", "ن", "ه"],
    reqLetters: ["د", "آ", "ن", "اِ"],
    lesson: 7,
    syllables: ["دا", "نِه"],
    sounds: ["د", "ا", "نـ", "ـِ"],
    emoji: "🌱",
    hint: "پرندگان دانه می‌خورند"
  },
  {
    word: "ستاره",
    vocalized: "سِتارِه",
    tiles: ["س", "ت", "ا", "ر", "ه"],
    reqLetters: ["س", "ت", "آ", "ر", "اِ"],
    lesson: 7,
    syllables: ["سِ", "تا", "رِه"],
    sounds: ["سـ", "ـِ", "تـ", "ا", "ر", "ـِ"],
    emoji: "⭐",
    hint: "شب‌ها در آسمان چشمک می‌زند"
  },
  {
    word: "نرده",
    vocalized: "نَردِه",
    tiles: ["ن", "ر", "د", "ه"],
    reqLetters: ["ن", "ر", "د", "اَ", "اِ"],
    lesson: 7,
    syllables: ["نَر", "دِه"],
    sounds: ["نـ", "ـَ", "ر", "د", "ـِ"],
    emoji: "🚧",
    hint: "حفاظ کنار پله‌ها یا باغچه"
  },
  {
    word: "تازه",
    vocalized: "تازِه",
    tiles: ["ت", "ا", "ز", "ه"],
    reqLetters: ["ت", "آ", "ز", "اِ"],
    lesson: 7,
    syllables: ["تا", "زِه"],
    sounds: ["تـ", "ا", "ز", "ـِ"],
    emoji: "🥗",
    hint: "نان تازه و سبزی تازه"
  },
  {
    word: "ساده",
    vocalized: "سادِه",
    tiles: ["س", "ا", "د", "ه"],
    reqLetters: ["س", "آ", "د", "اِ"],
    lesson: 7,
    syllables: ["سا", "دِه"],
    sounds: ["سـ", "ا", "د", "ـِ"],
    emoji: "⚪",
    hint: "بی‌پیرایه و آسان"
  },

  // --- درس ۸: شـ ش - یـ ی ---
  {
    word: "شیر",
    vocalized: "شیر",
    tiles: ["ش", "ی", "ر"],
    reqLetters: ["ش", "ای", "ر"],
    lesson: 8,
    syllables: ["شیر"],
    sounds: ["شـ", "یـ", "ر"],
    emoji: "🦁",
    hint: "سلطان جنگل، یا نوشیدنی مقوی صبحانه"
  },
  {
    word: "شتر",
    vocalized: "شُتُر",
    tiles: ["ش", "ت", "ر"],
    reqLetters: ["ش", "ت", "ر", "اُ"],
    lesson: 8,
    syllables: ["شُ", "تُر"],
    sounds: ["شـ", "ـُ", "تـ", "ـُ", "ر"],
    emoji: "🐪",
    hint: "کشتی بیابان با کوهان زیبا"
  },
  {
    word: "آتش",
    vocalized: "آتَش",
    tiles: ["آ", "ت", "ش"],
    reqLetters: ["آ", "ت", "ش", "اَ"],
    lesson: 8,
    syllables: ["آ", "تَش"],
    sounds: ["آ", "تـ", "ـَ", "ش"],
    emoji: "🔥",
    hint: "گرما و روشنایی می‌دهد"
  },
  {
    word: "آش",
    vocalized: "آش",
    tiles: ["آ", "ش"],
    reqLetters: ["آ", "ش"],
    lesson: 8,
    syllables: ["آش"],
    sounds: ["آ", "ش"],
    emoji: "🍲",
    hint: "غذای گرم و سنتی ایرانی"
  },
  {
    word: "دریا",
    vocalized: "دَریا",
    tiles: ["د", "ر", "ی", "ا"],
    reqLetters: ["د", "ر", "ای", "آ", "اَ"],
    lesson: 8,
    syllables: ["دَر", "یا"],
    sounds: ["د", "ـَ", "ر", "یـ", "ا"],
    emoji: "🌊",
    hint: "پهنه بزرگ آب با موج‌های قشنگ"
  },
  {
    word: "سایه",
    vocalized: "سایِه",
    tiles: ["س", "ا", "ی", "ه"],
    reqLetters: ["س", "آ", "ای", "اِ"],
    lesson: 8,
    syllables: ["سا", "یِه"],
    sounds: ["سـ", "ا", "یـ", "ـِ"],
    emoji: "👥",
    hint: "در روز آفتابی کنار درخت پدید می‌آید"
  },
  {
    word: "گوش",
    vocalized: "گوش",
    tiles: ["گ", "و", "ش"],
    reqLetters: ["گ", "او", "ش"],
    lesson: 11,
    syllables: ["گوش"],
    sounds: ["گـ", "او", "ش"],
    emoji: "👂",
    hint: "با آن صداهای زیبا را می‌شنویم"
  },
  {
    word: "موش",
    vocalized: "موش",
    tiles: ["م", "و", "ش"],
    reqLetters: ["م", "او", "ش"],
    lesson: 8,
    syllables: ["موش"],
    sounds: ["مـ", "او", "ش"],
    emoji: "🐁",
    hint: "حیوان باهوش و کوچولو که پنیر دوست دارد"
  },
  {
    word: "شب",
    vocalized: "شَب",
    tiles: ["ش", "ب"],
    reqLetters: ["ش", "ب", "اَ"],
    lesson: 8,
    syllables: ["شَب"],
    sounds: ["شـ", "ـَ", "ب"],
    emoji: "🌙",
    hint: "هنگام خواب و درخشش ماه"
  },
  {
    word: "شنا",
    vocalized: "شِنا",
    tiles: ["ش", "ن", "ا"],
    reqLetters: ["ش", "ن", "آ", "اِ"],
    lesson: 8,
    syllables: ["شِ", "نا"],
    sounds: ["شـ", "ـِ", "نـ", "ا"],
    emoji: "🏊",
    hint: "ورزش شاد در آب استخر"
  },
  {
    word: "شانه",
    vocalized: "شانِه",
    tiles: ["ش", "ا", "ن", "ه"],
    reqLetters: ["ش", "آ", "ن", "اِ"],
    lesson: 8,
    syllables: ["شا", "نِه"],
    sounds: ["شـ", "ا", "نـ", "ـِ"],
    emoji: "🪮",
    hint: "با آن موها را مرتب می‌کنیم"
  },

  // --- درس ۹: اُ ـُ ---
  {
    word: "اردک",
    vocalized: "اُردَک",
    tiles: ["ا", "ر", "د", "ک"],
    reqLetters: ["اُ", "ر", "د", "ک", "اَ"],
    lesson: 10,
    syllables: ["اُر", "دَک"],
    sounds: ["اُ", "ر", "د", "ـَ", "ک"],
    emoji: "🦆",
    hint: "پرنده شناگر در برکه آب"
  },
  {
    word: "بلبل",
    vocalized: "بُلبُل",
    tiles: ["ب", "ل", "ب", "ل"],
    reqLetters: ["ب", "ل", "اُ"],
    lesson: 13,
    syllables: ["بُل", "بُل"],
    sounds: ["بـ", "ـُ", "لـ", "بـ", "ـُ", "ل"],
    emoji: "🐦",
    hint: "پرنده خوش‌آواز روی شاخه گل"
  },
  {
    word: "مدیر",
    vocalized: "مُدیر",
    tiles: ["م", "د", "ی", "ر"],
    reqLetters: ["م", "د", "ای", "ر", "اُ"],
    lesson: 9,
    syllables: ["مُ", "دیر"],
    sounds: ["مـ", "ـُ", "د", "یـ", "ر"],
    emoji: "👨‍🏫",
    hint: "سرپرست مهربان و دلسوز مدرسه"
  },
  {
    word: "دم",
    vocalized: "دُم",
    tiles: ["د", "م"],
    reqLetters: ["د", "م", "اُ"],
    lesson: 9,
    syllables: ["دُم"],
    sounds: ["د", "ـُ", "م"],
    emoji: "🐕",
    hint: "دم سنجاب یا گربه"
  },
  {
    word: "امید",
    vocalized: "اُمید",
    tiles: ["ا", "م", "ی", "د"],
    reqLetters: ["اُ", "م", "ای", "د"],
    lesson: 9,
    syllables: ["اُ", "مید"],
    sounds: ["اُ", "مـ", "یـ", "د"],
    emoji: "🌟",
    hint: "آرزوی خوب برای آینده"
  },

  // --- درس ۱۰: کـ ک - و صامت ---
  {
    word: "کتاب",
    vocalized: "کِتاب",
    tiles: ["ک", "ت", "ا", "ب"],
    reqLetters: ["ک", "ت", "آ", "ب", "اِ"],
    lesson: 10,
    syllables: ["کِ", "تاب"],
    sounds: ["کـ", "ـِ", "تـ", "ا", "ب"],
    emoji: "📖",
    hint: "بهترین دوست دانا که به ما علم می‌آموزد"
  },
  {
    word: "کبوتر",
    vocalized: "کَبوتر",
    tiles: ["ک", "ب", "و", "ت", "ر"],
    reqLetters: ["ک", "ب", "او", "ت", "ر", "اَ"],
    lesson: 10,
    syllables: ["کـَ", "بو", "تَر"],
    sounds: ["کـ", "ـَ", "بـ", "او", "تـ", "ـَ", "ر"],
    emoji: "🕊️",
    hint: "پرنده سفید نماد صلح و دوستی"
  },
  {
    word: "کوه",
    vocalized: "کوه",
    tiles: ["ک", "و", "ه"],
    reqLetters: ["ک", "او", "ه"],
    lesson: 10,
    syllables: ["کوه"],
    sounds: ["کـ", "او", "ه"],
    emoji: "⛰️",
    hint: "بلند و استوار، مثل کوه دماوند"
  },
  {
    word: "کودک",
    vocalized: "کودَک",
    tiles: ["ک", "و", "د", "ک"],
    reqLetters: ["ک", "او", "د", "اَ"],
    lesson: 10,
    syllables: ["کو", "دَک"],
    sounds: ["کـ", "او", "د", "ـَ", "ک"],
    emoji: "🧒",
    hint: "بچه‌های شاد و بازیگوش"
  },
  {
    word: "بادکنک",
    vocalized: "بادکُنَک",
    tiles: ["ب", "ا", "د", "ک", "ن", "ک"],
    reqLetters: ["ب", "آ", "د", "ک", "ن", "اُ", "اَ"],
    lesson: 10,
    syllables: ["باد", "کُ", "نَک"],
    sounds: ["بـ", "ا", "د", "کـ", "ـُ", "نـ", "ـَ", "ک"],
    emoji: "🎈",
    hint: "وسیله بازی رنگارنگ جشن تولد"
  },
  {
    word: "ورزش",
    vocalized: "وَرزِش",
    tiles: ["و", "ر", "ز", "ش"],
    reqLetters: ["و", "ر", "ز", "ش", "اَ", "اِ"],
    lesson: 10,
    syllables: ["وَر", "زِش"],
    sounds: ["و", "ـَ", "ر", "ز", "ـِ", "ش"],
    emoji: "⚽",
    hint: "موجب تندرستی و نشاط بدن می‌شود"
  },
  {
    word: "پاک",
    vocalized: "پاک",
    tiles: ["پ", "ا", "ک"],
    reqLetters: ["پ", "آ", "ک"],
    lesson: 11,
    syllables: ["پاک"],
    sounds: ["پـ", "ا", "ک"],
    emoji: "✨",
    hint: "تمیز و بدون آلودگی"
  },

  // --- درس ۱۱: پـ پ - گـ گ ---
  {
    word: "پا",
    vocalized: "پا",
    tiles: ["پ", "ا"],
    reqLetters: ["پ", "آ"],
    lesson: 11,
    syllables: ["پا"],
    sounds: ["پـ", "ا"],
    emoji: "🦶",
    hint: "با آن راه می‌رویم و می‌دویم"
  },
  {
    word: "توپ",
    vocalized: "توپ",
    tiles: ["ت", "و", "پ"],
    reqLetters: ["ت", "او", "پ"],
    lesson: 11,
    syllables: ["توپ"],
    sounds: ["تـ", "او", "پ"],
    emoji: "⚽",
    hint: "وسیله گرد فوتبال و والیبال"
  },
  {
    word: "پروانه",
    vocalized: "پَروانِه",
    tiles: ["پ", "ر", "و", "ا", "ن", "ه"],
    reqLetters: ["پ", "ر", "و", "آ", "ن", "اَ", "اِ"],
    lesson: 11,
    syllables: ["پَر", "وا", "نِه"],
    sounds: ["پـ", "ـَ", "ر", "و", "ا", "نـ", "ـِ"],
    emoji: "🦋",
    hint: "حشره زیبا با بال‌های رنگارنگ"
  },
  {
    word: "پرچم",
    vocalized: "پَرچَم",
    tiles: ["پ", "ر", "چ", "م"],
    reqLetters: ["پ", "ر", "چ", "م", "اَ"],
    lesson: 15,
    syllables: ["پَر", "چَم"],
    sounds: ["پـ", "ـَ", "ر", "چـ", "ـَ", "م"],
    emoji: "🚩",
    hint: "نماد افتخار کشورمان ایران"
  },
  {
    word: "گرگ",
    vocalized: "گُرگ",
    tiles: ["گ", "ر", "گ"],
    reqLetters: ["گ", "ر", "اُ"],
    lesson: 11,
    syllables: ["گُرگ"],
    sounds: ["گـ", "ـُ", "ر", "گ"],
    emoji: "🐺",
    hint: "حیوان وحشی در دشت و جنگل"
  },
  {
    word: "سگ",
    vocalized: "سَگ",
    tiles: ["س", "گ"],
    reqLetters: ["س", "گ", "اَ"],
    lesson: 11,
    syllables: ["سَگ"],
    sounds: ["سـ", "ـَ", "گ"],
    emoji: "🐕",
    hint: "حیوانی باوفا و نگهبان گله"
  },
  {
    word: "برگ",
    vocalized: "بَرگ",
    tiles: ["ب", "ر", "گ"],
    reqLetters: ["ب", "ر", "گ", "اَ"],
    lesson: 11,
    syllables: ["بَرگ"],
    sounds: ["بـ", "ـَ", "ر", "گ"],
    emoji: "🍃",
    hint: "برگ سبز درختان در بهار"
  },
  {
    word: "پدر",
    vocalized: "پِدَر",
    tiles: ["پ", "د", "ر"],
    reqLetters: ["پ", "د", "ر", "اِ", "اَ"],
    lesson: 11,
    syllables: ["پِ", "دَر"],
    sounds: ["پـ", "ـِ", "د", "ـَ", "ر"],
    emoji: "👨",
    hint: "بابای مهربان و زحمتکش"
  },
  {
    word: "پسر",
    vocalized: "پِسَر",
    tiles: ["پ", "س", "ر"],
    reqLetters: ["پ", "س", "ر", "اِ", "اَ"],
    lesson: 11,
    syllables: ["پِ", "سَر"],
    sounds: ["پـ", "ـِ", "سـ", "ـَ", "ر"],
    emoji: "👦",
    hint: "آقا پسر گل و باادب"
  },
  {
    word: "پنیر",
    vocalized: "پَنیر",
    tiles: ["پ", "ن", "ی", "ر"],
    reqLetters: ["پ", "ن", "ای", "ر", "اَ"],
    lesson: 11,
    syllables: ["پَ", "نیر"],
    sounds: ["پـ", "ـَ", "نـ", "یـ", "ر"],
    emoji: "🧀",
    hint: "خوراکی خوشمزه صبحانه همراه با گردو"
  },
  {
    word: "بزرگ",
    vocalized: "بُزُرگ",
    tiles: ["ب", "ز", "ر", "گ"],
    reqLetters: ["ب", "ز", "ر", "گ", "اُ"],
    lesson: 11,
    syllables: ["بُ", "زُرگ"],
    sounds: ["بـ", "ـُ", "ز", "ـُ", "ر", "گ"],
    emoji: "🐘",
    hint: "مخالف کوچک"
  },
  {
    word: "رنگ",
    vocalized: "رَنگ",
    tiles: ["ر", "ن", "گ"],
    reqLetters: ["ر", "ن", "گ", "اَ"],
    lesson: 11,
    syllables: ["رَنگ"],
    sounds: ["ر", "ـَ", "نـ", "گ"],
    emoji: "🎨",
    hint: "مدادرنگی‌های شاد جعبه نقاشی"
  },
  {
    word: "گوشت",
    vocalized: "گوشت",
    tiles: ["گ", "و", "ش", "ت"],
    reqLetters: ["گ", "او", "ش", "ت"],
    lesson: 11,
    syllables: ["گوشت"],
    sounds: ["گـ", "او", "ش", "ت"],
    emoji: "🥩",
    hint: "ماده غذایی مقوی و پروتئین‌دار"
  },

  // --- درس ۱۲: فـ ف - خـ خ ---
  {
    word: "برف",
    vocalized: "بَرف",
    tiles: ["ب", "ر", "ف"],
    reqLetters: ["ب", "ر", "ف", "اَ"],
    lesson: 12,
    syllables: ["بَرف"],
    sounds: ["بـ", "ـَ", "ر", "ف"],
    emoji: "❄️",
    hint: "دانه‌های سفید زمستانی و آدم‌برفی"
  },
  {
    word: "درخت",
    vocalized: "دِرَخت",
    tiles: ["د", "ر", "خ", "ت"],
    reqLetters: ["د", "ر", "خ", "ت", "اِ", "اَ"],
    lesson: 12,
    syllables: ["دِ", "رَخت"],
    sounds: ["د", "ـِ", "ر", "ـَ", "خ", "ت"],
    emoji: "🌳",
    hint: "دوست سبز انسان‌ها با میوه‌های شیرین"
  },
  {
    word: "خانه",
    vocalized: "خانِه",
    tiles: ["خ", "ا", "ن", "ه"],
    reqLetters: ["خ", "آ", "ن", "اِ"],
    lesson: 12,
    syllables: ["خا", "نِه"],
    sounds: ["خـ", "ا", "نـ", "ـِ"],
    emoji: "🏠",
    hint: "محیط امن و گرم زندگی خانواده"
  },
  {
    word: "خروس",
    vocalized: "خُروس",
    tiles: ["خ", "ر", "و", "س"],
    reqLetters: ["خ", "ر", "او", "س", "اُ"],
    lesson: 12,
    syllables: ["خُ", "روس"],
    sounds: ["خـ", "ـُ", "ر", "او", "س"],
    emoji: "🐓",
    hint: "پرنده‌ای سحرخیز با تاج قرمز زیبا"
  },
  {
    word: "آفتاب",
    vocalized: "آفْتاب",
    tiles: ["آ", "ف", "ت", "ا", "ب"],
    reqLetters: ["آ", "ف", "ت", "ب"],
    lesson: 12,
    syllables: ["آف", "تاب"],
    sounds: ["آ", "فـ", "تـ", "ا", "ب"],
    emoji: "☀️",
    hint: "نور گرم و درخشان خورشید در روز"
  },
  {
    word: "کیف",
    vocalized: "کیف",
    tiles: ["ک", "ی", "ف"],
    reqLetters: ["ک", "ای", "ف"],
    lesson: 12,
    syllables: ["کیف"],
    sounds: ["کـ", "یـ", "ف"],
    emoji: "🎒",
    hint: "کیف مدرسه برای کتاب‌ها و دفترها"
  },
  {
    word: "کفش",
    vocalized: "کَفش",
    tiles: ["ک", "ف", "ش"],
    reqLetters: ["ک", "ف", "ش", "اَ"],
    lesson: 12,
    syllables: ["کَفش"],
    sounds: ["کـ", "ـَ", "فـ", "ش"],
    emoji: "👟",
    hint: "آن را می‌پوشیم و راه می‌رویم"
  },
  {
    word: "فرش",
    vocalized: "فَرش",
    tiles: ["ف", "ر", "ش"],
    reqLetters: ["ف", "ر", "ش", "اَ"],
    lesson: 12,
    syllables: ["فَرش"],
    sounds: ["فـ", "ـَ", "ر", "ش"],
    emoji: "🧶",
    hint: "قالی زیبای ایرانی کف اتاق"
  },
  {
    word: "شاخه",
    vocalized: "شاخِه",
    tiles: ["ش", "ا", "خ", "ه"],
    reqLetters: ["ش", "آ", "خ", "اِ"],
    lesson: 12,
    syllables: ["شا", "خِه"],
    sounds: ["شـ", "ا", "خـ", "ـِ"],
    emoji: "🌿",
    hint: "شاخه درختان پر از شکوفه"
  },
  {
    word: "سرخ",
    vocalized: "سُرخ",
    tiles: ["س", "ر", "خ"],
    reqLetters: ["س", "ر", "خ", "اُ"],
    lesson: 12,
    syllables: ["سُرخ"],
    sounds: ["سـ", "ـُ", "ر", "خ"],
    emoji: "🔴",
    hint: "رنگ قرمز گل لاله"
  },
  {
    word: "فردا",
    vocalized: "فَردا",
    tiles: ["ف", "ر", "د", "ا"],
    reqLetters: ["ف", "ر", "د", "آ", "اَ"],
    lesson: 12,
    syllables: ["فَر", "دا"],
    sounds: ["فـ", "ـَ", "ر", "د", "ا"],
    emoji: "🌅",
    hint: "روزی که پس از امروز می‌آید"
  },
  {
    word: "خیار",
    vocalized: "خِیار",
    tiles: ["خ", "ی", "ا", "ر"],
    reqLetters: ["خ", "ای", "آ", "ر", "اِ"],
    lesson: 12,
    syllables: ["خِ", "یار"],
    sounds: ["خـ", "ـِ", "یـ", "ا", "ر"],
    emoji: "🥒",
    hint: "میوه سبز و خوش‌بوی تابستانی"
  },

  // --- درس ۱۳: قـ ق - لـ ل ---
  {
    word: "قاشق",
    vocalized: "قاشُق",
    tiles: ["ق", "ا", "ش", "ق"],
    reqLetters: ["ق", "آ", "ش", "اُ"],
    lesson: 13,
    syllables: ["قا", "شُق"],
    sounds: ["قـ", "ا", "شـ", "ـُ", "ق"],
    emoji: "🥄",
    hint: "همراه چنگال برای خوردن غذا"
  },
  {
    word: "قایق",
    vocalized: "قایِق",
    tiles: ["ق", "ا", "ی", "ق"],
    reqLetters: ["ق", "آ", "ای", "اِ"],
    lesson: 13,
    syllables: ["قا", "یِق"],
    sounds: ["قـ", "ا", "یـ", "ـِ", "ق"],
    emoji: "⛵",
    hint: "شناور چوبی روی آب دریاچه"
  },
  {
    word: "قلم",
    vocalized: "قَلَم",
    tiles: ["ق", "ل", "م"],
    reqLetters: ["ق", "ل", "م", "اَ"],
    lesson: 13,
    syllables: ["قـَ", "لَم"],
    sounds: ["قـ", "ـَ", "لـ", "ـَ", "م"],
    emoji: "✏️",
    hint: "ابزار نوشتن و یادگیری"
  },
  {
    word: "لک‌لک",
    vocalized: "لَک‌لَک",
    tiles: ["ل", "ک", "ل", "ک"],
    reqLetters: ["ل", "ک", "اَ"],
    lesson: 13,
    syllables: ["لَک", "لَک"],
    sounds: ["لـ", "ـَ", "کـ", "لـ", "ـَ", "ک"],
    emoji: "🦩",
    hint: "پرنده‌ای با پاهای بلند و نوک دراز"
  },
  {
    word: "اتاق",
    vocalized: "اُتاق",
    tiles: ["ا", "ت", "ا", "ق"],
    reqLetters: ["اُ", "ت", "آ", "ق"],
    lesson: 13,
    syllables: ["اُ", "تاق"],
    sounds: ["اُ", "تـ", "ا", "ق"],
    emoji: "🛏️",
    hint: "اتاق خواب دنج و مرتب"
  },
  {
    word: "دلقک",
    vocalized: "دَلقَک",
    tiles: ["د", "ل", "ق", "ک"],
    reqLetters: ["د", "ل", "ق", "ک", "اَ"],
    lesson: 13,
    syllables: ["دَل", "قَک"],
    sounds: ["د", "ـَ", "لـ", "قـ", "ـَ", "ک"],
    emoji: "🤡",
    hint: "هنرمند بامزه با لباس‌های رنگارنگ در سیرک"
  },
  {
    word: "بال",
    vocalized: "بال",
    tiles: ["ب", "ا", "ل"],
    reqLetters: ["ب", "آ", "ل"],
    lesson: 13,
    syllables: ["بال"],
    sounds: ["بـ", "ا", "ل"],
    emoji: "🪽",
    hint: "پرندگان با آن در آسمان پرواز می‌کنند"
  },
  {
    word: "لباس",
    vocalized: "لِباس",
    tiles: ["ل", "ب", "ا", "س"],
    reqLetters: ["ل", "ب", "آ", "س", "اِ"],
    lesson: 13,
    syllables: ["لِ", "باس"],
    sounds: ["لـ", "ـِ", "بـ", "ا", "س"],
    emoji: "👕",
    hint: "پوشش تمیز و شیک ما"
  },
  {
    word: "لب",
    vocalized: "لَب",
    tiles: ["ل", "ب"],
    reqLetters: ["ل", "ب", "اَ"],
    lesson: 13,
    syllables: ["لَب"],
    sounds: ["لـ", "ـَ", "ب"],
    emoji: "👄",
    hint: "با لب‌ها لبخند می‌زنیم"
  },
  {
    word: "شال",
    vocalized: "شال",
    tiles: ["ش", "ا", "ل"],
    reqLetters: ["ش", "آ", "ل"],
    lesson: 13,
    syllables: ["شال"],
    sounds: ["شـ", "ا", "ل"],
    emoji: "🧣",
    hint: "شال‌گردن گرم زمستانی"
  },
  {
    word: "گل",
    vocalized: "گُل",
    tiles: ["گ", "ل"],
    reqLetters: ["گ", "ل", "اُ"],
    lesson: 13,
    syllables: ["گُل"],
    sounds: ["گـ", "ـُ", "ل"],
    emoji: "🌸",
    hint: "شکوفه خوشبو و زیبای باغچه"
  },
  {
    word: "گلدان",
    vocalized: "گُلدان",
    tiles: ["گ", "ل", "د", "ا", "ن"],
    reqLetters: ["گ", "ل", "د", "آ", "ن", "اُ"],
    lesson: 13,
    syllables: ["گُل", "دان"],
    sounds: ["گـ", "ـُ", "لـ", "د", "ا", "ن"],
    emoji: "🪴",
    hint: "ظرف پر از خاک که گل در آن می‌روید"
  },
  {
    word: "قند",
    vocalized: "قَند",
    tiles: ["ق", "ن", "د"],
    reqLetters: ["ق", "ن", "د", "اَ"],
    lesson: 13,
    syllables: ["قَند"],
    sounds: ["قـ", "ـَ", "نـ", "د"],
    emoji: "🧊",
    hint: "حبه‌های سفید و شیرین کنار چای"
  },

  // --- درس ۱۴: جـ ج ---
  {
    word: "جوجه",
    vocalized: "جوجِه",
    tiles: ["ج", "و", "ج", "ه"],
    reqLetters: ["ج", "او", "اِ"],
    lesson: 14,
    syllables: ["جو", "جِه"],
    sounds: ["جـ", "او", "جـ", "ـِ"],
    emoji: "🐥",
    hint: "بچه پرنده زرد و طلایی"
  },
  {
    word: "کاج",
    vocalized: "کاج",
    tiles: ["ک", "ا", "ج"],
    reqLetters: ["ک", "آ", "ج"],
    lesson: 14,
    syllables: ["کاج"],
    sounds: ["کـ", "ا", "ج"],
    emoji: "🌲",
    hint: "درخت همیشه سبز در سرما"
  },
  {
    word: "جوراب",
    vocalized: "جوراب",
    tiles: ["ج", "و", "ر", "ا", "ب"],
    reqLetters: ["ج", "او", "ر", "آ", "ب"],
    lesson: 14,
    syllables: ["جو", "راب"],
    sounds: ["جـ", "او", "ر", "ا", "ب"],
    emoji: "🧦",
    hint: "آن را پیش از کفش به پا می‌کنیم"
  },
  {
    word: "پنجره",
    vocalized: "پَنجِرِه",
    tiles: ["پ", "ن", "ج", "ر", "ه"],
    reqLetters: ["پ", "ن", "ج", "ر", "اَ", "اِ"],
    lesson: 14,
    syllables: ["پَن", "جِ", "رِه"],
    sounds: ["پـ", "ـَ", "نـ", "جـ", "ـِ", "ر", "ـِ"],
    emoji: "🪟",
    hint: "نور و هوای تازه از آن وارد خانه می‌شود"
  },
  {
    word: "هویج",
    vocalized: "هَویج",
    tiles: ["ه", "و", "ی", "ج"],
    reqLetters: ["ه", "و", "ای", "ج", "اَ"],
    lesson: 15,
    syllables: ["هـَ", "ویج"],
    sounds: ["هـ", "ـَ", "و", "یـ", "ج"],
    emoji: "🥕",
    hint: "سبزی نارنجی که خرگوش‌ها دوست دارند"
  },
  {
    word: "جشن",
    vocalized: "جَشن",
    tiles: ["ج", "ش", "ن"],
    reqLetters: ["ج", "ش", "ن", "اَ"],
    lesson: 14,
    syllables: ["جَشن"],
    sounds: ["جـ", "ـَ", "شـ", "ن"],
    emoji: "🎉",
    hint: "جشن آغاز سال یا جشن الفبا"
  },
  {
    word: "جارو",
    vocalized: "جارو",
    tiles: ["ج", "ا", "ر", "و"],
    reqLetters: ["ج", "آ", "ر", "او"],
    lesson: 14,
    syllables: ["جا", "رو"],
    sounds: ["جـ", "ا", "ر", "او"],
    emoji: "🧹",
    hint: "با آن خانه را تمیز و پاکیزه می‌کنیم"
  },
  {
    word: "تاج",
    vocalized: "تاج",
    tiles: ["ت", "ا", "ج"],
    reqLetters: ["ت", "آ", "ج"],
    lesson: 14,
    syllables: ["تاج"],
    sounds: ["تـ", "ا", "ج"],
    emoji: "👑",
    hint: "کلاه نگین‌دار پادشاهان"
  },
  {
    word: "فنجان",
    vocalized: "فِنجان",
    tiles: ["ف", "ن", "ج", "ا", "ن"],
    reqLetters: ["ف", "ن", "ج", "آ", "اِ"],
    lesson: 14,
    syllables: ["فِن", "جان"],
    sounds: ["فـ", "ـِ", "نـ", "جـ", "ا", "ن"],
    emoji: "☕",
    hint: "ظرف کوچکی برای چای خوش‌طعم"
  },
  {
    word: "برنج",
    vocalized: "بِرِنج",
    tiles: ["ب", "ر", "ن", "ج"],
    reqLetters: ["ب", "ر", "ن", "ج", "اِ"],
    lesson: 14,
    syllables: ["بِ", "رِنج"],
    sounds: ["بـ", "ـِ", "ر", "ـِ", "نـ", "ج"],
    emoji: "🍚",
    hint: "دانه‌های خوش‌عطر شالیزارهای شمال"
  },

  // --- درس ۱۵: چـ چ - هـ ـهـ ---
  {
    word: "چتر",
    vocalized: "چَتر",
    tiles: ["چ", "ت", "ر"],
    reqLetters: ["چ", "ت", "ر", "اَ"],
    lesson: 15,
    syllables: ["چَتر"],
    sounds: ["چـ", "ـَ", "تـ", "ر"],
    emoji: "☂️",
    hint: "زیر باران سرمان می‌گیریم تا خیس نشویم"
  },
  {
    word: "چوب",
    vocalized: "چوب",
    tiles: ["چ", "و", "ب"],
    reqLetters: ["چ", "او", "ب"],
    lesson: 15,
    syllables: ["چوب"],
    sounds: ["چـ", "او", "ب"],
    emoji: "🪵",
    hint: "تنه درخت که با آن میز و نیمکت می‌سازند"
  },
  {
    word: "قارچ",
    vocalized: "قارچ",
    tiles: ["ق", "ا", "ر", "چ"],
    reqLetters: ["ق", "آ", "ر", "چ"],
    lesson: 15,
    syllables: ["قارچ"],
    sounds: ["قـ", "ا", "ر", "چ"],
    emoji: "🍄",
    hint: "گیاهی شبیه چتر در جنگل و کوه"
  },
  {
    word: "ماهی",
    vocalized: "ماهی",
    tiles: ["م", "ا", "ه", "ی"],
    reqLetters: ["م", "آ", "ه", "ای"],
    lesson: 15,
    syllables: ["ما", "هی"],
    sounds: ["مـ", "ا", "هـ", "ی"],
    emoji: "🐟",
    hint: "جانور شناگر با پولک‌های براق در آب"
  },
  {
    word: "آهو",
    vocalized: "آهو",
    tiles: ["آ", "ه", "و"],
    reqLetters: ["آ", "ه", "او"],
    lesson: 15,
    syllables: ["آ", "هو"],
    sounds: ["آ", "هـ", "او"],
    emoji: "🦌",
    hint: "حیوانی زیبا و تیزپا با چشمانی درخشان"
  },
  {
    word: "بهار",
    vocalized: "بَهار",
    tiles: ["ب", "ه", "ا", "ر"],
    reqLetters: ["ب", "ه", "آ", "ر", "اَ"],
    lesson: 15,
    syllables: ["بـَ", "هار"],
    sounds: ["بـ", "ـَ", "هـ", "ا", "ر"],
    emoji: "🌸",
    hint: "فصل شکوفه‌ها، عید نوروز و سرسبزی"
  },
  {
    word: "شهر",
    vocalized: "شَهر",
    tiles: ["ش", "ه", "ر"],
    reqLetters: ["ش", "ه", "ر", "اَ"],
    lesson: 15,
    syllables: ["شَهر"],
    sounds: ["شـ", "ـَ", "هـ", "ر"],
    emoji: "🏙️",
    hint: "محل زندگی با خیابان‌ها و ساختمان‌های بلند"
  },
  {
    word: "چای",
    vocalized: "چای",
    tiles: ["چ", "ا", "ی"],
    reqLetters: ["چ", "آ", "ای"],
    lesson: 15,
    syllables: ["چای"],
    sounds: ["چـ", "ا", "ی"],
    emoji: "🍵",
    hint: "نوشیدنی گرم، خوش‌رنگ و لب‌سوز"
  },
  {
    word: "چراغ",
    vocalized: "چِراغ",
    tiles: ["چ", "ر", "ا", "غ"],
    reqLetters: ["چ", "ر", "آ", "غ", "اِ"],
    lesson: 20,
    syllables: ["چِ", "راغ"],
    sounds: ["چـ", "ـِ", "ر", "ا", "غ"],
    emoji: "💡",
    hint: "روشنایی‌بخش شب‌های تاریک"
  },

  // --- درس ۱۶: ژ ---
  {
    word: "مژده",
    vocalized: "مُژدِه",
    tiles: ["م", "ژ", "د", "ه"],
    reqLetters: ["م", "ژ", "د", "اُ", "اِ"],
    lesson: 16,
    syllables: ["مُژ", "دِه"],
    sounds: ["مـ", "ـُ", "ژ", "د", "ـِ"],
    emoji: "💌",
    hint: "خبر بسیار خوب و خوشحال‌کننده"
  },
  {
    word: "پژمرده",
    vocalized: "پَژمُردِه",
    tiles: ["پ", "ژ", "م", "ر", "د", "ه"],
    reqLetters: ["پ", "ژ", "م", "ر", "د", "اَ", "اُ", "اِ"],
    lesson: 16,
    syllables: ["پَژ", "مُر", "دِه"],
    sounds: ["پـ", "ـَ", "ژ", "مـ", "ـُ", "ر", "د", "ـِ"],
    emoji: "🥀",
    hint: "گلی که تشنه است و بی‌حال شده"
  },
  {
    word: "ژاله",
    vocalized: "ژالِه",
    tiles: ["ژ", "ا", "ل", "ه"],
    reqLetters: ["ژ", "آ", "ل", "اِ"],
    lesson: 16,
    syllables: ["ژا", "لِه"],
    sounds: ["ژ", "ا", "لـ", "ـِ"],
    emoji: "💧",
    hint: "قطره شبنم زلال روی گلبرگ‌ها"
  },

  // --- نشانه‌های ۲ (ص - ذ) ---
  {
    word: "صابون",
    vocalized: "صابون",
    tiles: ["ص", "ا", "ب", "و", "ن"],
    reqLetters: ["ص", "آ", "ب", "او", "ن"],
    lesson: 17,
    syllables: ["صا", "بون"],
    sounds: ["صـ", "ا", "بـ", "او", "ن"],
    emoji: "🧼",
    hint: "برای شستن تمیز دست‌ها با کف فراوان"
  },
  {
    word: "صورت",
    vocalized: "صورَت",
    tiles: ["ص", "و", "ر", "ت"],
    reqLetters: ["ص", "او", "ر", "ت", "اَ"],
    lesson: 17,
    syllables: ["صو", "رَت"],
    sounds: ["صـ", "او", "ر", "ـَ", "ت"],
    emoji: "🧒",
    hint: "چهره خندان و گلگون"
  },
  {
    word: "صدا",
    vocalized: "صِدا",
    tiles: ["ص", "د", "ا"],
    reqLetters: ["ص", "د", "آ", "اِ"],
    lesson: 17,
    syllables: ["صِ", "دا"],
    sounds: ["صـ", "ـِ", "د", "ا"],
    emoji: "🔊",
    hint: "نوای خوش پرندگان یا ساز"
  },
  {
    word: "قرص",
    vocalized: "قُرص",
    tiles: ["ق", "ر", "ص"],
    reqLetters: ["ق", "ر", "ص", "اُ"],
    lesson: 17,
    syllables: ["قُرص"],
    sounds: ["قـ", "ـُ", "ر", "ص"],
    emoji: "💊",
    hint: "دارویی که پزشک برای بهبود بیمار تجویز می‌کند"
  },
  {
    word: "ذره‌بین",
    vocalized: "ذَرّه‌بین",
    tiles: ["ذ", "ر", "ه", "ب", "ی", "ن"],
    reqLetters: ["ذ", "ر", "اِ", "ب", "ای", "ن", "اَ"],
    lesson: 17,
    syllables: ["ذَر", "رِه", "بین"],
    sounds: ["ذ", "ـَ", "ر", "ر", "ـِ", "بـ", "یـ", "ن"],
    emoji: "🔍",
    hint: "چیزهای ریز را بزرگ و روشن نشان می‌دهد"
  },
  {
    word: "لذیذ",
    vocalized: "لَذیذ",
    tiles: ["ل", "ذ", "ی", "ذ"],
    reqLetters: ["ل", "ذ", "ای", "اَ"],
    lesson: 17,
    syllables: ["لـَ", "ذیذ"],
    sounds: ["لـ", "ـَ", "ذ", "یـ", "ذ"],
    emoji: "😋",
    hint: "بسیار خوشمزه و دلچسب"
  },
  {
    word: "بذر",
    vocalized: "بَذر",
    tiles: ["ب", "ذ", "ر"],
    reqLetters: ["ب", "ذ", "ر", "اَ"],
    lesson: 17,
    syllables: ["بَذر"],
    sounds: ["بـ", "ـَ", "ذ", "ر"],
    emoji: "🌱",
    hint: "دانه گیاه که کشاورز در خاک می‌کارد"
  },

  // --- نشانه‌های ۲ (ع - ث) ---
  {
    word: "عینک",
    vocalized: "عِینَک",
    tiles: ["ع", "ی", "ن", "ک"],
    reqLetters: ["ع", "ای", "ن", "ک", "اِ", "اَ"],
    lesson: 18,
    syllables: ["عِی", "نَک"],
    sounds: ["عـ", "ـِ", "یـ", "نـ", "ـَ", "ک"],
    emoji: "👓",
    hint: "به چشم می‌زنیم تا همه‌چیز را شفاف ببینیم"
  },
  {
    word: "ساعت",
    vocalized: "ساعَت",
    tiles: ["س", "ا", "ع", "ت"],
    reqLetters: ["س", "آ", "ع", "ت", "اَ"],
    lesson: 18,
    syllables: ["سا", "عَت"],
    sounds: ["سـ", "ا", "عـ", "ـَ", "ت"],
    emoji: "⏰",
    hint: "تیک‌تاک می‌کند و زمان را نشان می‌دهد"
  },
  {
    word: "مزرعه",
    vocalized: "مَزرَعِه",
    tiles: ["م", "ز", "ر", "ع", "ه"],
    reqLetters: ["م", "ز", "ر", "ع", "اَ", "اِ"],
    lesson: 18,
    syllables: ["مَز", "رَ", "عِه"],
    sounds: ["مـ", "ـَ", "ز", "ر", "ـَ", "عـ", "ـِ"],
    emoji: "🚜",
    hint: "زمین کشاورزی سرسبز با محصولات پربار"
  },
  {
    word: "معلم",
    vocalized: "مُعَلِّم",
    tiles: ["م", "ع", "ل", "م"],
    reqLetters: ["م", "ع", "ل", "اُ", "اَ", "اِ"],
    lesson: 18,
    syllables: ["مُ", "عَل", "لِم"],
    sounds: ["مـ", "ـُ", "عـ", "ـَ", "لـ", "لـ", "ـِ", "م"],
    emoji: "👩‍🏫",
    hint: "آموزگار دانا و مهربان کلاس درس"
  },
  {
    word: "کثیف",
    vocalized: "کَثیف",
    tiles: ["ک", "ث", "ی", "ف"],
    reqLetters: ["ک", "ث", "ای", "ف", "اَ"],
    lesson: 18,
    syllables: ["کـَ", "ثیف"],
    sounds: ["کـ", "ـَ", "ثـ", "یـ", "ف"],
    emoji: "🧽",
    hint: "آلوده و نیازمند شست‌وشو"
  },
  {
    word: "مثل",
    vocalized: "مِثل",
    tiles: ["م", "ث", "ل"],
    reqLetters: ["م", "ث", "ل", "اِ"],
    lesson: 18,
    syllables: ["مِثل"],
    sounds: ["مـ", "ـِ", "ثـ", "ل"],
    emoji: "👯",
    hint: "شبیه و مانند یکدیگر"
  },

  // --- نشانه‌های ۲ (ح - ض) ---
  {
    word: "حوله",
    vocalized: "حولِه",
    tiles: ["ح", "و", "ل", "ه"],
    reqLetters: ["ح", "و", "ل", "اِ"],
    lesson: 19,
    syllables: ["حو", "لِه"],
    sounds: ["حـ", "و", "لـ", "ـِ"],
    emoji: "🧖",
    hint: "با آن پس از شستن دست و رویمان را خشک می‌کنیم"
  },
  {
    word: "حلزون",
    vocalized: "حَلَزون",
    tiles: ["ح", "ل", "ز", "و", "ن"],
    reqLetters: ["ح", "ل", "ز", "او", "ن", "اَ"],
    lesson: 19,
    syllables: ["حـَ", "لـَ", "زون"],
    sounds: ["حـ", "ـَ", "لـ", "ـَ", "ز", "او", "ن"],
    emoji: "🐌",
    hint: "جانوری با لاک مارپیچی که آرام راه می‌رود"
  },
  {
    word: "صبح",
    vocalized: "صُبح",
    tiles: ["ص", "ب", "ح"],
    reqLetters: ["ص", "ب", "ح", "اُ"],
    lesson: 19,
    syllables: ["صُبح"],
    sounds: ["صـ", "ـُ", "بـ", "ح"],
    emoji: "🌄",
    hint: "هنگام بیدار شدن با طلوع خورشید زیبا"
  },
  {
    word: "حوض",
    vocalized: "حَوض",
    tiles: ["ح", "و", "ض"],
    reqLetters: ["ح", "و", "ض", "اَ"],
    lesson: 19,
    syllables: ["حَوض"],
    sounds: ["حـ", "ـَ", "و", "ض"],
    emoji: "⛲",
    hint: "حوض فیروزه‌ای وسط حیاط با ماهی‌های قرمز"
  },
  {
    word: "مریض",
    vocalized: "مَریض",
    tiles: ["م", "ر", "ی", "ض"],
    reqLetters: ["م", "ر", "ای", "ض", "اَ"],
    lesson: 19,
    syllables: ["مـَ", "ریض"],
    sounds: ["مـ", "ـَ", "ر", "یـ", "ض"],
    emoji: "🤒",
    hint: "کسی که به استراحت و مراقبت نیاز دارد"
  },

  // --- نشانه‌های ۲ (ط - غ - ظ) ---
  {
    word: "طوطی",
    vocalized: "طوطی",
    tiles: ["ط", "و", "ط", "ی"],
    reqLetters: ["ط", "او", "ای"],
    lesson: 20,
    syllables: ["طو", "طی"],
    sounds: ["ط", "او", "ط", "ی"],
    emoji: "🦜",
    hint: "پرنده رنگارنگ و سخنگو"
  },
  {
    word: "طناب",
    vocalized: "طَناب",
    tiles: ["ط", "ن", "ا", "ب"],
    reqLetters: ["ط", "ن", "آ", "ب", "اَ"],
    lesson: 20,
    syllables: ["طـَ", "ناب"],
    sounds: ["ط", "ـَ", "نـ", "ا", "ب"],
    emoji: "🪢",
    hint: "برای بازی شاد طناب‌بازی"
  },
  {
    word: "قطار",
    vocalized: "قَطار",
    tiles: ["ق", "ط", "ا", "ر"],
    reqLetters: ["ق", "ط", "آ", "ر", "اَ"],
    lesson: 20,
    syllables: ["قـَ", "طار"],
    sounds: ["قـ", "ـَ", "ط", "ا", "ر"],
    emoji: "🚂",
    hint: "هو هو چی چی، روی ریل حرکت می‌کند"
  },
  {
    word: "حیاط",
    vocalized: "حَیاط",
    tiles: ["ح", "ی", "ا", "ط"],
    reqLetters: ["ح", "ای", "آ", "ط", "اَ"],
    lesson: 20,
    syllables: ["حـَ", "یاط"],
    sounds: ["حـ", "ـَ", "یـ", "ا", "ط"],
    emoji: "🏡",
    hint: "محوطه بازی در خانه یا مدرسه"
  },
  {
    word: "غاز",
    vocalized: "غاز",
    tiles: ["غ", "ا", "ز"],
    reqLetters: ["غ", "آ", "ز"],
    lesson: 20,
    syllables: ["غاز"],
    sounds: ["غـ", "ا", "ز"],
    emoji: "🪿",
    hint: "پرنده پر سفید در کنار آب"
  },
  {
    word: "باغ",
    vocalized: "باغ",
    tiles: ["ب", "ا", "غ"],
    reqLetters: ["ب", "آ", "غ"],
    lesson: 20,
    syllables: ["باغ"],
    sounds: ["بـ", "ا", "غ"],
    emoji: "🌳",
    hint: "پر از درختان میوه و گل‌های قشنگ"
  },
  {
    word: "کلاغ",
    vocalized: "کَلاغ",
    tiles: ["ک", "ل", "ا", "غ"],
    reqLetters: ["ک", "ل", "آ", "غ", "اَ"],
    lesson: 20,
    syllables: ["کـَ", "لاغ"],
    sounds: ["کـ", "ـَ", "لـ", "ا", "غ"],
    emoji: "🐦‍⬛",
    hint: "قار قار می‌خواند روی درخت سپیدار"
  },
  {
    word: "غوره",
    vocalized: "غورِه",
    tiles: ["غ", "و", "ر", "ه"],
    reqLetters: ["غ", "او", "ر", "اِ"],
    lesson: 20,
    syllables: ["غو", "رِه"],
    sounds: ["غـ", "او", "ر", "ـِ"],
    emoji: "🍇",
    hint: "انگور نارس و ترش‌مزه"
  },
  {
    word: "ظرف",
    vocalized: "ظَرف",
    tiles: ["ظ", "ر", "ف"],
    reqLetters: ["ظ", "ر", "ف", "اَ"],
    lesson: 20,
    syllables: ["ظَرف"],
    sounds: ["ظ", "ـَ", "ر", "ف"],
    emoji: "🍽️",
    hint: "کاسه، بشقاب یا لیوان غذا"
  },
  {
    word: "ناظم",
    vocalized: "ناظِم",
    tiles: ["ن", "ا", "ظ", "م"],
    reqLetters: ["ن", "آ", "ظ", "م", "اِ"],
    lesson: 20,
    syllables: ["نا", "ظِم"],
    sounds: ["نـ", "ا", "ظـ", "ـِ", "م"],
    emoji: "👨‍💼",
    hint: "مسئول نظم و مهربانی در مدرسه"
  },
  {
    word: "ظهر",
    vocalized: "ظُهر",
    tiles: ["ظ", "ه", "ر"],
    reqLetters: ["ظ", "ه", "ر", "اُ"],
    lesson: 20,
    syllables: ["ظُهر"],
    sounds: ["ظ", "ـُ", "هـ", "ر"],
    emoji: "☀️",
    hint: "هنگام اذان ظهر و ناهار خانواده"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LESSONS_CONFIG, ALL_LETTERS, WORDS_DATABASE };
}

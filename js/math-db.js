/**
 * پایگاه داده و تنظیمات ریاضی اول دبستان
 * منطبق بر ۲۵ تم کتاب درسی ریاضی اول ابتدایی (پایگاه کتاب‌های درسی chap.sch.ir)
 */

const MATH_THEMES_CONFIG = [
  { id: 1, title: "تم ۱ تا ۵: آغاز شمارش و چوب‌خط", desc: "اعداد ۱ تا ۵، انگشتان دست، چوب‌خط، جدول ۳×۳، الگوهای ساده", maxNum: 5, group: 1 },
  { id: 2, title: "تم ۶ تا ۱۰: نماد اعداد و جمع تصویری", desc: "نماد ۱ تا ۵، چوب‌خط ۵تایی، جمع‌های تصویری پایه، جدول شگفت‌انگیز", maxNum: 5, group: 1 },
  { id: 3, title: "تم ۱۱ تا ۱۵: اعداد تا ۱۰ و مقایسه", desc: "اعداد ۶ تا ۱۰، علامت‌های کمتر/بیشتر، جمع و تفریق تا ۱۰", maxNum: 10, group: 2 },
  { id: 4, title: "تم ۱۶ تا ۲۰: بسته‌های ده‌تایی و یکی", desc: "اعداد ۱۱ تا ۲۰، جدول ارزش مکانی، محور اعداد", maxNum: 20, group: 3 },
  { id: 5, title: "تم ۲۱ تا ۲۵: شمارش پیشرفته تا ۱۰۰", desc: "دسته‌های ده‌تایی تا ۱۰۰، جمع و تفریق مضارب ۱۰، ساعت و زمان", maxNum: 100, group: 3 }
];

const MATH_ITEMS = [
  { emoji: "🍎", name: "سیب" },
  { emoji: "🦆", name: "اردک" },
  { emoji: "🚗", name: "ماشین" },
  { emoji: "⭐", name: "ستاره" },
  { emoji: "🐟", name: "ماهی" },
  { emoji: "🌸", name: "گل" },
  { emoji: "🎈", name: "بادکنک" },
  { emoji: "🦋", name: "پروانه" },
  { emoji: "🍓", name: "توت‌فرنگی" },
  { emoji: "🍬", name: "شکلات" }
];

const SHAPES = [
  { id: "circle", char: "🔴", name: "دایره قرمز", color: "#EF4444" },
  { id: "square", char: "🟦", name: "مربع آبی", color: "#3B82F6" },
  { id: "triangle", char: "🔺", name: "مثلث قرمز", color: "#DC2626" },
  { id: "green-circle", char: "🟢", name: "دایره سبز", color: "#10B981" },
  { id: "yellow-square", char: "🟨", name: "مربع زرد", color: "#F59E0B" },
  { id: "diamond", char: "🔶", name: "لوزی نارنجی", color: "#EA580C" }
];

// تولید نمایش گرافیکی چوب‌خط برای کلاس اولی‌ها
function generateTallySvg(count) {
  let fullFives = Math.floor(count / 5);
  let remainder = count % 5;
  let html = '<div class="tally-group-wrapper">';

  for (let f = 0; f < fullFives; f++) {
    html += `
      <div class="tally-five" title="۵ چوب‌خط">
        <span class="v-line"></span>
        <span class="v-line"></span>
        <span class="v-line"></span>
        <span class="v-line"></span>
        <span class="slash-line"></span>
      </div>
    `;
  }

  if (remainder > 0) {
    html += '<div class="tally-remainder">';
    for (let r = 0; r < remainder; r++) {
      html += '<span class="v-line"></span>';
    }
    html += '</div>';
  }

  html += '</div>';
  return html;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MATH_THEMES_CONFIG, MATH_ITEMS, SHAPES, generateTallySvg };
}

/* =====================================================================
   РЕКВІЗИТИ ПРОДАВЦЯ — ЄДИНЕ МІСЦЕ, ДЕ ЇХ ПОТРІБНО ЗАПОВНИТИ.
   Замініть значення в лапках на свої. Поки значення починається з "[",
   воно показується на сайті жовтим підсвічуванням.
   ===================================================================== */
window.SITE = {
  brand: 'Скажи «Так»',

  sellerName:    '[ПІБ або назва Виконавця]',
  sellerStatus:  '[ФОП / фізична особа]',   // наприклад: ФОП, платник єдиного податку 3 групи
  sellerId:      '[РНОКПП / ЄДРПОУ]',
  sellerAddress: '[Адреса місцезнаходження]',

  email:         '[email]',
  phone:         '[телефон]',
  telegram:      '[Telegram]',               // наприклад: @invitik_support
  supportHours:  '[години роботи підтримки]',// наприклад: щодня 10:00–19:00 (Київ)
  siteUrl:       '[адреса сайту]',           // наприклад: https://example.com

  paymentProvider: '[платіжний сервіс]',     // наприклад: WayForPay
  hosting:         '[хостинг сайту]',        // наприклад: Netlify
  dataRegion:      '[країна/регіон серверів]',// регіон вашого проєкту Supabase

  price: '99 грн',
  activeDays: '30',
  refundDays: '14',
  retentionDays: '90'
};

(function () {
  function fill() {
    var cfg = window.SITE || {};
    document.querySelectorAll('[data-cfg]').forEach(function (el) {
      var v = cfg[el.getAttribute('data-cfg')];
      if (typeof v !== 'string' || !v || v.charAt(0) === '[') return;
      el.textContent = v;
      el.classList.remove('ph');
      var pre = el.getAttribute('data-href');
      if (pre !== null && el.tagName === 'A') el.setAttribute('href', pre + v);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fill);
  else fill();
})();

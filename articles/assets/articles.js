/* Ultimate Fishing Academy — Articles (v1)
   BREVO: Brevo > Contacts > Forms > (your form) > Share > "Embed" > copy the form's action URL
   (looks like https://xxxx.sibforms.com/serve/XXXX) and paste it below. Until then the form shows a note. */
var UFA_BREVO_ACTION = '';

document.querySelectorAll('form[data-brevo]').forEach(function (f) {
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var box = f.closest('.mail');
    if (!UFA_BREVO_ACTION) { alert('Email signup not connected yet (add the Brevo form URL in /articles/assets/articles.js).'); return; }
    if (f.email_address_check && f.email_address_check.value) return; /* honeypot */
    var btn = f.querySelector('button'); btn.disabled = true;
    fetch(UFA_BREVO_ACTION + (UFA_BREVO_ACTION.indexOf('?') > -1 ? '&' : '?') + 'isAjax=1', { method: 'POST', body: new FormData(f), mode: 'no-cors' })
      .then(function () { box.classList.add('sent'); })
      .catch(function () { btn.disabled = false; alert('Sorry, that didn’t go through. Please try again.'); });
  });
});

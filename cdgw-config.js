/* ═══════════════════════════════════════════════════════════════════
   Cell Division Gone Wrong · Pilot configuration
   LaShaudra Cox Learning Design · Design. Teach. Transform.

   THIS IS THE ONLY FILE A PILOT TEACHER EDITS.

   1. SUBMIT_URL  Paste the Web App URL from your Google Apps Script
                  deployment (see the Pilot Implementation Guide,
                  "Data & Privacy Setup"). Leave '' to run with no data
                  collection: students still see their results on screen
                  and can print them.
   2. CLASS_CODE  Any short code for your class or section, such as
                  'P3-BIO'. It is added to every submission so you can
                  sort by class. Do not use student names here.
   3. TEACHER     Optional. Your last name, shown on result screens.

   What gets sent (only if SUBMIT_URL is set): student-entered name and
   period, answer choices, short written responses, page name, class
   code, and a timestamp. Nothing else. No logins, no tracking, no
   third-party analytics. Data goes only to the Google Sheet you own.
   ═══════════════════════════════════════════════════════════════════ */
window.CDGW_CONFIG = {
  SUBMIT_URL: '',
  CLASS_CODE: '',
  TEACHER: ''
};

/* Shared submit helper used by every page that collects responses.
   Returns a Promise that resolves to 'sent', 'local', or 'error'. */
window.cdgwSubmit = function (payload) {
  var cfg = window.CDGW_CONFIG || {};
  var body = Object.assign({
    classCode: cfg.CLASS_CODE || '',
    page: (location.pathname.split('/').pop() || 'page'),
    submittedAt: new Date().toISOString()
  }, payload);
  if (!cfg.SUBMIT_URL) return Promise.resolve('local');
  return fetch(cfg.SUBMIT_URL, {
    method: 'POST',
    // text/plain avoids a CORS preflight, which Google Apps Script does not answer
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(body),
    mode: cfg.SUBMIT_URL.indexOf('formspree') > -1 ? 'cors' : 'no-cors'
  }).then(function () { return 'sent'; }, function () { return 'error'; });
};

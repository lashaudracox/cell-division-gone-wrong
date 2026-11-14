/**
 * Cell Division Gone Wrong · Pilot data collection (Google Apps Script)
 * LaShaudra Cox Learning Design
 *
 * SETUP (about 5 minutes; full steps in the Pilot Implementation Guide):
 *  1. Create a new Google Sheet in YOUR school Google account.
 *  2. Extensions → Apps Script. Delete the sample code, paste this file, Save.
 *  3. Deploy → New deployment → type "Web app".
 *       Execute as: Me      Who has access: Anyone
 *  4. Authorize, then copy the Web app URL.
 *  5. Paste the URL into cdgw-config.js → SUBMIT_URL.
 *  6. Test: open the Web app URL in a browser. You should see "CDGW pilot endpoint is live."
 *
 * Each activity (module field) gets its own tab. Columns are created
 * automatically from whatever fields a page sends, so every page works
 * without extra setup.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var data = JSON.parse(e.postData.contents || '{}');
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var tabName = String(data.module || data.page || 'Responses').replace(/[\[\]\*\?\/\\:]/g, '').slice(0, 90);
    var sheet = ss.getSheetByName(tabName) || ss.insertSheet(tabName);
    var headers = sheet.getLastRow() > 0 ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
    var keys = Object.keys(data);
    keys.forEach(function (k) { if (headers.indexOf(k) === -1) headers.push(k); });
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
    sheet.setFrozenRows(1);
    var row = headers.map(function (h) {
      var v = data[h];
      if (v === undefined || v === null) return '';
      return typeof v === 'object' ? JSON.stringify(v) : v;
    });
    sheet.appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput('CDGW pilot endpoint is live.');
}

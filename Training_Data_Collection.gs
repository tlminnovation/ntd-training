// Training Course Data Collection Web App
// Deploy as: Web App, Execute as: Me, Who has access: Anyone

// Sheet ID - Training Completions sheet
const SHEET_ID = '1jPbpFc4gZ22rXwNmWg9tlLB42nyf6mjGdQDd0MMXzQo';

function doPost(e) {
  try {
    let data;
    
    if (e.parameter && Object.keys(e.parameter).length > 0) {
      data = e.parameter;
    } else if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }
    
    if (!data) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'No data received' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName('Training Completions');
    
    if (!sheet) {
      sheet = ss.insertSheet('Training Completions');
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'KoBoToolbox Username', 'Organization', 'Facility', 'Qualifications', 'Event', 'Score', 'Certificate Code']);
    }
    
    const row = [
      new Date(),
      data.name || '',
      data.email || '',
      data.koboUsername || '',
      data.organization || '',
      data.location || '',
      data.qualifications || '',
      data.event || '',
      data.score || '',
      data.certificateCode || ''
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success', row: row }))
        .setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
        .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Training Data Collection - POST data to log').setMimeType(ContentService.MimeType.TEXT);
}
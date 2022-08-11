function doGet() {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

function saveData(data) {
  let myWorksheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  myWorksheet.appendRow([new Date(), data.wishMessage]);
  return data;
}
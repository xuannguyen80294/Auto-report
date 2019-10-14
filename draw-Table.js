function getData(){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SUMMARY REPORT").getDataRange();
  var background = ss.getBackgrounds();
  var val = ss.getDisplayValues();
  var fontColor = ss.getFontColors();
  var fontStyles = ss.getFontStyles();
  var fontWeight = ss.getFontWeights();
  var fontSize = ss.getFontSizes();
  return [val,background,fontColor,fontStyles,fontWeight,fontSize];
}

function drawTable() {
    var ss_data = getData();
    var data = ss_data[0];
    var background = ss_data[1];
    var fontColor = ss_data[2];
    var fontStyles = ss_data[3];
    var fontWeight = ss_data[4];
    var fontSize = ss_data[5];
    var html = "<table border='1'>";
    for (var i = 0; i < data.length; i++) {
        html += "<tr>"
        for (var j = 0; j < data[i].length; j++) {
            html += "<td style='height:12px;background:" + background[i][j] + ";color:" + fontColor[i][j] + ";font-style:" + fontStyles[i][j] + ";font-weight:" + fontWeight[i][j] + ";font-size:" + (fontSize[i][j] + 6) + "px;'>" + data[i][j] + "</td>";
        }
        html += "</tr>";
    }
    html + "</table>"
    var month = Utilities.formatDate(new Date, G+7, format)   
    MailApp.sendEmail("xuan_thanh_nguyen@colpal.com","AML Monthly  report","AML KPI",{htmlBody: html});
}

    
   
function HideColumns() {
  var ss = SpreadsheetApp.openById("1SOVsD5ph3eSQt90DqO0CRFoN2AWjos886rFmhldp6YI");
  var s = ss.getSheetByName("SUMMARY REPORT");
  var data = s.getDataRange();
  var last_col = s.getLastColumn();
  Logger.log(last_col);
  for(var i=1; i<last_col; i++) {
     if(data.getCell(6, i).getValue() == '') {
        s.hideColumns(i);
     }
    else{s.showColumns(i);}
  }
 }

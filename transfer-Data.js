function TransferData() {
  // Resource Sheet
  var ss1 = SpreadsheetApp.openById("1SOVsD5ph3eSQt90DqO0CRFoN2AWjos886rFmhldp6YI");
  var s1 = ss1.getSheetByName("Database");
  // Destination Sheet
  var ss2 = SpreadsheetApp.openById("1_V8jVdC2O9Y4-L76M8o_W85FpAIqxknhxh8S84-GU7g");
  var s2 = ss2.getSheetByName("Sheet1");
  // Get copy paste value 
  var ls = s1.getLastRow();
  Logger.log(ls);
  var R1 = s1.getRange("A1:Y"+ls).getValues();
  var R2 = s2.getRange("A1"+":Y" + ls).setValues(R1);
}
  
 
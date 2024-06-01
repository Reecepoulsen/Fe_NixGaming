// Problems:
// - running with every edit, true/ false in a random cell triggers the hide
// - e object is undefined for some reason??
// - Reece doesn't know what he's doing!!

// This is the actual function that gets call when the sheet changes
function onEdit(e) {
  addHideTriggerToColumn("n", 1, 1); // Supposed to hide column 'n' when the value at (R1,C1) is false
  addHideTriggerToColumn("o", 2, 1); // Supposed to hide column 'o' when the value at (R2,C1) is false
  addHideTriggerToColumn("p", 3, 1); // Supposed to hide column 'p' when the value at (R3,C1) is false
  addHideTriggerToColumn("q", 4, 1); // Supposed to hide column 'q' when the value at (R4,C1) is false
}

function addHideTriggerToColumn(columnLetter, triggerRow, triggerColumn) {
  // Change the alphabet letter into a number so we can use the number later
  columnLetter = columnLetter.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var columnNum = alphabet.indexOf(columnLetter) + 1;
  console.log("Hide column '" + columnLetter + "' columNum: " + columnNum);

  // Hide the column if the cell at triggerRow and triggerColumn is false
  var settingSheet = SpreadsheetApp.getActive().getSheetByName("Settings");
  var eventSheet = SpreadsheetApp.getActive().getSheetByName("Event");

  // Get the current range so we can pull the cell out of it so we can get the value out of the cell
  var curRange = settingSheet.getActiveRange();
  var triggerCell = curRange.getCell(triggerRow, triggerColumn);
  var cellValue = triggerCell.getValue();

  // Check to see if the value in the triggerCell is false
  if (cellValue == false) {
    // If so, hide the column
    eventSheet.hideColumns(columnNum);
    console.log("Column '" + columnLetter + "' hidden");
  } else {
    // if not, show the column
    eventSheet.showColumns(columnNum);
    console.log("Column '" + columnLetter + "' shown");
  }
}

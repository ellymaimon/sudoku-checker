export function CurrentGame() {
  this.userInput = [];
}

export function checkArray(userArray) {
  var correctArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var sorted = userArray.sort(function(a, b){return a - b});
  for (var i = 0; i < sorted.length ; i++) {
    if(sorted[i] !== correctArray[i]) {
      return false;
    }
  }
  return true;
}


export function checkRows(userInput) {
  var currentRow = [];
  for (var i = 0; i <= 72; i+=9) {
    for (var j = 0; j <= 8; j++) {
      currentRow.push(userInput[i + j]);
    }
    if(!checkArray(currentRow)) return false;
    currentRow = [];
  }
  return true;
}

// function checkColumns(userInput) {
//   var currentColumn = [];
//   for (var i = 0; i <= 8; i++) {
//     for (var j = 0; j <= 8; j++) {
//       currentColumn.push(userInput[i + (j * 9)]);
//       if(!checkArray(currentColumn)) return false;
//       currentColumn = [];
//     }
//   }
//   return true;
// }



//
// array = [];
// valid = [];
//
// for(i = 1; i <= 9; i++) {
//   COLUMN.forEach(function(colbox){
//     array.push($("#" + colbox + i).val());
//   })
//   array.sort();//or in the checkvalid
// loop and check =>  array.checkValid()
//   if(valid is true)
//   {
//     push 1 to validcol array
//   }
//   else {
//     {
//       push 0 to validcol array
//     }
//   }
//   array.clear()
// }
//
// checkFinalWiun {
//   if valid.sum ==
// }
//
//
//
//
//
// COLUMN.forEach(function(colbox)) {
//   ROW.forEach(function(rowbox) {
//     array.push($("#" + colbox + rowbox).val());
//
//   });

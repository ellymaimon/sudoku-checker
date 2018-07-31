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

export function checkColumns(userInput) {
  var currentColumn = [];
  for (var i = 0; i <= 8; i++) {
    for (var j = 0; j <= 8; j++) {
      currentColumn.push(userInput[i + (j * 9)]);
    }
    if(!checkArray(currentColumn)) return false;
    currentColumn = [];
  }
  return true;
}

export function checkBoxes(userInput) {
  var currentBox = [];
  for (var i = 0; i <= 54; i+=27) {
    for (var j = 0; j <= 6; j+=3) {
      for (var k = 0; k <= 2; k++) {
        for (var l = 0; l <=2; l++) {
          currentBox.push(userInput[i + j + k + (l * 9)]);
        }
      }
      if(!checkArray(currentBox)) return false;
      currentBox = [];
    }
  }
  return true;
}

CurrentGame.prototype.checkWin = function() {
  if(checkRows(this.userInput) && checkColumns(this.userInput) && checkBoxes(this.userInput)) {
    return true;
  }
  else {
    return false;
  }
}

class TicTacToe {
  constructor() {
    this.gameField = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.currentPlayerSymbol = 'x';
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.gameField[rowIndex][columnIndex]) {
      this.gameField[rowIndex][columnIndex] = this.currentPlayerSymbol;
      if (this.currentPlayerSymbol === 'x') {
        this.currentPlayerSymbol = 'o';
      } else {
        this.currentPlayerSymbol = 'x';
      }
    }
  }

  isFinished() {
    return !!this.getWinner() || this.isDraw();
  }

  getWinner() {
    // check rows
    if(this.gameField[0][0] === this.gameField[0][1] && this.gameField[0][1]=== this.gameField[0][2]){
      return this.gameField[0][0];
    }
    if(this.gameField[1][0] === this.gameField[1][1] && this.gameField[1][1] === this.gameField[1][2]){
      return this.gameField[1][0];
    }
    if(this.gameField[2][0] === this.gameField[2][1] && this.gameField[2][1] === this.gameField[2][2]){
      return this.gameField[2][0];
    }
    //check columns
    if(this.gameField[0][0] === this.gameField[1][0] && this.gameField[1][0] === this.gameField[2][0]){
      return this.gameField[0][0];
    }
    if(this.gameField[0][1] === this.gameField[1][1] && this.gameField[1][1] === this.gameField[2][1]){
      return this.gameField[0][1];
    }
    if(this.gameField[0][2] === this.gameField[1][2] && this.gameField[1][2]=== this.gameField[2][2]){
      return this.gameField[0][2];
    }
    //check diagonals
    if(this.gameField[0][0] === this.gameField[1][1] && this.gameField[1][1] === this.gameField[2][2]){
      return this.gameField[0][0];
    }
    if(this.gameField[0][2] === this.gameField[1][1] && this.gameField[1][1] === this.gameField[2][0]){
      return this.gameField[0][2];
    }
    //if no winner, return null
    return null;
  }

  noMoreTurns() {
    if(!this.gameField[0][0] || !this.gameField[0][1] || !this.gameField[0][2] || !this.gameField[1][0]
      || !this.gameField[1][1] || !this.gameField[1][2] || !this.gameField[2][0] || !this.gameField[2][1] 
      || !this.gameField[2][2]){
        return false;
      } else{
        return true;
      }
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
      return this.gameField[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;

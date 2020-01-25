class GameOfLife {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.board = this.makeBoard();
    }
  
    /**
     * Returns a 2D Array
     */
  

    makeBoard() {
      // TODO: Create and return an 2D Array 
      // with `this.heigh` as rows and `this.width` as cols.
      // For example, given a height of 4 and a width of 3, it will generate:
      // [
      //  [0, 0, 0],
      //  [0, 0, 0],
      //  [0, 0, 0],
      //  [0, 0, 0],
      // ]

      let board = []

      for (let i = 0; i < this.height; i++) {
        let rowArr = []
        for (let j = 0; j < this.width; j++) {
          rowArr.push(0)
        }
        board.push(rowArr)
      }

      return board

    }

    getCell(row, col) {
      if (row <= this.height - 1 && col <= this.width - 1) {
        let cell = this.board[row][col]
        if (cell === 1) return 'alive'
        return 'dead'
      } else {
        alert("Invalid coordinates")
      }
    }

    toggleCell(row, col) {
      let cellState = this.getCell(row, col)
      if (cellState === 'alive') {
        this.board[row][col] = 0
      } else if (cellState === 'dead') {
        this.board[row][col] = 1
      }
    }

  
    /**
     * Return the amount of living neighbors around a given coordinate.
     */
  
    livingNeighbors(row, col) {
      // TODO: Return the count of living neighbors.

      let cellState = this.getCell(row, col);

      let adjacentRows = this.board.filter((element, idx) => {
        if (Math.abs(row - idx) <= 1) {
          return element;
        }
      })

      // let allCells = adjacentRows.map(arr => {
      //   arr.filter((element, idx) => {
      //     if (Math.abs(idx - col) <= 1) {
      //       return element;
      //     }
      //   })
      //   return [...arr]
      // })

      // return allCells

      return adjacentRows.reduce((accum, arr) => {
        return accum + arr.reduce((acc, el, idx) => {
          if (el === 1 && Math.abs(col - idx) <= 1) {
            return acc + 1
          }
        }, 0)
      }, 0)

    }
  
  
    /**
     * Given the present board, apply the rules to generate a new board
     */
    
    tick() {
      const newBoard = this.makeBoard();
      // TODO: Here is where you want to loop through all the cells
      // on the existing board and determine, based on it's neighbors,
      // whether the cell should be dead or alive in the new board 
      // (the next iteration of the game) 
      //
      // You need to:
      // 1. Count alive neighbors for all cells
      // 2. Set the next state of all cells in newBoard,
      // based on their current alive neighbors
      this.board = newBoard;
    }
  }

let game = new GameOfLife(5,5);
  
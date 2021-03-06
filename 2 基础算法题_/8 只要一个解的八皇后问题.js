// 八皇后问题

/* 输入棋盘边长 n，返回所有合法的放置 */
function solveNQueens(n) {
  let res = []
  // '.' 表示空，'Q' 表示皇后，初始化空棋盘。
  // ''随便什么内容，占位用
  let board = new Array(n).fill('').map((x) => new Array(n).fill('.'))
  // let n = board.length;
  function isValid(row, col) {
    // 检查列是否有皇后互相冲突
    for (let i = 0; i < n; i++) {
      if (board[i][col] == 'Q') return false
    }
    // 检查右上方是否有皇后互相冲突
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] == 'Q') return false
    }
    // 检查左上方是否有皇后互相冲突
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] == 'Q') return false
    }
    return true
  }
  const backtrack = (board, row) => {
    // 触发结束条件
    if (row == n) {
/* 
[
  [ '.Q..', '...Q', 'Q...', '..Q.' ],
  [ '..Q.', 'Q...', '...Q', '.Q..' ]
]
*/
      // const stringsBoard = board.slice() //拷贝一份条件成立的结果
      const stringsBoard =Array.from(board) //拷贝一份条件成立的结果
      for (let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join('') //每一行拼成字符串
      }
      res.push(stringsBoard)
      return true
    }

    // let n = board[row].length;
    for (let col = 0; col < n; col++) {
      // 排除不合法选择
      if (!isValid(row, col)) continue
      // 做选择
      board[row][col] = 'Q'
      // 进入下一行决策,只要找到就退出
      if (backtrack(board, row + 1)) return true;
      // 撤销选择
      board[row][col] = '.'
    }
  }
  backtrack(board, 0)
  return res
}

// 路径：board 中小于 row 的那些行都已经成功放置了皇后
// 选择列表：第 row 行的所有列都是放置皇后的选择
// 结束条件：row 超过 board 的最后一行

console.log(solveNQueens(4))
rows = 10;
cols = 10;
mineNum = 30;


board = [];
let mines = [];

for (let i = 0; i < rows; i++) {
  temp = [];
  for (let j = 0; j < cols; j++) {
    temp.push(false);
  }
  mines.push(temp);
}

for (let i = 0; i<mineNum; i += 0) {
  temp = [Math.floor(Math.random() * (rows-1)), Math.floor(Math.random() * (cols-1))];
  console.log(temp[1])
  if (!mines[temp[0]][temp[1]]) {
    mines[temp[0]][temp[1]] = true;
    i++;
  }
}
let numbers = [];
for (let j = 0; j<rows;j++) {
  temp = [];
  for (let i = 0; i<cols; i++) {
    a = mines[j][i-1] ? !undefined : 0;
    b = mines[j][i+1] ? !undefined : 0;
    if (j-1 >=0) {
    c = mines[j-1][i-1] ? !undefined : 0;
    d = mines[j-1][i] ? !undefined : 0;
    e = mines[j-1][i+1] ? !undefined : 0;
    } else {c=d=e=0;}
    if (j+1<=rows-1) {
    f = mines[j+1][i-1] ? !undefined : 0;
    g = mines[j+1][i] ? !undefined : 0;
    h = mines[j+1][i+1] ? !undefined : 0;
    } else (f=g=h=0)
    temp.push(a+b+c+d+e+f+g+h);
  }
  numbers.push(temp);
}
console.log(numbers)

function checkMines(j,i) { 
  return mines[j][i];
}
function click(matrix, j,i) { 
    board = matrix;
    if (checkMines(j,i)) {
      board[j][i].style.backgroundImage = "url('image.png')";
      board[j][i].style.backgroundSize = "contain";
    } else if (numbers[j][i] > 0) {
      board[j][i].innerHTML = numbers[j][i];
    } else if (board[j][i].style.backgroundColor != "yellow") {
      for (let x = 0; x<8; x++) {
        temp = [[j,i-1],[j,i+1],[j-1,i-1],[j-1,i],[j-1,i+1],[j+1,i-1],[j+1,i],[j+1,i+1]];
        if (0 > temp[x][0] || temp[x][0] >= rows || 0 > temp[x][1] || temp[x][1] >= cols) {continue;}
        click(board, temp[x][0],temp[x][1]);
      }
    }
    board[j][i].style.backgroundColor = "yellow";
}
board = [];
for (let j = 0; j<rows; j++) {
  row = [];
for (let i = 0; i<cols;i++) {
  a = document.createElement("div");
  a.classList.add("square");
  a.style.top=`${10+40*j}px`;
  a.style.left=`${10+40*i}px`;
  document.body.appendChild(a);
  a.addEventListener("click", () => {click(board,j,i);});
  row.push(a);
}
board.push(row);
}
console.log(board);




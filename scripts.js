rows = 100;
cols = 100;
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
for (let j = 0; j<rows; j++) {
  row = [];
for (let i = 0; i<cols;i++) {
  a = document.createElement("div");
  a.classList.add("square");
  a.style.top=`${10+40*j}px`;
  a.style.left=`${10+40*i}px`;
  document.body.appendChild(a);
  a.addEventListener("click", () => {
    board[j][i].style.backgroundColor = "yellow";
    if (checkMines(j,i)) {
      board[j][i].style.backgroundImage = "url('image.png')";
      board[j][i].style.backgroundSize = "contain";
    } else {
      board[j][i].innerHTML = numbers[j][i];
    }
  });
  row.push(a);
}
board.push(row);
}
console.log(board);




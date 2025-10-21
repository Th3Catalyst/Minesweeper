rows = 10;
cols = 10;
mineNum = 30;


board = [];
let mines = [];
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
    if (mines[j][i]) {
      board[j][i].innerHTML = "boom";
    } else {
      board[j][i].innerHTML = "1";
    }
  });
  row.push(a);
}
board.push(row);
}
console.log(board);


for (let i = 0; i < 10; i++) {
  temp = [];
  for (let j = 0; j < 10; j++) {
    temp.append(False);
  }
  mines.append(temp);
}
  

for (let i = 0; i<mineNum; i += 0) {
  temp = (Math.random() * 9,Math.random() * 9);
  if (!mines[temp[0]][temp[1]]) {
    mines[temp[0][temp[1]] = True;
    i++;
  }
}

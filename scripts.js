board = [];
for (let j = 0; j<10; j++) {
  row = [];
for (let i = 0; i<10;i++) {
  a = document.createElement("div");
  a.classList.add("square");
  a.style.top=`${10+40*j}px`;
  a.style.left=`${10+40*i}px`;
  document.body.appendChild(a);
  a.addEventListener("click", () => {
    board[j][i].style.backgroundColor = "yellow";
    board[j][i].innerHTML = "1";
  });
  row.push(a);
}
board.push(row);
}
console.log(board);

for (let i = 0; i<20; i++) {
  
}

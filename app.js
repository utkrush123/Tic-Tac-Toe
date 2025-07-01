let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let cnt=0;
const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame=()=>{
    turnO=true;
    cnt=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    
  box.addEventListener("click", () => {
    
    if (turnO) {
      box.innerText = "O";
      box.classList.add("O");
      box.classList.remove("X");
      turnO = false;
    } else {
      box.innerText = "X";
      box.classList.add("X");
      box.classList.remove("O");
      turnO = true;
    }
    box.disabled = true;
    cnt++;
    let iswinner=checkWinner();
    if(cnt===9 && !iswinner){
        showDraw();
        
    }

  });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showDraw=()=>{
    msg.innerText = "It's A Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
        return true;
      }
    }
  }
};



newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

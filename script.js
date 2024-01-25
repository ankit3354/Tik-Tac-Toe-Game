const boxes = document.querySelectorAll("#box");
const mesBox = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const newGame = document.querySelector('#newGame');
const GameBoxes  = document.querySelector('.container');

let turnO = true; //player1 and player2

let winningChance = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 6, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Resetbtn=()=>{
  turnO = true;
  enabaleGame();
  mesBox.classList.add("hide");
}


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    //   flag true and false check like a bulb
    if (turnO) {
      box.innerHTML = "X";
      turnO = false;
    } else {
      box.innerHTML = "O";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const disabledBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabaleGame = () => {
  for (let box of boxes) {
    GameBoxes.style.display ='flex'; 
    box.disabled = false;
    box.innerHTML = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulation! ${winner}`;
  mesBox.classList.remove("hide");
  GameBoxes.style.display='none'; 
  disabledBox();
};

const checkwinner = () => {

  for (let patterns of winningChance) {
    // console.log( boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]]);
    let patr1Val = boxes[patterns[0]].innerText;
    let patr2Val = boxes[patterns[1]].innerText;
    let patr3Val = boxes[patterns[2]].innerText;

    if (patr1Val != "" && patr2Val != "" && patr3Val != "") {
      if (patr1Val === patr2Val && patr2Val === patr3Val) {
        showWinner(patr1Val);
      }
    }
  }
};


newGame.addEventListener('click', Resetbtn);


let boxes = document.querySelectorAll(".Box");
let resetBtn = document.querySelector("#ResetBtn");
let newGamebtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container ");
let msg= document.querySelector("#msg");

let turn0= true ;
let gameOver= false;
const winPatterns= [
    [0, 1, 2],
    [0,3,6],
    [0,4,8],
    [1,4,7], 
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],


];

boxes.forEach((Box) =>{
    Box.addEventListener("click", ()=>{
        if(gameOver===true) return ;
        console.log("box was clicked");
    if(turn0===true){
     Box.innerText = "O";
     turn0=false ; 
    }else{
        Box.innerText= "X"
        turn0=true;
    }
    Box.disabled = true;
    checkwinner();
});
});
const showWinner = (Winner)=>{
  msg.innerText= `Congratulations , Winner is ${Winner}`
  msgContainer.classList.remove("hide");
  gameOver = true ;
  boxes.forEach((Box) => {
    Box.disabled=true;
  })
}
const checkwinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]];
    let pos2 = boxes[pattern[1]];
    let pos3 = boxes[pattern[2]];

    let pos1Val = pos1.innerText;
    let pos2Val = pos2.innerText;
    let pos3Val = pos3.innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val);

        // ✅ Highlight winning boxes
        pos1.classList.add("winner");
        pos2.classList.add("winner");
        pos3.classList.add("winner");

        showWinner(pos1Val);
      }
    }
  }
};

const resetGame = () => {
    turn0 = true;
    gameOver= false;
    msgContainer.classList.add("hide");
    boxes.forEach((Box) =>{

        Box.innerText= "";
        Box.disabled= false;
         Box.classList.remove("winner"); // ✅ remove highlight

    });

};
resetBtn.addEventListener("click", resetGame);
newGamebtn.addEventListener("click", resetGame);

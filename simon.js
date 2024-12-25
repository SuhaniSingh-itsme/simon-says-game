// let gameSeq=[];
// let userSeq=[];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function() {
//     if(started == false) {
//         console.log("game has started");
//         started = true;

//         levelUp();
//     }
// });


// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function() {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function userFlash(btn) {
//     btn.classList.add("userFlash");
//     setTimeout(function() {
//         btn.classList.remove("userFlash");
//     }, 250);
// }

// function levelUp() {
//     level++;
//     h2.innerText = `Level ${level}`;

//     let randIdx = Math.floor(Math.random() * 4);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     console.log(randIdx);
//     console.log(randColor);
//     console.log(randBtn);
//     gameSeq.push(randColor);
//     gameFlash(randBtn); 
// }

// function sequence() {
//     let idx = level - 1;
//      if(userSeq[userSeq.length-1] == gameSeq[userSeq.length-1]){
//           console.log("same value");
//      } else {
//          h2.innerText = `game over! Press any key to start the game`;
//      }
//   }

// if(userSeq[userSeq.length - 1]==gameSeq[userSeq.length - 1]){
//     if(userSeq.length==gameSeq.length){
//         userSeq=[];
//         setTimeout(levelUp,600);
//     }else{
//     console.log("wrong");
//     resetGame();
// }

// userSeq=[];
// gameSeq=[]
// started=false;
// level=0;
// h2.innerText = "Press any key to start the game";

// function btnPress(event) {
//     let btn = this;
//     userFlash(btn);
//     console.log(event);
//     userSeq.push(event.target.id);
//     sequence();
    
// }

// let allBtns = document.querySelectorAll(".btn");
// for(btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }

// }



let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML =
      "Game Over! Your score was " + `${level}` + " Press any key to start";
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
 
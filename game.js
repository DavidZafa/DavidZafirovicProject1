window.onload = function(){
const buttonStart = document.querySelector('.start')
const buttonMJ = document.querySelector('.mj')
const buttonBron = document.querySelector('.bron')
const buttonKobe = document.querySelector('.kobe')
const buttonNext = document.querySelector('.next')
var score = 0

var quiz =
             ["Which player has more scoring titles?",
              "Which player averaged more PPG in the Playoffs?",
              "Which player made more All-NBA First Teams?",
              "Which player played in more All-Star Games?",
              "Which player averaged more assists per game?",
              "Which player never played with Shaquille O' Neil?",
              "Which player starred in Space Jam?",
              "Which player played more regular season games?"]

function runGame (){

var rand = quiz[Math.floor(Math.random() * quiz.length)];
buttonStart.addEventListener('click', function(event) {
  document.getElementById('questiontime').innerText= rand;
})


buttonMJ.addEventListener('click', function(event) {
  if(rand = quiz[0], quiz[1], quiz[5]){
score = score + 1
alert("correct" + " " + score)


  }

})

buttonBron.addEventListener('click', function(event) {
  if(rand = quiz[4], quiz[6], quiz[7]){
score = score + 1
alert ("correct" + " " + score)

  }

})

buttonKobe.addEventListener('click', function(event) {
  if(rand = quiz[2], quiz[3]){
score = score + 1
alert("correct" + " " + score)

  }

})

buttonNext.addEventListener('click', function(event) {
  document.getElementById('questiontime').innerText = rand;
})

}
return runGame()


// let score = 0
// let ballEl = document.querySelector('.js-ball')
//
// let scoreEl = document.querySelector('.js-score')
//
//
// ballEl.addEventListener('click', () => {
//   score += 10
//
//   if (score <= 100) {
//     scoreEl.innerHTML = score
//   } else {
//     declareWinner()
//   }
//
//   function declareWinner () {
//     alert("Winner!")
//   }
//  })


// MJ
// MJ
// KOBE
// KOBE
// BRON
// MJ
// BRON
// BRON

}

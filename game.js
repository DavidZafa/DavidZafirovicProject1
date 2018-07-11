const buttonStart = document.querySelector('.start')
const buttonMJ = document.querySelector('.mj')
const buttonBron = document.querySelector('.bron')
const buttonKobe = document.querySelector('.kobe')
buttonStart.addEventListener('click', handleClickEvent)
buttonMJ.addEventListener('click', handleClickEvent)
buttonBron.addEventListener('click', handleClickEvent)
buttonKobe.addEventListener('click', handleClickEvent)

var quiz = [{
  "question": ["Which player has more scoring titles?",
              "Which player averaged more PPG in the Playoffs?",
              "Which player made more All-NBA First Teams?",
              "Which player played in more All-Star Games?",
              "Which player averaged more assists per game?",
              "Which player never played with Shaquille O' Neil?",
              "Which player starred in Space Jam?",
              "Which player played more regular season games?"]
  "choices": [buttonMJ, buttonBron, ButtonKobe]
}]

document.getElementById("questiontime").innerHTML = "you have no products in your shopping basket.";

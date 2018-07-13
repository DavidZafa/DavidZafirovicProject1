window.onload = function(){


//All the questions for the quiz
var quiz = [{
  question: "Which player has more scoring titles?",
  choices: ["Michael Jordan", "Kobe Bryant", "Lebron James"],
  answer : 0
},
  {
    question: "Which player averaged more PPG in the Playoffs?",
    choices: ["Michael Jordan", "Kobe Bryant", "Lebron James"],
    answer : 0
  },
  {
    question: "Which player made more All-NBA First Teams?",
    choices: ["Michael Jordan", "Kobe Bryant", "Lebron James"],
    answer : 2
  },
  {
    question: "Which player played in more All-Star Games?",
    choices: ["Michael Jordan", "Kobe Bryant", "Lebron James"],
    answer : 1
  },
  {
    question: "Which player averaged more assists per game?",
    choices: ["Michael Jordan", "Kobe Bryant", "Lebron James"],
    answer : 2
  },
  {
    question: "Which player never played with Shaquille O' Neil?",
    choices: ["Michael Jordan", "Kobe Bryant", "Lebron James"],
    answer : 0
  },
  {
  question: "Which player starred in Space Jam?",
  choices: ["Michael Jordan", "Kobe Bryant", "Lebron James"],
  answer : 0
},
{
question: "Which player played more regular season games?",
choices: ["Michael Jordan", "Kobe Bryant", "Lebron James"],
answer : 1
}]

var current = 0
var score = 0



var Mike = document.getElementById('MJ')
var Bron = document.getElementById('Bron')
var Kobe = document.getElementById('Kobe')
var Next = document.getElementById('question')



var giveQuestion = function(){

  Next.innerHTML=quiz[current].question
  Mike.innerHTML=quiz[current].choices[0]
  Bron.innerHTML=quiz[current].choices[1]
  Kobe.innerHTML=quiz[current].choices[2]

}

//Function to display one question after the next
giveQuestion()
var clickedAnswer = null
var answers = document.getElementsByClassName("options")



//Get the value of the checked radio button
//Check it it matches the correct answer


var getChecked = function() {
  for(var i = 0; i < answers.length; i++){
    if(answers[i].checked){
      clickedAnswer = answers[i].value
      }
  }
  if(clickedAnswer==quiz[current].answer && score < 8){
    score++


  }

}
//Uncheck the radio button
var unchecked = function() {
    var inputs = document.getElementsByTagName("input");
    for(var i = inputs.length-1;i>=0;i--){
    if(inputs[i].getAttribute("type")==="radio"){
        inputs[i].checked=false
        }
    }
};

//Funciton to add and implement a reset button


    var reset = document.createElement("button")
    reset.innerHTML = "Reset"
    quizgame.appendChild(reset)
    reset.addEventListener("click", function(){
        current=0;
        holder=0;
        score=0;
        giveQuestion()
        choices.style.display = "flex";

        })

//End the quiz
var quizOver = function(){
    if(current === quiz.length-1){
        question.innerHTML="Your score is " + score

    }
    else{
        current++
        giveQuestion()
    }
};

//Makes the next button work

next.addEventListener("click", function(){
    getChecked()
    quizOver()
    unchecked()


})

}

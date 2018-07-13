# DavidZafirovicProject1

Welcome to my first project for WDI 24 at GA!

This project is a simple trivia game that tests your knowledge of 3 of the NBA's greatest of all time; Michael Jordan, Lebron James, and Kobe Bryant!


# Rules:

* Select the answer you think is correct
* For each correct answer, you receive 1 point
* For each wrong answer, you get nothing
* After completing all 8 questions, see your score.


# Code:
This project used HTML, Javascript, and CSS.

The code itself wasn't too difficult to implement. The hardest part was getting the radio buttons to unclick, but I was able to do that like so:
```
var unchecked = function() {
    var inputs = document.getElementsByTagName("input");
    for(var i = inputs.length-1;i>=0;i--){
    if(inputs[i].getAttribute("type")==="radio"){
        inputs[i].checked=false
        }
    }
};
```

# Thoughts

As far as working on the project goes, I went back to the drawing board a couple of times. For some ideas that I had, I realized I didn't have the time to teach myself some of the things I'd need to implement such ideas. Therefore, I stuck to what I know and delivered a solid, straightforward project.

Goal setting was a big thing for me this project. My bronze goal was to get a working, score keeping trivia game. Silver goal was to add a reset button and some sound effects. Gold goal was high-score tracking and being able to change the pictures presented on the page, making them differ per question.
Achieving two of three goals isn't bad, and I definitely plan on going back and hitting that ceiling when I learn the necessary skills.

//Get button element and add event listeners
//Creating return Element button, also returns elements as Array which can be iterated

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) { //This code creates an alert box to tell user what they just clicked
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);

            }
        }) 

        
    }
                                                             
})



function rungame() {
    //Create 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer() {

}

function calculateCorrectAnswer () {

}

function incrementScore() {

}

function incrementWrongAnswers() {

}

function displayScienceQuestion() {

}

function displayTechnologyQuestion() {
 
}

function displayEngineerQuestion() {

}

function displayMathQuestion() {

}
//Get button element and add event listeners
//Creating return Element button, also returns elements as Array which can be iterated
const questions = [
    {
        'question': 'What is the Mitchondria?',
        'option1': 'Powerhouse of the celll',
        'option2': 'Option 2',
        'option3': 'Option 3',
        'option4': 'Option 4',
        'answer': 'option1'
    },
    {
        'question': 'Question 2',
        'option1': 'Option 1',
        'option2': 'Option 2',
        'option3': 'Option 3',
        'option4': 'Option 4',
        'answer': 'option3'
    },
    {
        'question': 'Question 3',
        'option1': 'Option 1',
        'option2': 'Option 2',
        'option3': 'Option 3',
        'option4': 'Option 4',
        'answer': 'option2'
    },
    {
        'question': 'Question 4',
        'option1': 'Option 1',
        'option2': 'Option 2',
        'option3': 'Option 3',
        'option4': 'Option 4',
        'answer': 'option2'
    },     
    
];

let questionIndex = 0;

function displayScienceQuestion(index) {
    const question = questions[index];
    document.getElementById('question').textContent = question.question;
    document.getElementById('option-1').textContent = question.option1;
    document.getElementById('option-2').textContent = question.option2;
    document.getElementById('option-3').textContent = question.option3;
    document.getElementById('option-4').textContent = question.option4;
}

function checkAnswer(buttonIndex) {
    const answer = questions[questionIndex].answer;
    console.info('Button clicked');
    console.info(buttonIndex);
    console.info('Answer');
    console.info(answer);
    if (answer === buttonIndex){
        console.info('Good');
    }else{
        console.info('Bad');
    }
    questionIndex = questionIndex + 1;
    runGame('science');

}


/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {
    const questionLength = questions.length;
    if (questionIndex < questionLength){
        displayScienceQuestion(questionIndex);
    }
    //Create 2 random numbers between 1 and 25
    // let num1 = Math.floor(Math.random() * 25) + 1;
    // let num2 = Math.floor(Math.random() * 25) + 1;

}

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) { //This code creates an alert box to tell user what they just clicked
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                const buttonIndex = this.getAttribute("data-index");
                checkAnswer(buttonIndex)

            }
        }) 

        
    }
    
    runGame("science");

})





function calculateCorrectAnswer () {

}

function incrementScore() {

}

function incrementWrongAnswers() {

}



function displayTechnologyQuestion() {
 
}

function displayEngineerQuestion() {

}

function displayMathQuestion() {

}
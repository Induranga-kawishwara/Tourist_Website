const start = document.querySelector(".start button");
const description = document.querySelector(".description");
const exit_button = document.querySelector(".buttons .exit");
const continue_button = document.querySelector(".buttons .continue");
const quizBox = document.querySelector(".quizBox");
const timeCount = document.querySelector(".timer .seconds");
const submit = document.querySelector(".quizBox .submit");
const resultBox = document.querySelector(".resultBox");
const results = document.querySelector(".resultBox .buttons .results");
const quit = document.querySelector(".resultBox .buttons .quit");
const answerBox = document.querySelector(".answerBox");
const answers = document.querySelector(".answerBox .answers");
const finalQuit = document.querySelector(".answerBox .buttons .quit");



    //Start button function

start.onclick = ()=>{
    description.classList.add("activeInfo")         //display the quiz description
    start.classList.add("visibility")               //hides the start button
    
}

    //Quit button function 

exit_button.onclick = ()=>{
    description.classList.remove("activeInfo")      //hide the quiz description
    start.classList.remove("visibility")            // reverse the hiding of the start button
}

    //Continue button function 
    
continue_button.onclick = ()=>{
    description.classList.remove("activeInfo")      //hide the quiz description
    quizBox.classList.add("activeQuiz")             //displays the quiz
    startTimer(60);

}

    //Submit button function

submit.onclick = ()=>{
    description.classList.remove("activeInfo")
    quizBox.classList.remove("activeQuiz")
    resultBox.classList.add("activeResult")  
    timeStop();
    getRadioValues();
}

    //Quit button function

quit.onclick = () =>{
    window.location.reload();
}


    //Show the answers function

results.onclick = () => {
    
    answerBox.classList.add("activeAnswer");
    resultBox.classList.remove("activeResult");
    

}

finalQuit.onclick = () => {
    window.location.reload();
}



    // Function to start the timer

var counter = 0;

function startTimer(time) {

    counter = setInterval(timer, 1000);

    function timer() {

        timeCount.textContent = time + "s";

        if (time == 0) {

            timeStop();
            description.classList.remove("activeInfo")
            quizBox.classList.remove("activeQuiz")
            resultBox.classList.add("activeResult")
            getRadioValues(); 
        }

        time--; 

        
    }

    
    
}

    // Stop the timer when submitted

function timeStop() { 

    clearInterval(counter);
    
}

    //getting the user input




const correct = [];
const scores = [];
const userInput = [];
const correctQuestion = [];
var score = 0;

function getRadioValues() {

    var amountCorrect = 0;
    var amountWrong = 0;
    
    

    for (var i = 1; i <= 45; i++) {

        var radios = document.getElementsByName('question'+i);

        for(var j = 0; j < radios.length; j++) {

            var radio = radios[j];

        

            if(radio.value == "2" && radio.checked) {
                correct[correct.length] = radio.name 
                userInput[userInput.length] = radio.value
                correctQuestion[correctQuestion.length] = radio.name
                amountCorrect++;
            }
            else if(radio.value == "-1" && radio.checked){
                userInput[userInput.length] = radio.value
                correctQuestion[correctQuestion.length] = radio.name
                amountWrong++;
            }            

            if(radio.checked) {
                scores[scores.length] = Number(radio.value) 
            }
           
        }

         
    }   
    
    console.log("Correct Responses: " + amountCorrect);
    console.log("Wrong Responses: " + amountWrong);
    
    console.log(scores); 
    
    

        // getting the total score

        for (var i=0; i<scores.length; i++) {       
               
            score += scores[i];
                        
        }    
        
        console.log(score);  
        
    

    let main = document.getElementById("main");
    
    
    
    if (score >= 12 ) {

        main.classList.add("new_main_1");

    } else if ((score <= 11) && (score >= 6)) {

        main.classList.add("new_main_2");
        
    } else if (score <= 5) {

        main.classList.add("new_main_3");

    }


    document.getElementById("inner_score").innerHTML=(score);

    document.getElementById("inner_correct").innerHTML="Correct answers:  " + amountCorrect;
    document.getElementById("inner_incorrect").innerHTML="Wrong answers:  " + amountWrong;
    
    if ((scores.length) !=  10) {

        let unanswered = 10 - (scores.length);
        document.getElementById("notAnswered").innerHTML="Not Answered: " + unanswered;

    }
 

}
    





    



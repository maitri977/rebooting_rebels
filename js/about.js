// QUIZ
//list of questions for the quiz
let questions = [
  {
      question: "When did the founders created Wags & Whiskers?",
      optionA: "November 2012",
      optionB: "July 2009",
      optionC: "December 2010",
      optionD: "March 2014",
      correctOption: "optionC"
  },
  {
      question: "Where was the shelter founded?",
      optionA: "North York",
      optionB: "Etobicoke",
      optionC: "Scarborough",
      optionD: "Eglinton",
      correctOption: "optionB"
  },
  {
      question: "Who were the founders?",
      optionA: "Stephanie Liverati & Steven Kim",
      optionB: "Luis Estrada & Shalimar Sy",
      optionC: "Stephanie Kim & Steven Liverati",
      optionD: "John Smith & Jane Andrews",
      correctOption: "optionA"
  }
]

//Initialize values
let wrongAttempt = 0; //marks how many wrong answers a player gets
let playerScore = 0; //holds the player score
let indexNumber = 0; //marks question numbers

//displays the next question and choices in the array to dom on click
nextQuestion = (index) => {
    let currentQuestion = questions[index]
    //end game if indexNumber is 3 and up
    if (indexNumber >= 3) {
      handleEndGame();
    } else {
      document.getElementById("display-question").innerHTML = currentQuestion.question;
      document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
      document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
      document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
      document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    }
}

//Initialize first question
nextQuestion(0);

//function to check if answer is right or wrong
checkForAnswer = () => {
    let currentQuestion = questions[indexNumber]; //gets current question 
    let currentQuestionAnswer = currentQuestion.correctOption; //gets current question's correct answer
    let options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null;

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //check to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //if correct answer, add player score
            indexNumber++ //add to display next question
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            let wrongLabelId = option.labels[0].id
            //will indicate if answer is right or wrong based on color
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            //will show the correct answer if you picked the wrong one
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 if wrong answer, to tally at the end
            indexNumber++
        }
    })
}

//sets options background back to null after display the correct corresponding colors
resetOptionBackground = () => {
    let options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

//unchecking all radio buttons for next question
unCheckRadioButtons = () => {
    let options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

//move to next question when called
handleNextQuestion = () => {
    checkForAnswer(); //run to check whether answer is correct or not
    unCheckRadioButtons(); //unchecking all radio buttons for next question
    //delays next question displaying for a second just for some effects so questions can flow smoothly
    setTimeout(() => {
        if (indexNumber <= 3) {
        //displays next corresponding question based on indexNumber
            nextQuestion(indexNumber)
        }
        else if (indexNumber == 3) {
            handleEndGame()//ends game if index number greater than or 3 meaning we're already at the last question
        }
        resetOptionBackground();
    }, 1000);
}

//end game when all questions have been answered and evaluate the score
handleEndGame = () => {
  
    let remark = null;
    let remarkColor = null;

    // display meanings of each score
    if (playerScore <= 1) {
        remark = "Bad"
        remarkColor = "red"
    }
    else if (playerScore == 2) {
        remark = "Average"
        remarkColor = "orange"
    }
    else if (playerScore == 3) {
        remark = "Excellent!"
        remarkColor = "green"
    }
    let playerGrade = (playerScore / 3) * 100;

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
}

//closes score modal, resets game and variables
closeScoreModal = () => {
    document.getElementById('score-modal').style.display = "none";
    document.getElementById("display-question").innerHTML = "Thanks for playing!";
    document.querySelector(".game-options-container").style.display = "none";
    document.querySelector(".next-button-container").style.display = "none";
    document.querySelector(".game-quiz-container").style.height = "30vh";
}
//END OF QUIZ

//SCROLL TO TOP
let scrollTop = document.getElementById("scrollTop");

// When the user scrolls down from the top of the document, displays the button
window.onscroll = function() {scrollFunction()};

scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
topFunction = () => {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
// END OF SCROLL TO TOP
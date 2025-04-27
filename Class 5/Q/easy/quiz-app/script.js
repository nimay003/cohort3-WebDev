import { quizData } from './data.js';

const questions = quizData;

const questionElement = document.getElementById("question");
const nextButton = document.getElementById("nextBtn");

let currentQIndex = 0;
let score = 0;

function startQuiz() {
    currentQIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    nextButton.style.display = "none";

    const answerBtnContainer = document.getElementById("answerBtn");
    answerBtnContainer.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        const btn = document.createElement("button");
        btn.classList.add("btn");
        answerBtnContainer.appendChild(btn);
    }

    showQuestion();
}


function showQuestion(){
    let currentQuestion = questions[currentQIndex];
    let questionNo = currentQIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    const answerButtons = document.querySelectorAll(".btn");
    const options = ['a', 'b', 'c', 'd'];

    answerButtons.forEach((btn, index) => {
    btn.innerText = currentQuestion[options[index]];
    btn.style.backgroundColor = "#fff";
    btn.style.color = "#000";
    btn.disabled = false;
    btn.onclick = null;
    btn.onclick = () => selectAnswer(options[index], btn);
});


    const numOfQuestions = document.getElementById("num");
    numOfQuestions.innerHTML = currentQIndex + 1;
}

function selectAnswer(selectedOption, button) {
    const correctAnswer = questions[currentQIndex].correct;

    if (selectedOption === correctAnswer) {
        button.style.backgroundColor = "green";
        score++;
    } else {
        button.style.backgroundColor = "red";
        highlightCorrect(correctAnswer);
    }

    const allBtns = document.querySelectorAll(".btn");
    allBtns.forEach(btn => btn.disabled = true);
    nextButton.style.display = "block";
}

function highlightCorrect(correctOption) {
    const answerButtons = document.querySelectorAll(".btn");
    const options = ['a', 'b', 'c', 'd'];

    answerButtons.forEach((btn, index) => {
        if (options[index] === correctOption) {
            btn.style.backgroundColor = "green";
        }
    });
}

nextButton.addEventListener("click", () => {
    currentQIndex++;

    if (currentQIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    document.getElementById("answerBtn").innerHTML = "";
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
    nextButton.onclick = null;
    nextButton.addEventListener("click", startQuiz, { once: true });
}



startQuiz();
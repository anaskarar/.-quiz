// const questions = [
//     {
//         question: "what is the capital of Pakistan?" ,
//         options: ["Karachi" , "Lahore", "Islamabad"] ,
//         correct: 2,
//     },
//     {
//         question: "what is 2+2?" ,
//         options: ["3" , "4", "5" , "6"] ,
//         correct: 1,
//     },
//     {
//         question: "which language runs in a browser?" ,
//         options: ["Python" , "Java", "Javascript" , "C++"] ,
//         correct: 2,
//     }
// ]

// let currentQuestion = 0;
// let score = 0;

// const questionE1 = document.getElementById("question");
// const optionsE1 = document.getElementById("options");
// const nextBtn = document.getElementById("next-btn");
// const scoreBox = document.getElementById("score-box");

// // funstion to load a question
// function loadQuestion() {
//     const questionData =  questions[currentQuestion],
//     questionE1.textcontent =  questionData.question;
//     optionsE1.innerHTML = "" ;
//     questionData.options.forEach((option, index) => {
//         const button = document.createElement("button");
//         button.textContent = option;
//         button.onclick = () => checkAnswer(index) ;
//         optionsE1.appendChild(button)
//     } )
// }

// function checkAnswer(selected){
//     const correctAnswer = questions[currentQuestion].correct;
//     if (selected === correctAnswer) {
//         score ++;
//         alert("Correct");
//     } else {
//         alert("wrong Answer")
//     }
//     nextBtn.style.display = "block"
// }


// nextBtn.addEventListener("click", () => [
//     currentQuestion++ ;
//     if (currentQuestion < question.length) {
//         loadQuestion();
//         nextBtn.style.display = "none"
//     } else {
//         questionE1.textContent = "Quiz Finished";
//         optionsE1.innerHTML = "";
//         nextBtn.style.display = "none";
//         scoreBox.textContent = `Your final score is : ${score} / ${questions.length};`
//     }
// ])

// loadQuestion();

const questions = [
    {
        question: "What is the capital of Pakistan?",
        options: ["Karachi", "Lahore", "Islamabad"],
        correct: 2,
    },
    {
        question: "What is 2+2?",
        options: ["3", "4", "5", "6"],
        correct: 1,
    },
    {
        question: "Which language runs in a browser?",
        options: ["Python", "Java", "Javascript", "C++"],
        correct: 2,
    }
];

let currentQuestion = 0;
let score = 0;

const questionE1 = document.getElementById("question");
const optionsE1 = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");

// Function to load a question
function loadQuestion() {
    const questionData = questions[currentQuestion];
    questionE1.textContent = questionData.question;
    optionsE1.innerHTML = "";
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsE1.appendChild(button);
    });
}

function checkAnswer(selected) {
    const correctAnswer = questions[currentQuestion].correct;
    if (selected === correctAnswer) {
        score++;
        alert("Correct");
    } else {
        alert("Wrong Answer");
    }
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        nextBtn.style.display = "none";
    } else {
        questionE1.textContent = "Quiz Finished";
        optionsE1.innerHTML = "";
        nextBtn.style.display = "none";
        scoreBox.textContent = `Your final score is: ${score} / ${questions.length}`;
    }
});

// Load the first question
loadQuestion();

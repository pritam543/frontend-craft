const quizData = [
    {
        question: "Which keyword is used to declare a variable in JS?",
        options: ["var", "let", "const", "All of the above"],
        correct: 3
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Marking Language", "Hyper Tabular Markup Language", "None"],
        correct: 0
    },
    {
        question: "Which CSS property changes text color?",
        options: ["text-style", "color", "font-color", "background-color"],
        correct: 1
    }
];

let currentIdx = 0;
let score = 0;
let timeLeft = 15;
let timer;

const qEl = document.getElementById("question");
const btns = document.querySelectorAll(".btn");
const timeEl = document.getElementById("time");

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 15;
    timeEl.textContent = timeLeft;
    
    timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if(timeLeft <= 0) {
            nextQuestion();
        }
    }, 1000);

    const q = quizData[currentIdx];
    qEl.textContent = `${currentIdx + 1}. ${q.question}`;
    btns.forEach((btn, index) => {
        btn.textContent = q.options[index];
    });
}

function selectOption(index) {
    if(index === quizData[currentIdx].correct) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentIdx++;
    if(currentIdx < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timer);
    document.getElementById("quiz-body").classList.add("hidden");
    document.getElementById("timer").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    document.getElementById("score").textContent = score;
    document.getElementById("total").textContent = quizData.length;
}

function restartQuiz() {
    currentIdx = 0;
    score = 0;
    document.getElementById("quiz-body").classList.remove("hidden");
    document.getElementById("timer").classList.remove("hidden");
    document.getElementById("result-screen").classList.add("hidden");
    loadQuestion();
}

loadQuestion();
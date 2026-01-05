let allQuestions = [
    {
        question: "Which of the following is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of above"],
        answer: 3
    },
    {
        question: "What will typeof null return?",
        options: ["null", "object", "undefiend", "number"],
        answer: 1
    },
    {
        question: "Which symbol is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: 2
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.convet()", "JSON.toObject()"],
        answer: 1
    },
    {
        question: "Which keyword is used to define a function?",
        options: ["function", "def", "fun", "method"],
        answer: 0
    }
];

const question = document.getElementById('question');
const options = document.querySelectorAll('span');
const nextBtn = document.getElementById('nextBtn');



let currentIndex = 0
function loadQuestion() {
    const currentQuestion = allQuestions[currentIndex];

    question.textContent = currentQuestion.question;

    options.forEach((span, index) => {
        span.textContent = currentQuestion.options[index];
    })

    currentIndex++;
}

nextBtn.addEventListener('click', () => {

    if (currentIndex === 4) {
        nextBtn.textContent = "Submit";
        nextBtn.style.backgroundColor = "green";
    }

    if (currentIndex < allQuestions.length) {
        loadQuestion();
    } else {
        alert("Quize Submitted...");
    }
});

loadQuestion();
const urlParams = new URLSearchParams(window.location.search);
const quizId = parseInt(urlParams.get("quizId"));

const storedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
const currentQuiz = storedQuizzes.find(q => q.id === quizId);

const quizForm = document.getElementById("quizForm");
const quizTitle = document.getElementById("quizTitle");
const scoreDisplay = document.getElementById("scoreDisplay");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentQuiz) {
    quizTitle.textContent = "Quiz not found.";
    document.querySelector(".submit-btn").style.display = "none";
} else {
    quizTitle.textContent = currentQuiz.title;

    currentQuiz.questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";

        const qTitle = document.createElement("h4");
        qTitle.textContent = `${index + 1} . ${q.question}`;

        const optionsDiv = document.createElement("div");
        optionsDiv.className = "options";

        q.options.forEach((option, optIndex) => {
            const input = document.createElement("input");
            const label = document.createElement("label");
            const inputId = `q${index}_opt${optIndex}`;

            input.type = "radio";
            input.name = `q${index}`;
            input.value = option;
            input.id = inputId;

            label.htmlFor = inputId;
            label.textContent = option;

            optionsDiv.appendChild(input);
            optionsDiv.appendChild(label);
        });

        questionDiv.appendChild(qTitle);
        questionDiv.appendChild(optionsDiv);
        quizForm.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;

    currentQuiz.questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    scoreDisplay.textContent = `You scored ${score} out of ${currentQuiz.questions.length}`;
    saveUserScore(score);
}

function saveUserScore(score) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map(user => {
        if (user.email === currentUser.email) {
            if (!user.scores) user.scores = {};
            user.scores[currentQuiz.title] = score;
        }
        return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
}

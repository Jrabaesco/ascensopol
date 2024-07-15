document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginDiv = document.getElementById('login');
    const quizSelectionDiv = document.getElementById('quiz-selection');
    const quizDiv = document.getElementById('quiz');
    const quizContainer = document.querySelector('.quiz-container');
    const questionContainer = document.getElementById('question-container');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const finishButton = document.getElementById('finishButton');
    const resetButton = document.getElementById('resetButton');
    const backButton = document.getElementById('backButton');
    const correctCountElement = document.getElementById('correct-count');
    const incorrectCountElement = document.getElementById('incorrect-count');
    const topicTitleElement = document.getElementById('topic-title');

    let quizzes;
    let currentQuiz;
    let currentQuestionIndex;
    let correctCount;
    let incorrectCount;

    // Fetch quizzes from the JSON file
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            quizzes = data;
            generateQuizList();
        });

    backButton.addEventListener('click', () => {
        quizDiv.style.display = 'none';
        quizSelectionDiv.style.display = 'block';
    });

    prevButton.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < currentQuiz.questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showCompletionMessage();
        }
    });

    finishButton.addEventListener('click', () => {
        showCompletionMessage();
    });

    resetButton.addEventListener('click', () => {
        startQuiz(currentQuizIndex);
    });

    function generateQuizList() {
        quizzes.forEach((quiz, index) => {
            const quizElement = document.createElement('div');
            quizElement.textContent = quiz.title;
            quizElement.className = 'quiz-item';
            quizElement.addEventListener('click', () => {
                startQuiz(index);
            });
            quizContainer.appendChild(quizElement);
        });
    }

    let currentQuizIndex;
    function startQuiz(index) {
        currentQuizIndex = index;
        quizSelectionDiv.style.display = 'none';
        quizDiv.style.display = 'block';
        currentQuiz = quizzes[index];
        topicTitleElement.textContent = currentQuiz.title; // Actualizar el título del tema
        currentQuestionIndex = 0;
        correctCount = 0;
        incorrectCount = 0;
        updateScoreboard();
        showQuestion();
    }

    function showQuestion() {
        questionContainer.innerHTML = '';
        const question = currentQuiz.questions[currentQuestionIndex];
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.textContent = question.question;
        shuffleArray(question.options); // Keep shuffling options

        question.options.forEach((option) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option.text;
            optionElement.addEventListener('click', () => {
                if (option.correct) {
                    optionElement.classList.add('correct');
                    correctCount++;
                } else {
                    optionElement.classList.add('incorrect');
                    incorrectCount++;
                    // Pintar la respuesta correcta de verde
                    const correctOptionElement = questionElement.querySelector('.option[data-correct="true"]');
                    correctOptionElement.classList.add('correct');
                }
                updateScoreboard();
            });
            // Agregar atributo data-correct a las opciones
            optionElement.setAttribute('data-correct', option.correct);
            questionElement.appendChild(optionElement);
        });
        questionContainer.appendChild(questionElement);
    }

    function updateScoreboard() {
        correctCountElement.textContent = correctCount;
        incorrectCountElement.textContent = incorrectCount;
    }

    function showCompletionMessage() {
        alert(`Has completado el cuestionario. 
Correctas: ${correctCount} 
Incorrectas: ${incorrectCount} 
Total de preguntas: ${currentQuiz.questions.length}`);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});

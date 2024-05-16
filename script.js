let correctAnswer;
let correctCount = 0;
const goalCount = 5;

// Genera una operación matemática aleatoria
function generateMathProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = ['+', '-'][Math.floor(Math.random() * 2)];

    const problem = `${num1} ${operator} ${num2}`;
    document.getElementById('math-problem').textContent = problem;
    correctAnswer = evaluateProblem(num1, num2, operator);
}

// Evalúa la operación matemática
function evaluateProblem(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
    }
}

// Verifica la respuesta del usuario
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);

    if (userAnswer === correctAnswer) {
        correctCount++;
        document.getElementById('result').textContent = "¡Correcto!";
        document.getElementById('correct-count').textContent = `Respuestas correctas: ${correctCount}/5`;
        if (correctCount >= goalCount) {
            document.getElementById('reward-image').style.display = 'block';
            setTimeout(() => {
                document.getElementById('reward-image').style.display = 'none';
                correctCount = 0;
                document.getElementById('correct-count').textContent = `Respuestas correctas: ${correctCount}`;
                document.getElementById('result').textContent = "";
                generateMathProblem();
                document.getElementById('answer').value = "";
                document.getElementById('answer').focus();
            }, 3000); // La imagen se muestra durante 3 segundos
        } else {
            setTimeout(() => {
                document.getElementById('result').textContent = "";
                generateMathProblem();
                document.getElementById('answer').value = "";
                document.getElementById('answer').focus();
            }, 1000); // Espera 1 segundo antes de generar una nueva operación
        }
    } else {
        document.getElementById('result').textContent = "Inténtalo de nuevo.";
    }
}

// Verifica la respuesta cuando se presiona Enter
function checkEnter(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
}

// Inicializa la primera operación
window.onload = generateMathProblem;

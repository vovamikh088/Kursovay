function startGame1() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Загаданное число:", targetNumber);

    while (true) {
        let guess = prompt("Угадай число от 1 до 100.");
        guess = Number(guess);

        if (isNaN(guess)) {
            alert("Некорректный ввод. Попробуй ещё раз.");
            continue;
        }

        if (guess === targetNumber) {
            alert("Поздравляю, ты угадал число!");
            break;
        } else if (guess < targetNumber) {
            alert("Число меньше загаданного. Попробуй ещё раз.");
        } else {
            alert("Число больше загаданного. Попробуй ещё раз.");
        }
    }
}

function startGame2() {
    const operations = ['+', '-', '*', '/'];

    while (true) {
        const num1 = Math.floor(Math.random() * 20) + 1;
        const num2 = Math.floor(Math.random() * 20) + 1;
        const operationIndex = Math.floor(Math.random() * operations.length);
        const operation = operations[operationIndex];
        let question;
        let correctAnswer;

        if (operation === '+') {
            question = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
        }
        else if (operation === '-') {
            question = `${Math.max(num1, num2)} - ${Math.min(num1, num2)}`;
            correctAnswer = Math.max(num1, num2) - Math.min(num1, num2);
        }
        else if (operation === '*') {
            question = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
        }
        else if (operation === '/') {
            correctAnswer = Math.floor(Math.random() * 10) + 1;
            num1 = correctAnswer * num2;
            question = `${num1} / ${num2}`;
        }
        let userAnswer = prompt(`Решите задачу: ${question} = ?`);

        if (userAnswer === null) {
            alert("Игра завершена.");
            break;
        }

        userAnswer = Number(userAnswer);
        if (isNaN(userAnswer)) {
            alert("Некорректный ввод. Попробуйте ещё раз.");
            continue;
        }
        if (userAnswer === correctAnswer) {
            alert(`Правильно! ${question} = ${correctAnswer}`);
            break;
        }
        else {
            alert(`Неправильно. Правильный ответ: ${question} = ${correctAnswer}`);
        }
    }
}

function startGame3() {
    const userText = prompt("Введите текст, который нужно перевернуть:");
    if (userText !== null) {
        const reversedText = userText.split('').reverse().join('');
        alert(`Перевернутый текст: ${reversedText}`);
    } else {
        alert("Вы отменили ввод.");
    }
}

function startGame4() {
    const choices = ['камень', 'ножницы', 'бумага'];

    while (true) {
        const userChoiceIndex = parseInt(prompt(
            "Выберите:\n1. Камень\n2. Ножницы\n3. Бумага\nВведите номер вашего выбора (1, 2 или 3):"
        )) - 1;

        if (userChoiceIndex === null || isNaN(userChoiceIndex) || userChoiceIndex < 0 || userChoiceIndex > 2) {
            alert("Игра завершена.");
            break;
        }

        const userChoice = choices[userChoiceIndex];
        const computerChoiceIndex = Math.floor(Math.random() * 3);
        const computerChoice = choices[computerChoiceIndex];

        alert(`Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${computerChoice}`);

        if (userChoice === computerChoice) {
            alert("Ничья! Попробуйте ещё раз.");
        } else if (
            (userChoice === 'камень' && computerChoice === 'ножницы') ||
            (userChoice === 'ножницы' && computerChoice === 'бумага') ||
            (userChoice === 'бумага' && computerChoice === 'камень')
        ) {
            alert("Вы выиграли!");
            break;
        } else {
            alert("Вы проиграли! Попробуйте ещё раз.");
        }
    }
}

function startGame5() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let correctAnswersCount = 0;

    for (const item of quiz) {
        const userAnswer = prompt(`${item.question}\n${item.options.join('\n')}\nВведите номер правильного ответа:`);

        if (userAnswer === null) {
            alert("Вы отменили викторину.");
            return;
        }

        const answerNumber = parseInt(userAnswer);

        if (answerNumber === item.correctAnswer) {
            correctAnswersCount++;
        }
    }

    alert(`Вы правильно ответили на ${correctAnswersCount} из ${quiz.length} вопросов!`);
}

function startGame6(event) {
    if (event) {
        event.preventDefault();
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const randomColor = getRandomColor();

    document.querySelector('.games').style.backgroundColor = randomColor;
    document.querySelector('.minigames').style.backgroundColor = randomColor;

    console.log(`Цвет фона изменен на: ${randomColor}`);
}

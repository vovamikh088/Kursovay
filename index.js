const GAME_BACKGROUND_SELECTORS = ['.games', '.minigames'];

function requestInput(message) {
    const value = prompt(message);

    if (value === null) {
        alert('Игра завершена.');
        return null;
    }

    return value.trim();
}

function requestNumber(message) {
    const value = requestInput(message);

    if (value === null) {
        return null;
    }

    if (value === '') {
        alert('Пустой ответ не подходит. Попробуйте еще раз.');
        return Number.NaN;
    }

    const number = Number(value);

    if (Number.isNaN(number)) {
        alert('Некорректный ввод. Попробуйте еще раз.');
        return Number.NaN;
    }

    return number;
}

function startGame1() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;

    while (true) {
        const guess = requestNumber('Угадайте число от 1 до 100.');

        if (guess === null) {
            break;
        }

        if (Number.isNaN(guess)) {
            continue;
        }

        if (guess < 1 || guess > 100) {
            alert('Введите число от 1 до 100.');
            continue;
        }

        if (guess === targetNumber) {
            alert('Поздравляю, вы угадали число!');
            break;
        }

        if (guess < targetNumber) {
            alert('Загаданное число больше. Попробуйте еще раз.');
            continue;
        }

        alert('Загаданное число меньше. Попробуйте еще раз.');
    }
}

function getMathRound() {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let firstNumber = Math.floor(Math.random() * 20) + 1;
    let secondNumber = Math.floor(Math.random() * 20) + 1;

    if (operation === '-') {
        const biggerNumber = Math.max(firstNumber, secondNumber);
        const smallerNumber = Math.min(firstNumber, secondNumber);

        return {
            question: `${biggerNumber} - ${smallerNumber}`,
            answer: biggerNumber - smallerNumber
        };
    }

    if (operation === '/') {
        secondNumber = Math.floor(Math.random() * 9) + 1;
        const answer = Math.floor(Math.random() * 10) + 1;
        firstNumber = answer * secondNumber;

        return {
            question: `${firstNumber} / ${secondNumber}`,
            answer
        };
    }

    if (operation === '+') {
        return {
            question: `${firstNumber} + ${secondNumber}`,
            answer: firstNumber + secondNumber
        };
    }

    return {
        question: `${firstNumber} * ${secondNumber}`,
        answer: firstNumber * secondNumber
    };
}

function startGame2() {
    while (true) {
        const round = getMathRound();
        const userAnswer = requestNumber(`Решите задачу: ${round.question} = ?`);

        if (userAnswer === null) {
            break;
        }

        if (Number.isNaN(userAnswer)) {
            continue;
        }

        if (userAnswer === round.answer) {
            alert(`Правильно! ${round.question} = ${round.answer}`);
            break;
        }

        alert(`Неправильно. Правильный ответ: ${round.question} = ${round.answer}`);
    }
}

function startGame3() {
    const userText = requestInput('Введите текст, который нужно перевернуть:');

    if (userText === null) {
        return;
    }

    const reversedText = userText.split('').reverse().join('');
    alert(`Перевернутый текст: ${reversedText}`);
}

function startGame4() {
    const choices = ['камень', 'ножницы', 'бумага'];

    while (true) {
        const choiceNumber = requestNumber(
            'Выберите:\n1. Камень\n2. Ножницы\n3. Бумага\nВведите номер вашего выбора:'
        );

        if (choiceNumber === null) {
            break;
        }

        if (Number.isNaN(choiceNumber) || choiceNumber < 1 || choiceNumber > 3) {
            alert('Введите 1, 2 или 3.');
            continue;
        }

        const userChoice = choices[choiceNumber - 1];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (userChoice === computerChoice) {
            alert(`Ничья! У вас и у компьютера: ${userChoice}.`);
            continue;
        }

        const isWin =
            (userChoice === 'камень' && computerChoice === 'ножницы') ||
            (userChoice === 'ножницы' && computerChoice === 'бумага') ||
            (userChoice === 'бумага' && computerChoice === 'камень');

        alert(`Вы выбрали: ${userChoice}. Компьютер выбрал: ${computerChoice}.`);

        if (isWin) {
            alert('Вы выиграли!');
            break;
        }

        alert('Вы проиграли. Попробуйте еще раз.');
    }
}

function startGame5() {
    const quiz = [
        {
            question: 'Какого цвета небо в ясную погоду?',
            options: ['1. Красное', '2. Синее', '3. Зеленое'],
            correctAnswer: 2
        },
        {
            question: 'Сколько дней в неделе?',
            options: ['1. Шесть', '2. Семь', '3. Восемь'],
            correctAnswer: 2
        },
        {
            question: 'Сколько пальцев на одной руке у человека?',
            options: ['1. Четыре', '2. Пять', '3. Шесть'],
            correctAnswer: 2
        }
    ];

    let correctAnswersCount = 0;

    for (const item of quiz) {
        const answerNumber = requestNumber(
            `${item.question}\n${item.options.join('\n')}\nВведите номер правильного ответа:`
        );

        if (answerNumber === null) {
            return;
        }

        if (answerNumber === item.correctAnswer) {
            correctAnswersCount += 1;
        }
    }

    alert(`Вы правильно ответили на ${correctAnswersCount} из ${quiz.length} вопросов.`);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let index = 0; index < 6; index += 1) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }

    return color;
}

function startGame6() {
    const randomColor = getRandomColor();

    GAME_BACKGROUND_SELECTORS.forEach((selector) => {
        const section = document.querySelector(selector);

        if (section) {
            section.style.backgroundColor = randomColor;
        }
    });
}

const gameHandlers = {
    game1: startGame1,
    game2: startGame2,
    game3: startGame3,
    game4: startGame4,
    game5: startGame5,
    game6: startGame6
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-game]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            const { game } = button.dataset;
            const handler = gameHandlers[game];

            if (handler) {
                handler();
            }
        });
    });
});

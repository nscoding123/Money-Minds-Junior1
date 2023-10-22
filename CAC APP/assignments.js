const questions = [
    {
        question: "What is money?",
        options: ["Something we play with", "A way to buy things", "A type of food"],
        correctAnswer: 1
    },
    {
        question: "Where can you save your money?",
        options: ["In your school bag" , "Under your mattress", "In a bank account"],
        correctAnswer: 2
    },
    {
        question: "Why is it important to save money?",
        options: ["So you can buy toys" , "To have money for emergencies", "To show off to your friends"],
        correctAnswer: 1
    },
    {
        question: "What does 'budget' mean?",
        options: ["A type of fruit" , "A plan for spending and saving money", "A movie ticket"],
        correctAnswer: 1
    },
    {
        question: "How can you earn money as a kid?",
        options: ["Ask your parents for money" , "Do chores and earn an allowance", "Wait for money to fall from the sky"],
        correctAnswer: 1
    },
    {
        question: "What is the difference between 'needs' and 'wants'?",
        options: ["Needs are things you must have, and wants are things you'd like to have" , " Needs and wants mean the same thing", "Needs are for adults, and wants are for kids"],
        correctAnswer: 0
    },
    {
        question: "What is a savings goal?",
        options: ["A game you play with friends" , "A target amount of money you want to save for something specific", "A special kind of candy"],
        correctAnswer: 1
    },
    {
        question: "What is interest?",
        options: ["Something that makes you feel excited" , "Money that you have saved", "Money that the bank pays you for keeping your money there"],
        correctAnswer: 2
    },
    {
        question: "Why is it important to share and give to others, even if you have little money?",
        options: ["Because it's fun" , "To make friends", "To help those in need and build a kinder world"],
        correctAnswer: 2
    },
    {
        question: "When you put your money in a piggy bank or a jar, what are you doing?",
        options: ["Saving it" , "Spending it", "Hiding it from your parents"],
        correctAnswer: 0
    },
    {
        question: "What's the golden rule of money?",
        options: ["Spend, spend, spend!" , "Save, share, and spend wisely", "Money grows on trees"],
        correctAnswer: 1
    },
    {
        question: "What should you do before buying something expensive?",
        options: ["Ask your parents to buy it for you" , "Think about whether you really need it and if you can afford it", "Buy it right away without thinking"],
        correctAnswer: 1
    },
    {
        question: "What does 'income' mean?",
        options: ["Money you spend" , "Money you earn", "Money you borrow"],
        correctAnswer: 1
    },
    {
        question: "What is a credit card?",
        options: ["A card to play games on" , "A way to borrow money to be paid back later", "A card that shows your address"],
        correctAnswer: 1
    },
    {
        question: "What is the difference between a checking account and a savings account?",
        options: ["Checkings accounts are used for daily spending, while savings accounts are for savings" , "Checking accounts earn more interest", "There is no difference; they are the same"],
        correctAnswer: 0
    },
    {
        question: "Why is it important to create and follow a budget?",
        options: ["To impress your friends with your financial skills" , "To make sure you have enough money to buy the latest gadgets", "To track your spending and ensure you can achieve your financial goals"],
        correctAnswer: 2
    },
    {
        question: "What is the significance of 'compounding interest' in savings and investments?",
        options: ["It's the interest earned on both the initial principal and the accumulated interest" , "It's a fancy term for losing money in the stock market.", "It's the extra money you earn by playing video games"],
        correctAnswer: 0
    },
    {
        question: "What is the difference between stocks and bonds in investment terms?",
        options: ["Stocks are for rich people, and bonds are for everyone else" , "Stocks represent ownership in a company, while bonds are loans made to a company or government", "Stocks and bonds are both just funny names for pieces of paper"],
        correctAnswer: 1
    },
    {
        question: "What is the difference between a debit card and a credit card?",
        options: ["Debit cards are used for online shopping, while credit cards are for in-store purchases" , "Debit cards deduct money directly from your bank account, while credit cards allow you to borrow money to be paid back later", "There's no difference; they are the same thing"],
        correctAnswer: 1
    },
    {
        question: "What is the 'emergency fund,' and why is it essential?",
        options: ["Money set aside for buying expensive items" , "Money saved for unexpected expenses or emergencies", "A fund used for vacations"],
        correctAnswer: 1
    },
    {
        question: "What is the importance of investing, and how does it differ from saving money in a bank account?",
        options: ["Investing is for rich people, and it's riskier than saving in a bank account" , "Investing involves putting money into assets with the potential for long-term growth, while saving is typically considered low-risk with lower returns", "Investing is just another term for saving money"],
        correctAnswer: 1
    },
    {
        question: "What are some potential advantages of investing in stocks or mutual funds compared to saving money in a regular savings account?",
        options: ["Stocks and mutual funds are risk-free" , "The potential for higher returns on your investment over the long term", "Stocks are too complicated for kids to understand"],
        correctAnswer: 1
    },
    {
        question: "Why is it important to read the terms and conditions of financial agreements, like loans and credit cards?",
        options: ["Because it's a fun read" , "To find hidden loopholes to your advantage", "To fully understand the terms, fees, and interest rates, and to avoid surprises and hidden costs."],
        correctAnswer: 2
    },
    {
        question: "What is the concept of 'living below your means,' and why is it important for financial success?",
        options: ["Spending all your money on things you enjoy" , "Spending exactly what you earn", "Spending less than you earn to save and invest for the future."],
        correctAnswer: 2
    },
    {
        question: "Why is it important to start investing at a young age?",
        options: ["Investing is only for the wealthy" , "It allows your money to grow over time through compound interest", "You should never invest"],
        correctAnswer: 1
    },
    {
        question: "Why is it important to be cautious when using credit cards?",
        options: ["Credit cards are always a bad idea" , "If you don't pay off your balance in full, you can accumulate debt and pay high interest rates", "Credit cards are free money"],
        correctAnswer: 1
    },
    {
        question: "What is the term for money you owe to someone else, such as a friend or a financial institution?",
        options: ["Savings" , "Debt", "Income"],
        correctAnswer: 1
    },
    {
        question: "Why is it essential to compare prices and shop around before making a big purchase?",
        options: ["To waste time" , "To find the cheapest option and make your money go further", "To show off your knowledge about different products"],
        correctAnswer: 1
    },
    {
        question: "What are some potential risks of investing in the stock market?",
        options: ["Guaranteed profits" , "Losing money if the market goes down", "Winning the lottery"],
        correctAnswer: 1
    },
    {
        question: "What is a stock, and how does it relate to owning a part of a company?",
        options: ["A stock is a type of bond" , "A stock represents ownership in a company, and owning stocks means you have a share in that company", "Stocks are like souvenirs from companies"],
        correctAnswer: 1
    },
   
    // Add your 28 other questions here
];

// Function to shuffle the questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the questions array
shuffleArray(questions);

// Select the first 10 questions
const selectedQuestions = questions.slice(0, 10);

// Display the questions on the page
const quizContainer = document.getElementById("quiz-container");

selectedQuestions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
        <p>${index + 1}. ${question.question}</p>
        <div class="options">
            ${question.options.map((option, i) => `
                <label>
                    <input type="radio" name="q${index}" value="${i}">
                    ${option}
                </label>
            `).join('')}
        </div>
    `;
    quizContainer.appendChild(questionElement);
});

// Add an event listener for the submit button
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", calculateScore);

// Function to calculate the score and check if the user passed or failed
function calculateScore() {
    const totalQuestions = selectedQuestions.length;
    let correctAnswers = 0;

    selectedQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === question.correctAnswer) {
            correctAnswers++;
        }
    });

    const score = (correctAnswers / totalQuestions) * 100;

    if (score >= 80) {
        alert(`Congratulations! You passed with a score of ${score.toFixed(2)}%`, "Click the link claim your certificate: https://forms.gle/N35YKLF31Pt5svNt5");
    } else {
        alert(`Sorry, you failed with a score of ${score.toFixed(2)}%. Please try again.`);
    }
}


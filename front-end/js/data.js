const quizzes = [
    {
        id: 1,
        title: "HTML Basics",
        questions: [
            {
                question: "What is the opening tag in an HTML document?",
                options: ["<html>", "<head>", "<body>"],
                answer: "<html>"
            },
            {
                question: "Which tag is used to add an image?",
                options: ["<img>", "<src>", "<image>"],
                answer: "<img>"
            },
            {
                question: "Where do you place meta tags and the title?",
                options: ["<head>", "<body>", "<footer>"],
                answer: "<head>"
            }
        ]
    },
    {
        id: 2,
        title: "CSS Fundamentals",
        questions: [
            {
                question: "Which property changes the text color?",
                options: ["color", "background-color", "font-style"],
                answer: "color"
            },
            {
                question: "Which unit is relative for font sizing?",
                options: ["em", "px", "kg"],
                answer: "em"
            },
            {
                question: "How do you center content using Flexbox?",
                options: ["justify-content: center;", "align-items: flex-start;", "display: block;"],
                answer: "justify-content: center;"
            }
        ]
    },
    {
        id: 3,
        title: "JavaScript Essentials",
        questions: [
            {
                question: "Which keyword is used to declare a variable?",
                options: ["var", "const", "let"],
                answer: "var"
            },
            {
                question: "What is the result of: 2 + '2'?",
                options: ["4", "22", "NaN"],
                answer: "22"
            },
            {
                question: "What is the return type of a function with no return statement?",
                options: ["undefined", "null", "0"],
                answer: "undefined"
            }
        ]
    }
];

localStorage.setItem("quizzes", JSON.stringify(quizzes));

// document write function variables quiz game
var points = 0;
var quiz = [
    {
        question: "Which of these Finnish people have not driven an F1 car?",
        answers: ["A: Leo Kinnunen", " B: Esko Jokinen", " C: Mikko Kozarowitzky", " D: JJ Lehto"],
        correctAnswer: "B"
    },
    {
        question: "In which year did Finland win their first Ice Hockey Championship?",
        answers: ["A: 1989", " B: 1991", " C: 2001", " D: 1995"],
        correctAnswer: "D"
    },
    {
        question: "When was HIFK club founded?",
        answers: ["A: 1897", " B: 1878", " C: 1913", " D: 1894"],
        correctAnswer: "A"
    },
    {
        question: "In which year did HIFK win their Finnish National Championship?",
        answers: ["A: 1979", " B: 1965", " C: 1967", " D: 1969"],
        correctAnswer: "D"
    },
    {
        question: "Who won the Pole vault gold medal in Munich European Championship in 2022?",
        answers: ["A:Wenla  Musto", " B: Wilma Murto", " C: Wivi Makela", " D: Wihelma Maijala"],
        correctAnswer: "B"
    },
    {
        question: "What is the Finnish national men's 100m record?",
        answers: ["A: 10.34", " B: 10.16", " C: 9.95", " D: 9.98"],
        correctAnswer: "B"
    },
    {
        question: "When was Sanna Marin born?",
        answers: ["A: 01 Dec 1987", "B: 16 Nov 1985", " C: 14 Jan 1986", " D: 29 Nov 1989"],
        correctAnswer: "B"
    },
    {
        question: "Where was Jari Kurri born?",
        answers: ["A: Oulu", " B: Tampere", " C: Turku", " D: Helsinki"],
        correctAnswer: "D"
    },
    {
        question: "Who created Linux operating system?",
        answers: ["A: Lionel Torvalds", " B: Linus Talman", " C: Linus Torvalds", " D: Linux Tomman"],
        correctAnswer: "C"
    },
    {
        question: "Which is the highest selling Nokia phone out of these?",
        answers: ["A:Nokia 6236", " B: Nokia 1110", " C: Nokia 6630", " D: Nokia 9800"],
        correctAnswer: "B"
    },
    {
        question: "Which of these Finnish companies is famous for making Virtual Reality headsets?",
        answers: ["A: Supercell", " B: Varjo", " C: Nokia", " D: HTC"],
        correctAnswer: "B"
    },
    {
        question: "Riihimaki has the second of what in Finland?",
        answers: ["A: Oldest rail station", "B: Number of national coaches", " C: Number of padel courts", " D: Highest flagpole"],
        correctAnswer: "D"
    },
    {
        question: "Which of these is not a Sako weapon?",
        answers: ["A: Tikka T3x", " B: Sako S20", " C: Sako Quad", " D: Tikka Quad"],
        correctAnswer: "D"
    },
    {
        question: "How fast does the fastest train in Finland travel at?",
        answers: ["A: 220 kph", " B: 180 kph", " C: 260kph", " D: 240kph"],
        correctAnswer: "D"
    },
    {
        question: "How deep is the deepest lake in Finland?",
        answers: ["A: 95m", " B: 87m", " C: 102m", " D: 53m"],
        correctAnswer: "A"
    }
]

// use a for loop to loop through the array and display the questions and answers
    for (var i = 0; i < quiz.length; i++) {
        var suggestedAnswer = prompt(quiz[i].question + "\n" + quiz[i].answers);
        if (suggestedAnswer.toLowerCase() == quiz[i].correctAnswer.toLowerCase()) {
            points += 1;
            alert("Correct! +1 points! Total Points: " + points);
        }
        else{
            alert("Incorrect! The correct answer was " + quiz[i].correctAnswer + ". Total Points: " + points);
        }
    }
    document.write("<h1>You got " + points + " out of " + quiz.length + " questions correct!</h1>");

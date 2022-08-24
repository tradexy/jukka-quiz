// document write function variables quiz game
var points = 0;
var quiz = [
    {
        question: "Which of these is not an official Finnish police department?",
        answers: ["A: Northeastern Finland Police Department", " B: Häme Police Department", " C: Western Uusimaa Police Department", " D: Southwestern Finland Police Department"],
        correctAnswer: "A"
    },
    {
        question: "Which of these is not a famous Finnish chef?",
        answers: ["A: Sami Tallberg", " B: Sami Garam", " C: Sara La Fountain", " D: Sami La Fountain"],
        correctAnswer: "D"
    },
    {
        question: "Which of these is not a Finnish software company?",
        answers: [" A: Azure", " B: Supercell", " C: Fingersoft", " D: Rovio"],
        correctAnswer: "A"
    },
    {
        question: "Which of these is not a plane in the Finnish Air Force?",
        answers: [" A: F-18", " B: F-35", " C: F-22", " D: C-17"],
        correctAnswer: "C"
    },
    {
        question: "Which of these Finnish people did not win an Olympic gold medal?",
        answers: [" A: Kalle Anttila", " B: Vaino Karppinen", " C: Sirkka Polkunen", " D: Sylvi Salmo"],
        correctAnswer: "B"
    },
    {
        question: "Which of these Finnish people have not driven an F1 car?",
        answers: [" A: Leo Kinnunen", " B: Esko Jokinen", " C: Mikko Kozarowitzky", " D: JJ Lehto"],
        correctAnswer: "B"
    },
    {
        question: "In which year did Finland win their first Ice Hockey Championship?",
        answers: [" A: 1989", " B: 1991", " C: 2001", " D: 1995"],
        correctAnswer: "D"
    },
    {
        question: "When was HIFK club founded?",
        answers: [" A: 1897", " B: 1878", " C: 1913", " D: 1894"],
        correctAnswer: "A"
    },
    {
        question: "In which year did HIFK win their Finnish National Championship?",
        answers: [" A: 1979", " B: 1965", " C: 1967", " D: 1969"],
        correctAnswer: "D"
    },
    {
        question: "Who won the Pole vault gold medal in Munich European Championship in 2022?",
        answers: [" A: Wenla Musto", " B: Wilma Murto", " C: Wivi Makela", " D: Wihelma Maijala"],
        correctAnswer: "B"
    },
    {
        question: "How many World Rally Championships have been won by Finnish drivers?",
        answers: [" A: 13", " B: 15", " C: 9", " D: 19"],
        correctAnswer: "B"
    },
    {
        question: "When was Sanna Marin born?",
        answers: [" A: 01 Dec 1987", " B: 16 Nov 1985", " C: 14 Jan 1986", " D: 29 Nov 1989"],
        correctAnswer: "B"
    },
    {
        question: "Where was Jari Kurri born?",
        answers: [" A: Oulu", " B: Tampere", " C: Turku", " D: Helsinki"],
        correctAnswer: "D"
    },
    {
        question: "Who created Linux operating system?",
        answers: [" A: Lionel Torvalds", " B: Linus Talman", " C: Linus Torvalds", " D: Linux Tomman"],
        correctAnswer: "C"
    },
    {
        question: "Which is the highest selling Nokia phone out of these?",
        answers: [" A: Nokia 6236", " B: Nokia 1110", " C: Nokia 6630", " D: Nokia 9800"],
        correctAnswer: "B"
    },
    {
        question: "Which of these Finnish companies is famous for making Virtual Reality headsets?",
        answers: [" A: Supercell", " B: Varjo", " C: Nokia", " D: HTC"],
        correctAnswer: "B"
    },
    {
        question: "Riihimaki has the second of what in Finland?",
        answers: [" A: Oldest rail station", "B: Highest number of national coaches per person", " C: Highest number of padel courts per person", " D: Highest flagpole"],
        correctAnswer: "D"
    },
    {
        question: "Which of these is not a Sako weapon?",
        answers: [" A: Tikka T3x", " B: Sako S20", " C: Sako Quad", " D: Tikka Quad"],
        correctAnswer: "D"
    },
    {
        question: "How fast does the fastest train in Finland travel at?",
        answers: [" A: 220 kph", " B: 180 kph", " C: 260kph", " D: 240kph"],
        correctAnswer: "D"
    },
    {
        question: "How deep is the deepest lake in Finland?",
        answers: [" A: 95m", " B: 87m", " C: 102m", " D: 53m"],
        correctAnswer: "A"
    }
]

function createQuestion(question, correctAnswer, answers) {
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.answers = answers;
    f++;
    document.write("<h1>" + question + "</h1>");
    for (var i = 0; i < answers.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = "<h3>" + answers[i] + "</h3>";
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);
        if (button.innerHTML.charAt(5) == correctAnswer) {
            button.addEventListener ("click", function() {
                points++;
                document.body.innerHTML = "";
                if (points > 1 || points == 0) {
                    alert("You selected the correct answer! You now have " + points + " points!");
                } else {
                    alert("You selected the correct answer! You now have " + points + " point!");
                }
                createQuestion(quiz[f].question, quiz[f].correctAnswer, quiz[f].answers)
            });      
        }
        else{
            button.addEventListener ("click", function() {
                document.body.innerHTML = "";
                if (points > 1 || points == 0) {
                    alert("You selected the wrong answer, the correct answer was " + correctAnswer + ". " + "You still have " + points + " points.");
                } else {
                    alert("You selected the wrong answer, the correct answer was " + correctAnswer + ". " + "You still have " + points + " point.");
                }
                createQuestion(quiz[f].question, quiz[f].correctAnswer, quiz[f].answers)
            });
        }
    }
    if (f == quiz.length){
        document.body.innerHTML = "";
        document.write("<h1>You have scored " + points + " points out of " + quiz.length.toString() + " points</h1>");
    }  
}
f = 0;
createQuestion(quiz[f].question, quiz[f].correctAnswer, quiz[f].answers);

(function () {
    function buildQuiz() {

        const output = [];


        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answers = [];

            for (letter in currentQuestion.answers) {

                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
            );
        });

        quizContainer.innerHTML = output.join("");
    }

    function showResults() {

        const answerContainers = quizContainer.querySelectorAll(".answers");


        let numCorrect = 0;


        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;


            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;


                answerContainers[questionNumber].style.color = "blue";
            } else {

                answerContainers[questionNumber].style.color = "blink";
            }
        })
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [{

            question: "1. Which of the following is a non-renewable resource?",
            answers: {
                a: "Coal",
                b: "Forest",
                c: "Water",
                d: "Wildlife"
            },
            correctAnswer: "a"
        },
        {
            question: "2. Which among the following is not a renewable source of energy?",
            answers: {
                a: "Solar energy",
                b: "Biomass energy",
                c: "Hydro-power",
                d: "Geothermal energy"
            },
            correctAnswer: "b"
        },
        {
            question: "3. Identify the non-renewable energy resource from the following",
            answers: {
                a: "Coal",
                b: "Fuel cells",
                c: "Wind power",
                d: "Wave power"
            },
            correctAnswer: "a"
        },
        {
            question: "4. Which of the following is a disadvantage of most of the renewable energy sources?",
            answers: {
                a: "High polluting",
                b: "High waste disposal cost",
                c: "Unreliable supply",
                d: "High running cost"
            },
            correctAnswer: "c"
        },
        {

            question: "5. Photovoltaic energy is the conversion of sunlight into:",
            answers: {
                a: "Biogas",
                b: "Electricity",
                c: "Geothermal energy",
                d: "Petrol"
            },
            correctAnswer: "a"
        },
        {
            question: "6. Horizontal axis and vertical axis are the type of:",
            answers: {
                a: "Nuclear reactor",
                b: "Wind mills",
                c: "Biogas reactor",
                d: "Solar cell"
            },
            correctAnswer: "b"
        },
        {
            question: "7. Which of the following is not an adverse enviroment impact of tidal power generation?",
            answers: {
                a: "Interference with spawing and migration of fish",
                b: "Pollution and health hazard in the estuary due to blockage of flow of polluted water into the sea",
                c: "Navigational hazard",
                d: "None of the above"
            },
            correctAnswer: "d"
        },
        {
            question: "8. Steam reforming is currently the least expensive method of producing:",
            answers: {
                a: "Coal",
                b: "Biogas",
                c: "Hydrogen",
                d: "Natural gas"
            },
            correctAnswer: "c"
        },
        {
            question: "9. A fuel cell, in order to produce electricity, burns:",
            answers: {
                a: "Helium",
                b: "Nitrogen",
                c: "Hydrogen",
                d: "None of the above"
            },
            correctAnswer: "c"
        },
        {
            question: "10. Fuel cells are:",
            answers: {
                a: "Carbon cell",
                b: "Hydrogen battery",
                c: "Nuclear cell",
                d: "Chromium cell"
            },
            correctAnswer: "b"
        },
        {
            question: "11. Both power and manure is provided by:",
            answers: {
                a: "Nuclear plants",
                b: "Thermal plants",
                c: "Biogas plants",
                d: "Hydroelectric plant"
            },
            correctAnswer: "c"
        },
        {
            question: "12. The outer most layer of the earth is:",
            answers: {
                a: "Magma",
                b: "Mantle",
                c: "Crust",
                d: "Solid iron core"
            },
            correctAnswer: "c"
        },

        {
            question: "13. Common energy source in Indian villages is:",
            answers: {
                a: "Electricity",
                b: "Coal",
                c: "Sun",
                d: "Wood and animal dung"
            },
            correctAnswer: "d"
        },
        {
            question: "14. The one thing that is common to all fossil fuels is that they",
            answers: {
                a: "Were originally formed in marine enviroment",
                b: "Contain carbon",
                c: "Have undergone the same set of geological processes during their formation",
                d: "Represent the remains of one living organism"
            },
            correctAnswer: "b"
        },
        {
            question: "15. The process that converts solid coal into liquid hydrocarbon fuel is called",
            answers: {
                a: "Liquecation",
                b: "Carbonation",
                c: "Catalytic conversion",
                d: "Cracking"
            },
            correctAnswer: "a"
        },
        {
            question: "16. Lignite, bituminous and anthracite are different ranks of:",
            answers: {
                a: "Nuclear fuel",
                b: "Coal",
                c: "Natural gas",
                d: "Biogas"
            },
            correctAnswer: "b"
        },
        {
            question: "17. Cruid oil is:",
            answers: {
                a: "Colourless",
                b: "Odourless",
                c: "Smelly yellow to black liquid",
                d: "Odourless yellow to black liquid"
            },
            correctAnswer: "c"
        },
        {
            question: "18. BTU is measurement of:",
            answers: {
                a: "Volume",
                b: "Area",
                c: "Heat content",
                d: "Temperature"
            },
            correctAnswer: "c"
        },
        {
            question: "19. The first controlled fission of an atom was carried out in Germany in:",
            answers: {
                a: 1920,
                b: 1928,
                c: 1925,
                d: 1938
            },
            correctAnswer: "d"
        },
        {
            question: "20. Boiling water reactor and pressurised water reactors are:",
            answers: {
                a: "Nuclear reactor",
                b: "Solar reactor",
                c: "OTEC",
                d: "Biogas reactor"
            },
            correctAnswer: "a"
        },

    ];

    buildQuiz();

    submitButton.addEventListener("click", showResults);
})();
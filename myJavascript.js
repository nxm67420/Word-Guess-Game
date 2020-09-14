        //Variables
        var shuffledList = [];
        var correctAnswer = false;
        var counter = 0;
        var numOfGuesses = 3;
        var score = 0;
        var answer;
        var image = document.getElementById("gameOver");
        
        //Word List
        var wordList = ["cat", "corn", "comet", "atomic", "medical", "diplomat", "compacted", "complicate", "lumberjacks", "extravaganza", "embarrassment", "gentrification", "methamphetamine", "anthropomorphize", "anesthesiologists", "hemidemisemiquaver", "counterintelligence", "tetrahydrocannabinol"];

        //Theme Music
        var themeMusic = new Audio();
        themeMusic.src = "audio/menuMusic.mp3";
        
        //Game-Over Theme Music
        var gameOver = new Audio();
        gameOver.src = "audio/GameOver.mp3";
        
        //Click Sound
        var clicking = new Audio();
        clicking.src = "Audio/btnClick.mp3";
        
        //Shuffle Words & Prints To User
        var str = wordList[counter];
        var shuffled = str.split('').sort(function(){
            return 0.5-Math.random()
        }).join('');
        document.getElementById("wordFromList").innerHTML = shuffled;
        
        
        //Start Game
        document.getElementById("startBtn").onclick = function startGame() {
            window.alert(
              "Welcome to 'Guess Game' where you're given 3 attempts to try and guess the word. Fail to guess the word correctly after 3 attempts then start back from scratch. Guess Correctly & Recieve One Golden Star 🌟. Good Luck :)!!!"
            );
            document.getElementById("container").style.visibility = "visible";
            document.getElementById("startBtn").style.visibility = "hidden";
            document.getElementById("coin").style.visibility = "hidden";
            document.getElementById("guessGame").style.visibility = "visible";
            //window.alert("You Have 3 Attempts To Guess The Word. Lose & Start From Scratch 😈");
            gameOver.pause();
        }
        
        //Exit Game
        document.getElementById("exitBtn").onclick = function exitGame(){
            document.getElementById("container").style.visibility = "hidden";
            document.getElementById("startBtn").style.visibility = "visible";
            document.getElementById("coin").style.visibility = "visible";
            document.getElementById("gameOver").style.visibility = "hidden";
            document.getElementById("guessGame").style.visibility = "hidden";
            document.getElementById("answerResponse").innerHTML = " ";
            gameOver.pause();
        }
        
        //Set Score to 0, Hides all Elements, Arraylist goes back to arraylist[0],
        function reset(){}
        
        
        //Shuffled List
        function wordShuffle() {
            shuffledList = [wordList.length];

            for (var i = 0; i < wordList.length; i++) {
                var str = wordList[i];
                var shuffled = str.split("").sort(function () {
                    return 0.5 - Math.random();
                }).join("");
                shuffledList[i] = shuffled;
            }
        }
        wordShuffle.call();

        //answer check
        function answerCheck(){ 
            if (answer = document.getElementById("textArea").value == wordList[counter]) {
                if(wordList[counter].length >= 21){ 
                    window.alert("CONGRATULATIONS YOU'VE WON 🏆");
                }
                correctAnswer = true;
                counter++;
                document.getElementById("answerResponse").innerHTML =
                  "<p style = color:limegreen;>Correct</p>";
                numOfGuesses = 3;
                scoreIncrease.call();
                nextQuestion.call();
            }
            else { 
                correctAnswer = false;
                document.getElementById("answerResponse").innerHTML = "<p style = color:red; font-size:80px>Incorrect Answer</p>";
                numOfGuesses--;
                if(numOfGuesses <= 0){ 
                    window.alert("Answer: " + wordList[counter]);
                    counter = 0;
                    document.getElementById("wordFromList").innerHTML = shuffledList[counter];
                    themeMusic.pause();
                    gameOver.play();
                    document.getElementById("gameOver").style.visibility =
                      "visible";
                    document.getElementById("guessGame").style.visibility =
                        "hidden";
                    numOfGuesses = 3;
                }
            }
        }

        //Next Question
        function nextQuestion() {
            if(correctAnswer = true){
                document.getElementById("wordFromList").innerHTML = shuffledList[counter];
            }
        }

        //Increase Score
        function scoreIncrease(){
            document.getElementById("txtScore").innerHTML =
                "Score: " + (wordList[counter].length / numOfGuesses) * 10;
            document.getElementById("answerResponse").innerHTML =
                "<p style=color:limegreen; font size:>Correct Answer</p>";
            document.getElementById("star").innerHTML =
                "🌟" + "x" + counter;
        }

        //Exit Game
        function exitGame(){
            document.getElementById("exitBtn").onclick = function exitGame(){
                document.getElementById("container").style.visibility = "hidden";
                document.getElementById("startBtn").style.visibility = "visible";
                document.getElementById("coin").style.visibility = "visible";
                document.getElementById("gameOver").style.visibility = "hidden";
                document.getElementById("guessGame").style.visibility = "hidden";
                document.getElementById("answerResponse").innerHTML = "";
                gameOver.pause();
            }
        }
        
        //Submit Answer
        document.getElementById("submitBtn").onclick = function showWord() {
            answerCheck.call();
        }

var computerChoices = ["Sonic", "Mario", "Zelda", "Halo", "Minecraft", "Pokemon", "Call Of Duty", "Final Fantasy", "FIFA", "Kingdom Hearts", "Crash Bandicoot"];
var wins = 0;
var losses = 0;
var guesses = 15; 
var guessesSoFar = [];
var dashAry = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


function computerGuessReset(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesSoFar = [];
    guesses = 15
    dash = [];
    dashAry = [];
	computerGuessAry = computerGuess.split("");
		for ( k = 0; k < computerGuessAry.length; k++){
    		dashAry.push("_" + " ");
		}
     	
    	dash = dashAry.join(''); 
}


var computerGuessAry = computerGuess.split("");
for (var k = 0; k < computerGuessAry.length; k++){
    dashAry.push("_" + " ");
}
    var dash = dashAry.join('');


var html = "<h2>Guess the Video Game</h2>" +
	"<p>Press any key to get started!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Current Word</p>" +
    "<p>" + dash + "</p>" +
    "<p>Number of Guesses Remaining</p>" +
    "<p>" + guesses + "</p>" +
    "<p>Letters Already Guessed</p>" +
    "<p>" + guessesSoFar + "</p>";

document.querySelector(".hangman").innerHTML = html;

document.onkeyup = function(event){

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

for (var w = 0; w < computerGuess.length; w++){
	if(userGuess == computerGuessAry[w]){
		dashAry[w] = userGuess;
		dash = dashAry.join('');
		console.log("Checking for letter " + dashAry);
	}
}

    
    if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c') ||
        (userGuess == 'd') || (userGuess == 'e') || (userGuess == 'f') ||
        (userGuess == 'g') || (userGuess == 'h') || (userGuess == 'i') ||
        (userGuess == 'j') || (userGuess == 'k') || (userGuess == 'l') ||
        (userGuess == 'm') || (userGuess == 'n') || (userGuess == 'o') ||
        (userGuess == 'p') || (userGuess == 'q') || (userGuess == 'r') ||
        (userGuess == 's') || (userGuess == 't') || (userGuess == 'u') ||
        (userGuess == 'v') || (userGuess == 'w') || (userGuess == 'x') ||
        (userGuess == 'y') || (userGuess == 'z')){

        
        if (dash == computerGuess){
            wins++
            alert("Goodjob you guessed the word: " + computerGuess);
            computerGuessReset();
            console.log("ComputerGuess win reset: " + computerGuessReset);
            console.log("-------------------------");
            console.log("ComputerGuess new letter after win: " + computerGuess);
            console.log("-------------------------");

              
        }else if (guesses == 1){
            losses++
            alert("Nice try, the word was: " + computerGuess);
            computerGuessReset();
            console.log("ComputerGuess loss reset: " + computerGuessReset);
            console.log("-------------------------");
            console.log("ComputerGuess new letter after loss: " + computerGuess);
            console.log("-------------------------");

             
        }else{
            
            if(guessesSoFar.indexOf(userGuess) != -1){
                alert("Duplicate letter was pressed. Please try again.")
                console.log("UserGuess within the for loop if statement: " + userGuess);
                console.log("-------------------------");
            
            }else{
                guesses--
                guessesSoFar.push(userGuess);
                console.log("UserGuess within the for loop else statement: " + userGuess);
                console.log("-------------------------");
            }
        }
    
    }else{
        alert("Invalid letter. Please type a letter from a-z.");
        console.log("Alerts false letter: " + userGuess);
        console.log("-------------------------");
    }

var html = "<h2>Guess the Video Game</h2>" +
	"<p>Press any key to get started!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Current Word</p>" +
    "<p>" + dash + "</p>" +
    "<p>Number of Guesses Remaining</p>" +
    "<p>" + guesses + "</p>" +
    "<p>Letters Already Guessed</p>" +
    "<p>" + guessesSoFar + "</p>";

document.querySelector(".hangman").innerHTML = html;
}
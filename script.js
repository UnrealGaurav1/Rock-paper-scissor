
// const incrementbtn =  document.getElementById('increment')
// const decrementbtn =  document.getElementById('decrement')
// let counter = 0

// function incrementCounter(){
//     const counterEl = document.getElementById('counter')
//     counter++
//     counterEl.innerText = counter;
// }

// function decrementCounter(){
//     const counterEl = document.getElementById('counter')
//     counter--
//     counterEl.innerText = counter;
// }

// incrementbtn.addEventListener('click', incrementCounter)
// decrementbtn.addEventListener('click', decrementCounter)


function getUserChoice(userInput){
	 userInput = prompt('rock, paper or scissor: ');
	 console.log('your option is: ' + userInput);
	 if(userInput == "rock" || userInput == "paper" || userInput == "scissor" ){
		return userInput
	 }
	 else{
		console.log("Invalid Input. Choose rock paper or scissor")
	 }
}
getUserChoice();

function getComputerChoice(){
	let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
		case 0:
			return 'rock';
			break;
		case 1:
			return 'paper';
			break;
		case 2:
			return 'scissor';
			break;
	}
}
getComputerChoice();

function determineWinner(getComputerChoice, getUserChoice) {
	if(getComputerChoice == 'rock' && getUserChoice == 'paper'){
		console.log("paper beats the rock, user wins")
	}
	else if(getComputerChoice == 'paper' && getUserChoice == 'scissor'){
		console.log("scissor beats the paper, user wins")
	}
	else if(getComputerChoice == 'scissor' && getUserChoice == 'rock'){
		console.log("rock beats the scissor, user wins")
	}
	else if(getComputerChoice == 'rock' && getUserChoice == 'scissor'){
		console.log("rock beats the scissor, computer wins")
	}
	else if(getComputerChoice == 'paper' && getUserChoice == 'rock'){
		console.log("scissor beats the paper, computer wins")
	}
	else if(getComputerChoice == 'scissor' && getUserChoice == 'paper'){
		console.log("scissor beats the paper, computer wins")
	}
	else if(getComputerChoice = getUserChoice){
		console.log("its a tie match")
	}
}
console.log(determineWinner(getComputerChoice(), getUserChoice()))
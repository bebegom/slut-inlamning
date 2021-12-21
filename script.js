const classmates = [
	{
		"name": "Adi Dzocaj",
		"image": "images/adi-dzocaj.jpg",
	},
	{
		"name": "Alexander Bergquist",
		"image": "images/alexander-bergquist.jpg",
	},
	{
		"name": "Alexander Kocman",
		"image": "images/alexander-kocman.jpg",
	},
	{
		"name": "Benjamin Benson",
		"image": "images/benjamin-benson.jpg",
	},
	{
		"name": "Benjamin Tsubarah",
		"image": "images/benjamin-tsubarah.jpg",
	},
	{
		"name": "Calle Nilsson",
		"image": "images/calle-nilsson.jpg",
	},
	{
		"name": "Chikage Takahashi Molander",
		"image": "images/chikage-takahashi-molander.jpg",
	},
	{
		"name": "Daniel Be",
		"image": "images/daniel-be.jpg",
	},
	{
		"name": "Daniel Carlsson",
		"image": "images/daniel-carlsson.jpg",
	},
	{
		"name": "Elin Ahlgren",
		"image": "images/elin-ahlgren.jpg",
	},
	{
		"name": "Emma Käck",
		"image": "images/emma-kack.jpg",
	},
	{
		"name": "Eric Ståhl",
		"image": "images/eric-stahl.jpg",
	},
	{
		"name": "Frans Gustavson Påsse",
		"image": "images/frans-gustavson-passe.jpg",
	},
	{
		"name": "Glafira Veretennikova",
		"image": "images/glafira-veretennikova.jpg",
	},
	{
		"name": "Gustaf Grönlund",
		"image": "images/gustaf-gronlund.jpg",
	},
	{
		"name": "Hanna Håkanson",
		"image": "images/hanna-hakanson.jpg",
	},
	{
		"name": "Heidi Sjöberg",
		"image": "images/heidi-sjoberg.jpg",
	},
	{
		"name": "Hugo Carzborn",
		"image": "images/hugo-carzborn.jpg",
	},
	{
		"name": "Jesper Kling",
		"image": "images/jesper-kling.jpg",
	},
	{
		"name": "Johan Ranestam",
		"image": "images/johan-ranestam.jpg",
	},
	{
		"name": "Johanna Bäckström",
		"image": "images/johanna-backstrom.jpg",
	},
	{
		"name": "Johanna Jönsson",
		"image": "images/johanna-jonsson.jpg",
	},
	{
		"name": "Jona Torsson",
		"image": "images/jona-torsson.jpg",
	},
	{
		"name": "Josefine Ahlstedt",
		"image": "images/josefine-ahlstedt.jpg",
	},
	{
		"name": "Julia Jespersdotter Högman",
		"image": "images/julia-jespersdotter-hogman.jpg",
	},
	{
		"name": "Julia Nemell",
		"image": "images/julia-nemell.jpg",
	},
	{
		"name": "Linus Lindberg",
		"image": "images/linus-lindberg.jpg",
	},
	{
		"name": "Malin Olsson",
		"image": "images/malin-olsson.jpg",
	},
	{
		"name": "Maria Haara-Lundhammar",
		"image": "images/maria-haara-lundhammar.jpg",
	},
	{
		"name": "Maria Lövgren",
		"image": "images/maria-lovgren.jpg",
	},
	{
		"name": "Nikola Dimitrijoski",
		"image": "images/nikola-dimitrijoski.jpg",
	},
	{
		"name": "Paulina Kiendys",
		"image": "images/paulina-kiendys.jpg",
	},
	{
		"name": "Raymond Lam",
		"image": "images/raymond-lam.jpg",
	},
	{
		"name": "Robin Karlsson",
		"image": "images/robin-karlsson.jpg",
	},
	{
		"name": "Sara Almqvist",
		"image": "images/sara-almqvist.jpg",
	},
	{
		"name": "Tim Nilsson",
		"image": "images/tim-nilsson.jpg",
	},
	{
		"name": "Tirapat Sukjit",
		"image": "images/tirapat-sukjit.jpg",
	},
	{
		"name": "Tobias Silfverberg",
		"image": "images/tobias-silfverberg.jpg",
	},
	{
		"name": "Wiktoria Dobrzewinska",
		"image": "images/wiktoria-dobrzewinska.jpg",
	},
];

const btnStartGame = document.querySelector('#btnStartGame');
const quiz = document.querySelector('#quiz');
const btnContainer = document.querySelector('#btnContainer');
const imageOfClassmate = document.querySelector('#imageOfClassmate');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const results = document.getElementById('results');
let classmatesCopy = [...classmates];
let arrayOfCorrectGuesses = [];
let arrayOfWrongGuesses = [];
let guesses = 0;
let beenGuessed = [];

// fisher-yates shuffle function   shuffle the classmates
const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i +1));
		const temp = array [i];
		array[i] = array[j];
		array[j] = temp;
	}
};

let rightAnswer;
let rightAnswerPosition;
let wrongAnswer1;
let wrongAnswer2;
let wrongAnswer3;
let wrongAnswerPosition1;
let wrongAnswerPosition2;
let wrongAnswerPosition3;

// get a random index from classmates
const getRandomIndex = () => classmates[Math.floor(Math.random() * classmates.length)];
const getRandomIndexOfBeenGuessed = () => beenGuessed[Math.floor(Math.random() * beenGuessed.length)];

// get random number for btn-position
const getRandomBtnNumber = () => Math.floor(Math.random()*4)+1;

// set image and answers for question
const setQuestion = function() {

	imageOfClassmate.setAttribute('src', classmatesCopy[0].image);

	rightAnswer = classmatesCopy[0].name;

	rightAnswerPosition = "btn" + getRandomBtnNumber();
	
	document.getElementById(rightAnswerPosition).innerHTML = rightAnswer;
	
	// 3 felaktiga svar 
	if (classmatesCopy.length > 3) {
		wrongAnswer1 = classmatesCopy[1].name;
		wrongAnswer2 = classmatesCopy[2].name; 
		wrongAnswer3 = classmatesCopy[3].name;
	} else {
		shuffle(beenGuessed)
		wrongAnswer1 = beenGuessed[0].name;
		beenGuessed.shift();
		wrongAnswer2 = beenGuessed[0].name;
		beenGuessed.shift();
		wrongAnswer3 = beenGuessed[0].name;

	}

	// randomize position
	wrongAnswerPosition1 = "btn" + getRandomBtnNumber();
	wrongAnswerPosition2 = "btn" + getRandomBtnNumber();
	wrongAnswerPosition3 = "btn" + getRandomBtnNumber();

	// make sure they don't get the same position
	while (rightAnswerPosition === wrongAnswerPosition1) {
		wrongAnswerPosition1 = "btn" + getRandomBtnNumber();
	}
	
	while (rightAnswerPosition === wrongAnswerPosition2 || wrongAnswerPosition1 === wrongAnswerPosition2) {
		wrongAnswerPosition2 = "btn" + getRandomBtnNumber();
	}

	while (rightAnswerPosition === wrongAnswerPosition3 || wrongAnswerPosition2 === wrongAnswerPosition3 || wrongAnswerPosition1 === wrongAnswerPosition3) {
		wrongAnswerPosition3 = "btn" + getRandomBtnNumber();
	}

	document.getElementById(wrongAnswerPosition1).innerHTML = wrongAnswer1;
	document.getElementById(wrongAnswerPosition2).innerHTML = wrongAnswer2;
	document.getElementById(wrongAnswerPosition3).innerHTML = wrongAnswer3;
}

// start the game
btnStartGame.addEventListener('click', () => {
	
	btnStartGame.classList.toggle("hide");
	quiz.classList.toggle("hide");
	quiz.classList.add("showquiz");

	shuffle(classmatesCopy);

	setQuestion();


	// change image and answers when user guesses
	btnContainer.addEventListener('click', e => {
		
		if (e.target.tagName === 'BUTTON') {

			if (e.target.innerHTML === rightAnswer) {
				arrayOfCorrectGuesses.push(classmatesCopy[0]);
				beenGuessed.push(classmatesCopy[0]);
				console.log(e.target.innerHTML, " was ", "correct");
			} else {
				arrayOfWrongGuesses.push(classmatesCopy[0]);
				beenGuessed.push(classmatesCopy[0]);
				console.log(e.target.innerHTML, " was ", "wrong, correct answer was ", rightAnswer);
			};
			
			
			guesses++;

			classmatesCopy.shift();
			
			
			if (guesses === classmates.length) {
				// end game and show results

				alert(`You got ${arrayOfCorrectGuesses.length} right and ${arrayOfWrongGuesses.length} wrong out of ${classmates.length}. Click OK to play again!`);

				// reset 
				guesses = 0;
				classmatesCopy = [...classmates];
				shuffle(classmatesCopy);
				arrayOfCorrectGuesses = [];
				arrayOfWrongGuesses = [];
				beenGuessed = [];

				setQuestion();

			};
			
			setQuestion();

		};
	});
});
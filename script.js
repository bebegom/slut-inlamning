const classmates = [
	{
		name : "Adi Dzocaj",
		image: "images/adi-dzocaj.jpg",
	},
	{
		name : "Alexander Bergquist",
		image: "images/alexander-bergquist.jpg",
	},
	{
		name : "Alexander Kocman",
		image: "images/alexander-kocman.jpg",
	},
	{
		name : "Benjamin Benson",
		image: "images/benjamin-benson.jpg",
	},
	{
		name : "Benjamin Tsubarah",
		image: "images/benjamin-tsubarah.jpg",
	},
	{
		name : "Calle Nilsson",
		image: "images/calle-nilsson.jpg",
	},
	{
		name : "Chikage Takahashi Molander",
		image: "images/chikage-takahashi-molander.jpg",
	},
	{
		name : "Daniel Be",
		image: "images/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "images/daniel-carlsson.jpg",
	},
	{
		name : "Elin Ahlgren",
		image: "images/elin-ahlgren.jpg",
	},
	{
		name : "Emma Käck",
		image: "images/emma-kack.jpg",
	},
	{
		name : "Eric Ståhl",
		image: "images/eric-stahl.jpg",
	},
	{
		name : "Frans Gustavson Påsse",
		image: "images/frans-gustavson-passe.jpg",
	},
	{
		name : "Glafira Veretennikova",
		image: "images/glafira-veretennikova.jpg",
	},
	{
		name : "Gustaf Grönlund",
		image: "images/gustaf-gronlund.jpg",
	},
	{
		name : "Hanna Håkanson",
		image: "images/hanna-hakanson.jpg",
	},
	{
		name : "Heidi Sjöberg",
		image: "images/heidi-sjoberg.jpg",
	},
	{
		name : "Hugo Carzborn",
		image: "images/hugo-carzborn.jpg",
	},
	{
		name : "Jesper Kling",
		image: "images/jesper-kling.jpg",
	},
	{
		name : "Johan Ranestam",
		image: "images/johan-ranestam.jpg",
	},
	{
		name : "Johanna Bäckström",
		image: "images/johanna-backstrom.jpg",
	},
	{
		name : "Johanna Jönsson",
		image: "images/johanna-jonsson.jpg",
	},
	{
		name : "Jona Torsson",
		image: "images/jona-torsson.jpg",
	},
	{
		name : "Josefine Ahlstedt",
		image: "images/josefine-ahlstedt.jpg",
	},
	{
		name : "Julia Jespersdotter Högman",
		image: "images/julia-jespersdotter-hogman.jpg",
	},
	{
		name : "Julia Nemell",
		image: "images/julia-nemell.jpg",
	},
	{
		name : "Linus Lindberg",
		image: "images/linus-lindberg.jpg",
	},
	{
		name : "Malin Olsson",
		image: "images/malin-olsson.jpg",
	},
	{
		name : "Maria Haara-Lundhammar",
		image: "images/maria-haara-lundhammar.jpg",
	},
	{
		name : "Maria Lövgren",
		image: "images/maria-lovgren.jpg",
	},
	{
		name : "Nikola Dimitrijoski",
		image: "images/nikola-dimitrijoski.jpg",
	},
	{
		name : "Paulina Kiendys",
		image: "images/paulina-kiendys.jpg",
	},
	{
		name : "Raymond Lam",
		image: "images/raymond-lam.jpg",
	},
	{
		name : "Robin Karlsson",
		image: "images/robin-karlsson.jpg",
	},
	{
		name : "Sara Almqvist",
		image: "images/sara-almqvist.jpg",
	},
	{
		name : "Tim Nilsson",
		image: "images/tim-nilsson.jpg",
	},
	{
		name : "Tirapat Sukjit",
		image: "images/tirapat-sukjit.jpg",
	},
	{
		name : "Tobias Silfverberg",
		image: "images/tobias-silfverberg.jpg",
	},
	{
		name : "Wiktoria Dobrzewinska",
		image: "images/wiktoria-dobrzewinska.jpg",
	},
];

// get a random index from the array
let randomImageIndex = () => {
	return classmates[Math.floor(Math.random() * classmates.length)];
}
let randomIndex = randomImageIndex();

const imageOfClassmateEl = document.querySelector("#imageOfClassmate");
let randomImage = function() {
    imageOfClassmateEl.setAttribute('src', randomIndex.image );
}
randomImage();

// få det rätta svaret på random position
let rightAnswer = randomIndex.name

let rightAnswerPosition = Math.floor(Math.random()*4)+1;
let rightAnswerID = "btn" + rightAnswerPosition;
document.getElementById(rightAnswerID).innerHTML = rightAnswer;
// console.log(rightAnswer, rightAnswerID);


// få det felaktiga svaret på random position
let wrongAnswer1 = classmates[Math.floor(Math.random() * classmates.length)].name;

while (wrongAnswer1 === rightAnswer) {
	wrongAnswer1 = classmates[Math.floor(Math.random() * classmates.length)].name;
}


let wrongAnswerPosition = Math.floor(Math.random()*4)+1;
while (rightAnswerPosition === wrongAnswerPosition) {
	wrongAnswerPosition = Math.floor(Math.random()*4)+1;
	//console.log(wrongAnswerPosition);
} 
let wrongAnswerID = "btn" + wrongAnswerPosition;
document.getElementById(wrongAnswerID).innerHTML = wrongAnswer1;
//console.log("wrong answer 1:", wrongAnswer1, wrongAnswerID);

let wrongAnswer2 = classmates[Math.floor(Math.random() * classmates.length)].name;

while (wrongAnswer2 === rightAnswer || wrongAnswer2 === wrongAnswer1) {
	wrongAnswer2 = classmates[Math.floor(Math.random() * classmates.length)].name;
}


 let wrongAnswer2Position = Math.floor(Math.random()*4)+1;
while (rightAnswerPosition === wrongAnswer2Position || wrongAnswerPosition === wrongAnswer2Position) {
	wrongAnswer2Position = Math.floor(Math.random()*4)+1;
	//console.log(wrongAnswer2Position);
} 
 wrongAnswerID = "btn" + wrongAnswer2Position;
document.getElementById(wrongAnswerID).innerHTML = wrongAnswer2;
//console.log("wrong answer 2:", wrongAnswer2, wrongAnswerID);


let wrongAnswer3 = classmates[Math.floor(Math.random() * classmates.length)].name;

while (wrongAnswer3 === rightAnswer || wrongAnswer3 === wrongAnswer1 || wrongAnswer3 === wrongAnswer2) {
	wrongAnswer3 = classmates[Math.floor(Math.random() * classmates.length)].name;
}


 let wrongAnswer3Position = Math.floor(Math.random()*4)+1;
while (rightAnswerPosition === wrongAnswer3Position || wrongAnswerPosition === wrongAnswer3Position || wrongAnswer2Position === wrongAnswer3Position) {
	wrongAnswer3Position = Math.floor(Math.random()*4)+1;
//	console.log(wrongAnswer3Position);
} 
 wrongAnswerID = "btn" + wrongAnswer3Position;
document.getElementById(wrongAnswerID).innerHTML = wrongAnswer3;
//console.log("wrong answer 3:", wrongAnswer3, wrongAnswerID);


// click- event så en ny bild kommer när man gissar
document.querySelector('#btnContainer').addEventListener('click', e => {

		if (e.target.innerHTML === rightAnswer) {
			console.log("That was right");
		} else {
			console.log("That was wrong");
		}

		randomImageIndex();
		randomIndex = randomImageIndex();
		randomImage();

		// få ett nytt rätt svar på random position
		rightAnswer = randomIndex.name

		rightAnswerPosition = Math.floor(Math.random()*4)+1;
		rightAnswerID = "btn" + rightAnswerPosition;
		document.getElementById(rightAnswerID).innerHTML = rightAnswer;
		// console.log(rightAnswer, rightAnswerID);


		// få det felaktiga svaret på random position
		wrongAnswer1 = classmates[Math.floor(Math.random() * classmates.length)].name;

		while (wrongAnswer1 === rightAnswer) {
			wrongAnswer1 = classmates[Math.floor(Math.random() * classmates.length)].name;
		}


		wrongAnswerPosition = Math.floor(Math.random()*4)+1;
		while (rightAnswerPosition === wrongAnswerPosition) {
			wrongAnswerPosition = Math.floor(Math.random()*4)+1;
			//console.log(wrongAnswerPosition);
		} 
		wrongAnswerID = "btn" + wrongAnswerPosition;
		document.getElementById(wrongAnswerID).innerHTML = wrongAnswer1;
		//console.log("wrong answer 1:", wrongAnswer1, wrongAnswerID);

		wrongAnswer2 = classmates[Math.floor(Math.random() * classmates.length)].name;

		while (wrongAnswer2 === rightAnswer || wrongAnswer2 === wrongAnswer1) {
			wrongAnswer2 = classmates[Math.floor(Math.random() * classmates.length)].name;
		}


		wrongAnswer2Position = Math.floor(Math.random()*4)+1;
		while (rightAnswerPosition === wrongAnswer2Position || wrongAnswerPosition === wrongAnswer2Position) {
			wrongAnswer2Position = Math.floor(Math.random()*4)+1;
			//console.log(wrongAnswer2Position);
		} 
		wrongAnswerID = "btn" + wrongAnswer2Position;
		document.getElementById(wrongAnswerID).innerHTML = wrongAnswer2;
		//console.log("wrong answer 2:", wrongAnswer2, wrongAnswerID);


		wrongAnswer3 = classmates[Math.floor(Math.random() * classmates.length)].name;

		while (wrongAnswer3 === rightAnswer || wrongAnswer3 === wrongAnswer1 || wrongAnswer3 === wrongAnswer2) {
			wrongAnswer3 = classmates[Math.floor(Math.random() * classmates.length)].name;
		}


		wrongAnswer3Position = Math.floor(Math.random()*4)+1;
		while (rightAnswerPosition === wrongAnswer3Position || wrongAnswerPosition === wrongAnswer3Position || wrongAnswer2Position === wrongAnswer3Position) {
			wrongAnswer3Position = Math.floor(Math.random()*4)+1;
		//	console.log(wrongAnswer3Position);
		} 
		wrongAnswerID = "btn" + wrongAnswer3Position;
		document.getElementById(wrongAnswerID).innerHTML = wrongAnswer3;
		//console.log("wrong answer 3:", wrongAnswer3, wrongAnswerID);
	
});

	// console.log(randomImageIndex().name);
	// console.log(randomImageIndex().name);

// fixa så att namn inte kommer dubbla gånger




/*
//url för current image som visas, borde väl användas till gissningen
const currentImageSrcValue = imageOfClassmateEl.getAttribute('src');
console.log(currentImageSrcValue);
*/
let executeButton = document.getElementById("executeButton");
let userInput = document.getElementById("userInput");
let output = document.getElementById("output")
let foods = ["hamburger", "dumpling", "ramen", "sushi", "taco", "spaghetti", "pizza", "fried rice"];

executeButton.addEventListener("click", function() {
	let currentInput = userInput.value;
	generator(currentInput);
	restyle();
});

function generator(userInput) {
	let randomIdx = Math.floor(Math.random() * foods.length);
	console.log(randomIdx);
	let randomFood = foods[randomIdx];
	output.innerText = userInput + ", your food for the day is " + randomFood;
};

function restyle() {
	let r = Math.random() * 255;
	let g = Math.random() * 255;
	let b = Math.random() * 255;
	let randomColor = "rgb("+r+","+g+","+b+")";
	output.style.color = randomColor;

	let size = Math.floor(Math.random() * 10);
	let randomSize = ""+size+"vw";
	output.style.fontSize = randomSize;

	let deg = Math.floor(Math.random() * 360);
	let randomDeg = "rotate("+deg+"deg)";
	output.style.transform = randomDeg;
};
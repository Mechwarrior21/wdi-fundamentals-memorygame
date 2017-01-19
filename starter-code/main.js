console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


if ("king" = "king") {
	window.alert("You found a match!")
}; 
else if ("queen"= "queen") {
	window.alert("You found a match!")
}; 
else {
	window.alert("Sorry, try again.")
};

var createCards = function() {	
	var gameboard = document.getElementById('game-board'); {
		for (var 1 = 0; i < 4; i++)
		var newCard = document.createElement('div');
		newCard.class.Name = "card";
		document.getElementById("game-board")[1].appendChild (newCard);
	}
	
}
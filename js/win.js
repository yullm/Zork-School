// JavaScript Document

//event listener for the win screen.

window.onload = function(){	//Create event listener when page loads
	'use strict';
	document.addEventListener('keydown', keyIn);
};

function keyIn(input){		//Check for ENTER key press. If pressed return to index page to restart game.
	'use strict';
	if(input.keyCode === 13){
		location.assign("index.html");
	}
}
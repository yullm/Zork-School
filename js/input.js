// JavaScript Document

var curString = "";	//global variable declaration for the users input string
var userText;		//global variable declaration for the users display box. This script will update it as they type
var dispText;		//global variable declaration for the main display box. It will update with info for each location.
var feedback;		//global variable declaration for the feedback display box. It will update when the user attempts actions.


window.onload = function(){	//when the window loads
	'use strict';
	document.addEventListener('keydown', receiver);			//creating a keydown event listener
	userText = document.querySelector("#userText p");		//assigning the userText variable to the DOM object
	feedback = document.querySelector("#feedback p");		//assigning the feedback variable to the DOM object
	dispText = document.querySelector("#displayText p");	//assigning the dispText variable to the DOM object
	
};

function receiver(input){	//The heart of our application || This function takes the keypress and turns them into usable strings and commands.
	'use strict';
	if(input.keyCode !== 13){			//Here we check if the keypressed was not ENTER || if not lets do something, if so move to the else statement
		if(input.keyCode === 8){		//We also check here if BACKSPACE was pressed. It's important for the user to be able to erase mistakes || just weird if you cant.
			input.preventDefault();		//When BACKSPACE is pushed most browsers will go back a page. We don't want this so here we disable it.
			curString = curString.substring(0,(curString.length - 1));	//Here we remove the last character in the curString variable which holds our keypresses sequentially.
			userText.innerHTML = curString;								//We update the DOM object to reflect the deletion.
		}else{
			curString += String.fromCharCode(input.keyCode);	//If the key was not BACKSPACE or ENTER we will add it the curString variable
			userText.innerHTML = curString;						//We update the DOM object to reflect the addition.
		}
	}
	
	else{										//If ENTER WAS pressed
		curString = curString.toUpperCase();	//We transform the input string to all uppercase for ease of use.
		var pieces = curString.split(" ",2);	//The input string while either be one word for a location or two for an action and object. Here we create a variable to hold a maximum of two string segments seperated by a space
		if(position !== "START"){	//We want a limited amount of commands at the very start so we check if that is the case
			switch(pieces[0]){		//Now we check the first word type. If it hits one of our case we can do something with it
			case "USE":				//In the case of USE
				if(pieces[1]){		//We check if they user has given us an object to USE
					use(pieces[1]);	//If so we send it of to the use function in the interaction script.
				}
				else{				//if no object was given. We prompt the user to make sure they do.
					feedback.innerHTML = ("You have to chose something to USE. Some adventurer you are"); 
				}
				break;
			case "LOOK":			//LOOK follows the same structure as USE
				if(pieces[1]){
					look(pieces[1]);
				}
				else{
					feedback.innerHTML = ("Look at an OBJECT!"); 
				}
				break;
			case "SPEAK":		//LOOK follows the same structure as USE and LOOK
				if(pieces[1]){
					speak(pieces[1]);
				}
				else{
					feedback.innerHTML = ("Good Boy! Speak to someone or something next time."); 
				}
				break;
			case "BED":			//In the case of a location we want to check if the user type just the location name. No object needs to be passed.
				if(pieces[1]){	//If they passed any second word. We send out this prompt to the user.
					feedback.innerHTML = (curString + "? What awful things are trying to do to the BED?"); 
				}
				else{
					enterBed();	//If they just typed BED then the player moves to the bed and the enterBed function is called. This will change what is displayed on the page and how the user interacts with things.
				}
				break;
			case "GAUNTLET":	//Is a location and functions just like BED
				if(pieces[1]){
					feedback.innerHTML = (curString + "? What awful things are trying to do to the GAUNTLET?"); 
				}
				else{
					if(hasGauntlet){
						feedback.innerHTML = ("You are wearing the gauntlet. The stand is of no use to you anymore.");
					}
					else{
						enterGauntlet();
					}
				}
				break;
			case "WINDOW":	//Is a location and functions just like BED
				if(pieces[1]){
					feedback.innerHTML = (curString + "? What awful things are trying to do to the BED?"); 
				}
				else{
					enterWindow();
				}
				break;
			case "CHEST":	//Is a location and functions just like BED
				if(pieces[1]){
					feedback.innerHTML = (curString + "? What awful things are trying to do to the CHEST?"); 
				}
				else{
					enterChest();
				}
				break;
			case "CELLDOOR":	//Is a location and functions just like BED
				if(pieces[1]){
					feedback.innerHTML = (curString + "? What awful things are trying to do to the CELLDOOR?"); 
				}
				else{
					if(doorOpen){	//We do check if the global variable doorOpen is true. if so then we do something different
						enterHall();
					}
					else{
						enterCell();
					}
				}
				break;
			case "HALLWAY":	//Is a location and functions just like CELLDOOR
				if(pieces[1]){
					feedback.innerHTML = (curString + "? What awful things are trying to do to the HALLWAY?"); 
				}
				else{
					if(doorOpen){	//We do check if the global variable doorOpen is true. if so then we do something different
						enterHall();
					}
					else{
						feedback.innerHTML = ("Do you not see the CELLDOOR in the way? Not the brightest, are you?"); 
					}
				}
				break;
			case "GATE":	//Is a location and functions just like CELLDOOR
				if(pieces[1]){
					feedback.innerHTML = (curString + "? What awful things are trying to do to the HALLWAY?"); 
				}
				else{
					if(doorOpen){
						enterGate();
					}
					else{
						feedback.innerHTML = ("What GATE?"); 
					}
				}
				break;
			case "ZORK":	//Is a location and functions just like BED
				if(pieces[1]){
					feedback.innerHTML = (curString + "? What awful things are trying to do to ZORK?"); 
				}
				else{
					enterZork();
				}
				break;
			case "PHIL":	//PHIL isn't a location just a unique Character. Kinda of an easter egg if you type PHIL. It just describes him more. He' so gross.
				if(pieces[1]){
					feedback.innerHTML = (curString + "? What awful things are trying to do to PHIL?"); 
				}
				else{
					feedback.innerHTML = ("PHIL is a disgusting looking man. He stands there, just out of reach, watching you. An occasional laugh or cough expels from his mouth. He has liquids-a-plenty splashed across his bumpy face. Gross, just fucking gross.");
				}					
				break;
			case "HELP":	//Typing help will display the instructions again,
				if(pieces[1]){
					feedback.innerHTML = ("Type HELP by itself for HELP"); 
				}
				else{
					feedback.innerHTML = ("LOCATIONS and OBJECTS are referenced in CAPITALS. <br> Go to a LOCATION by typing the name of the LOCATION. <br> INTERACT with an OBJECT by typing USE, LOOK or SPEAK then the OBJECT name (e.g LOOK BIKE). <br> Type HELP for HELP."); 
				}
				break;
			default:	//If we find no useful commands in the first string segment then we tell the user.
				feedback.innerHTML = (curString + " what does that even mean?");
				break;
			}
		}
		else{	//This section covers if the player is at the start location. It has less options but executes just the same.
			switch(pieces[0]){
				case "USE":
					if(pieces[1]){
						use(pieces[1]);
					}
					else{
						feedback.innerHTML = ("You can't use anything under this blanket. Get out of BED."); 
					}
					break;
				case "LOOK":
					if(pieces[1]){
						look(pieces[1]);
					}
					else{
						feedback.innerHTML = ("You can't see anything but blanket. Get out of BED."); 
					}
					break;
				case "SPEAK":
					if(pieces[1]){
						speak(pieces[1]);
					}
					else{
						feedback.innerHTML = ("Your screams are muffled by the blanket over your head. Get out of BED."); 
					}
					break;
				case "BED":
					if(pieces[1]){
						feedback.innerHTML = (curString + "? What awful things are tying to do to the BED?"); 
					}
					else{
						enterBed();
					}
					break;
				case "HELP":
					if(pieces[1]){
						feedback.innerHTML = ("Type HELP by itself for HELP"); 
					}
					else{
						feedback.innerHTML = ("LOCATIONS and OBJECTS are referenced in CAPITALS. <br> Go to a LOCATION by typing the name of the LOCATION. <br> INTERACT with an OBJECT by typing USE, LOOK or SPEAK then the OBJECT name (e.g LOOK BIKE). <br> Type HELP for HELP."); 
					}
					break;
				default:
					feedback.innerHTML = (curString + " what does that even mean?");
				break;
			}
		}
		curString = "";	//After all calculations are performed we reset the input string
		userText.innerHTML = curString;	//And clear it on the screen.
	}
}
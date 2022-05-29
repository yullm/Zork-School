// JavaScript Document

//This script dictates the flow of typed inputs. If the input is passes the input script it will have chosen an action(USE, LOOK or SPEAK) and will pass on what object to apply it to
//Depending on the plays location different functions will be called. So this script takes the position of the placyer and sends the objects to that positions action funcitons. Kinda of like a post office.

function use(object){ //This one is called when the play wants to use an object. Taking in the object and passing it through.
	'use strict';
	switch(position){ //A switch statement for each position available
		case "START":
			feedback.innerHTML = "You're under a blanket get out of BED if you want to USE anything."; //You start under a blanket so no functions are called just some feedback.
			break;		//The feedback variable is global from the input script. It references one of the display boxes on the webpage.
		case "BED":
			bedUse(object);	//Calling the bedUse function in the bed script and passes it the object. Simple as that. Each case does this exact thing.
			break;
		case "CHEST":
			chestUse(object);
			break;
		case "GAUNTLET":
			gauntletUse(object);
			break;
		case "WINDOW":
			windowUse(object);
			break;
		case "CELLDOOR":
			cellUse(object);
			break;
		case "HALLWAY":
			hallUse(object);
			break;
		case "GATE":
			gateUse(object);
			break;
		case "ZORK":
			zorkUse(object);
			break;
	}
}

//the look and speak functions do the same thing as the use function just with the look and speak commands/funcitons.

function look(object){
	'use strict';
	switch(position){
		case "START":
			feedback.innerHTML = "All you see is a blanket.. Get out of BED";
			break;
		case "BED":
			bedLook(object);
			break;
		case "CHEST":
			chestLook(object);
			break;
		case "GAUNTLET":
			gauntletLook(object);
			break;
		case "WINDOW":
			windowLook(object);
			break;
		case "CELLDOOR":
			cellLook(object);
			break;
		case "HALLWAY":
			hallLook(object);
			break;
		case "GATE":
			gateLook(object);
			break;
		case "ZORK":
			zorkLook(object);
			break;
	}

}

function speak(object){
	'use strict';
	switch(position){
		case "START":
			feedback.innerHTML = "You talk to the BED, because you can't see what you wanted to talk to. It doesn't respond. Should it have?";
			break;
		case "BED":
			bedSpeak(object);
			break;
		case "CHEST":
			chestSpeak(object);
			break;
		case "GAUNTLET":
			gauntletSpeak(object);
			break;
		case "WINDOW":
			windowSpeak(object);
			break;
		case "CELLDOOR":
			cellSpeak(object);
			break;
		case "HALLWAY":
			hallSpeak(object);
			break;
		case "GATE":
			gateSpeak(object);
			break;
		case "ZORK":
			zorkSpeak(object);
			break;
	}

}
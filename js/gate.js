// JavaScript Document// JavaScript Document
//All location scripts function the same way. REFER TO THE BED SCRIPT for documentation on location scripts.


var gateDisc = "Gleaming as if freshly oiled. It looks sturdy. There is a keyhole in the middle. Is this the end? or just another trick? You notice that PHIL has reappeared. Peeking out behind the door frame.<br><br> You may search out the BED, CHEST, WINDOW, HALLWAY and ZORK.";

function enterGate(){
	'use strict';
	dispText.innerHTML = gateDisc;
	position = "GATE";
}

function gateUse(object){
	'use strict';
	switch(object){
	case "RIB":
		feedback.innerHTML = ("The RIB has no use here.");	
		break;
	case "BELT":
		feedback.innerHTML = ("The BELT has no use here");
		break;
	case "GAUNTLET":
		feedback.innerHTML = ("This GATE withstands thrashing after trashing from the GAUNTLET. It must have godly powers.");
		break;
	case "KEY":
		location.assign("win.html");
		break;
	case "BED":
		feedback.innerHTML = ("Go to the BED if you want USE it");
		break;
	case "WINDOW":
		feedback.innerHTML = ("Go to the WINDOW if you want USE it");
		break;
	case "CHEST":
		feedback.innerHTML = ("Go to the CHEST if you want USE it");
		break;
	case "CELLDOOR":
		feedback.innerHTML = ("The CELLDOOR is pretty well smashed. Leave it alone.");
		break;
	case "HALLWAY":
		feedback.innerHTML = ("You're in it. You're walking around. What else could you use it for?");
		break;
	case "GATE":
		feedback.innerHTML = ("No amount of prying will open the GATE. Find something to open it with.");
		break;
	case "ZORK":
		feedback.innerHTML = ("Go to ZORK if you want to USE him, for things...");
		break;
	case "PHIL":
		feedback.innerHTML = ("OH JESUS, NO, NO! I WON'T EVEN THINK ABOUT THAT. YOU CAN'T! NOPE! HE'S SO GROSS. GO AWAY PHIL! FUCK!");
		break;
	default:
		feedback.innerHTML = ("What is a " + object + "? I've never heard of that. You can't use that here.. Is your intelligence, like, -1? You should have re-rolled those stats, brother.");
		break;
	}
	
}

function gateLook(object){
	'use strict';
		switch(object){
	case "RIB":
		feedback.innerHTML = ("It's an off-white color from what you can tell. ZORK's blood is globbed onto the RIB. He was a good guy that ZORK.");
		break;
	case "BELT":
		feedback.innerHTML = ("This thing is awesome! The craftsmanship is spectacular. As you wear it, you can feel its power surging through you. Look at you now. Not such a loser after all.");
		break;
	case "GAUNTLET":
		feedback.innerHTML = ("You thought the BELT was awesome?! This thing blows that shit out of the water. You can't tell anything about it, other than that it is shiny. Probably some Dwarven metal. You are so ready to kick some ass!!");
		break;
	case "KEY":
		feedback.innerHTML = ("Wrought iron, kinda janky but will definitely do the job. Looks like it was made with skill, but quickly.");
		break;
	case "BED":
		feedback.innerHTML = ("You can't see that from here.");
		break;
	case "WINDOW":
		feedback.innerHTML = ("You can't see that from here.");
		break;
	case "CHEST":
		feedback.innerHTML = ("You can't see that from here.");
		break;
	case "CELLDOOR":
		feedback.innerHTML = ("It is open. You should get out of here quickly!");
		break;
	case "HALLWAY":
		feedback.innerHTML = ("Stone and sweaty. Not inviting in any way. You long to be out of it.");
		break;
	case "GATE":
		feedback.innerHTML = ("Gleaming as if freshly oiled. It looks sturdy. There is a keyhole in the middle.");
		break;
	case "ZORK":
		feedback.innerHTML = ("You can't see ZORK from here. You can smell him though.");
		break;
	case "PHIL":
		feedback.innerHTML = ("So digusting, that you can't look away. OH, BUT YOU MUST! YOUR EYES, THEY BURN. Your eyes water, blurring your vision. Sweet relief.");
		break;
	default:
		feedback.innerHTML = ("What is a " + object + "? I've never heard of that. I've heard, they have potions to increase your perception. Not sure if they can fix stupid though. You might be out of luck.");
		break;
	}

}

function gateSpeak(object){
	'use strict';
		switch(object){
	case "RIB":
		feedback.innerHTML = ("If you weren't an idiot you might be able use this for a spell. Too bad you are.");
		break;
	case "BELT":
		feedback.innerHTML = ("You praise the belt for being glorious. Then yourself for wearing such a glorious accessory.");
		break;
	case "GAUNTLET":
		feedback.innerHTML = ("You try to form sentences, your words come out as war cries. This GAUNTLET yearns for blood and you will deliver.");
		break;
	case "KEY":
		feedback.innerHTML = ("Why are you talking to a key?");
		break;
	case "BED":
		feedback.innerHTML = ("Why are you talking to a bed?");
		break;
	case "WINDOW":
		feedback.innerHTML = ("LET ME OUT you yell. Silence fills the room as your echo subsides. Windows can't talk.");
		break;
	case "CHEST":
		feedback.innerHTML = ("You shout to the chest. In your mind you hear LEAVE ME ALONE! Could this have really been the chest?");
		break;
	case "CELLDOOR":
		feedback.innerHTML = ("It doesn't reply!");
		break;
	case "HALLWAY":
		feedback.innerHTML = ("Your screams echo back at you.");
		break;
	case "GATE":
		feedback.innerHTML = ("You yell at the GATE. No answer comes. I guess it doesn't like you. I don't like you, either.");
		break;
	case "ZORK":
		feedback.innerHTML = ("You recount the great times you had together. Now you're sobbing. Way to go, softy.");
		break;
	case "PHIL":
		feedback.innerHTML = ("You call out to PHIL. For reasons, I could never image. He begs you to come closer to the CELLDOOR. His voice, unintelligibly more putrid than his appearance. The thought disgusts you. You may not have any other options. Feel free to vomit.");
		break;
	default:
		feedback.innerHTML = ("You speak to " + object + "? I don't know what that is. I hope the conversation was enthralling");
		break;
	}

}


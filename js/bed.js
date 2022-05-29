// JavaScript Document

//All location scripts function the same way. Refer to this script for documentation on location scripts.

//Each location has a description variable. It holds the data that will be presented to the user when entering the location. It offers a description of your surroundings and options for the user.
var bedDisc = "You sit on the edge of the BED, you are in a small cell. Directly infront of you is a GAUNTLET stand. A shiny one at that. On your left is wooden CHEST. On your right is barred WINDOW looking out at the outside world. It's still day time. Across the room you see a CELLDOOR. A gross looking PHIL peers in at you. What a disgusting human being. Luckily your gaze is directed towards ZORK. Your best friend rotting in the corner of the room. The site is horrific, yet pleasant compared to PHIL's face.";

function enterBed(){	//This function sets up the screen to display this locations info
	'use strict';
	dispText.innerHTML = bedDisc;	//We set the dispText global variable's innerHTML to the locations description. Which shows on the screen.
	position = "BED";	//We change the global position variable to this location so the interation script with send actions to this script.
}

function bedUse(object){		//This is called when the USE command is written followed by an object(Which we are passed, as a string). As long as the position variable is set to BED
	'use strict';
	switch(object){				//We check how can use the object passed at this location.
	case "RIB":			//for the case of RIB
		if(hasRib){		//Some times we will check for a vaiable in this case the hasRib variable. Depending on a situation we want to give different feed back.
			feedback.innerHTML = ("You rub the RIB on the BED. It makes a horribly sound. Nails on chalkboard level of bad.");
		}				//In some cases events will be set into place or variables with be switch on.
		else{
			feedback.innerHTML = ("You can't USE things you don't have. Filthy casual.");
		}
		break;
	case "BELT":	//For all collectable object we check if the user has collected them.
		if(hasBelt){
			feedback.innerHTML = ("With almost no effort at all, you lift the BED above your head. Look at you, wasting all this time.");
		}
		else{
			feedback.innerHTML = ("You can't USE things you don't have. Filthy casual.");
		}
		break;
	case "GAUNTLET":	//For all collectable object we check if the user has collected them.
		if(hasGauntlet){
			feedback.innerHTML = ("The GAUNTLET doesn't need to sleep.");
		}
		else{
			feedback.innerHTML = ("Go to the GAUNTLET if you want USE it.");
		}
		break;
	case "KEY":		//For all collectable object we check if the user has collected them.
		if(hasKey){
			feedback.innerHTML = ("The KEY does not unlock the BED. Great thinking.. You got this far and you actually tried that?");
		}
		else{
			feedback.innerHTML = ("Maybe if you had one of those, you wouldn't be in here. With dirty ol' Phil, peeking in, watching you. What a creep.");
		}
		break;
	case "BED":		//If the user is at the location we give it the option of using it for something
		feedback.innerHTML = ("Now is not the time to use the bed. You are so lazy! All the other narrators get Strong Adventurers. I get this loser. Whatever, go to sleep if you like. It was relaxing! Happy?");
		break;
	case "WINDOW":	//If the user is not at the location we prompt them to go to the location
		feedback.innerHTML = ("Go to the WINDOW if you want USE it");
		break;
	case "CHEST":
		feedback.innerHTML = ("Go to the CHEST if you want USE it");
		break;
	case "CELLDOOR":
		feedback.innerHTML = ("Go to the CELLDOOR if you want USE it");
		break;
	case "HALLWAY":
		if(doorOpen){
			feedback.innerHTML = ("Go to the HALLWAY if you want USE it.");
		}
		else{
			feedback.innerHTML = ("There's a door in the way. Did you forget? You'd have to go near PHIL to do that anyway. Why would you do that to yourself?");
		}
		break;
	case "GATE":
		if(doorOpen){
			feedback.innerHTML = ("Go to the GATE if you want USE it.");
		}
		else{
			feedback.innerHTML = ("What GATE?");
		}
		break;
	case "ZORK":
		feedback.innerHTML = ("Go to ZORK if you want to USE him, for things...");
		break;
	case "PHIL":	//Phil can never really be used for anything or gone too. We just like saying mean things about him
		feedback.innerHTML = ("OH JESUS, NO, NO! I WON'T EVEN THINK ABOUT THAT. YOU CAN'T! NOPE! HE'S SO GROSS. GO AWAY PHIL! FUCK!");
		break;
	default:		//If the object passed if not on the above case list we send this prompt back
		feedback.innerHTML = ("What is a " + object + "? I've never heard of that. You can't use that here.. Is your intelligence, like, -1? You should have re-rolled those stats, brother.");
		break;
	}
	
}
	//The bedLook function is of the same structure of bedUse. The feedback changes per case but no new steps are taken
function bedLook(object){
	'use strict';
		switch(object){
	case "RIB":
		if(hasRib){
			feedback.innerHTML = ("It's an off-white color from what you can tell. ZORK's blood is globbed onto the RIB. He was a good guy that ZORK.");
		}
		else{
			feedback.innerHTML = ("You can't LOOK at things you don't have. Filthy casual.");
		}
		break;
	case "BELT":
		if(hasBelt){
			feedback.innerHTML = ("This thing is awesome! The craftsmanship is spectacular. As you wear it, you can feel its power surging through you. Look at you now. Not such a loser after all.");
		}
		else{
			feedback.innerHTML = ("You can't LOOK at things you don't have. Filthy casual.");
		}
		break;
	case "GAUNTLET":
		if(hasGauntlet){
			feedback.innerHTML = ("You thought the BELT was awesome?! This thing blows that shit out of the water. You can't tell anything about it, other than that it is shiny. Probably some Dwarven metal. You are so ready to kick some ass!!");
		}
		else{
			feedback.innerHTML = ("Damn is it shiny. It seems to tremble with power. You want it. Go, touch it.");
		}
		break;
	case "KEY":
		if(hasKey){
			feedback.innerHTML = ("Wrought iron, kinda janky but will definitely do the job. Looks like it was made with skill, but quickly.");
		}
		else{
			feedback.innerHTML = ("Maybe if you had one of those, you wouldn't be in here. With dirty ol' Phil, peeking in, watching you. What a creep.");
		}
		break;
	case "BED":
		feedback.innerHTML = ("More of a stone slab with hay on it, really. That BED does not look comfortable. No wonder your neck hurts.");
		break;
	case "WINDOW":
		feedback.innerHTML = ("Solid iron bars block your view. Get closer for a better look outside.");
		break;
	case "CHEST":
		feedback.innerHTML = ("Wooden, but sturdy. What treasures does it hold?");
		break;
	case "CELLDOOR":
		if(doorOpen){
			feedback.innerHTML = ("It is open. You should get out of here quickly!");
		}
		else{
			feedback.innerHTML = ("You try to look at the CELLDOOR but you keep glancing up at PHIL. He is just putrid. So digusting, that you can't look away. OH, BUT YOU MUST! YOUR EYES, THEY BURN. From what you can tell the door is sturdy iron. GO AWAY PHIL!");
		}
		break;
	case "HALLWAY":
		if(doorOpen){
			feedback.innerHTML = ("You can just see the stone floor and walls. PHIL peaks at you from around the door frame.");
		}
		else{
			feedback.innerHTML = ("There's a door in the way. Did you forget? You'd have to go near PHIL to do that anyway. Why would you do that to yourself?");
		}
		break;
	case "GATE":
		if(doorOpen){
			feedback.innerHTML = ("You can't see the Gate from here");
		}
		else{
			feedback.innerHTML = ("What GATE?");
		}
		break;
	case "ZORK":
		feedback.innerHTML = ("Flys circle poor ZORK's body. He still wears his mother's scarf. He has a large wound in his stomach that has begun to fester. It smells.");
		break;
	case "PHIL":
			feedback.innerHTML = ("So digusting, that you can't look away. OH, BUT YOU MUST! YOUR EYES, THEY BURN. Your eyes water, blurring your vision. Sweet relief.");
		break;
	default:
		feedback.innerHTML = ("What is a " + object + "? I've never heard of that. I've heard, they have potions to increase your perception. Not sure if they can fix stupid though. You might be out of luck.");
		break;
	}

}
	//The bedLook function is of the same structure of bedUse and bedLook. The feedback changes per case but no new steps are taken
function bedSpeak(object){
	'use strict';
		switch(object){
	case "RIB":
		if(hasRib){
			feedback.innerHTML = ("If you weren't an idiot you might be able use this for a spell. Too bad you are.");
		}
		else{
			feedback.innerHTML = ("Speak to what now? Get out of here.");
		}
		break;
	case "BELT":
		if(hasBelt){
			feedback.innerHTML = ("You praise the belt for being glorious. Then yourself for wearing such a glorious accessory.");
		}
		else{
			feedback.innerHTML = ("Speak to what now? Get out of here.");
		}
		break;
	case "GAUNTLET":
		if(hasGauntlet){
			feedback.innerHTML = ("You try to form sentences, your words come out as war cries. This GAUNTLET yearns for blood and you will deliver.");
		}
		else{
			feedback.innerHTML = ("You squeal at it's beauty.");
		}
		break;
	case "KEY":
		if(hasKey){
			feedback.innerHTML = ("Why are you talking to a key?");
		}
		else{
			feedback.innerHTML = ("Maybe if you had one of those, you wouldn't be in here. With dirty ol' Phil, peeking in, watching you. What a creep.");
		}
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
		if(doorOpen){
			feedback.innerHTML = ("Your screams echo back at you.");
		}
		else{
			feedback.innerHTML = ("Get closer if want to speak to the HALLWAY. What a strange sentence.");
		}
		break;
	case "GATE":
		if(doorOpen){
			feedback.innerHTML = ("You yell for the GATE in the HALLWAY. No answer comes. I guess it doesn't like you. I don't like you, either.");
		}
		else{
			feedback.innerHTML = ("What GATE?");
		}
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


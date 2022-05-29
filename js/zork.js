// JavaScript Document
//All location scripts function the same way. REFER TO THE BED SCRIPT for documentation on location scripts.


var zorkDisc = "You kneel down, beside ZORK. You've been friends, since childhood. It saddens you to see him like this. Vengeance is on the horizon. He's wearing his mother's scarf. He's had it since you last left home, a few years ago. You consider taking the scarf, to return it to her. ZORK would probably like to buried in it. All in due time. His body is beginning to fester. You can see a large wound, where his stomach should be. His ribcage is poking out. Each RIB has small bite marks on it. Some vermin has been eating ZORK! He must be buried and soon. <br><br> You can go see the CHEST, CELLDOOR, WINDOW, GAUNTLET Stand and BED.";

function enterZork(){
	'use strict';
	dispText.innerHTML = zorkDisc;
	position = "ZORK";
}

function zorkUse(object){
	'use strict';
	switch(object){
	case "RIB":
		if(hasRib){
			feedback.innerHTML = ("Probably best not to put the RIB back. Taking more would be desecration.");
		}
		else{
			feedback.innerHTML = ("You tear one of ZORK's ribs from his stomach cavity. It disgusts you but is a ritual where you come from. When freed of this cell, you will wash the RIB. Once washed, you will tie it into your hair.");
			hasRib = true;
		}
		break;
	case "BELT":
		if(hasBelt){
			feedback.innerHTML = ("The idea, over covering ZORK's stomach with the BELT, comes to mind. If it wasn't so amazing you might actually of done it.");
		}
		else{
			feedback.innerHTML = ("You can't USE things you don't have. Filthy casual.");
		}
		break;
	case "GAUNTLET":
		if(hasGauntlet){
			feedback.innerHTML = ("Nothing good can come from merging ZORK's body and the GAUNTLET.");
		}
		else{
			feedback.innerHTML = ("Go to the GAUNTLET if you want USE it.");
		}
		break;
	case "KEY":
		if(hasKey){
			feedback.innerHTML = ("The KEY has no used on poor ZORK here. Quickly find a way out, so you can bury him.");
		}
		else{
			feedback.innerHTML = ("Maybe if you had one of those, you wouldn't be in here. With dirty ol' Phil, peeking in, watching you. What a creep.");
		}
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
		feedback.innerHTML = ("I'll close my eyes while you USE ZORK.. whatever that means. You have 5 minutes.");
		break;
	case "PHIL":
			feedback.innerHTML = ("OH JESUS, NO, NO! I WON'T EVEN THINK ABOUT THAT. YOU CAN'T! NOPE! HE'S SO GROSS. GO AWAY PHIL! FUCK!");
		break;
	default:
		feedback.innerHTML = ("What is a " + object + "? I've never heard of that. You can't use that here.. Is your intelligence, like, -1? You should have re-rolled those stats, brother.");
		break;
	}
	
}

function zorkLook(object){
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

function zorkSpeak(object){
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


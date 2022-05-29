// JavaScript Document
//All location scripts function the same way. REFER TO THE BED SCRIPT for documentation on location scripts.

var cellDisc = "As you walk up to the CELLDOOR, you catch a better look at PHIL. This is the single most horrifying experience of your entire life! His face is bumpy and rotting. Coagulated liquids crust his skin. He's dirtier than dirt. Noises exhale from his gullet. You can't decipher if they're coughs or laughs. Mostly just wheezing air. He notices you, hollering at you to come closer to the door. He calls you his sweet pet. The whole encounter is a sensory overload. You feel sick, diseased even. The CELLDOOR looks heavy. PHIL makes slurping sounds. <br><br> Distance from PHIL lies towards the CHEST, WINDOW, GAUNTLET stand, BED and ZORK.";

function enterCell(){
	'use strict';
	dispText.innerHTML = cellDisc;
	position = "CELLDOOR";
}

function cellUse(object){
	'use strict';
	switch(object){
	case "RIB":
		if(hasRib){
			feedback.innerHTML = ("You try the RIB on the door. It has no effect.");
		}
		else{
			feedback.innerHTML = ("You can't USE things you don't have. Filthy casual.");
		}
		break;
	case "BELT":
		if(hasBelt){
			feedback.innerHTML = ("Even with the power you've gained from the BELT, you can't open the door. Maybe if you had something else to help!");
		}
		else{
			feedback.innerHTML = ("You can't USE things you don't have. Filthy casual.");
		}
		break;
	case "GAUNTLET":
		if(hasGauntlet){
			feedback.innerHTML = ("The combination of your power BELT and dwarven GAUNTLET empowers you, with god-like strength. With a single punch you smash open the CELLDOOR reveiling a hallway. PHIL can no longer be seen. Hallelujah! You may now enter the HALLWAY. Where PHIL stood now lies a KEY. You take it.");
			doorOpen = true;
			hasKey = true;
		}
		else{
			feedback.innerHTML = ("Go to the GAUNTLET if you want USE it.");
		}
		break;
	case "KEY":
		if(hasKey){
			feedback.innerHTML = ("You've already opened the CELLDOOR. The key may have worked but the lock is broken so you'll never know");
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
		if(doorOpen){
			feedback.innerHTML = ("The CELLDOOR is pretty smashed up. Best to leave it alone. You can faintly hear it crying.");
		}
		else{
			feedback.innerHTML = ("You're a puny human and the CELLDOOR will not budge for you.");
		}
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
	case "PHIL":
		feedback.innerHTML = ("OH JESUS, NO, NO! I WON'T EVEN THINK ABOUT THAT. YOU CAN'T! NOPE! HE'S SO GROSS. GO AWAY PHIL! FUCK!");
		break;
	default:
		feedback.innerHTML = ("What is a " + object + "? I've never heard of that. You can't use that here.. Is your intelligence, like, -1? You should have re-rolled those stats, brother.");
		break;
	}
	
}

function cellLook(object){
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
			feedback.innerHTML = ("Taking your eyes off of PHIL is hard but you manage. The CELLDOOR is very well crafted. Wooden but enforced by iron. Not as intricate as the CHEST, still lovely.");
		}
		break;
	case "HALLWAY":
		if(doorOpen){
			feedback.innerHTML = ("You peak into the HALLWAY. Where is PHIL? you wonder. Who cares? As long as he isn't here!");
		}
		else{
			feedback.innerHTML = ("You can't see much passed ugly ol' PHIL there. You do your best to not make eye contact.");
		}
		break;
	case "GATE":
		if(doorOpen){
			feedback.innerHTML = ("Around the corner you see the GATE at the end of the HALLWAY");
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

function cellSpeak(object){
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
		feedback.innerHTML = ("You ask PHIL why you are locked up. His response is inaudible passed the sound of liquids, detaching themselves from his throat. They roar up through his mouth and land on your face. Now you need a wash.");
		break;
	default:
		feedback.innerHTML = ("You speak to " + object + "? I don't know what that is. I hope the conversation was enthralling");
		break;
	}

}


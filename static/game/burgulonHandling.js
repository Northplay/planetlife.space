function goNewBeginning() {
	updateState('burgulonTime', true);
	changeScene("...","invisibleImg","");
	setTimeout(function(){
		changeScene("Hello?","invisibleImg","");
	},3000);
	setTimeout(function(){
		changeScene("Hello?","invisibleImg","");
		createGoButton("...","talk",goNewBeginning2);
	},5000);
}

function goNewBeginning2() {
	changeScene(
		"Is anybody here?",
		"invisibleImg"
	);
	setTimeout(function(){
		changeScene(
			"Is anybody here?",
			"invisibleImg"
		);
		createGoButton("...","talk",goNewBeginning3);
	},2000);
}

function goNewBeginning3() {
	changeScene(
		"That fake silence is not going to fool me!",
		"invisibleImg"
	);
	setTimeout(function(){
		changeScene(
			"That fake silence is not going to fool me!",
			"invisibleImg"
		);
		createGoButton("Chirp!","talk",goNewBeginning4);
	},3000);
}

function goNewBeginning4() {
	playSound(soundEffect.burgulon);
	changeScene(
		"Aha! I knew someone was here!",
		"explosion"
	);
	setTimeout(function(){
		changeScene(
			"Aha! I knew someone was here!",
			"burgulon"
		);
		createGoButton("Chirp..","talk",goNewBeginning5);
	},500);
}

function goNewBeginning5() {
	playSound(soundEffect.burgulon);
	changeScene(
		"So are you supposed to be some kind of planet?",
		"burgulon"
	);
	createGoButton("Chirp chirp","talk",goNewBeginning6);
}

function goNewBeginning6() {
	playSound(soundEffect.burgulon);
	changeScene(
		"Well.. That doesn't really tell me much. Aren't you supposed to be supervised by an adult or something?",
		"burgulon"
	);
	createGoButton("Chiiirp","talk",goNewBeginning7);
}

function goNewBeginning7() {
	playSound(soundEffect.burgulon);
	changeScene(
		"Alright alright. Stay put.. I'll go report you to the missing minor planet director",
		"burgulon"
	);
	createGoButton("...","talk",goBlank);
}

function goBlank() {
	changeScene("...","burgulon");
	setTimeout(function() {
		goNewGalaxy();
	},2000);
}

function goNewGalaxy() {
	audioSettings.shouldPlayMusic = true;
	playMusic();
	changeScene(
		"You are a scared little mechanical planet, hanging out in a strange unfamiliar solar system",
		"burgulon",
		"goNewGalaxy"
	);
	createGoButton("Your Surface","burgulonSurface",goBurgulonSurface);
	if (!state.bBret) {
		createGoButton("Explore","binoculars",goSpaceJerk);
	}
	if (state.bBret && !state.bSpaceBar) {
		createGoButton("Explore","binoculars",goMeetSpaceBar);
	}
	if (state.bSpaceBar) {
		createGoButton("Space Bar","spaceBar",goSpaceBar);
	}
}

function goSpaceJerk() {
	changeScene(
		"The only thing you can see around is a small interstellar bus stop.<br/>There's a lonely jerk sitting there.. After some chit chat he reveals that his name is Bret, and he works as a mechanic on an evil space ship close by",
		"busStop",
		"goSpaceJerk"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
	createGoButton("Wanna hang?","talk",goRecruitJerk);
}

function goRecruitJerk() {
	playSound(soundEffect.hi);
	updateState('bBret', true);
	changeScene(
		"Bret looks at his cool wrist watch. The bus won't come in the next couple of years, so he has time to spare",
		"bret",
		"goRecruitJerk"
	);
	createGoButton("Great timing!","talk",goBurgulonSurface);
}

function goMeetSpaceBar() {
	playSound(soundEffect.party);
	changeScene(
		"You suddenly smell the stale smell of spilled beer and wasted lives. In the distance you can see a bar floating around in space. It seems to be attracted to the Coco smell",
		"spaceBar",
		"goMeetSpaceBar"
	);
	createGoButton("Hello?","talk",goMeetSpaceBar2);
}

function goMeetSpaceBar2() {
	updateState('bSpaceBar', true);
	changeScene(
		"Oh hi. We're running low on coco.. The party's growing kinda dull. Are you selling man?",
		"spaceBar"
	);
	createGoButton("I got Coco","coco",goSpaceBar);
}

function goSpaceBar() {
	changeScene(
		"There's an ancient party going on in there.. You are unsure if anybody even enjoys it anymore.<br/>But you are here to sell your coco, so stop worrying about that",
		"spaceBar",
		"goSpaceBar"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
	createSmallBuildButton(
		"Sell " + state.bBarCocoSell + " coco for " + state.bBarCocoPrice + " gold",
		"gold",
		"barCocoSellBut",
		barSellCoco
	);
	createProduct("Bar Upgrade");
}

function barSellCoco() {
	playSound(soundEffect.cheer);
	updateState('bCoco', state.bCoco - state.bBarCocoSell);
	updateState('bGold', state.bGold + state.bBarCocoPrice);
	changeScene("It's a deal!","gold","barSellCoco");
	setTimeout(function(){
		goSpaceBar();
	},300);
}

// function goNothingHere() {
// 	changeScene(
// 		"You look around, but find nothing. Could it be that this part of space is completely empty, or is it far more likely that the developer just hasn't made anything here yet? <br/>You dream of your old planet friend and wonder what he is up to now, and if he still thinks of you",
// 		"universe",
// 		"goNothingHere"
// 	);
// 	createGoButton("Dream on","planet",goRoot);
// }

function goBurgulonSurface() {
	playSound(soundEffect.burgulon);
	changeScene(
		"Your fragmented mechanical surface is creaking and clonking. Deep chirps come from within your scared core",
		"burgulonSurface",
		"goBurgulonSurface"
	);
	createGoButton("Space","burgulon",goNewGalaxy);
	if (state.bBret) {
		createGoButton("Bret","bret",goBret);
	}
	if (state.bSpaceBar) {
		createProduct("Wood Synthesizer");
	}
	if (state.bWoodSynthesizer) {
		createGoButton("Wood Synthesizer","woodSynthesizer",goWoodSynthesizer);
	}
	if (state.bWoodSynthesizer) {
		createProduct("Celestial Summoner");
	}
	if (state.bCelestialSummoner) {
		createGoButton("Celestial Summoner","celestialSummoner",goCelestialSummoner);
	}
}

function goBret() {
	if (!state.bBretDoingCoco) {
		changeScene(
			"Bret is playing the air guitar on your surface.<br/>He tells you that you actually have a pretty high coco yield for a robot planet",
			"bret",
			"goBret"
		);
		createGoButton("Extraction time!","coco",goBretCoco);
	} else {
		changeScene(
			"Bret is hard at work prying <span style='color:#ff0000'>" + state.bCocoPS + " coco/sec</span> out of your cracks. He occasionally samples the goods",
			"bret",
			"goBret"
		);
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		createGoButton("Talk","talk",goBretTalk);
		createProduct("Crowbar Upgrade");
	}
}

function goBretTalk() {
	playSound(soundEffect.hi);
	var h = "Bret is doing some poses.<br/>";
	var bretTalks = [
		"He brags that he used to work in a dungeon. But he got tired of seeing his friends get beaten to death by wild Derekulians, so he quit and found another job. You wonder if this really counts as bragging.",
		"He tells you about his favourite bands, but he has terrible taste in music, so the conversation doesn't last long.",
		"He brags about the time that his jerk team managed to defeat a Derekulian. It was super awesome until the Derekulian was revived by some stardust, and then just beat them all up.",
		"He tries to hide a fart, but fails. He pretends like it was just the creaking of the floor.",
		"He tells you that he has always dreamt of being trained like the Derekulians are, and be able to delve into dungeons. But he knows that the galactic laws state that jerks are not allowed to be trained.",
	];
	h += bretTalks[bretTalkCount];
	h += "<br/>His butt crack is showing while he picks up the crowbar that he dropped";
	bretTalkCount++;
	if (bretTalkCount == bretTalks.length) {
		bretTalkCount = 0;
	}
	changeScene(h,"bret","goBretTalk");
	createGoButton("Back","bret",goBret);
	createGoButton("Talk more","talk",goBretTalk);
}

function goBretCoco() {
	updateState('bCocoPS', 1);
	updateState('bBretDoingCoco', true);
	changeScene(
		"Bret yanks a crowbar out of his pants and starts to pry coco out of your surface. It hurts and tickles at the same time",
		"coco",
		"goBretCoco"
	);
	createGoButton("Hehe.. auch!","talk",goBurgulonSurface);
}

function goWoodSynthesizer() {
	changeScene(
		"The beautiful machine is popping out <span style='color:#ff0000'>" + state.bWoodPS + " wood/sec</span>. You can't help but make a happy little chirp",
		"woodSynthesizer",
		"goWoodSynthesizer"
	);
	createGoButton("Back","burgulonSurface",goBurgulonSurface);
	createProduct("Upgrade Wood Synthesizer");
}

function goCelestialSummoner() {
	changeScene(
		"This is it. If this device works as intended you'll get your old buddy back",
		"celestialSummoner",
		"goCelestialSummoner"
	);
	createGoButton("Activate!","celestialSummoner",activateCelestialSummoner);
}

function activateCelestialSummoner() {
	changeScene(
		"You are channeling power to the Celestial Summoner. It starts humming..",
		"celestialSummoner"
	);
	createGoButton("And?","celestialSummoner",goSummonSpacePotato);
}

function goSummonSpacePotato() {
	playSound(soundEffect.potion);
	changeScene(
		"FLOP!",
		"explosion"
	);
	setTimeout(function(){
		changeScene(
			"...",
			"potato"
		);
		createGoButton("What's this!?","potato",goMeetSpacePotato);
	},500);
}

function goMeetSpacePotato() {
	changeScene(
		"This is not your old planet buddy.<br/>This is just a space potato. He looks apologetically at you",
		"potato"
	);
	createGoButton("Spill it, potato man!","talk",goQuestionSpacePotato);
}

function goQuestionSpacePotato() {
	changeScene(
		"With his tiny voice he starts doing the explaining.<br/>It seems there is nothing wrong with your device.. It is simply that you are in the wrong time",
		"potato"
	);
	createGoButton("Wrong time?","talk",goQuestionSpacePotato2);
}

function goQuestionSpacePotato2() {
	changeScene(
		"The potato explains that the content that was supposed to be here, simply hasn't been developed yet. But in the right time it will be made",
		"potato"
	);
	createGoButton("Ridiculous!","talk",goQuestionSpacePotato3);
}

function goQuestionSpacePotato3() {
	changeScene(
		"The potato is almost crying, but still managing to hold it together slightly.<br/><br/>His tiny voice tells you that the developer will be working hard on making the next chapter, so you can finally be reunited with your old planet buddy",
		"potato"
	);
	createGoButton("I see","talk",goQuestionSpacePotato4);
}

function goQuestionSpacePotato4() {
	if (mobile) {
		changeScene(
			"With an even tinier voice he tells you that you can even go donate from the settings menu.<br/>That might speed up the process a bit",
			"potato"
		);
	} else {
		changeScene(
			"With an even tinier voice he tells you that you can even donate some money. That might speed up the process a bit",
			"potato"
		);		
	}
	createGoButton("...","potato",goQuestionSpacePotato4_1);
}

function goQuestionSpacePotato4_1() {
	playSound(soundEffect.cry);
	changeScene(
		"Then he burst out in tears",
		"potatoCrying"
	);
	createGoButton("There there space potato","talk",goQuestionSpacePotato5);
}

function goQuestionSpacePotato5() {
	changeScene(
		"He stops crying, and with a tiny sobbing voice he asks you if you want to continue playing as Burgulon, or you rather want to go back to play as the planet again?",
		"potato"
	);
	createGoButton("Burgulon","burgulon",goPlayBurgulon);
	createGoButton("Planet","planet",goPlayPlanet);
}

function goPlayBurgulon() {
	changeScene(
		"You know it's pretty futile, but you choose to stay as poor Burgulon for a little while longer",
		"burgulon"
	);
	createGoButton("Yes","burgulon",goNewGalaxy);
}

function goPlayPlanet() {
	updateState('burgulonTime', false);
	changeScene(
		"You decide to go back to the eventful life of being a planet. There's still plenty of jerks that needs beating",
		"planet"
	);
	createGoButton("Yes","planet",goRoot);
}
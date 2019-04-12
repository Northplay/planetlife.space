function firstClick() {
	changeScene("","invisibleImg","intro");
	createGoButton("Hello?","talk",bigBang);
}

function bigBang() {
	audioSettings.shouldPlayMusic = false;

	changeScene("It's all totally dark here. Is anything here at all?","invisibleImg","bigBang");
	createGoButton("No","talk",bigBang2);
	function bigBang2() {
		changeScene("Wait, something is here!","invisibleImg","bigBang");
		setTimeout(function(){
			playSound(soundEffect.explosion);
			changeScene("BANG!","explosion","bigBang");
		},3500);
		setTimeout(function(){
			audioSettings.shouldPlayMusic = true;
			playMusic();

			changeScene("Hey, look! A beautiful planet appeared","planet","bigBang");
		},4000);
		setTimeout(function(){
			changeScene("Is that you?","planet","bigBang");
			createGoButton("Yes","talk",introduction);
		},7000);
	}
}

function introduction() {
	changeScene("That's pretty cool. Being a planet must be so exciting!","planet","introduction");
	setTimeout(function(){
		changeScene("You are so big and round and full of life","planet","introduction");
		createGoButton(":(","talk",introduction2);
	},4000);
	function introduction2() {
		changeScene("Oh.. what's that? There's no life on your surface?","planetSad","introduction");
		setTimeout(function(){
			changeScene("Well that figures. You were only just created in that big explosion before","planetSad","introduction");
		},4000);
		setTimeout(function(){
			changeScene("But don't worry about it. There's probably plenty of life out in the universe","planetSad","introduction");
			createGoButton(":)","talk",introduction3);
		},8000);
	}
	function introduction3() {
		changeScene("Why don't you go take a look?","planet","introduction");
		createGoButton("Explore","binoculars",exploreAsteroid);
	}
}

function exploreAsteroid() {
	delay = 10;
	skipAllowed = true;
	toggleResIcons();
	changeScene("There's something out there in the distance","planet","introduction");
	createGoButton("Asteroid","asteroid",goAsteroid);
}

function startGame() {
	loadState(function() {
		loadAudioState();
		prepareSounds();
		
		if (state.playIntro) {
			updateState('playIntro', false);
			skipAllowed = false;
			toggleResIcons();
			firstClick();
		} else {
			goContinue();
		}
	});
}

startGame();
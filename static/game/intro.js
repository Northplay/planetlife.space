function firstClick() {
	changeScene("","invisibleImg","intro");
	createGoButton("Hello?","talk",bigBang);
}

function bigBang() {
	audioSettings.shouldPlayMusic = false;

	changeScene("It's all totally dark here. Is anything here at all?","invisibleImg","bigBang");
	createGoButton("No","talk",bigBang2);
}

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
		goChoosePlanet();
	},7000);
}

function goChoosePlanet() {
	changeScene("Is that you?","planet","bigBang");
	createGoButton("Yes","talk",introduction);
	// createGoButton("No","talk",goBecomeBurgulon);	
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

//Burgolon storyline start
function goBecomeBurgulon() {
	changeScene("...","planet");
	setTimeout(function(){
		playSound(soundEffect.explosion);
		changeScene("BANG!","explosion");
	},1000);
	setTimeout(function(){
		changeScene("Hey look!","burgulon");
	},1500);
	setTimeout(function(){
		changeScene("Wait what is that? Some kind of robot planet?","burgulon");
	},3700);
	setTimeout(function(){
		changeScene("Well is this you then?","burgulon","goBecomeBurgulon");
		createGoButton("Yes","talk",goBecomeBurgulon2);
		createGoButton("No","talk",bigBang2);
	},7000);
}

function goBecomeBurgulon2() {
	changeScene("Oh, wow.. To be honest, I've never seen anything like you. I suppose you are some kind of planet sized robot","burgulon");
	createGoButton("...","talk",goBecomeBurgulon3);
}

function goBecomeBurgulon3() {
	changeScene("But hey. Why don't you take a look around. I'm sure the universe is not the worst place to be, for a mechanical planet like yourself","burgulon");
	createGoButton("...","talk",goBecomeBurgulon4);
}

function goBecomeBurgulon4() {
	changeScene("Maybe someone can help you figure out what planet life is all about","burgulon");
	createGoButton(":)","talk",goBecomeBurgulon5);
}

function goBecomeBurgulon5() {
	updateState('burgulonTime', true);
	delay = 10;
	skipAllowed = true;
	toggleResIcons();
	changeScene("Why don't you go take a look around?","burgulon");
	createGoButton("Explore","binoculars",goSpaceJerk);
	createGoButton("Maybe later","talk",goNewGalaxy);
}

startGame();
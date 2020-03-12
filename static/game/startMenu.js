function goStartMenu() {
	// changeScene(
	// 	"</br></br>Welcome to PLANET LIFE!</br></br>Let's get started",
	// 	"PlanetLifeTitle"
	// );
	// createGoButton("Chapter 1 (free)","planet",goStartChapter1);
	// createIconButton(
	// 	"Chapter 2 & 3 (2.99$)",
	// 	"images/handling/broccoli.gif",
	// 	"chapter23but",
	// 	"",
	// 	"#9e9e9e",
	// 	true,
	// 	"buttons",
	// 	stardustExchange,
	// 	0
	// );
	// createGoButton("Tell me more about this game","talk",goExplainGame);

	if (hasBridge()) {
		changeScene(
			"</br></br>Welcome to PLANET LIFE!</br></br>Let's get started",
			"PlanetLifeTitle"
		);
		createGoButton("Chapter 1 (free)","planet",goStartChapter1);
		createIconButton(
			"Chapter 2 & 3 (2.99$)",
			"images/handling/broccoli.gif",
			"chapter23but",
			"",
			"#9e9e9e",
			true,
			"buttons",
			stardustExchange,
			0
		);
		createGoButton("Tell me more about this game","talk",goExplainGame);
	} else {
		goStartChapter1();
	}
}

function goExplainGame() {
	changeScene(
		"This is Bob the Bottle. You will meet him later in the game.</br>He explains to you that Planet Life is consisting of 3 chapters. Chapter 1 is a <span style='color:#16fa05'>free demo</span>, and then you will have to pay to progress to the next two. But <span style='color:#ffea00'>Chapter 2</span> is even bigger than Chapter 1 and quite exciting. And then <span style='color:#00fff7'>Chapter 3</span> is the biggest of them all, and where things really starts to heat up",
		"bobBottle"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame2);
}

function goExplainGame2() {
	changeScene(
		"In Planet Life you are on an adventure through the universe, experiencing all sorts of unexptected things",
		"appleWormhole"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame3);
}

function goExplainGame3() {
	changeScene(
		"You will get a lot of new friends along the way",
		"bananaMan"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame4);
}

function goExplainGame4() {
	playSound(soundEffect.stanley);
	changeScene(
		"Even meet the stars of the universe",
		"stanley"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame5);
}

function goExplainGame5() {
	changeScene(
		"You will need to gather a lot of resources to become a better planet",
		"woodSynthesizer"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame6);
}

function goExplainGame6() {
	changeScene(
		"You will also need resources if you ever hope to beat all of the jerks living in the dungeons inside yourself",
		"dungeonBeating"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame7);
}

function goExplainGame7() {
	changeScene(
		"The universe is a crazy place, full of unexptected things",
		"universe"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame8);
}

function goExplainGame8() {
	changeScene(
		"Like this broccoli..",
		"spaceBroccoli"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame9);
}

function goExplainGame9() {
	changeScene(
		"With a whole world on it!",
		"spaceBroccoliClose"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame10);
}

function goExplainGame10() {
	changeScene(
		"An intergalactic mailman",
		"intergalacticMailman"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame11);
}

function goExplainGame11() {
	playSound(soundEffect.cheer);
	changeScene(
		"Breakdancing!",
		"intergalacticMailmanBreakdance"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame12);
}

function goExplainGame12() {
	playSound(soundEffect.cheer);
	changeScene(
		"Other planets to befriend",
		"beanie"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame13);
}

function goExplainGame13() {
	playSound(soundEffect.cheer);
	changeScene(
		"Other planets to befriend",
		"beanie"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame14);
}

function goStartChapter1() {
	if (state.impatientMode) {
		delay = 1;
	} else {
		delay = 10;
	}
	skipAllowed = true;
	toggleResIcons();
	goRoot();
}

function goStartMenu2() {
	changeScene(
		"",
		"PlanetLifeTitle"
	);
	createIconButton(
		"Chapter 1 (completed)",
		"images/handling/planet.gif",
		"chapter23but",
		"",
		"#9e9e9e",
		true,
		"buttons",
		stardustExchange,
		0
	);
	// createGoButton("Chapter 1 (completed)","planet",goRoot);
	createGoButton("Chapter 2 & 3 (2.99$)","broccoli",goRoot);
	createGoButton("What do I even get for my money?","talk",goTeaseGame);
}

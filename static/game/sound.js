var audioSettings = {
	isMusicMuted: false,
	isSFXMuted: false,
	shouldPlayMusic: false,
	fallbackEffects: null,
	fallbackMusic: null,
};

// map sounds to files (filename minus directory and .mp3)
var soundEffect = {
	slotMachine: "InsertCoin",
	win: "Win",
	loose: "Lose",
	buy: "Purchase",
	explosion: "Explosion",
	click: "pop-low",
	cheer: "Cheer",
	cry: "Cry",
	derek: "Derek",
	beating: "Arrr",
	beating2: "Arrr2",
	beating3: "Arrr3",
	beating4: "Arrr4",
	beating5: "Arrr5",
	punch1: "Punch1",
	punch2: "Punch2",
	punch3: "Punch3",
	punch4: "Punch1",
	text: "5",
	burger: "Burger",
	worm: "Worm",
	wormHole: "Wormhole",
	sven: "Sven",
	burgulon: "Burgulon",
	wifyHello: "WifyHello",
	wifyWrong: "WifyWrong",
	wifyCorrect: "WifyCorrect",
	fart: "Fart",
	ghost: "Ghost",
	heal: "Heal",
	potion: "Potion",
	thirsty: "Thirsty",
	vomit: "Vomit",
	doorOfRegret: "DoorOfRegret",
	party: "Party",
	hi: "Hi",
	baby: "Baby",
	babyCry: "BabyCry",
	ding: "Ding",
	heavy: "Heavy",
	house: "House",
	jack: "Jack",
	jazz: "Jazz",
	jerkSquad: "JerkSquad",
	shock: "Shock",
	stanley: "Stanley",
	tadaa: "Tadaa",
	techno: "Techno",
	canOpen: "CanOpen",
	core: "Core",
	beanie: "Beanie",
	mouladin: "Mouladin",
	slopnax: "Slopnax",	
	bentLords: "BentLords",
	technoLow: "TechnoLow",
	mayonada: "Mayonada",
};

function loadAudioState() {
	audioSettings.isSFXMuted = state.soundMuted;
	audioSettings.isMusicMuted = state.musicMuted;
}

function prepareSounds() {
	var files = [];
	for (var key in soundEffect) {
		if (soundEffect.hasOwnProperty(key)) {
			files.push(soundEffect[key]);
		}
	}

	if (hasBridge()) {
		let json = JSON.stringify(files);
		BridgeCommander.call("prepareSounds", json);
	}
}

function playSound(filename) {
	if (audioSettings.isSFXMuted) { return; }

	if (hasBridge()) {
		BridgeCommander.call("playSound", filename);
	} else {
		if (audioSettings.fallbackEffects === null) {
			audioSettings.fallbackEffects = {};
			for (var key in soundEffect) {
				if (soundEffect.hasOwnProperty(key)) {
					let value = soundEffect[key];
					audioSettings.fallbackEffects[value] = new Audio("audio/" + value + ".mp3");
				}
			}
		}

		audioSettings.fallbackEffects[filename].play();
	}
}

function playMusic() {
	if (audioSettings.isMusicMuted) { return; }
	if (!audioSettings.shouldPlayMusic) { return; }

	if (hasBridge()) {
		BridgeCommander.call("playMusic");
	} else {
		if (audioSettings.fallbackMusic === null) {
			audioSettings.fallbackMusic = new Audio("audio/rumsang_v2.mp3");;

			audioSettings.fallbackMusic.addEventListener("ended", function () {
				if (audioSettings.isMusicMuted) { return; }
				audioSettings.fallbackMusic.currentTime = 0;
				audioSettings.fallbackMusic.play();
			});
			audioSettings.fallbackMusic.play();
		}

		audioSettings.fallbackMusic.play();
	}
}

function resetMusic() {
	if (audioSettings.isMusicMuted) { return; }

	if (hasBridge()) {
		BridgeCommander.call("resetMusic");
	} else {
		if (audioSettings.fallbackMusic !== null) {
			audioSettings.fallbackMusic.pause();
			audioSettings.fallbackMusic.currentTime = 0;
		}
	}
}

function muteSound() {
	audioSettings.isSFXMuted = true;
	updateState("soundMuted", true);

	if (hasBridge()) {
		BridgeCommander.call("muteSound");
	} else {
		for (var key in audioSettings.fallbackEffects) {
			if (audioSettings.fallbackEffects.hasOwnProperty(key)) {
				audioSettings.fallbackEffects[key].pause();
			}
		}
	}
}

function unMuteSound() {
	audioSettings.isSFXMuted = false;
	updateState("soundMuted", false);

	if (hasBridge()) {
		BridgeCommander.call("unMuteSound");
	}
}

function muteMusic() {
	audioSettings.isMusicMuted = true;
	updateState("musicMuted", true);

	if (hasBridge()) {
		BridgeCommander.call("muteMusic");
	} else {
		audioSettings.fallbackMusic.pause();
	}
}

function unMuteMusic() {
	audioSettings.isMusicMuted = false;
	updateState("musicMuted", false);

	if (hasBridge()) {
		BridgeCommander.call("unMuteMusic");
	}

	playMusic();
}

function playRandomPunchSound() {
	var punches = [soundEffect.punch1,soundEffect.punch2,soundEffect.punch3];
	var chosenPunch = Math.floor(Math.random() * punches.length);
	playSound(punches[chosenPunch]);
}

function playRandomDerekSound() {
	var punches = [soundEffect.beating,soundEffect.beating2,soundEffect.beating3,soundEffect.beating4,soundEffect.beating5];
	var chosenPunch = Math.floor(Math.random() * punches.length);
	playSound(punches[chosenPunch]);
}
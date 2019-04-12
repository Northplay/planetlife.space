function toggleSettings() {
	boostCheatCount = 0;
	playSound(soundEffect.click);
	toggleResInfo();
	clearSettingsScene();
	if (!settingsToggled) {
		settingsToggled = true;
		document.getElementById("buttons").style.display = "none";
		document.getElementById("handling").style.display = "none";
		document.getElementById("handlingArt").style.display = "none";
		document.getElementById("settingsButtons").style.display = "block";
		document.getElementById("settingsHandling").style.display = "block";
		document.getElementById("settingsArt").style.display = "inline-block";
		document.getElementById("settingsHeadline").style.display = "block";
		goSettings();
	} else {
		settingsToggled = false;
		document.getElementById("buttons").style.display = "block";
		document.getElementById("handling").style.display = "block";
		document.getElementById("handlingArt").style.display = "inline-block";
		document.getElementById("settingsButtons").style.display = "none";
		document.getElementById("settingsHandling").style.display = "none";
		document.getElementById("settingsArt").style.display = "none";
		document.getElementById("settingsHeadline").style.display = "none";
		if (donateFromEnd) {
			donateFromEnd = false;
			goNotDonate();
		}
	}
}

function goSettings() {
	clearSettingsScene();
	document.getElementById("settingsHeadline").innerHTML = "Settings";
	document.getElementById("settingsHandling").innerHTML = "";
	createSettingsIconButton("Back","planet",toggleSettings);
	if (audioSettings.isSFXMuted) {
		createSettingsIconButton("Sound (off)","explosion",toggleSounds);
	} else {
		createSettingsIconButton("Sound (on)","explosion",toggleSounds);
	}
	if (audioSettings.isMusicMuted) {
		createSettingsIconButton("Music (off)","universe",toggleMusic);
	} else {
		createSettingsIconButton("Music (on)","universe",toggleMusic);
	}
	createSettingsIconButton("About","northplay",goAbout);
	if (burgerCheat) {
		createSettingsIconButton("Space farts","spaceBroccoli",goSpaceFarts);
	}
	if (hasBridge()) {
		createSettingsIconButton("Donate","burger",goDonate);
	}
	createSettingsIconButton("Start over","newSurface",goStartOver);
}

function goSpaceFarts() {
	toggleSettings();
	spaceFarts();
}

function goAbout() {
	clearSettingsScene();
	boostCheatCount++;
	if (boostCheatCount > 3) {
		boostCheatCount = 0;
		boost();
		document.getElementById("settingsHeadline").innerHTML = "Jerks";
		document.getElementById("settingsArt").src="images/handling/bret.gif";
		document.getElementById("settingsHandling").innerHTML = "--- A jerk by Northplay ---</br></br></br>Made by Christian Laumark Jerkson</br></br>Backend: Kristian Andersen Jerkson</br></br>Design direction: Michael Flarup Jerkson</br></br><span style='color:#565656'>jerk version " + state.version + "</span><br/><br/>";
	} else {
		document.getElementById("settingsHeadline").innerHTML = "About";
		document.getElementById("settingsArt").src="images/handling/northplay.gif";
		document.getElementById("settingsHandling").innerHTML = "--- A game by Northplay ---</br></br></br>Made by Christian Laumark</br></br>Backend: Kristian Andersen</br></br>Design direction: Michael Flarup</br></br><span style='color:#565656'>version " + state.version + "</span><br/><br/>";		
	}
	createSettingsButton("back",goSettings);
}

function toggleSounds() {
	if (!audioSettings.isSFXMuted) {
		muteSound();
	} else {
		unMuteSound();
		playSound(soundEffect.explosion);
	}

	goSettings();
}

function toggleMusic() {
	if (!audioSettings.isMusicMuted) {
		muteMusic();
	} else {
		unMuteMusic();	
	}

	goSettings();
}

function donate(option) {
	document.getElementById('loading_container').innerHTML = '<div class="blocking-loader"></div>';

	var call = BridgeCommander.call('purchaseProduct', option);
	call.then(function(value) {
		if (value === "success") {
			if (settingsToggled) {
				toggleSettings();
				document.getElementById('loading_container').innerHTML = '';
			}
	
			afterDonate();
		}
	});
	call.catch(function(error) {
		document.getElementById('loading_container').innerHTML = '';
		document.getElementById('loading_container').innerText = error;
	});
}

function goDonate() {
	playSound(soundEffect.burger);
	clearSettingsScene();
	document.getElementById("settingsHeadline").innerHTML = "Donate";
	document.getElementById("settingsArt").src="images/handling/burger.gif";
	document.getElementById("settingsHandling").innerHTML = "By donating, you are showing your appreciation for this quirky little game, and by that increasing the chance that we will spend more time on it later.</br></br> You are also being an extremely amazing person";

	document.getElementById('settingsButtons').innerHTML = '<div class="loader" id="settings_loader"></div>';

	var call = BridgeCommander.call('loadProducts');
	call.then(function(value) {
		document.getElementById('settingsButtons').innerHTML = '';
		var json = JSON.parse(value);
		var donations = json.filter(p => p.identifier.indexOf('Tip') !== -1);
		
		createSettingsIconButton(donations[0].name + " " + donations[0].localPrice,"smallSoftPresent",donate,donations[0].identifier);
		createSettingsIconButton(donations[1].name + " " + donations[1].localPrice,"mediumHardPresent",donate,donations[1].identifier);
		createSettingsIconButton(donations[2].name + " " + donations[2].localPrice,"bigMassivePresent",donate,donations[2].identifier);
		createSettingsButton("No thanks",goSettings);
	});
	call.catch(function(error) {
		alert(error);
	});
}

function goStartOver() {
	clearSettingsScene();
	document.getElementById("settingsHeadline").innerHTML = "Start over";
	document.getElementById("settingsHandling").innerHTML = "Are you sure you want to throw away all that hard work, and begin again as a fresh fresh planet?";
	createSettingsIconButton("No","planetSad",goSettings);
	createSettingsIconButton("Yes!","planet",resetProgress,true);
}

function clearSettingsButtons() {
	var myNode = document.getElementById("settingsButtons");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	curButtons = [];
	curButtonCount = 0;
}

function clearSettingsScene() {
	clearSettingsButtons();
	document.getElementById("settingsHeadline").innerHTML = "";
	document.getElementById("settingsArt").src="images/handling/tinyImg.gif";
	document.getElementById("settingsHandling").innerHTML = "";
	document.getElementById('loading_container').innerHTML = '';
}
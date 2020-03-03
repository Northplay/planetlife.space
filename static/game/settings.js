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
	createSettingsIconButton(T("Back","buttons.back"),"planet",toggleSettings);
	if (audioSettings.isSFXMuted) {
		createSettingsIconButton(T("Sound (off)","settings.sound.off"),"explosion",toggleSounds);
	} else {
		createSettingsIconButton(T("Sound (on)","settings.sound.on"),"explosion",toggleSounds);
	}
	if (audioSettings.isMusicMuted) {
		createSettingsIconButton(T("Music (off)","settings.music.off"),"universe",toggleMusic);
	} else {
		createSettingsIconButton(T("Music (on)","settings.music.on"),"universe",toggleMusic);
	}
	createSettingsIconButton(T("About","settings.about"),"northplay",goAbout);
	if (burgerCheat) {
		createSettingsIconButton(T("Space farts","settings.spaceFarts"),"spaceBroccoli",goSpaceFarts);
	}
	if (hasBridge()) {
		createSettingsIconButton(T("Donate","settings.donate"),"burger",goDonate);
	}
	createSettingsIconButton(T("Start over","settings.startOver"),"newSurface",goStartOver);
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
		document.getElementById("settingsHeadline").innerHTML = T("Jerks","settings.about.jerkHeadline");
		document.getElementById("settingsArt").src="images/handling/bret.gif";
		document.getElementById("settingsHandling").innerHTML = T(
			"--- A jerk by Northplay ---</br></br></br>Made by Christian Laumark Jerkson</br></br>Backend: Kristian Andersen Jerkson</br></br>Design direction: Michael Flarup Jerkson</br></br><span style='color:#565656'>jerk version " + state.version + "</span><br/><br/>",
			"settings.about.jerkCredits"
		);
	} else {
		document.getElementById("settingsHeadline").innerHTML = T("settings","settings.about.headline");
		document.getElementById("settingsArt").src="images/handling/northplay.gif";
		document.getElementById("settingsHandling").innerHTML = T(
			"--- A game by Northplay ---</br></br></br>Made by Christian Laumark</br></br>Backend: Kristian Andersen</br></br>Design direction: Michael Flarup</br></br><span style='color:#565656'>version " + state.version + "</span><br/><br/>",
			"settings.about.credits"
		);
	}
	createSettingsButton(T("Back","buttons.back"),goSettings);
	createSettingsIconButton(T("Follow Northplay","buttons.settings.followNorthplay"),"northplay",goFollowNorthplay);
	createSettingsIconButton(T("Follow Christian","buttons.settings.followChristian"),"burger",goFollowCrede);
	createSettingsIconButton(T("Join Planet Life Discord","buttons.settings.joinDiscord"),"planet",goJoinDiscord);
	if (hasBridge()) {
		createSettingsIconButton(T("Review Game","buttons.settings.reviewGame"),"classroom",goReviewGame);
	}
}

function openExternalUrl(url) {
	if (hasBridge()) {
		BridgeCommander.call("openUrl", url);
	} else if (typeof window.open === "function") {
		const win = window.open(url, "_blank");
		win.focus();
	} else {
		window.location = url;
	}
}

function goFollowNorthplay() {
	openExternalUrl("https://twitter.com/heynorthplay");
}

function goFollowCrede() {
	openExternalUrl("https://twitter.com/3DCrede");
}

function goJoinDiscord() {
	openExternalUrl("https://discord.gg/3nCapx9");
}

function goReviewGame() {
	BridgeCommander.call("requestReview");
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
	document.getElementById("loading_container").innerHTML = "<div class=\"blocking-loader\"></div>";

	var call = BridgeCommander.call("purchaseProduct", option);
	call.then(function(value) {
		if (value === "success") {
			if (settingsToggled) {
				toggleSettings();
				document.getElementById("loading_container").innerHTML = "";
			}

			afterDonate();
		}
	});
	call.catch(function(error) {
		document.getElementById("loading_container").innerHTML = "";
		document.getElementById("loading_container").innerText = error;
	});
}

function goDonate() {
	playSound(soundEffect.burger);
	clearSettingsScene();
	document.getElementById("settingsHeadline").innerHTML = T(
		"Donate",
		"settings.donate.headline"
	);
	document.getElementById("settingsArt").src="images/handling/burger.gif";
	document.getElementById("settingsHandling").innerHTML = T(
		"By donating, you are showing your appreciation for this quirky little game, and by that increasing the chance that we will spend more time on it later.</br></br> You are also being an extremely amazing person",
		"settings.donate.description"
	);

	document.getElementById("settingsButtons").innerHTML = "<div class=\"loader\" id=\"settings_loader\"></div>";

	var call = BridgeCommander.call("loadProducts");
	call.then(function(value) {
		document.getElementById("settingsButtons").innerHTML = "";
		var json = JSON.parse(value);
		var donations = json.filter(p => p.identifier.indexOf("Tip") !== -1);

		createSettingsIconButton(donations[0].name + " " + donations[0].localPrice,"smallSoftPresent",donate,donations[0].identifier);
		createSettingsIconButton(donations[1].name + " " + donations[1].localPrice,"mediumHardPresent",donate,donations[1].identifier);
		createSettingsIconButton(donations[2].name + " " + donations[2].localPrice,"bigMassivePresent",donate,donations[2].identifier);
		createSettingsButton(T("No thanks","buttons.noThanks"),goSettings);
	});
	call.catch(function(error) {
		alert(error);
	});
}

function goStartOver() {
	clearSettingsScene();
	document.getElementById("settingsHeadline").innerHTML = T("Start over","settings.startOver.headline");
	document.getElementById("settingsHandling").innerHTML = T(
		"Are you sure you want to throw away all that hard work, and begin again as a fresh fresh planet?",
		"settings.startOver.description"
	);
	createSettingsIconButton(T("No","buttons.no"),"planetSad",goSettings);
	createSettingsIconButton(T("Yes!","buttons.yes!"),"planet",resetProgress,true);
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
	document.getElementById("loading_container").innerHTML = "";
}

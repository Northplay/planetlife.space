

var myVar = setInterval(sekund, 1000);

function sekund() {
	if (isGamePaused === true) {
		return;
	}

	draw();

	if (!state.broccoliChapter) {
		oldPriceCheck();
	}

	if (!state.burgulonTime) {
		updateState("wood", state.wood + state.woodPS);
		updateState("coco", state.coco + state.cocoPS);
		if (state.burgerDoing == "gold") {
			if (Math.random() < state.goldChance) {
				updateState("gold", state.gold + state.goldPS);
			} else if (state.goldPS > 1) {
				updateState("gold", state.gold + (state.goldPS - 1));
			}
		} else {
			updateState("gold", state.gold + state.goldPS);
		}
	} else {
		updateState("bWood", state.bWood + state.bWoodPS);
		updateState("bGold", state.bGold + state.bGoldPS);
		updateState("bCoco", state.bCoco + state.bCocoPS);
	}

	if (place == "spaceBen") {
		for (var i = 0; i < state.shopPrices.length; i++) {
			if (i == 4 && state.starmapNr < 3) {
				buttonDisableCheck(state.shopPrices[i][state.starmapNr],state.shopPrices[i][state.starmapNr][4]);
			} else if (state.shopPrices[i][5]) {
				buttonDisableCheck(state.shopPrices[i],state.shopPrices[i][4]);
			}
		}
	}

	if (place == "goDungeon" || place == "goPickDungeon") {
		if (state.derekHealth < state.derekMaxHealth) {
			buttonDisableCheck([0,0,(state.derekMaxHealth - state.derekHealth),0],"healDerekBut");
		}
	}

	if (!state.slotmachinePrice[4] && place == "workshop") {
		buttonDisableCheck(state.slotmachinePrice,"slotmachineBut");
	}

	if (place == "goCocoDungeons") {
		if (state.derekHealth < state.derekMaxHealth) {
			buttonDisableCheck([0,0,(state.derekMaxHealth - state.derekHealth),0],"healDerekBut2");
		}
	}

	if (place == "goMonsterDungeon") {
		if (state.derekHealth < state.derekMaxHealth) {
			buttonDisableCheck([0,0,(state.derekMaxHealth - state.derekHealth),0],"healDerekBut3");
		}
	}

	if (place == "goSpaceDungeon") {
		if (state.derekHealth < state.derekMaxHealth) {
			buttonDisableCheck([0,0,(state.derekMaxHealth - state.derekHealth),0],"healDerekBut4");
		}
	}

	if (place == "slotmachine") {
		buttonDisableCheck(playSmallPrice,"playSmallBut");
		buttonDisableCheck(playMediumPrice,"playMediumBut");
		buttonDisableCheck(playBigPrice,"playBigBut");
	}

	if (place == "planetudTrade") {
		if (pBuying != 0) {
			buttonDisableCheck([state.planetudPrices[pBuying][0],0,0,0],"exchangeWoodBut");
		}
		if (pBuying != 1) {
			buttonDisableCheck([0,state.planetudPrices[pBuying][1],0,0],"exchangeGoldBut");
		}
		if (pBuying != 2) {
			buttonDisableCheck([0,0,state.planetudPrices[pBuying][2],0],"exchangeCocoBut");
		}
	}

	if (place == "goPlanetudSellStardust") {
		buttonDisableCheck([0,0,0,10],"woodStardustBut");
		buttonDisableCheck([0,0,0,10],"goldStardustBut");
		buttonDisableCheck([0,0,0,10],"cocoStardustBut");
	}

	if (place == "goSpaceBar") {
		buttonDisableCheck([0,0,state.bBarCocoSell,0],"barCocoSellBut",true);
	}

	//Checking place for all products

	for (var i = 0; i < allProducts.length; i++) {
		if (place == allProducts[i].place) {
			for (var j = 0; j < allProductTiers.length; j++) {
				if (allProductTiers[j].ID == allProducts[i].ID && allProductTiers[j].tierNr == state.productStates[i] + 1) {
					for (var k = 0; k < curButtons.length; k++) {
						if (curButtons[k] == "full" + allProducts[i].ID) {
							if (allProductTiers[j].burgulon) {
								buttonDisableCheck(allProductTiers[j].price,allProducts[i].ID,true);
							} else {
								buttonDisableCheck(allProductTiers[j].price,allProducts[i].ID);
							}
						}
					}
				}
			}
		}
	}

	//Checking place for all single products

	for (var i = 0; i < allSingleProducts.length; i++) {
		if (place == allSingleProducts[i].place) {
			for (var j = 0; j < curButtons.length; j++) {
				if (curButtons[j] == allSingleProducts[i].ID) {
					buttonSmallDisableCheck(
						allSingleProducts[i].currency,
 						allSingleProducts[i].price,
	 					allSingleProducts[i].ID
	 				);
				}
			}
		}
	}

	//Ghost trade tick
	if (state.ghostTradeFound) {
		ghostTradeTick++;
		if (ghostTradeTick >= 15) {
			calculateGhostPrice();
		}
	}

	if (place == "goGhostTrade") {
		buttonSmallDisableCheck("ghosts",1,"sellGhostBut");
		buttonSmallDisableCheck("stardust",state.ghostPrice,"buyGhostBut");
	}

}

function oldPriceCheck() {
	if (!state.workshopPrice[4] && place == "surface") {
		buttonDisableCheck(state.workshopPrice,"workshopBut");
	}

	if (state.cocoPopsAsteroid && place == "asteroid_st") {
		if (!state.strawPrice[4]) {
			buttonDisableCheck(state.strawPrice,"strawBut");
		} else if (state.strawNr < strawPrices.length) {
			buttonDisableCheck(strawPrices[state.strawNr],"upgradeStrawBut");
		}
	}

	if (place == "workshop" && state.axeNr < axes.length) {
		buttonDisableCheck(axes[state.axeNr],"upgradeAxeBut");
	}

	if (place == "workshop" && state.drillNr < drills.length) {
		buttonDisableCheck(drills[state.drillNr],"upgradeDrillBut");
	}

	if (!state.friendHousePrice[4] && place == "workshop") {
		buttonDisableCheck(state.friendHousePrice,"buildFriendHouseBut");
	}
}

function draw() {
	if (!state.burgulonTime) {
		document.getElementById("wood").innerHTML = state.wood;
		document.getElementById("gold").innerHTML = state.gold;
		document.getElementById("coco").innerHTML = state.coco;
		document.getElementById("stardust").innerHTML = state.stardust;
		document.getElementById("woodSec").innerHTML = "+" + state.woodPS + "/s";
		document.getElementById("goldSec").innerHTML = "+" + state.goldPS + "/s";
		document.getElementById("cocoSec").innerHTML = "+" + state.cocoPS + "/s";
		if (state.cocoDungeonsFound) {
			document.getElementById("ghostCounter").style.display = "inline";
			document.getElementById("ghostCount").innerHTML = state.ghosts;
		} else {
			document.getElementById("ghostCounter").style.display = "none";
		}
	} else {
		document.getElementById("wood").innerHTML = state.bWood;
		document.getElementById("gold").innerHTML = state.bGold;
		document.getElementById("coco").innerHTML = state.bCoco;
		document.getElementById("stardust").innerHTML = state.bStardust;
		document.getElementById("woodSec").innerHTML = "+" + state.bWoodPS + "/s";
		document.getElementById("goldSec").innerHTML = "+" + state.bGoldPS + "/s";
		document.getElementById("cocoSec").innerHTML = "+" + state.bCocoPS + "/s";
		document.getElementById("ghostCounter").style.display = "none";
	}
}

window.addEventListener("touchstart", function() {
	if (transition && skipAllowed) {
		handlingUncut = "";
		cutCount = cutHandling.length;
		document.getElementById("handling").innerHTML = curHandling;
		transition = false;
	}
});

function findResource(nr) {
	if (nr == 0) {
		return state.wood;
	} else if (nr == 1) {
		return state.gold;
	} else if (nr == 2) {
		return state.coco;
	}
}

function findResourcePS(nr) {
	if (nr == 0) {
		return state.woodPS;
	} else if (nr == 1) {
		return state.goldPS;
	} else if (nr == 2) {
		return state.cocoPS;
	}
}

function clearButtons() {
	var myNode = document.getElementById("buttons");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	curButtons = [];
	curButtonCount = 0;
}

function showButtons() {
	setTimeout(function() {
		if (curButtons[curButtonCount]) {
			document.getElementById(curButtons[curButtonCount]).style.display = "block";
		}
		curButtonCount++;
		if (curButtonCount < curButtons.length) {
			showButtons();
		} else {
			transition = false;
		}
	},buttonDelay);
}

function testSvin() {
	console.log("svinet kører");
}

function newHandling(handling) {
	curHandling = handling;
	handlingUncut = "";
	cutCount = 0;
	cutHandling = handling.split(" ");
	transition = true;
	drawHandling();
}

function drawHandling() {
	setTimeout(function() {
		handlingUncut = handlingUncut += cutHandling[cutCount] + " ";
		if (cutHandling[cutCount] != undefined) {
			document.getElementById("handling").innerHTML = handlingUncut;
		}
		cutCount++;
		if (cutCount < cutHandling.length) {
			drawHandling();
		} else {
			showButtons();
		}
		playSound(soundEffect.text);
	},delay);
}

function changeScene(thisHandling,thisArt,thisPlace) {
	document.getElementById("loading_container").innerHTML = "";

	if (hasBridge()) {
		window.scrollTo(0, 30);
	}
	clearButtons();
	newHandling(thisHandling);
	curArt = thisArt;
	changeArt(curArt);
	if (thisPlace) {
		place = thisPlace;
	}
}

function changeArt(curArt) {
	document.getElementById("handlingArt").src = "images/handling/" + curArt + ".gif";
}

function shortUpgradeAnimation(text,art,funct) {
	changeScene(text,art,"upgradeAnimation");
	setTimeout(function() {
		funct();
	},400);
}

function affordCheck(list,burgulon) {
	if (burgulon) {
		var affordable = true;
		if (state.bWood < list[0] && list[0] != 0) {
			affordable = false;
		}
		if (state.bGold < list[1] && list[1] != 0) {
			affordable = false;
		}
		if (state.bCoco < list[2] && list[2] != 0) {
			affordable = false;
		}
		if (state.bStardust < list[3] && list[3] != 0) {
			affordable = false;
		}
	} else {
		var affordable = true;
		if (state.wood < list[0] && list[0] != 0) {
			affordable = false;
		}
		if (state.gold < list[1] && list[1] != 0) {
			affordable = false;
		}
		if (state.coco < list[2] && list[2] != 0) {
			affordable = false;
		}
		if (state.stardust < list[3] && list[3] != 0) {
			affordable = false;
		}
	}
	return affordable;
}

function buttonDisableCheck(list,id,burgulon) {
	if (!burgulon) {
		if (affordCheck(list)) {
			document.getElementById(id).disabled = false;
		} else {
			document.getElementById(id).disabled = true;
		}
	} else {
		if (affordCheck(list,true)) {
			document.getElementById(id).disabled = false;
		} else {
			document.getElementById(id).disabled = true;
		}
	}

}

function smallAffordCheck(currency,price) {
	var affordable = false;
	if (currency == "ghosts" && state.ghosts >= price) {
		affordable = true;
	}
	if (currency == "coins" && state.coins >= price) {
		affordable = true;
	}
	if (currency == "gold" && state.gold >= price) {
		affordable = true;
	}
	if (currency == "stardust" && state.stardust >= price) {
		affordable = true;
	}
	if (currency == "coco" && state.coco >= price) {
		affordable = true;
	}
	if (currency == "bCoco" && state.bCoco >= price) {
		affordable = true;
	}
	return affordable;
}

function buttonSmallDisableCheck(currency,price,ID) {
	if (smallAffordCheck(currency,price)) {
		document.getElementById(ID).disabled = false;
	} else {
		document.getElementById(ID).disabled = true;
	}
}

function toggleResIcons() {
	toggleResInfo();
	if (resIconsToggled) {
		document.getElementById("resIconDiv").style.display = "none";
		resIconsToggled = false;
	} else {
		document.getElementById("resIconDiv").style.display = "inline";
		resIconsToggled = true;
	}
}

function toggleResInfo() {
	if (resInfoToggled) {
		document.getElementById("infoContentHolder").style.display = "none";
		resInfoToggled = false;
	} else {
		document.getElementById("infoContentHolder").style.display = "inline";
		resInfoToggled = true;
	}
}

function resetProgress(settingsToggle) {
	resetState();
	resetMusic();
	if (settingsToggle) {
		toggleSettings();
	}
	startGame();
}

window.addEventListener("didEnterBackground", function (e) {
	isGamePaused = true;
	console.log("didEnterBackground");
}, false);

window.addEventListener("didBecomeActive", function (e) {
	isGamePaused = false;
	console.log("didBecomeActive");
}, false);

function isTouchDevice() {
	return "ontouchstart" in document.documentElement;
}

// CHEATS

function boost() {
	updateState("pickedRobot", true);
	updateState("wood", state.wood += 9000);
	updateState("gold", state.gold += 5000);
	updateState("coco", state.coco += 9000);
	updateState("stardust", state.stardust + 400);
}

function burgerBoost() {
	updateState("bWood", state.bWood += 1000);
	updateState("bGold", state.bGold += 1000);
	updateState("bCoco", state.bCoco += 1000);
	updateState("bStardust", state.bStardust + 1000);
}

function getAllTheFirstFriends() {
	var newFriends = state.friends;
	for (var i = 0; i < 6; i++) {
		newFriends[i].found = true;
	}
	updateState("friends",newFriends);
	updateState("wormFound",true);
}

function spaceFarts() {
	getAllTheFirstFriends();
	updateState("pickedRobot", true);
	updateState("burgerWoodPS", 0);
	updateState("burgerGoldPS", 0);
	updateState("burgerDoing", "");
	updateState("wood", 9000);
	updateState("gold", 4000);
	updateState("coco", 9000);
	updateState("cocoPS", 3);
	updateState("woodPS", 1);
	updateState("goldPS", 2);
	updateState("stardust", 30);
	//derekSemiUpgrade();
	//updateState("broccoliChapter", true);
	completeDungeons();
	updateState("derekDefrosted", true);
	updateArrayState("workshopPrice", 4, true);
	updateArrayState("slotmachinePrice", 4, true);
	updateArrayState("friendHousePrice", 4, true);
	updateArrayState("ddsPrice", 4, true);
	updateState("dungeonFound", true);
	updateArrayState("shopPrices", 1, false);
	updateArrayState("shopPrices", 2, false);
	updateArrayState("shopPrices", 3, false);
	updateState("starmapNr",3);
	burgerCheat = false;
	updateState("dungeonMasterSummoned", true);
	updateArrayState("productStates", 12, true);
	updateState("dungeonsCompleted", true);
	upgradeAnimation("SPACE FARTS!","spaceBroccoli",broccoli);
}

function derekSemiUpgrade() {
	for (var i = 0; i < 3; i++) {
		updateArrayState("skillStates", i, 2);
		updateArrayState("productStates", findProductIndex(allSkills[i].navn), 2);
	}
	updateArrayState("productStates", findProductIndex("Upgrade strength"), 2);
	updateArrayState("productStates", findProductIndex("Upgrade potion belt"), 1);
	updateArrayState("productStates", findProductIndex("Upgrade health"), 2);
	updateState("derekMaxHealth", 200);
	updateState("derekHealth", 200);
	updateState("healthPotionCapacity", 3);
	updateState("derekToughness", 150);
}

function completeDungeons() {
	for (var i = 0; i < state.dungeons.length; i++) {
		if (i < 3) {
			var newDungeons = state.dungeons;
			newDungeons[i].completed = true;
			updateState("dungeons", newDungeons);
		}
	}
}

function goDerekCheckCheat() {
	changeScene(
		"Derek discovers a powerful nuclear fart in a hidden corner of the school.<br/><br/>He can choose to gain it's crazily overpowered bonus, or leave it alone. There is NO WAY BACK once Derek has become nuclear",
		"dungeonSchool",
		"derekCheat"
	);
	createGoButton("GO NUCLEAR","bullFart",goDerekCheat);
	createGoButton("No thanks","talk",goDDS);
}

function goDerekCheat() {
	playSound(soundEffect.derek);
	changeScene("DEREK!??","derek","derekCheat");
	setTimeout(function(){
		playSound(soundEffect.fart);
		changeScene("Derek has drawn insane power from the nuclear fart!!!","bullFart");
		createGoButton("Better watch out!","derek",goDDS);
	},1000);
	updateArrayState("skillStates", 0, 98);
	updateArrayState("skillStates", 1, 98);
	updateArrayState("skillStates", 2, 98);
	updateArrayState("skillStates", 3, 98);
	updateState("derekHealth", 15999);
	updateState("derekMaxHealth", 15999);
	updateState("derekToughness", 15999);
	updateState("healthPotionCapacity", 399);
	updateState("healthPotions", 399);
	updateState("healthPotionHeal", 1040);
}

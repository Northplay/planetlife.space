var initialState = {
	axeNr: 0,
	answerPrice: 1,
	answerStates: [],
	bBarCocoPrice: 10,
	bBarCocoSell: 30,
	bBret: false,
	bBretDoingCoco: false,
	bCelestialSummoner: false,
	bCoco: 0,
	bCocoPS: 0,
	bGold: 0,
	bGoldPS: 0,
	bWood: 0,
	bWoodPS: 0,
	bStardust: 0,
	bSpaceBar: false,
	bWoodSynthesizer: false,
	bottleFound: false,
	burgerDoing: '',
	burgerGoldPS: 1,
	burgerWoodPS: 1,
	burgerGift: false,
	burgerLost: false,
	burgulonCreated: false,
	burgulonTime: false,
	broccoliChapter: false,
	coco: 0,
	cocoDungeonsCompleted: false,
	cocoDungeonsFound: false,
	cocoPenguinFound: false,
	cocoPopsAsteroid: false,
	cocoPS: 0,
	coins: 0,
	curGhostID: 0,
	curCreatureID: 0,
	derekDead: false,
	derekDefrosted: false,
	derekHealth: 50,
	derekMaxHealth: 50,
	derekToughness: 50,
	derekulusX: false,
	drillNr: 0,
	ddsPrice: [300, 20, 0, 0, false],
	dungeonFound: false,
	dungeon2Found: false,
	dungeon3Found: false,
	dungeonMasterSummoned: false,
	dungeons: [],
	dungeonsCompleted: false,
	firstCocoTrade: false,
	friendHousePrice: [500, 0, 0, 0, false],
	friends: [],
	ghostTradeFound: false,
	ghosts: 0,
	ghostPrice: 13,
	ghostTrend: 10,
	ghostTrendy: true,
	gold: 0,
	goldChance: 0.3,
	goldFishPurity: 10,
	goldPS: 0,
	healthPotionCapacity: 1,
	healthPotionHeal: 50,
	healthPotions: 0,
	imgaOver: true,
	lochJuiceVomit: false,
	monsterDungeons: false,
	monsterDungeonsCompleted: false,
	musicMuted: false,
	penguinCocoPS: 0,
	pickedRobot: false,
	planetudFound: false,
	planetudFoundAgain: false,
	planetudPrices: [],
	playIntro: true,
	productStates: [],
	quizDone: false,
	quizHalfway: false,
	randomDungeonDifficulty: 8,
	repairSlipFound: false,
	remouladinFound: false,
	revivePrice: [0, 0, 0, 1],
	savedLevel: 0,
	shopFound: false,
	shopPrices: [],
	skillStates: [],
	slotmachinePrice: [400, 50, 200, 0, false],
	soundMuted: false,
	spaceDungeon: false,
	stardust: 0,
	stardustPS: 0,
	starmapNr: 0,
	strawCocoPS: 1,
	strawNr: 0,
	strawPrice: [100, 10, 0, 0, false],
	stateInitialized: false,
	svenFound: false,
	svenWoodPS: 0,
	unlockedFullHeal: false,
	villaKey: false,
	villaPortal: false,
	wood: 0,
	woodPS: 0,
	workshopDemolished: false,
	workshopPrice: [20, 0, 0, 0, false],
	wormFound: false,
	wormFoundAgain: false,
	wormOut: false,
	version: 2,
};

var state = initialState;
var stateQueue = {
	paused: false,
};

// https://github.com/Northplay/PlanetLife/compare/212c2b611e8ddffc96830e1d658efe9492ca19ad...master
var stateMigrations = [
	{
		// First migration
		from: undefined,
		to: 2,
		added: [
			{ key: 'answerPrice', value: 1 },
			{ key: 'answerStates', value: [] },
			{ key: 'bBarCocoPrice', value: 10 },
			{ key: 'bBarCocoSell', value: 30 },
			{ key: 'bBret', value: false },
			{ key: 'bBretDoingCoco', value: false },
			{ key: 'bCelestialSummoner', value: false },
			{ key: 'bCoco', value: 0 },
			{ key: 'bCocoPS', value: 0 },
			{ key: 'bGold', value: 0 },
			{ key: 'bGoldPS', value: 0 },
			{ key: 'bWood', value: 0 },
			{ key: 'bWoodPS', value: 0 },
			{ key: 'bStardust', value: 0 },
			{ key: 'bSpaceBar', value: false },
			{ key: 'bWoodSynthesizer', value: false },
			{ key: 'bottleFound', value: false },
			{ key: 'burgerLost', value: false },
			{ key: 'burgulonCreated', value: false },
			{ key: 'burgulonTime', value: false },
			{ key: 'broccoliChapter', value: false },
			{ key: 'cocoDungeonsCompleted', value: false },
			{ key: 'cocoDungeonsFound', value: false},
			{ key: 'cocoPenguinFound', value: false },
			{ key: 'coins', value: 0 },
			{ key: 'curGhostID', value: 0 },
			{ key: 'curCreatureID', value: 0 },
			{ key: 'derekDead', value: false },
			{ key: 'derekulusX', value: false },
			{ key: 'ddsPrice', value: [300,20,0,0,false] },
			{ key: 'dungeon2Found', value: false },
			{ key: 'dungeon3Found', value: false },
			{ key: 'dungeonMasterSummoned', value: false },
			{ key: 'dungeons', value: [] },
			{ key: 'dungeonsCompleted', value: false },
			{ key: 'ghostTradeFound', value: false },
			{ key: 'ghosts', value: 0 },
			{ key: 'ghostPrice', value: 13 },
			{ key: 'ghostTrend', value: 10 },
			{ key: 'ghostTrendy', value: true },
			{ key: 'goldFishPurity', value: 10 },
			{ key: 'healthPotionHeal', value: 50 },
			{ key: 'imgaOver', value: true },
			{ key: 'lochJuiceVomit', value: false },
			{ key: 'monsterDungeons', value: false },
			{ key: 'monsterDungeonsCompleted', value: false },
			{ key: 'penguinCocoPS', value: 0 },
			{ key: 'planetudFoundAgain', value: false },
			{ key: 'productStates', value: [] },
			{ key: 'quizDone', value: false },
			{ key: 'quizHalfway', value: false },
			{ key: 'randomDungeonDifficulty', value: 8 },
			{ key: 'remouladinFound', value: false },
			//{ key: 'revivePrice', value: [0,0,0,1] },
			{ key: 'skillStates', value: [] },
			{ key: 'spaceDungeon', value: false },
			{ key: 'strawCocoPS', value: 1 },
			{ key: 'svenFound', value: false },
			{ key: 'svenWoodPS', value: 0 },
			{ key: 'unlockedFullHeal', value: false },
			{ key: 'villaKey', value: false },
			{ key: 'villaPortal', value: false },
			{ key: 'workshopDemolished', value: false },
			{ key: 'wormFoundAgain', value: false },
			{ key: 'version', value: 2},
			{ key: 'didPlayOriginal', value: true },
		],
		removed: [
			'beltUpgradeNr', 'healthUpgradeNr', 'toughnessUpgradeNr',
		],
		updated: [
			// { key: 'test', value: 'what does the fox say?'},
		],
	},
	// {
	// 	from: 2,
	// 	to: 3,
	// 	added: [],
	// 	removed: [],
	// 	updated: [{ key: 'wormFoundAgain', value: true }],
	// },
];

//ADMIN HACKS
// updateState('dungeonFound',true);
// updateState('derekDefrosted',true);
// updateState('playIntro',false);
// updateState('muted',true);

function hasLocalStorage() {
	var test = 'test';
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch (e) {
		return false;
	}
}

function hasBridge() {
	return typeof BridgeCommander !== 'undefined';
}

function decodeState(string) {
	if (typeof string !== 'undefined' && string !== null && string.length > 0) {
		var decoded = Base64.decode(string);
		var parsed = JSON.parse(decoded);
		return parsed;
	} else {
		return null;
	}
}

function encodeState(data) {
	var string = JSON.stringify(data);
	var encoded = Base64.encode(string);

	return encoded;
}

function loadState(onComplete) {
	stateQueue.paused = true;

	if (hasBridge() === true) {
		loadFromBridge(onComplete);
	} else if (hasLocalStorage() === true) {
		loadFromLocalStorage(onComplete);
	} else {
		stateQueue.paused = false;
		onComplete();
	}
}

function parseAndSetState(value) {
	var decoded = decodeState(value);
	if (decoded !== null && decoded['gold'] !== undefined) {
		var migratedState = migrateStateIfNeeded(decoded);
		state = migratedState;
	} else {
		state = initialState;
	}

	stateQueue.paused = false;
}

function loadFromBridge(onComplete) {
	var call = BridgeCommander.call('loadState');

	call.then(function(value) {
		parseAndSetState(value);
		onComplete();
	});
	call.catch(function(error) {
		console.log('Error trying to load state');
		onComplete();
	});
}

function loadFromLocalStorage(onComplete) {
	var value = localStorage.getItem('state');
	parseAndSetState(value);
	onComplete();
}

function updateState(key, value) {
	if (stateQueue.paused) {
		return;
	}

	state[key] = value;
	var encoded = encodeState(state);

	if (hasBridge()) {
		BridgeCommander.call('updateState', encoded);
	} else if (hasLocalStorage()) {
		localStorage.setItem('state', encoded);
	}
}

function updateArrayState(key, index, value) {
	var arrayValue = state[key];
	arrayValue[index] = value;
	updateState(key, arrayValue);
}

function migrateStateIfNeeded(decoded) {
	var version = decoded.version;
	var migrations = stateMigrations.filter(m => m.from === version);
	if (migrations.length > 0) {
		var migratedState = runMigration(decoded, migrations[0]);
		return migrateStateIfNeeded(migratedState);
	}

	return decoded;
}

function runMigration(currentState, migration) {
	var state = currentState;

	migration.added.forEach(m => (state[m.key] = m.value));
	migration.updated.forEach(m => (state[m.key] = m.value));
	migration.removed.forEach(m => delete state[m]);

	state.version = migration.to;

	return state;
}

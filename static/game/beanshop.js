function bean(size,color,image,name) {
	this.size = size;
	this.color = color;
	this.image = image;
	this.name = name;
	this.used = false;
}

var smallBeans = ["Tiny Bean (100 coco)","Tiny Bean (100 wood)","Tiny Bean (20 gold)"];
var mediumBeans = ["Average Bean (500 coco)","Average Bean (500 wood)","Average Bean (150 gold)"];
var bigBeans = ["Huge Bean (1000 coco)","Huge Bean (1000 wood)","Huge Bean (300 gold)"];

var tinyBeanPrice;
var averageBeanPrice;
var hugeBeanPrice;

calculateBeanPrice("Tiny");
calculateBeanPrice("Average");
calculateBeanPrice("Huge");

function calculateBeanPrice(size) {
	if (size == "Tiny") {
		tinyBeanPrice = smallBeans[Math.floor(Math.random() * smallBeans.length)];
	}
	if (size == "Average") {
		averageBeanPrice = mediumBeans[Math.floor(Math.random() * mediumBeans.length)];
	}
	if (size == "Huge") {
		hugeBeanPrice = bigBeans[Math.floor(Math.random() * bigBeans.length)];
	}
}

function goBeanShop() {
	playSound(soundEffect.beanie);
	changeScene(
		"Wanna buy some beans?",
		"beanShop",
		"goBeanShop"
	);
	createGoButton("Back",state.bCoreState,goCore);
	createSingleProduct("Reroll Bean Prices (5 stardust)");
	createSingleProduct(tinyBeanPrice);
	createSingleProduct(averageBeanPrice);
	createSingleProduct(hugeBeanPrice);
}

function buyBean(size) {
	playSound(soundEffect.buy);
	var colors = ["Purple","Blue","Orange"];
	var color = colors[Math.floor(Math.random() * colors.length)];
	var name = size + " " + color + " Bean";

	var image = "bean" + size + color;
	//var image = "hammer";
	console.log(size + " + " + color + " + " + image + " + " + name);
	var thisBean = new bean(size,color,image,name);
	var beanArray = state.bMyBeans;
	beanArray.push(thisBean);
	updateState('bMyBeans', beanArray);

	calculateBeanPrice(size);

	changeScene(
		"You got: " + name + "!",
		image,
		"boughtABean"
	);
	createGoButton("Cool bean!",image,goBeanShop);
}

function anyBeans() {
	var beans = false;
	for (var i = 0; i < state.bMyBeans.length; i++) {
		if (!state.bMyBeans[i].used) {
			beans = true;
		}
	}
	return beans;
}

function rerollBeanPrices() {
	calculateBeanPrice("Tiny");
	calculateBeanPrice("Average");
	calculateBeanPrice("Huge");
	upgradeAnimation("Maybe you can afford it now?","beanHuge",goBeanShop);
}

function goIntroduceBeanShop() {
	changeScene(
		"Beanie is happy to see that you finally lit the little sun within you. With that she of course means your core, that you threw an apple into",
		"beanie"
	);
	createGoButton("Hehe","talk",goIntroduceBeanShop2);
}

function goIntroduceBeanShop2() {
	updateState('bBeanShop', true);
	changeScene(
		"Anyways. If your core runs low on stardust, you'll need to refuel it.</br>Beanie explains that she has set up a special shop in your core, where you can buy something to light your fire",
		"beanie"
	);
	createGoButton("Cool!","beanShop",goBeanShop);
}
var enemy;
var hero;
var heroAtk;
var heroHlth;
var heroNum;
var attacker;
var defender;
var defCP;
var defHlth;
var defNum;
var count = 0;


var characters = [{
	name: 'Jon Snow',
	imgURL: "assets/images/jonsnow.jpeg",
	health: 160,
	AP: 5,
	CP: 30,
}, {
	name: 'Khaleesi',
	imgURL: "assets/images/khaleesi.jpg",
	health: 140,
	AP: 8,
	CP: 13
}, {
	name: 'The Mountain',
	imgURL: "assets/images/mountain.jpg",
	health: 180,
	AP: 9,
	CP: 7
}, {
	name: 'The Night King',
	imgURL: "assets/images/nightking.jpeg",
	health: 150,
	AP: 7,
	CP: 20
}]

function attackEnemy(){


	
	console.log('hero attack: ' + heroAtk);

	defHlth = defHlth - heroAtk;
	heroAtk = heroAtk + attacker.AP;
	$("#enemy").empty().append(buildDef(defNum));
	$("hero").empty().append(buildHero(heroNum));
	if (defHlth <= 0){
		count++;
		console.log(count);
		if(count === 3){
			$("#enemy").empty();
			$("#battleStats").empty().append("After many hard-fought victories " + attacker.name + " has claimed the Iron Throne! <br>");
			$('#reset').show();
		} else {
			$('#battleStats').empty().append(atkMessage() + "<br>" + newEnMessage());
			$('#enemy').empty();
			$('.character').click(newEnemy);
		}
	} else {
		heroHlth = heroHlth - defCP;
		$("#hero").empty().append(buildHero(heroNum));
		$('#battleStats').empty().append(atkMessage() + "<br>" + counterMessage());
	}
	
}

function addClick() {
	$('.character').click(assignChar);
}

function assignChar() {
	if (hero && enemy) {
		console.log("hero and enemy selected");
		$("#battleStats").empty().append("Click 'ATTACK!!'' when ready.");
	}

	if (hero){
		enemy = $(this).appendTo('#enemy');
		switch($(this).data('name')) {
			case "Jon Snow":
				defender = characters[0];
				defNum = 0;
				break;
			case "Khaleesi":
				defender = characters[1];
				defNum = 1;
				break;
			case "The Mountain":
				defender = characters[2];
				defNum = 2;
				break;
			case "The Night King":
				defender = characters[3];
				defNum = 3;
				break;
		}
		console.log("enemy selected");
		console.log("defNum :" + defNum);

		defCP = defender.CP;
		defHlth = defender.health;
	} else {
		hero = $(this).appendTo('#hero');
		switch($(this).data('name')) {
			case "Jon Snow":
				attacker = characters[0];
				heroNum = 0;
				break;
			case "Khaleesi":
				attacker = characters[1];
				heroNum = 1;
				break;
			case "The Mountain":
				attacker = characters[2];
				heroNum = 2;
				break;
			case "The Night King":
				attacker = characters[3];
				heroNum = 3;
				break;
		}
		console.log("hero selected");
		console.log("hero num: " + heroNum);

		heroAtk = attacker.AP;
		heroHlth = attacker.health;
	}
}

function buildChars() {
	$('#reset').hide();

	var currentChar;

	for (var i = 0; i < characters.length; i++) {
		currentChar = characters[i];
		var charDiv = $("<div class='character' data-name='" + currentChar.name + "'>");
    	var charName = $("<div class='character-name'>").text(currentChar.name);
    	var charImage = $("<img alt='image' class='character-image'>");
    	charImage.attr("src", currentChar.imgURL);
    	var charHealth = $("<div class='character-health'>").text("Health: " + currentChar.health);
    	charDiv.append(charName).append(charImage).append(charHealth);
		$('#characters').append(charDiv);
	}

	$("#battleStats").empty().append("Choose your hero and an enemy!");
}

function buildDef(x) {
	var currentChar = characters[x];
	var charDiv = $("<div class='character' data-name='" + currentChar.name + "'>");
    var charName = $("<div class='character-name'>").text(currentChar.name);
    var charImage = $("<img alt='image' class='character-image'>").attr("src", currentChar.imgURL);
    var charHealth = $("<div class='character-health'>").text("Health: " + defHlth);
    charDiv.append(charName).append(charImage).append(charHealth);
    return charDiv;
}

function buildHero(x) {
	var currentChar = characters[x];
	var charDiv = $("<div class='character' data-name='" + currentChar.name + "'>");
    var charName = $("<div class='character-name'>").text(currentChar.name);
    var charImage = $("<img alt='image' class='character-image'>").attr("src", currentChar.imgURL);
    var charHealth = $("<div class='character-health'>").text("Health: " + heroHlth);
    charDiv.append(charName).append(charImage).append(charHealth);
    return charDiv;
}

function newEnemy() {
	enemy = $(this).appendTo('#enemy');
		switch($(this).data('name')) {
			case "Jon Snow":
				defender = characters[0];
				defNum = 0;
				break;
			case "Khaleesi":
				defender = characters[1];
				defNum = 1;
				break;
			case "The Mountain":
				defender = characters[2];
				defNum = 2;
				break;
			case "The Night King":
				defender = characters[3];
				defNum = 3;
				break;
	}
	defCP = defender.CP;
	console.log('new defender counter: ' + defCP);
	defHlth = defender.health;
	console.log('new defender health: ' + defHlth);
	$("#battleStats").empty().append(attacker.name + " and " + defender.name + " are prepared to fight for the Iron Throne...");
}

function atkMessage(){
	return ("   " + attacker.name + " attacked " + defender.name + " for " + heroAtk + " damage!");
}

function counterMessage(){
	return ("   " + defender.name + " counter attacked " + attacker.name + " for " + defCP + " damage!");
}

function newEnMessage() {
	return ("   " + defender.name + " has been defeated in combat! Please choose another enemy to battle.");
}

function restart() {
	console.log('test');
	$('#characters').empty();
	$('#hero').empty();
	$('#enemy').empty();
	buildChars();
	addClick();
}

buildChars();
addClick();
$('#attack').click(attackEnemy);
$('#reset').click(restart);


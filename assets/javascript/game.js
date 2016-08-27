var enemy;
var hero;
var heroAtk;
var heroHlth;
var attacker;
var defender;
var defCP;
var defHlth;

var characters = [{
	id: 'Jon_Snow',
	color: 'black',
	health: 160,
	AP: 5,
	CP: 30
}, {
	id: 'Khaleesi',
	color: 'red',
	health: 140,
	AP: 11,
	CP: 13
}, {
	id: 'The_Mountain',
	color: 'yellow',
	health: 200,
	AP: 13,
	CP: 7
}, {
	id: 'The_Night_King',
	color: 'blue',
	health: 150,
	AP: 10,
	CP: 20
}]

function attackEnemy(){
	
	console.log('hero attack: ' + heroAtk);

	defHlth = defHlth - heroAtk;
	$('#enemy').append(defHlth);
	if (defHlth <= 0){
		$('#enemy').empty();
		$('.character').click(newEnemy);
	}
	heroHlth = heroHlth - defCP;
	console.log('hero health: ' + heroHlth);

	heroAtk = heroAtk + attacker.AP;
	
}

function addClick() {
	$('.character').click(assignChar);
}

function assignChar() {
	if (hero && enemy) return;

	if (hero){
		enemy = $(this).appendTo('#enemy');
		switch($(this).attr('id')) {
			case "Jon_Snow":
				defender = characters[0];
				break;
			case "Khaleesi":
				defender = characters[1];
				break;
			case "The_Mountain":
				defender = characters[2];
				break;
			case "The_Night_King":
				defender = characters[3];
				break;
		}

		defCP = defender.CP;
		defHlth = defender.health;
	} else {
		hero = $(this).appendTo('#hero');
		switch($(this).attr('id')) {
			case "Jon_Snow":
				attacker = characters[0];
				break;
			case "Khaleesi":
				attacker = characters[1];
				break;
			case "The_Mountain":
				attacker = characters[2];
				break;
			case "The_Night_King":
				attacker = characters[3];
				break;
		}

		heroAtk = attacker.AP;
		heroHlth = attacker.health;
	}
}

function buildChars() {
	
	for (var i = 0; i < characters.length; i++) {
		currentChar = characters[i];
		$('#characters').append('<div class = "character" id =' + currentChar.id + '></div>')
	}
}

function newEnemy() {
	enemy = $(this).appendTo('#enemy');
		switch($(this).attr('id')) {
			case "Jon_Snow":
				defender = characters[0];
				break;
			case "Khaleesi":
				defender = characters[1];
				break;
			case "The_Mountain":
				defender = characters[2];
				break;
			case "The_Night_King":
				defender = characters[3];
				break;
	}
	defCP = defender.CP;
	console.log('new defender counter: ' + defCP);
	defHlth = defender.health;
	console.log('new defender health: ' + defHlth);
}

buildChars();
addClick();
$('#attack').click(attackEnemy);


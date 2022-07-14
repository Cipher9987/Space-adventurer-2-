var player, player_Image;
var bullet, bullet_Image;
var enemy, enemy_Image1, enemy_Image2, enemy_Image3;


var enemies = [];
var bullets = [];


function preload() {

	player_Image = loadImage("Assets/Pl.png");

	enemy_Image1 = loadImage("Assets/1.png");
	enemy_Image2 = loadImage("Assets/2.png");
	enemy_Image3 = loadImage("Assets/3.png");
}

function setup() {

	player = createSprite(windowWidth / 2, 650, 70, 70);
	player.addImage(player_Image);
	player.scale = 0.12;
	player.x = player.position.x;
	player.y = player.position.y;

}


function draw() {

	createCanvas(windowWidth, windowHeight);
	background(0);

	//Player Movement-----------------------------------------------------------------

	if (keyWentDown("left")) {
		player.x = player.x - 280;
	}
	if (keyWentDown("right")) {
		player.x = player.x + 280;
	}

	//Player Movement------------------------------------------------------------------

	if (player.x > windowWidth / 0.8) {
		player.x = windowWidth / 2;
	}
	if (player.x < windowWidth / 100) {

		player.x = windowWidth / 2;
	}

	//Bullets Spawn-------------------------------------------------------------------

	if (keyWentDown("space")) {
		spawnBullet();
	}

	//Spawn Enemies--------------------------------------------------------------------

	spawnEnemies();

	//Destroying the enemies-----------------------------------------------------------

	for (var j; j < bullets.length; j++) {

		for (var i; i < enemies.length; i++) {

			if (bullets[j].isTouching(enemies[i])) {

				console.log("hello");

			}
		}
	}

	//Draw Sprites---------------------------------------------------------------------

	drawSprites();

}

function spawnBullet() {

	bullet = createSprite(player.x + 2, player.y, 8, 15);
	bullet.velocityY = -20;

	bullet.depth = player.depth;
	player.depth = player.depth + 1;

	bullets.push(bullet);

	bullet.setCollider("rectangle", 0, 0, 8, 15);
}


function spawnEnemies() {

	if (World.frameCount % 20 === 0) {
		enemy = createSprite(rand, -300, 80, 70);
		enemy.velocityY = 10;

		var rand_Image = Math.round(random(1, 4));
		switch (rand_Image) {
			case 1: enemy.addImage(enemy_Image1);
				break;
			case 2: enemy.addImage(enemy_Image2);
				break;
			case 3: enemy.addImage(enemy_Image3);
				break;
			case 4: enemy.addImage(enemy_Image1);
				break;
			default: break;
		}

		var rand = Math.round(random(1, 5));
		switch (rand) {
			case 1: enemy.x = windowWidth / 2;
				break;
			case 2: enemy.x = windowWidth / 2 + 280;
				break;
			case 3: enemy.x = windowWidth / 2 + 560;
				break;
			case 4: enemy.x = windowWidth / 2 - 280;
				break;
			case 5: enemy.x = windowWidth / 2 - 560;
				break;
			default: break;
		}

		enemy.scale = 0.12;
		enemy.setCollider("rectangle", 0, -60, 800, 700);

		enemy.depth = player.depth;
		player.depth = player.depth + 1;

		enemies.push(enemy);

	}

}

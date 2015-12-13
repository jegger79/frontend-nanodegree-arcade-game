var tileWidth = 100;
var tileHeight = 83;
var score = 0;
var collision = false;

//Display score
var currentScore = "<p>Your score is " + score + "</p>";
document.getElementById('score').innerHTML = currentScore;



// Enemies our player must avoid
var Enemy = function(x, y, speed) {

   // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.sprite = 'images/enemy-bug.png';
    this.x = Math.floor(Math.random() * (300 - 10) + 10) * -1;
    this.y = y;
    this.speed = Math.floor(Math.random() * (200)) + 150;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (this.speed * dt);
    if (this.x > 500) {
        this.reset();
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

    // Now write your own player class
    // This class requires an update(), render() and
    // a handleInput() method.

Enemy.prototype.reset = function() {
    this.x = Math.floor(Math.random() * (300 - 10) + 10) * -1;
    this.speed = Math.floor(Math.random() * (200)) + 150;
};

var Player = function(x, y) {
    this.sprite = 'images/char-cat-girl.png';
    this.x = x;
    this.y = y;
    this.movementx = tileWidth;
    this.movementy = tileHeight;
      };

Player.prototype.update = function(dt) {
    if (this.y <= -35){
        this.reset();
        score++;
        document.getElementById('score').innerHTML = "<p>Your score is " + score + "</p>";

    }

   if (collision === true) {
        this.reset();
        collision = false;
        if (score >  0) {
        score--;
        document.getElementById('score').innerHTML = "<p>Your score is " + score + "</p>";
    }
   }

    // You should multiply any movement by the dt parameter

    // which will ensure the game runs at the same speed for
    // all computers.
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    //if direction key is pressed, increase/decrease x/y value of player
     //keep player on canvas/game board
    if(direction === 'up' && this.y - this.movementy > -50) {
        this.y -= tileHeight;
    }
    if(direction === 'down' && this.y + this.movementy < 450) {
        this.y += tileHeight;
    }
    if(direction === 'left' && this.x - this.movementx >= 0) {
        this.x -= tileWidth;
    }
    if(direction === 'right'  && this.x + this.movementx < 500) {
        this.x += tileWidth;
    }
    console.log(this.x, this.y);

};

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 380;
};

// Now instantiate your objects.
var enemy1 = new Enemy(this.x, 60, this.speed);
var enemy2 = new Enemy(this.x, 145, this.speed);
var enemy3 = new Enemy(this.x, 230, this.speed);
//console.log(enemyRandomX);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3];


// Place the player object in a variable called player
var player = new Player(200, 380);

// Check for collisions using bounding box
checkCollisions = function() {
     for (i = 0; i < allEnemies.length; i++) {
            if (allEnemies[i].x < player.x + 75 &&
                allEnemies[i].x + 75 > player.x &&
                allEnemies[i].y < player.y + 50 &&
                allEnemies[i].y + 50 > player.y) {
                console.log("collision!");
                collision = true;
        }
}
    };

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

  // 1 listen to keyboard strokes and implement movements
});

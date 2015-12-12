//Identify the various classes you will need to write.
//Identify and code the properties each class must have to accomplish its tasks.
//Write the functions that provide functionality to each of your class instances.


// Enemies our player must avoid
var Enemy = function(x, y, speed) {

   // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x++ * dt;

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

    // Now write your own player class
    // This class requires an update(), render() and
    // a handleInput() method.
var Player = function(x, y) {

    this.sprite = 'images/char-cat-girl.png';
    this.x = x;
    this.y = y;
    // 2 checkcollisions function


};

Player.prototype.update = function(dt) {
  //is player on dangerous row
  //is nose of bug near top left corner of player

    // You should multiply any movement by the dt parameter

    // which will ensure the game runs at the same speed for
    // all computers.
    //if up key is pressed,decrease x value of player from this to this...
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    if(direction === 'up') {
        this.y -= 100;
    }
    if(direction === 'down') {
        this.y += 100;
    }
    if(direction === 'left') {
        this.x -= 100;
    }
    if(direction === 'right') {
        this.x += 100;
    }
};


// Now instantiate your objects.
var enemy1 = new Enemy(100, 200);
var enemy2 = new Enemy(200, 300);
var enemy3 = new Enemy(300, 400);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3];


// Place the player object in a variable called player
var player = new Player(300, 400);



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

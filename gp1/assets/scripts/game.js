let config = {
    type: Phaser.AUTO,
    width: 1550,
    height: 760,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        SceneMenu, SceneGame, SceneWin, SceneCredits
        //preload: preload,
        //create: create,
        //update: update
    ]
};

let game = new Phaser.Game(config);

let player, points, cursor, textScore, score;

function preload()
{
    this.load.image("player", "../assets/images/Cat.png");
    this.load.image("points", "../assets/images/pointBox.png");
    this.load.image("background", "../assets/images/Room.png");
    this.load.image('backButton', 'assets/images/backButton.png');

}

function create()
{
    
    this.add.image(0,0, "background").setOrigin(0,0);
    
    player = this.physics.add.sprite(250, 600, "player").setScale(0.5);

    player.setCollideWorldBounds(true);

    goal = this.physics.add.sprite(900, 500, "points").setScale(0.2);

    score = 0;
    let style = {font: "50px Arial", fill: "#000000"};
    textScore = this.add.text(50,50, "Score: " + score.toString(), style);

    cursor = this.input.keyboard.createCursorKeys();
}


function update()
{
    if(cursor.left.isDown)
    {
        player.x -= 5;
    }
    if(cursor.right.isDown)
    {
        player.x += 5;
    }

    this.physics.add.overlap(player, goal, WinGame);
}

function WinGame()
{
    score += 100;
    textScore.setText("Score: " + score);
    goal.disableBody(true, true);
    alert("You Win!");
}
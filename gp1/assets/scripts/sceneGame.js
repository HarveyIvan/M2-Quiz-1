class SceneGame extends Phaser.Scene {
    constructor() {
        super('SceneGame');
    }

    preload() {
        this.load.image("player", "assets/images/Cat.png");
        this.load.image("points", "assets/images/pointBox.png");
        this.load.image("background", "assets/images/Room.png");
    }

    create() {
        this.add.image(0, 0, "background").setOrigin(0, 0);

        this.player = this.physics.add.sprite(250, 600, "player").setScale(0.5);
        this.goal = this.physics.add.sprite(900, 500, "points").setScale(0.2);

        this.player.setCollideWorldBounds(true);

        this.score = 0;
        this.textScore = this.add.text(50, 50, "Score: " + this.score, {
            font: "50px Arial", fill: "#000000"
        });

        this.cursor = this.input.keyboard.createCursorKeys();

        this.physics.add.overlap(this.player, this.goal, () => this.WinGame());
    }

    update() {
        if (this.cursor.left.isDown) this.player.x -= 5;
        if (this.cursor.right.isDown) this.player.x += 5;
    }

    WinGame() {
        this.scene.start('SceneWin');
    }
}

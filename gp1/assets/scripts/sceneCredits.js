//class SceneCredits extends Phaser.Scene {
    //constructor() {
    //    super('SceneCredits');
    //}

    //preload() {
    //    this.load.image("creditsBackground", "assets/images/Credits.png");
    //}

    //create() {
        // Set the image as the background
    //    this.add.image(0, 0, "creditsBackground").setOrigin(0, 0).setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

        // Optional: Add a BACK button to return to the menu
    //    this.add.text(1350, 700, 'BACK', { font: '32px Arial', fill: '#000' })
    //        .setInteractive()
    //        .on('pointerdown', () => this.scene.start('SceneMenu'));
    //}
//}

class SceneCredits extends Phaser.Scene {
    constructor() {
        super('SceneCredits');
    }

    preload() {
        this.load.image("creditsBackground", "assets/images/Credits.png");
        this.load.image("backButton", "assets/images/backButton.png");
    }

    create() {
        // Set the image as the background
        this.add.image(0, 0, "creditsBackground")
            .setOrigin(0, 0)
            .setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

        // Add image-based BACK button at the same position
        this.add.image(1350, 700, 'backButton')
            .setInteractive()
            .setScale(0.2) // Adjust scale as needed
            .on('pointerdown', () => this.scene.start('SceneMenu'));
    }
}

//class SceneWin extends Phaser.Scene {
    //constructor() {
        //super('SceneWin');
    //}

    //preload() {
        //this.load.image("winBackground", "assets/images/Win.png");
    //}

    //create() {
        // Add the background image
        //this.add.image(0, 0, "winBackground").setOrigin(0, 0).setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

        // Add retry button
        //this.add.text(550, 600, 'RETRY', { font: '36px Arial', fill: '#000' })
            //.setInteractive()
            //.on('pointerdown', () => this.scene.start('SceneGame'));

        // Add main menu button
        //this.add.text(850, 600, 'MAIN MENU', { font: '36px Arial', fill: '#000' })
            //.setInteractive()
            //.on('pointerdown', () => this.scene.start('SceneMenu'));
    //}
//}


class SceneWin extends Phaser.Scene {
    constructor() {
        super('SceneWin');
    }

    preload() {
        this.load.image("winBG", "assets/images/Win.png");
        this.load.image("retryBtn", "assets/images/retryButton.png");
        this.load.image("mainMenuBtn", "assets/images/mainmenuButton.png");
    }

    create() {
        // Set background image
        this.add.image(0, 0, "winBG").setOrigin(0, 0);

        // Add RETRY button image
        const retryButton = this.add.image(500, 600, "retryBtn").setInteractive();
        retryButton.setScale(0.3);
        retryButton.on('pointerdown', () => {
            this.scene.start('SceneGame');
        });

        // Add MAIN MENU button image
        const mainMenuButton = this.add.image(1000, 600, "mainMenuBtn").setInteractive();
        mainMenuButton.setScale(0.4);
        mainMenuButton.on('pointerdown', () => {
            this.scene.start('SceneMenu');
        });
    }
}

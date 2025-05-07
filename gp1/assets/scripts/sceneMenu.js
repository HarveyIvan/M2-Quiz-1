class SceneMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneMenu' });
    }

    preload() {
        this.load.image('background', '../assets/images/Room.png');
        this.load.image('mainmenuButton', '../assets/images/mainmenuButton.png');
        this.load.image('playButton', '../assets/images/playButton.png');
        this.load.image('creditsButton', '../assets/images/creditsButton.png');
        this.load.image('quitButton', '../assets/images/quitButton.png');
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);

        const centerX = this.cameras.main.centerX;
        let startY = 200;

        this.add.image(centerX, 100, 'mainmenuButton').setScale(0.2);

        let playBtn = this.add.image(centerX, startY + 25, 'playButton').setScale(0.2).setInteractive();
        let creditsBtn = this.add.image(centerX, startY + 150, 'creditsButton').setScale(0.2).setInteractive();
        let quitBtn = this.add.image(centerX, startY + 270, 'quitButton').setScale(0.2).setInteractive();

        playBtn.on('pointerdown', () => {
            this.scene.start('SceneGame');
        });

        creditsBtn.on('pointerdown', () => {
            this.scene.start('SceneCredits');
        });

        quitBtn.on('pointerdown', () => {
            alert('You exited the game.');
            
            window.open('', '_self');
            window.close();
        });
        
    }
}

import { AppStates } from '../settings/app.settings';

export class StartScreen {
    constructor(application, canvasImage) {
        this.startState = StartStates.start;
        this.application = application;
        this.canvasImage = canvasImage;
    }

    showStart() {
        this.canvasImage.paintBackground({ color: 'black' });
        const img = this.application.getTitleImage();
        const canvasSize = this.canvasImage.getWidthHeight();
        const imgSizeXY = this.canvasImage.calculateImageSize(img, 25);
        this.canvasImage.paintImage({
            image: img,
            x: canvasSize.x / 2 - imgSizeXY.x / 2,
            y: 50,
            width: imgSizeXY.x,
            height: imgSizeXY.y
        });
        this.canvasImage.writeText({
            color: 'white',
            positionX: canvasSize.x / 2 - 135,
            positionY: 220,
            text: '1 - start the game',
            fontFamily: 'PressStart',
            fontSize: 15
        });
        this.canvasImage.writeText({
            color: 'white',
            positionX: canvasSize.x / 2 - 135,
            positionY: 260,
            text: '2 - show controls',
            fontFamily: 'PressStart',
            fontSize: 15
        });
        this.canvasImage.writeText({
            color: 'white',
            positionX: canvasSize.x / 2 - 135,
            positionY: 300,
            text: '3 - show info',
            fontFamily: 'PressStart',
            fontSize: 15
        });
    }

    showControls() {
        const canvasSize = this.canvasImage.getWidthHeight();
        const xoffset = 150;
        this.canvasImage.paintBackground({ color: 'black' });
        this.canvasImage.writeText({
            color: 'white',
            positionX: canvasSize.x / 2 - xoffset,
            positionY: canvasSize.y / 2 - 140,
            text: '<- - move ship to the left',
            fontFamily: 'PressStart',
            fontSize: 15
        });
        this.canvasImage.writeText({
            color: 'white',
            positionX: canvasSize.x / 2 - xoffset,
            positionY: canvasSize.y / 2 - 100,
            text: '-> - move ship to the right',
            fontFamily: 'PressStart',
            fontSize: 15
        });
        this.canvasImage.writeText({
            color: 'white',
            positionX: canvasSize.x / 2 - xoffset,
            positionY: canvasSize.y / 2 - 60,
            text: 'space - shoot',
            fontFamily: 'PressStart',
            fontSize: 15
        });

        this.canvasImage.writeText({
            color: 'white',
            positionX: canvasSize.x / 2 - xoffset,
            positionY: canvasSize.y / 2 + 20,
            text: '4 - back to title screen',
            fontFamily: 'PressStart',
            fontSize: 15
        });
    }

    showInfo() {
        const canvasSize = this.canvasImage.getWidthHeight();
        this.canvasImage.paintBackground({ color: 'black' });
        this.canvasImage.writeText({
            color: 'white',
            positionX: canvasSize.x / 2 - 130,
            positionY: canvasSize.y / 2 - 140,
            text: 'Simple clone of arcade game Gyruss',
            fontFamily: 'PressStart',
            fontSize: 10
        });
        this.canvasImage.writeText({
            color: 'white',
            positionX: canvasSize.x / 2 - 240,
            positionY: canvasSize.y / 2 - 100,
            text: 'Font "Vermin Vibes 1989" was used to create title image',
            fontFamily: 'PressStart',
            fontSize: 10
        });
        this.canvasImage.writeText({
            color: 'white',
            positionX: canvasSize.x / 2 - 150,
            positionY: canvasSize.y / 2 + 20,
            text: '4 - back to title screen',
            fontFamily: 'PressStart',
            fontSize: 15
        });
    }

    handleInputs() {
        const keyPresses = this.application.keyHandler.keyPresses;
        console.log('keypess');
        if (keyPresses['1'] === true) {
            this.startState = StartStates.start;
            this.application.state = AppStates.game;
        }
        if (keyPresses['4'] === true) {
            this.startState = StartStates.start;
        }
        if (keyPresses['2'] === true) {
            this.startState = StartStates.controls;
        }
        if (keyPresses['3'] === true) {
            this.startState = StartStates.info;
        }
    }

    showScreen() {
        switch (this.startState) {
            case StartStates.start: {
                this.showStart();
                break;
            }
            case StartStates.controls: {
                this.showControls()
                break;
            }
            case StartStates.info: {
                this.showInfo();
            }
        }
    }

    run() {
        if (this.application.state === AppStates.start) {
            this.handleInputs();
            this.showScreen();
        }
    }
}

const StartStates = {
    start: 'START',
    info: 'INFO',
    controls: 'CONTROLS'
};

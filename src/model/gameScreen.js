import { AppStates } from '../settings/app.settings';

export class GameScreen {
    constructor(application, canvasImage) {
        this.application = application;
        this.canvasImage = canvasImage;
    }

    run() {
        if (this.application.state === AppStates.game) {
            this.canvasImage.paintBackground({ color: 'green' });
        }
    }
}

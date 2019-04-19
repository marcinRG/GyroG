import { AppStates } from '../../settings/app.settings';
import { Sky } from './../gameObjects/sky';

export class GameScreen {
    constructor(application, canvasImage) {
        this.application = application;
        this.canvasImage = canvasImage;
        this.backgroundSky = new Sky();
    }

    run() {
        if (this.application.state === AppStates.game) {
            this.canvasImage.paintBackground({ color: 'magenta' });
            this.backgroundSky.animate();
        }
    }
}

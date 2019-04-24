import { AppStates } from '../../settings/app.settings';
import { Sky } from './../gameObjects/sky';

export class GameScreen {
    constructor(application, canvasImage) {
        this.application = application;
        this.canvasImage = canvasImage;
        this.backgroundSky = new Sky(this.canvasImage);
    }

    run() {
        if (this.application.state === AppStates.game) {
            this.backgroundSky.animate();
        }
    }
}

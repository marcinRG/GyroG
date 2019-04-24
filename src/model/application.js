import { AppStates } from '../settings/app.settings';
import { KeyHandler } from './keyHandler';

export class Application {
    constructor() {
        this.state = AppStates.init;
        this.keyHandler = new KeyHandler();
    }

    addImages(images) {
        this.images = images;
    }

    getTitleImage() {
        return this.images[0];
    }

    init() {
        //this.state = AppStates.loading;
        this.state = AppStates.game;
    }
}

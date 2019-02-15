import { AppStates } from '../utils';

export class StartScreen {
    constructor(application) {
        this.application = application;
        console.log('start screen');
    }

    run() {
        if (this.application.state === AppStates.start) {
            console.log('start');
        }
    }
}

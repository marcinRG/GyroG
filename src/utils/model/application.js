import { AppStates } from '../utils';

export class Application {
    constructor() {
        this.state = AppStates.init;
    }

    init() {
        this.state = AppStates.loading;
    }
}

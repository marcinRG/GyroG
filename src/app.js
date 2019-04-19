import style from './scss/style.scss';

import { Application } from './model/application';
import { LoadScreen } from './model/screens/loadScreen';
import { StartScreen } from './model/screens/startScreen';
import { DisplayCanvas } from './components/DisplayCanvas';
import { GameScreen } from './model/screens/gameScreen';

window.addEventListener('load', () => {
    const canvasImage = new DisplayCanvas({
        querySelectorString: '.canvas-output'
    });
    const app = new Application();
    const loadScreen = new LoadScreen(app, canvasImage);
    const startScreen = new StartScreen(app, canvasImage);
    const gameScreen = new GameScreen(app, canvasImage);
    app.init();

    function run() {
        loadScreen.run();
        startScreen.run();
        gameScreen.run();
        window.requestAnimationFrame(run);
    }

    run();
});

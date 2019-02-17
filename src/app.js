import style from './scss/style.scss';

import { Application } from './model/application';
import { LoadAssets } from './model/loadAssets';
import { StartScreen } from './model/startScreen';
import { DisplayCanvas } from './components/DisplayCanvas';
import { GameScreen } from './model/gameScreen';

window.addEventListener('load', () => {
    const canvasImage = new DisplayCanvas({
        querySelectorString: '.canvas-output'
    });
    const app = new Application();
    const loadAssets = new LoadAssets(app, canvasImage);
    const startScreen = new StartScreen(app, canvasImage);
    const gameScreen = new GameScreen(app, canvasImage);
    app.init();

    function run() {
        loadAssets.run();
        startScreen.run();
        gameScreen.run();
        window.requestAnimationFrame(run);
    }

    run();
});

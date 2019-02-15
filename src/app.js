import style from './scss/style.scss';

import { Application } from './utils/model/application';
import { LoadAssets } from './utils/model/loadAssets';
import { StartScreen } from './utils/model/startScreen';
import { DisplayCanvas } from './components/DisplayCanvas';

const canvasImage = new DisplayCanvas({
    querySelectorString: '.canvas-output'
});
const app = new Application();
const loadAssets = new LoadAssets(app, canvasImage);
const startScreen = new StartScreen(app, canvasImage);
app.init();

function run() {
    loadAssets.run();
    startScreen.run();
    window.requestAnimationFrame(run);
}

run();

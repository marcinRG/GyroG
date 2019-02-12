import style from './scss/style.scss';

import { DisplayCanvas } from './components/DisplayCanvas';

const canvasImage = new DisplayCanvas({
    querySelectorString: '.canvas-output'
});
canvasImage.saveShadowAndAlphaSettings();
canvasImage.restoreShadowAndAlphaSettings();

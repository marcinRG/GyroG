import style from './scss/style.scss';

import { DisplayCanvas } from './components/DisplayCanvas';

const canvasOptions = new DisplayCanvas({
    querySelectorString: '.canvas-image',
    elementClass: 'canvas-img'
});
canvasOptions.saveShadowAndAlphaSettings();
canvasOptions.restoreShadowAndAlphaSettings();

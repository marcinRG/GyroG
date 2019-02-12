import { getMaxCanvasSize } from '../utils/utils';

export class DisplayCanvas {
    constructor(properties) {
        this.htmlCanvasElement = null;
        this.context2d = null;
        this.init(properties);
    }

    init(properties) {
        this.htmlCanvasElement = document.querySelector(properties.querySelectorString);
        if (this.htmlCanvasElement) {
            this.context2d = this.htmlCanvasElement.getContext('2d');
            this.setCanvasSize();
            this.saveShadowAndAlphaSettings();
        }
    }

    setCanvasSize() {
        const widthHeight = getMaxCanvasSize();
        this.htmlCanvasElement.width = widthHeight.maxWidth;
        this.htmlCanvasElement.height = widthHeight.maxHeight;
    }

    saveShadowAndAlphaSettings() {
        if (this.context2d) {
            this.shadowsAndAlphaSettings = {
                shadowColor: this.context2d.shadowColor,
                shadowBlur: this.context2d.shadowBlur,
                shadowOffsetX: this.context2d.shadowOffsetX,
                shadowOffsetY: this.context2d.shadowOffsetY,
                globalAlpha: this.context2d.globalAlpha
            };
        }
    }

    restoreShadowAndAlphaSettings() {
        if (this.context2d) {
            this.context2d.shadowColor = this.shadowsAndAlphaSettings.shadowColor;
            this.context2d.shadowBlur = this.shadowsAndAlphaSettings.shadowBlur;
            this.context2d.shadowOffsetX = this.shadowsAndAlphaSettings.shadowOffsetX;
            this.context2d.shadowOffsetY = this.shadowsAndAlphaSettings.shadowOffsetY;
            this.context2d.globalAlpha = this.shadowsAndAlphaSettings.globalAlpha;
        }
    }

    getWidthHeight() {
        const rect = this.htmlCanvasElement.getBoundingClientRect();
        return {
            x: rect.width,
            y: rect.height
        };
    }
}

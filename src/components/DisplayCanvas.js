export class DisplayCanvas {
    constructor(properties) {
        this.htmlCanvasElement = null;
        this.context2d = null;
        this.shadowsAndAlphaSettings = this.saveShadowAndAlphaSettings();
        this.setElements(properties);
    }

    setElements(properties) {
        this.htmlCanvasElement = document.querySelector(properties.querySelectorString);
        if (this.htmlCanvasElement) {
            this.context2d = this.htmlCanvasElement.getContext('2d');
            this.saveShadowAndAlphaSettings();
        }
    }

    saveShadowAndAlphaSettings() {
        this.shadowsAndAlphaSettings = {
            shadowColor: this.context2d.shadowColor,
            shadowBlur: this.context2d.shadowBlur,
            shadowOffsetX: this.context2d.shadowOffsetX,
            shadowOffsetY: this.context2d.shadowOffsetY,
            globalAlpha: this.context2d.globalAlpha
        };
    }

    restoreShadowAndAlphaSettings() {
        this.context2d.shadowColor = this.shadowsAndAlphaSettings.shadowColor;
        this.context2d.shadowBlur = this.shadowsAndAlphaSettings.shadowBlur;
        this.context2d.shadowOffsetX = this.shadowsAndAlphaSettings.shadowOffsetX;
        this.context2d.shadowOffsetY = this.shadowsAndAlphaSettings.shadowOffsetY;
        this.context2d.globalAlpha = this.shadowsAndAlphaSettings.globalAlpha;
    }
}

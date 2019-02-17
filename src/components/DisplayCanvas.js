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

    paintImage(image) {
        if (this.context2d) {
            this.saveShadowAndAlphaSettings();
            if (image.image) {
                this.context2d.save();
                if (image.transparency) {
                    this.context2d.globalAlpha = image.transparency / 100;
                }
                if (image.rotation) {
                    this.rotateImage(image.rotation, image.rotationCenter);
                }
                this.context2d.drawImage(image.image, image.x, image.y, image.width, image.height);
                this.context2d.restore();
            }
            this.restoreShadowAndAlphaSettings();
        }
    }

    calculateImageSize(image, scale) {
        const divider = 100 / scale;
        if (image) {
            return {
                x: Math.round(image.width / divider),
                y: Math.round(image.height / divider)
            };
        }
    }

    rotateImage(rotation, rotationCenter) {
        this.context2d.translate(rotationCenter.x, rotationCenter.y);
        this.context2d.rotate(rotation * Math.PI / 180);
    }

    paintBackground(canvasOptions) {
        const canvasSize = this.getWidthHeight();
        if (this.context2d) {
            this.saveShadowAndAlphaSettings();
            this.context2d.fillStyle = canvasOptions.color;
            this.context2d.fillRect(0, 0, canvasSize.x, canvasSize.y);
            this.restoreShadowAndAlphaSettings();
        }
    }

    writeText(text) {
        if (this.context2d) {
            this.saveShadowAndAlphaSettings();
            if ((text.text) && (text.text !== '')) {
                this.addText(text);
            }
            this.restoreShadowAndAlphaSettings();
        }
    }

    addText(text) {
        this.context2d.fillStyle = text.color;
        this.context2d.font = `normal normal ${text.fontSize}px ${text.fontFamily}`;
        this.addShadow(text);
        if (text.strokeEnabled) {
            this.context2d.strokeStyle = text.strokeColor;
            this.context2d.lineWidth = text.strokeWidth;
            this.context2d.strokeText(text.text, text.positionX, text.positionY);
        }
        this.context2d.fillText(text.text, text.positionX, text.positionY);
    }

    addShadow(text) {
        if (text.shadowEnabled) {
            this.context2d.shadowColor = text.shadowColor;
            this.context2d.shadowBlur = text.shadowBlur;
            this.context2d.shadowOffsetX = text.shadowOffsetX;
            this.context2d.shadowOffsetY = text.shadowOffsetY;
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

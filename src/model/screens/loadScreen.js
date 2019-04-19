import { AppStates, images } from '../../settings/app.settings';

export class LoadScreen {
    constructor(application, canvasImage) {
        this.application = application;
        this.canvasImage = canvasImage;
        this.progress = 0;
        this.imageLoad = true;
        this.innerCounter = 0;
    }

    loadImages(images) {
        this.imageLoad = false;
        this.images = images;
        this.maxAssets = images.length;
        this.images = this.images.map((imgPath) => {
            return loadImage(imgPath, this.changeProgress, this);
        });
    }

    changeProgress() {
        this.progress = this.progress + 1;
    }

    checkAllAssetsLoaded() {
        if (this.maxAssets === this.progress) {
            this.application.addImages(this.images);
            this.application.state = AppStates.start;
        }
    }

    show(count, progress) {
        const text = getLoadingText(count);
        const progressText = getProgressText(progress);
        const canvasXY = this.canvasImage.getWidthHeight();
        const posX = getLoadPositionX(canvasXY.x);
        const posY = getLoadPositionY(count, canvasXY.y);
        this.canvasImage.paintBackground({ color: 'green' });
        this.canvasImage.writeText({
            color: 'white',
            positionX: posX,
            positionY: posY,
            text: text,
            fontFamily: 'PressStart',
            fontSize: 20
        });

        this.canvasImage.writeText({
            color: 'yellow',
            positionX: posX,
            positionY: canvasXY.y / 2 + 50,
            text: progressText,
            fontFamily: 'PressStart',
            fontSize: 15
        });
    }

    run() {
        if (this.application.state === AppStates.loading) {
            this.innerCounter = updateInnerCounter(this.innerCounter);
            this.show(this.innerCounter, this.progress);
            if (this.imageLoad) {
                this.loadImages(images);
            }
            this.checkAllAssetsLoaded();
        }
    }
}

function loadImage(imgPath, callback, obj) {
    const img = new Image();
    img.src = imgPath;
    img.addEventListener('load', () => {
        callback.apply(obj);
    });
    return img;
}

function updateInnerCounter(count) {
    if (count <= 300) {
        return count + 1;
    }
    return 0;
}

function getLoadingText(count) {
    let text = 'Loading';
    if (count > 75) {
        text = text + ' .';
    }
    if (count > 150) {
        text = text + '.';
    }
    if (count > 225) {
        text = text + '.';
    }
    return text;
}

function getLoadPositionX(pos0) {
    return pos0 / 2 - 80;
}

function getLoadPositionY(count, pos0) {
    const posStart = pos0 / 2 - 15;
    const i = Math.floor(count / 50);
    const y = Math.round((count % 50) / 3);
    if (i % 2) {
        return posStart + Math.round(50 / 3) - y;
    } else {
        return posStart + y;
    }
}

function getProgressText(progress) {
    let arr = [];
    for (let i = 0; i < progress; i++) {
        arr.push('*');
    }
    return arr.join(' ');
}

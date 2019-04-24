import { getRandomIntInclusive } from './../../utils/utils';

const colors = ['white', 'lemonchiffon', 'beige', 'antiquewhite', 'powderblue'];
export class Star {
    constructor(canvasImage) {
        this.canvasImage = canvasImage;
        this.init();
    }

    init() {
        this.speed = getRandomIntInclusive(7, 35);
        this.angle = getRandomIntInclusive(0, 359);
        this.distance = getRandomIntInclusive(70, 120);
        this.size = getRandomIntInclusive(1, 3);
        this.color = colors[getRandomIntInclusive(0, colors.length)];
    }

    move() {
        const canvasSize = this.canvasImage.getWidthHeight();
        const newPosition = this.distance + this.speed;
        this.distance = newPosition;
        return getPosition(this.angle, this.distance, canvasSize);
    }

    paint(x, y) {
        this.canvasImage.drawCircle({
            color: this.color,
            lineWidth: 10,
            x: x,
            y: y,
            radius: this.size
        });
    }

    animate() {
        const canvasSize = this.canvasImage.getWidthHeight();
        const pos = this.move();
        if ((pos.x >= 0 && pos.x <= canvasSize.x) &&
            (pos.y >= 0 && pos.y <= canvasSize.y)) {
            this.paint(pos.x, pos.y);
        }
        else {
            this.init();
        }
    }
}

function getMaxDistance(canvasSize) {
    return Math.round(Math.sqrt(canvasSize.x * canvasSize.x + canvasSize.y * canvasSize.y));
}

function getPosition(angle, distance, canvasSize) {
    return {
        x: Math.round(canvasSize.x / 2 + (Math.sin(angle * Math.PI / 180) * distance)),
        y: Math.round(canvasSize.y / 2 + (Math.cos(angle * Math.PI / 180) * distance))
    };
}

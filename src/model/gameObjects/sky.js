import { getRandomIntInclusive } from './../../utils/utils';
import { Star } from './star';

export class Sky {
    constructor(canvasImage) {
        this.canvasImage = canvasImage;
        this.stars = createStars(this.canvasImage);
    }

    animate() {
        this.canvasImage.paintBackground({ color: 'black' });
        if (arrayExist(this.stars)) {
            this.stars.forEach((value) => {
                value.animate();
            });
        }
    }
}

function arrayExist(arrayToCheck) {
    return (arrayToCheck && Array.isArray(arrayToCheck) && arrayToCheck.length > 0);
}

function createStars(canvasImage) {
    let arrayOfStars = [];
    const numberOfStars = getRandomIntInclusive(20, 70);
    for (let i = 0; i < numberOfStars; i++) {
        const star = new Star(canvasImage);
        arrayOfStars.push(star);
    }
    return arrayOfStars;
}

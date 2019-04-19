import { getRandomIntInclusive } from './../../utils/utils';
import { Star } from './star';

export class Sky {
    constructor() {
        this.stars = createStars();
        if (arrayExist(this.stars)) {
            console.log('sky');
        }
    }

    animate() {
        if (arrayExist(this.stars)) {
            this.stars.forEach((value) => {
                console.log(value);
            });
        }

        // this.stars.forEach((star) => {
        //    console.log(star);
        // });
    }
}

function arrayExist(arrayToCheck) {
    return (arrayToCheck && Array.isArray(arrayToCheck) && arrayToCheck.length > 0);
}

function createStars() {
    let arrayOfStars = [];
    const numberOfStars = getRandomIntInclusive(5, 20);
    console.log(numberOfStars);
    for (let i = 0; i < numberOfStars; i++) {
        const star = new Star(10, 10, 2, 1);
        arrayOfStars.push(star);
    }
    console.log(arrayOfStars);
    return arrayOfStars;
}

export class Star {
    constructor(angle, distance, size, speed) {
        this.speed = speed;
        this.angle = angle;
        this.distance = distance;
        this.size = size;
        console.log('star created');
    }

    animate() {
        console.log('star');
    }
}

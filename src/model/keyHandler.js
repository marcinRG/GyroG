export class KeyHandler {
    constructor() {
        this.keyPresses = [];
        window.addEventListener('keydown', (value) => {
            switch (value.key) {
                case '1': {
                    this.keyPresses['1'] = true;
                    break;
                }
                case '2': {
                    this.keyPresses['2'] = true;
                    break;
                }
                case '3': {
                    this.keyPresses['3'] = true;
                    break;
                }
                case '4': {
                    this.keyPresses['4'] = true;
                    break;
                }
                case 'ArrowLeft': {
                    this.keyPresses['ArrowLeft'] = true;
                    break;
                }
                case 'ArrowRight': {
                    this.keyPresses['ArrowRight'] = true;
                    break;
                }
            }
        });

        window.addEventListener('keyup', (value) => {
            switch (value.key) {
                case '1': {
                    this.keyPresses['1'] = false;
                    break;
                }
                case '2': {
                    this.keyPresses['2'] = false;
                    break;
                }
                case '3': {
                    this.keyPresses['3'] = false;
                    break;
                }
                case '4': {
                    this.keyPresses['4'] = false;
                    break;
                }
                case 'ArrowLeft': {
                    this.keyPresses['ArrowLeft'] = false;
                    break;
                }
                case 'ArrowRight': {
                    this.keyPresses['ArrowRight'] = false;
                    break;
                }
            }
        });
    }
}

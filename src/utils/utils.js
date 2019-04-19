export function getMaxCanvasSize() {
    const elem = document.querySelector('.canvas-image');
    const rect = elem.getBoundingClientRect();
    return {
        maxWidth: Math.floor(rect.width - 30),
        maxHeight: Math.floor(rect.height - 30)
    };
}

export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

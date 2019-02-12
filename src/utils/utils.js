export function getMaxCanvasSize() {
    const elem = document.querySelector('.canvas-image');
    const rect = elem.getBoundingClientRect();
    return {
        maxWidth: Math.floor(rect.width - 30),
        maxHeight: Math.floor(rect.height - 30)
    };
}

export const AppStates = [
    'APP_START',
    'APP_RUN',
    'APP_END'
];

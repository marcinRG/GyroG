export function getMaxCanvasSize() {
    const elem = document.querySelector('.canvas-image');
    const rect = elem.getBoundingClientRect();
    return {
        maxWidth: Math.floor(rect.width - 30),
        maxHeight: Math.floor(rect.height - 30)
    };
}

export const AppStates = {
    init: 'APP_INIT',
    loading: 'APP_LOAD',
    start: 'APP_START'
};

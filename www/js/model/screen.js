const MainModel = require('./../lib/main-model');

export default class Screen extends MainModel {
    constructor() {
        super();

        const screen = this;

        screen.set(getSize());
        screen.initialize();
    }

    initialize() {
        const screen = this;

        screen.bindEventListeners();
    }

    onResize() {
        const screen = this;

        screen.set(getSize());
        screen.trigger('resize');
    }

    bindEventListeners() {
        const screen = this;

        window.addEventListener('resize', () => screen.onResize(), false);
    }
}

export function getSize() {
    const docElem = document.documentElement;
    const width = docElem.clientWidth;
    const height = docElem.clientHeight;

    return {
        width,
        height,
        halfWidth: width / 2,
        halfHeight: height / 2
    };
}

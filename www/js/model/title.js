const MainModel = require('./../lib/main-model');
const PIXI = require('pixi.js');

export default class Title extends MainModel {
    constructor() {
        super();

        const model = this;

        model.initialize();
    }

    initialize() {
        const model = this;

        model.initSprite();
    }

    initSprite() {
        const model = this;
        const sprite = PIXI.Sprite.fromImage('free-hugs-title');

        sprite.anchor.set(0.5, 1);
        model.set({sprite});
    }
}

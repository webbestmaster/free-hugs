import Screen from './model/screen';
import Bear from './model/bear';
import {countTo} from './lib/util';
import imageToBase64 from './lib/image-to-base64';
const PIXI = require('pixi.js');

// init helpers
const screen = new Screen();

// init renderer
const pixiApp = new PIXI.Application(screen.get('width'), screen.get('height'), {
    backgroundColor: 0xf6fcff
});

document.body.appendChild(pixiApp.view);
// add bear

// const frames = countTo(75, ii => `./assets/hug-${ii}.png`);

let chainPromise = Promise.resolve();

const frames = countTo(75, ii => {
    chainPromise = chainPromise.then(() => {
        console.log(`./assets/hug-${ii}.png`);
        return imageToBase64(`./assets/hug-${ii}.png`);
    });
});


PIXI.loader
// .add(frames)
    .load(() => {
        const bear = new Bear();
        const bearSprite = bear.get('sprite');

        pixiApp.stage.addChild(bearSprite);

        function onScreenResize() {
            const {width, height} = screen.getAllAttributes();

            pixiApp.renderer.resize(width, height);
            bearSprite.position.set(Math.round(width / 2), Math.round(height / 2));
        }

        onScreenResize();

        screen.onChange('resize', onScreenResize);


        pixiApp.ticker.add(delta => {


        });
    });


import Screen from './model/screen';
import Bear from './model/bear';
import {countTo} from './lib/util';

const PIXI = require('pixi.js');

// init helpers
const screen = new Screen();

// init renderer
const pixiApp = new PIXI.Application(screen.get('width'), screen.get('height'), {
    backgroundColor: 0xf6fcff
});

document.body.appendChild(pixiApp.view);

countTo(75, ii => PIXI.loader.add(`hug-${ii}`, require(`base64-image-loader!./../base64/hug-${ii}.png`)));
PIXI.loader.add('free-hugs-title', require('base64-image-loader!./../base64/free-hugs-title.png'));

PIXI.loader
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

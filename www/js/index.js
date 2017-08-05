import Screen from './model/screen';
import Bear from './model/bear';
import Title from './model/title';
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
        const title = new Title();
        const titleSprite = title.get('sprite');

        pixiApp.stage.addChild(titleSprite);

        const bear = new Bear();
        const bearSprite = bear.get('sprite');

        pixiApp.stage.addChild(bearSprite);


        function onScreenResize() {
            const {halfWidth, halfHeight, width, height} = screen.getAllAttributes();

            pixiApp.renderer.resize(width, height);

            bearSprite.position.set(halfWidth, halfHeight);
            titleSprite.position.set(halfWidth, halfHeight - 180); // 180 ~ height of bear
        }

        onScreenResize();

        screen.onChange('resize', onScreenResize);


        pixiApp.ticker.add(delta => {


        });
    });

import {countTo} from './lib/util';
require('./lib/main-model');
require('pixi.js');
require('gsap');

countTo(75, ii => require(`base64-image-loader!./../base64/hug-${ii}.png`));

require('base64-image-loader!./../base64/free-hugs-title.png');

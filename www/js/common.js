require('./lib/main-model');
require('pixi.js');

import {countTo} from './lib/util';

countTo(75, ii => require(`base64-image-loader!./../base64/hug-${ii}.png`));

require('base64-image-loader!./../base64/free-hugs-title.png');

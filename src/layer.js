import { winSize, LabelTTF, Layer, Sprite } from 'cc';
import res from './resources';

class HelloWorldLayer extends Layer {
    constructor() {
        super();

        this.sprite = null;
    }

    init() {
        super.init();

        var size = winSize;

        var helloLabel = new LabelTTF("Hello World", "Arial", 38);
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;

        this.addChild(helloLabel, 5);

        this.sprite = new Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
    }
}

export default HelloWorldLayer;

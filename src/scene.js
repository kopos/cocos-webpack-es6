import { Scene } from 'cc';
import HelloWorldLayer from './layer';
import res from './resources';

class HelloWorldScene extends Scene {
    constructor() {
        super();
    }

    onEnter() {
        super.onEnter();
        var layer = new HelloWorldLayer();
        layer.init();
        this.addChild(layer);
    }
};

export default HelloWorldScene;

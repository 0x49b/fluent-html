import {FluentElement} from "./fluentElement.js";

export {Img}

class Img extends FluentElement {
    constructor() {
        super('img');
        return this;
    }

    src(src) {
        this.element.src = src;
        return this;
    }

    alt(alt){
        this.element.setAttribute('alt', alt);
        return this;
    }
}

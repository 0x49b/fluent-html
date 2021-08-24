import {FluentElement} from "./fluentElement.js";

export {Div}

class Div extends FluentElement {
    constructor() {
        super('div');
        return this;
    }

    bgColor(bgColor) {
        this.element.style.backgroundColor = bgColor;
        return this;
    }

    minWidth(minWidth) {
        this.element.style.minWidth = minWidth;
        return this;
    }

    width(width) {
        this.element.style.width = width;
        return this;
    }

    maxWidth(maxWidth) {
        this.element.style.maxWidth = maxWidth;
        return this;
    }

    minHeight(minHeight) {
        this.element.style.minHeight = minHeight;
        return this;
    }

    height(height) {
        this.element.style.height = height;
        return this;
    }

    maxHeight(maxHeight) {
        this.element.style.maxHeight = maxHeight;
        return this;
    }

    role(role){
        this.element.setAttribute('role', role);
        return this;
    }


    addChildrens(elements) {
        this.element.append(...elements);
        return this;
    }

}
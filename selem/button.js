import {FluentElement} from "./fluentElement.js";

export {Button}

class Button extends FluentElement {
    constructor() {
        super('button');
    }

    disabled() {
        this.element.disabled = true
        return this;
    }

    enabled() {
        this.element.disabled = false
        return this;
    }

    ariaLabel(ariaLabel) {
        this.element.setAttribute('aria-label', ariaLabel);
        return this;
    }

    type(type) {
        this.element.type = type;
        return this;
    }

    onclick(callback) {
        this.element.addEventListener('click', e => callback(e));
        return this;
    }

}
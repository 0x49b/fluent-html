import {FluentElement} from "./fluentElement.js";
export {Input}


class Input extends FluentElement{

    constructor(){
        super("input");
        return this;
    }

    cssClass(cssClass){
        this.element.setAttribute('class', cssClass);
        return this;
    }

    id(id){
        this.element.id = id;
        return this;
    }

    type(type){
        this.element.type = type;
        return this;
    }

}
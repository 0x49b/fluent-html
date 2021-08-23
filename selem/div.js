export {Div}

class Div {
    constructor(innerHtml) {
        this.div = document.createElement("div");
        return this;
    }

    cssClass(cssClass) {
        this.div.setAttribute("class", cssClass);
        return this;
    }

    id(id) {
        this.div.id = id;
        return this;
    }

    bgColor(bgColor) {
        this.div.style.backgroundColor = bgColor;
        return this;
    }

    minWidth(minWidth) {
        this.div.style.minWidth = minWidth;
        return this;
    }

    width(width) {
        this.div.style.width = width;
        return this;
    }

    maxWidth(maxWidth) {
        this.div.style.maxWidth = maxWidth;
        return this;
    }

    minHeight(minHeight) {
        this.div.style.minHeight = minHeight;
        return this;
    }

    height(height) {
        this.div.style.height = height;
        return this;
    }

    maxHeight(maxHeight) {
        this.div.style.maxHeight = maxHeight;
        return this;
    }


    show() {
        document.body.append(this.div);
        return this;
    }

    asDOMObject(){
        return this.div;
    }

    asHTML() {
        let wrap = document.createElement("div")
        wrap.appendChild(this.div.cloneNode(true))
        return wrap.innerHTML;
    }

    addChildrens(elements) {
        this.div.append(...elements);
        return this;
    }

}
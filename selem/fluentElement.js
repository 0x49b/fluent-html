export {FluentElement}

class FluentElement {

    constructor(element) {
        this.element = document.createElement(element);
        return this;
    }

    /**
     * Global Attributes
     */
    cssClass(cssClass) {
        this.element.setAttribute("class", cssClass);
        return this;
    }

    id(id) {
        this.element.id = id;
        return this;
    }

    accesskey(accesskey) {
        this.element.accesskey = accesskey;
        return this;
    }

    contenteditable(contenteditable) {
        this.element.contenteditable = contenteditable;
        return this;
    }

    data(key, value) {
        this.element.setAttribute('data-' + key, value)
        return this;
    }

    dir(dir) {
        this.element.dir = dir;
        return this;
    }

    draggable(draggable) {
        this.element.draggable = draggable;
        return this;
    }

    hidden(hidden) {
        this.element.hidden = hidden;
        return this;
    }

    lang(lang) {
        this.element.lang = lang;
        return this;
    }

    spellcheck(spellcheck) {
        this.element.spellcheck = spellcheck;
        return this;
    }

    style(style) {
        this.element.style = style;
        return this;
    }

    tabindex(tabindex) {
        this.element.tabindex = tabindex;
        return this;
    }

    title(title) {
        this.element.title = title;
        return this;
    }

    translate(translate) {
        this.element.translate = translate;
        return this;
    }

    /**
     * Content
     */
    innerHTML(innerHTML) {
        this.element.innerHTML = innerHTML;
        return this;
    }

    innerText(innerText) {
        this.element.innerText = innerText;
        return this;
    }

    /**
     * Get Element
     */
    create() {
        return this.element;
    }

    asHTML() {
        let wrap = document.createElement("div")
        wrap.appendChild(this.element.cloneNode(true))
        return wrap.innerHTML;
    }

    show() {
        document.body.append(this.element);
        return this;
    }

    hide(){
        this.element.parentElement.removeChild(this.element);
        return this;
    }

}






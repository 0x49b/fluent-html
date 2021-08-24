import {FluentElement} from "./fluentElement.js";
import {MEDIA_TYPE} from "./utils/mediatype.js";

export {A, TARGET, REFERRERPOLICY, REL, MEDIA_TYPE}

const TARGET = {
    BLANK: "_blank",
    PARENT: "_parent",
    SELF: "_self",
    TOP: "_top"
}

const REFERRERPOLICY = {
    NO_REFERRER: "no-referrer",
    NO_REFERRER_WHEN_DOWNGRADE: "no-referrer-when-downgrade",
    ORIGIN: "origin",
    ORIGIN_WHEN_CROSS_ORIGIN: "origin-when-cross-origin",
    SAME_ORIGIN: "same-origin",
    STRICT_ORIGIN_WHEN_CROSS_ORIGIN: "strict-origin-when-cross-origin",
    UNSAFE_URL: "unsafe-url"
}


const REL = {
    ALTERNATE: "alternate",
    AUTHOR: "author",
    BOOKMARK: "bookmark",
    EXTERNAL: "external",
    HELP: "help",
    LICENSE: "license",
    NEXT: "next",
    NOFOLLOW: "nofollow",
    NOREFERRER: "noreferrer",
    NOOPENER: "noopener",
    PREV: "prev",
    SEARCH: "search",
    TAG: "tag"
}


class A extends FluentElement {
    constructor() {
        super('a');
        return this;
    }

    href(href) {
        this.element.href = href;
        return this;
    }

    target(target) {
        this.element.target = target;
        return this;
    }

    rel(rel) {
        this.element.rel = rel;
        return this;
    }

    referrerpolicy(referrerpolicy) {
        this.element.referrerPolicy = referrerpolicy;
        return this;
    }

    mediatype(mediatype){
        this.element.mediaType = mediatype;
        return this;
    }
}

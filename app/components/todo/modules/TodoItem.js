export class TodoItem {
    #_containerEl = null;

    constructor(title) {
        this.#_containerEl = document.createElement("div");
        this.#_containerEl.innerText = title;
    }

    get element() {
        return this.#_containerEl;
    }
    get title() {
        return this.#_containerEl.innerText;
    }
    
    done() {
        this.#_containerEl.style.textDecoration = "line-through";
    }
    undone() {
        this.#_containerEl.style.textDecoration = null;
    }
}
import { Event } from "../../common/Event.js";
import { templateLoader, createElementFromHTML } from "../../common/TemplateHelper.js";

const todoTemplateHtmlString = await templateLoader("./Todo.template.html", import.meta.url);

export class TodoPanel {
    #_onAdd = new Event(this);

    #_containerEl = null;

    constructor(mainContainer) {
        const template = createElementFromHTML(todoTemplateHtmlString);
        const inputEl = template.querySelector("input");
        const addButtonEl = template.querySelector("button[add]");

        addButtonEl.onclick = () => {
            this.#_onAdd.fire(inputEl.value);
            inputEl.value = null;
        };

        this.#_containerEl = template.querySelector("div[container]");

        mainContainer.append(template);
    }

    get onAdd() {
        return this.#_onAdd;
    }

    addToPanel(todoItem) {
        this.#_containerEl.append(todoItem.element);
    }
}
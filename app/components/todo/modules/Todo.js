import { Event } from "../../common/Event.js";
import { TodoPanel } from "./TodoPanel.js";
import { TodoItem } from "./TodoItem.js";
import { TodoItemCollection } from "./TodoItemCollection.js";

export class Todo {
    #_onItemAdded = new Event(this);
    #_onItemRemoved = new Event(this);

    #_panel = null;
    #_items = new TodoItemCollection();

    constructor(config) {
        if (!(config.renderTo instanceof HTMLElement))
            throw new Error("The 'renderTo' config property is not assignable to 'HTMLElement' type.");

        this.#_panel = new TodoPanel(config.renderTo);
        this.#_panel.onAdd.subscribe(title => {
            this.add(title);
        });

        this.#_items.onAdd.subscribe(item => {
            this.#_panel.addToPanel(item);
            this.#_onItemAdded.fire(item);
        });
        this.#_items.onRemove.subscribe(item => {
            item.element.remove();
            this.#_onItemRemoved.fire(item);
        });
    }

    get onItemAdded() {
        return this.#_onItemAdded;
    }
    get onItemRemoved() {
        return this.#_onItemRemoved;
    }

    add(title) {    
        const todoItem = new TodoItem(title);
        this.#_items.add(todoItem);
        return todoItem;
    }
    remove(todoItem) {
        this.#_items.remove(todoItem);
    }
}
import { Event } from "../../common/Event.js";

export class TodoItemCollection {
    #_onAdd = new Event(this);
    #_onRemove = new Event(this);

    #_internalItems = [];
    
    get onAdd() {
        return this.#_onAdd;
    }
    get onRemove() {
        return this.#_onRemove;
    }

    add(item) {
        this.#_internalItems.push(item);
        this.#_onAdd.fire(item);
    }
    remove(item) {
        const index = this.#_internalItems.findIndex(x => x == item);
        if (index == -1)
            return;
        this.#_internalItems.splice(index, 1);
        this.#_onRemove.fire(item);
    }

    *[Symbol.iterator]() {
        for (const item of this.#_internalItems)
            yield item;        
    }
}
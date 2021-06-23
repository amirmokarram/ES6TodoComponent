export class Event {
    #sender = null;
    #handlers = [];

    constructor(sender) {
        this.#sender = sender || window;
    }

    subscribe(fn) {
        this.#handlers.push(fn);
    }
    unsubscribe(fn) {
        const index = this.#handlers.findIndex(handler => handler == fn);
        if (index == -1)
            return;
        this.#handlers.splice(index, 1);
    }
    fire(args) {
        for (const handler of this.#handlers) {
            handler.bind(this.#sender)(args);
        }
    }
}

import { Todo } from "./modules/Todo.js";

export default function(UI){
    UI.todo = {
        create: config => new Todo(config)
    }
}
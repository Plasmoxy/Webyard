import { observable, computed, autorun } from 'mobx'

class Todo {
    constructor(
        public completed: boolean,
        public task: string,
        public assignee: string|null
    ){}
}

class ObservableTodoStore {
	@observable todos: Todo[] = [];
    @observable pendingRequests = 0;

    constructor() {
        autorun(() => console.log(this.report));
    }

	@computed get completedTodosCount() {
    	return this.todos.filter(
			todo => todo.completed === true
		).length;
    }

	@computed get report() {
		if (this.todos.length === 0)
			return "<none>";
		return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}

	addTodo(task: string) {
		this.todos.push({
			task: task,
			completed: false,
			assignee: null
		});
	}
}


const observableTodoStore = new ObservableTodoStore();
observableTodoStore.addTodo("XD")
observableTodoStore.todos[0].completed = true
observableTodoStore.todos[0].completed = true
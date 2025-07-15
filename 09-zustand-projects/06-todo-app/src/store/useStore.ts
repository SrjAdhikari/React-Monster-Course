import { create } from "zustand";

// Define the shape of a single Todo item
interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

// Define the shape of the store's state and actions
interface TodoStore {
	// List of all todos
	todos: Todo[];

	// Actions: addTodo, removeTodo, toggleTodo
	addTodo: (todo: Todo) => void;
	removeTodo: (id: number) => void;
	toggleTodo: (id: number) => void;
}

// Create the Zustand store
const useStore = create<TodoStore>((set) => ({
	// Initial state: An empty list of todos
	todos: [],

	// Actions to add a new todo to the list
	addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

	// Actions to remove a todo from the list based on its ID
	removeTodo: (id) =>
		set((state) => ({
			todos: state.todos.filter((todo) => todo.id !== id),
		})),

	// Actions to toggle the completion status of a todo
	toggleTodo: (id) =>
		set((state) => ({
			todos: state.todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			),
		})),
}));

export default useStore;

import { useState } from "react";

interface Todo {
	id: number;
	task: string;
	completed: boolean;
}

const TodoList = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [inputValue, setInputValue] = useState<string>("");

	const addTodo = () => {
		const newTodo: Todo = {
			id: todos.length + 1,
			task: inputValue,
			completed: false,
		};

		setTodos((prevTodos) => [...prevTodos, newTodo]);
		setInputValue("");
	};

	return (
		<div>
			<h3>Todo Input</h3>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button onClick={addTodo}>Add Todo</button>

			<h3>Todo List</h3>
			{todos.map((todo) => (
				<li key={todo.id}>
					{todo.task} {todo.completed ? "completed" : ""}
				</li>
			))}
		</div>
	);
};

export default TodoList;

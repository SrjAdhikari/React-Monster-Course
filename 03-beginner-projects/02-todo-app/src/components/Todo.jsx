import { useState } from "react";
import "../style.css";

// 🔧 Utility function to generate a unique ID
const generateId = () => {
	return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	// ✅ Add a new todo when the user clicks "Submit"
	const handleSubmit = () => {
		if (input.trim()) {
			// setTodos([...todos, input]);

			// Add new todo to the list with unique ID and text
			setTodos(todos.concat({ text: input, id: generateId() }));
		}

		setInput("");
	};

	// ❌ Delete a todo by filtering it out based on its ID
	const deleteTodo = (id) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	return (
		<div className="container">
			<input
				type="text"
				name="todo"
				id="todo"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Enter your todos"
			/>

			<button onClick={handleSubmit}>Submit</button>

			{/* 📋 Render list of todos */}
			<ul className="todos-list">
				{todos.map(({ text, id }) => (
					<li className="todo" key={id}>
						<span>{text}</span>
						<button className="delete-btn" onClick={() => deleteTodo(id)}>
							x
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Todo;

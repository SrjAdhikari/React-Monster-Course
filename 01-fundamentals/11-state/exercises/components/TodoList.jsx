import { useState } from "react";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleOnChange = (e) => setInputValue(e.target.value);

	// Handles form submission for adding new todo items
	const handleSubmit = (e) => {
		e.preventDefault();

		// Check if input has non-whitespace content
		if (inputValue.trim()) {
			// Copy existing todos and add new todo item at the end
			setTodos([...todos, inputValue]);

			// Alternative using concat (also immutable)
			// setTodos(todos.concat(inputValue));

			// Clear input field after successful submission
			setInputValue("");
		}
	};

	const btnStyle = {
		padding: "5px 10px",
		margin: "4px",
		border: "1px solid tomato",
		borderRadius: "5px",
		cursor: "pointer",
	};

	const boxStyle = {
		width: "500px",
		margin: "10px auto",
		border: "2px solid tomato",
		padding: "10px",
		borderRadius: "10px",
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
	};

	return (
		<div style={boxStyle}>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={inputValue}
					onChange={handleOnChange}
					placeholder="Add new todo"
				/>
				<button style={btnStyle}>Add</button>
			</form>

			<strong>Current Todos</strong>

			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;

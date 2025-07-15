import { useState } from "react";
import useStore from "../store/useStore";

const TodoList = () => {
	// Extract state and actions from the Zustand store
	const { todos, addTodo, removeTodo, toggleTodo } = useStore();

	// State for the new todo input field
	const [inputValue, setInputValue] = useState<string>("");

	// Function to handle adding a new todo
	const handleAddTodo = () => {
		// Do nothing if the input field is empty
		if (inputValue.trim() === "") {
			return;
		}

		// Add the new todo to the store with a unique ID
		addTodo({ id: Date.now(), text: inputValue, completed: false });

		// Clear the input field
		setInputValue("");
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
				<h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
					Todo List
				</h1>

				{/* Input to add new todo */}
				<div className="flex items-center mb-4">
					<input
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="Add a new todo"
						className="flex-grow px-4 py-2 border rounded-l-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>

					<button
						onClick={handleAddTodo}
						className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						Add
					</button>
				</div>

				{/* Todo list */}
				<ul className="space-y-3">
					{todos.map((todo) => (
						<li
							key={todo.id}
							className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
						>
							<div className="flex items-center">
								{/* Checkbox to toggle completion */}
								<input
									type="checkbox"
									checked={todo.completed}
									onChange={() => toggleTodo(todo.id)}
									className="mr-2 form-checkbox h-5 w-5 text-blue-600"
								/>

								{/* Todo text with conditional styling */}
								<span
									className={`${
										todo.completed
											? "line-through text-gray-400"
											: "text-gray-700"
									}`}
								>
									{todo.text}
								</span>
							</div>

							{/* Delete button */}
							<button
								onClick={() => removeTodo(todo.id)}
								className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
							>
								❌
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TodoList;

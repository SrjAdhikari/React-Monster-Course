import { useEffect, useState } from "react";

interface TodoType {
	title: string;
}

const FetchTodo = () => {
	const [todo, setTodo] = useState<TodoType | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchTodo = async () => {
			try {
				setLoading(true);

				const response = await fetch(
					"https://jsonplaceholder.typicode.com/todos/1"
				);

				if (!response.ok) {
					throw new Error("Network response was not ok.");
				}

				const result: TodoType = await response.json();
				setTodo(result);
				setLoading(false);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchTodo();
	}, []);

	if (loading) <h4>Loading...</h4>;

	return (
		<div>
			<h3>Todo Title: {todo?.title}</h3>
		</div>
	);
};

export default FetchTodo;

import { use } from "react";

const fetchData = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	return response.json();
};

const FetchTodo = () => {
	const data = use(fetchData());

	return (
		<div>
			<h3>Todo Title: {data.title}</h3>
		</div>
	);
};

export default FetchTodo;

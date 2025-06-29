import Counter from "./Counter";
import UserProfile from "../exercises/components/UserProfile";
import TodoList from "../exercises/components/TodoList";

const App = () => {
	return (
		<div>
			<Counter />

			{/* 👇 Exercises */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
				}}
			>
				useState Types Exercises
			</h2>
			<UserProfile />
			<TodoList />
		</div>
	);
};

export default App;

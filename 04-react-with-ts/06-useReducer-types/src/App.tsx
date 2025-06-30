import Counter from "./Counter";
import CounterFromExercises from "../exercises/Counter";

const App = () => {
	return (
		<div>
			<Counter />

			{/* 👇 Exercises */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
					marginTop: "50px",
				}}
			>
				useReducer Exercises
			</h2>
			<CounterFromExercises />
		</div>
	);
};

export default App;

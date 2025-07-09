import Button from "./Button";
import useCounter from "./store/store";

const App = () => {
	// Method 1: To access the data
	const { count } = useCounter();

	// Method 2: To access the data
	// const count = useCounter((state) => state.count);

	// Method 3: To access the data
	// const {count, increment, decrement} = useCounter();

	// Method 4: To access the data
	// const { count, increment, decrement } = useCounter((state) => state);

	return (
		<div>
			<h3>Count: {count}</h3>

			{/* <button onClick={increment}>Increment</button> */}
			{/* <button onClick={decrement}>Decrement</button> */}

			<Button />
		</div>
	);
};

export default App;

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
	// Access the context value using useContext hook
	const context = useContext(CounterContext);

	// Safety check: ensure the component is used within CounterProvider
	if (!context) {
		throw new Error("Counter must be used within a CounterProvider");
	}

	// Destructure count value and functions from context
	const { count, increment, decrement } = context;

	return (
		<div>
			<h4>Count: {count}</h4>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};

export default Counter;

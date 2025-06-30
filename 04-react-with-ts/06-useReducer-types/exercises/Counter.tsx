import { useReducer } from "react";
import { reducer, type State } from "./counterReducer";

// Define the initial state for the counter
const initialState: State = { count: 0 };

const Counter = () => {
	// useReducer hook returns the current state and a dispatch function
	const [state, dispatch] = useReducer(reducer, initialState);

	// Dispatch the INCREMENT action
	const increment = () => {
		dispatch({ type: "INCREMENT" });
	};

	// Dispatch the DECREMENT action
	const decrement = () => {
		dispatch({ type: "DECREMENT" });
	};

	// Dispatch the RESET action
	const reset = () => {
		dispatch({ type: "RESET" });
	};

	return (
		<div>
			{/* Display the current counter value */}
			<h4>Count: {state.count}</h4>

			{/* Button to increment the count */}
			<button onClick={increment}>Increment</button>

			{/* Button to decrement the count */}
			<button onClick={decrement}>Decrement</button>

			{/* Button to reset the count to 0 */}
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default Counter;

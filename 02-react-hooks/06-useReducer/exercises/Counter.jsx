import { useReducer, useState } from "react";
import { counterReducer, initialState } from "./counterReducer";

const Counter = () => {
	// useReducer hook to manage complex state using reducer function
	const [state, dispatch] = useReducer(counterReducer, initialState);

	const [inputValue, setInputValue] = useState(0);

	// Dispatch 'increment' action
	const handleIncrement = () => {
		dispatch({ type: "increment" });
	};

	// Dispatch 'decrement' action
	const handleDecrement = () => {
		dispatch({ type: "decrement" });
	};

	// Dispatch 'incrementByAmount' action with input value
	const handleIncrementByAmount = () => {
		dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
		setInputValue(0);
	};

	// Dispatch 'decrementByAmount' action with input value
	const handleDecrementByAmount = () => {
		dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
		setInputValue(0);
	};

	return (
		<div>
			<div style={{ margin: "10px" }}>
				<h3>Current Count: {state.count}</h3>

				<button onClick={handleIncrement}>Increment</button>
				<button onClick={handleDecrement}>Decrement</button>
			</div>

			<div style={{ margin: "30px 10px 0px" }}>
				<input
					type="number"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>

				<button onClick={handleIncrementByAmount}>Add</button>

				<button onClick={handleDecrementByAmount}>Subtract</button>
			</div>
		</div>
	);
};

export default Counter;

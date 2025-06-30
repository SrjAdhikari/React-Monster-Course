import { useReducer } from "react";

// Initial state for the reducer
const initialState = { count: 0 };

// Type definition for the state object
type State = {
	count: number;
};

// Type definition for allowed action objects
type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

// Reducer function to handle state transitions
const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case "INCREMENT":
			// Increase count by 1
			return { count: state.count + 1 };

		case "DECREMENT":
			// Decrease count by 1
			return { count: state.count - 1 };

		default:
			// Return unchanged state for unknown actions
			return state;
	}
};

const Counter = () => {
	// useReducer returns current state and a dispatch function
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			{/* Display current count */}
			<h4>Count: {state.count}</h4>

			{/* Dispatch INCREMENT action on button click */}
			<button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>

			{/* Dispatch DECREMENT action on button click */}
			<button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
		</div>
	);
};

export default Counter;

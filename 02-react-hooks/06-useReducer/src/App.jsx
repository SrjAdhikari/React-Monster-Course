//* 📌 React useReducer Hook
// A React hook used for managing complex or multiple related pieces of state especially
// when the next state depends on the previous one.

//* 📌 Syntax:
// const [state, dispatch] = useReducer(reducer, initialState);

// state: current state.
// dispatch: function to send actions to the reducer.
// reducer: function that describes how the state should chnage based on actions.
// initialState: the starting value of the state.

//*********************************************

import { useReducer } from "react";
import Counter from "../exercises/Counter";

const initialState = { count: 0 };

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, count: state.count + 1 };
		case "decrement":
			return { ...state, count: state.count - 1 };
		case "reset":
			return { ...state, count: 0 };
		default:
			return state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div style={{ textAlign: "center", marginTop: "30px" }}>
			<h3>Count: {state.count}</h3>

			<button onClick={() => dispatch({ type: "increment" })}>+</button>

			<button onClick={() => dispatch({ type: "decrement" })}>-</button>

			<button onClick={() => dispatch({ type: "reset" })}>reset</button>

			{/* 👇 Exercises */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
					marginTop: "50px",
				}}
			>
				Exercises
			</h2>
			<Counter />
		</div>
	);
};

export default App;

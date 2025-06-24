// Initial state object for the counter
const initialState = { count: 0 };

// Reducer function to manage state updates based on the action type
const counterReducer = (state, action) => {
	switch (action.type) {
		// Case for incrementing the count by 1
		case "increment":
			return { ...state, count: state.count + 1 };

		// Case for decrementing the count by 1
		case "decrement":
			return { ...state, count: state.count - 1 };

		// Increments count by a specific value (provided in action.payload)
		case "incrementByAmount":
			return { ...state, count: state.count + action.payload };

		// Decrements count by a specific value (provided in action.payload)
		case "decrementByAmount":
			return { ...state, count: state.count - action.payload };

		// Default case: if the action type is unknown, return current state
		default:
			return state;
	}
};

export { initialState, counterReducer };

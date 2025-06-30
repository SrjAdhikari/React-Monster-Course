// Type definition for the state object
export type State = {
	count: number;
};

// Define all possible action types
export type Action =
	| { type: "INCREMENT" }
	| { type: "DECREMENT" }
	| { type: "RESET" };

// Reducer function to manage state transitions based on action type
export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "INCREMENT":
			// Return new state with count incremented by 1
			return { count: state.count + 1 };

		case "DECREMENT":
			// Return new state with count decremented by 1
			return { count: state.count - 1 };

		case "RESET":
			// Return new state with count reset to 0
			return { count: 0 };

		default:
			// Fallback: return the existing state unchanged
			return state;
	}
};

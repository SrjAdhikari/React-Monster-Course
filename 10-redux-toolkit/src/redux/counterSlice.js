import { createSlice } from "@reduxjs/toolkit";

// Create a counter slice using Redux Toolkit
const counterSlice = createSlice({
	// Slice name (used in action types)
	name: "counter",

	// Initial state for this slice
	initialState: { value: 0 },

	// Reducers define how state can be updated
	reducers: {
		// Increment reducer - increases counter value by 1
		increment: (state) => {
			state.value += 1;
		},

		// Decrement reducer - decreases counter value by 1
		decrement: (state) => {
			state.value -= 1;
		},

		// Reset reducer - sets counter value back to 0
		reset: (state) => {
			state.value = 0;
		},
	},
});

// Export the generated action creators
export const { increment, decrement, reset } = counterSlice.actions;

// Export the reducer function for the slice
export default counterSlice.reducer;

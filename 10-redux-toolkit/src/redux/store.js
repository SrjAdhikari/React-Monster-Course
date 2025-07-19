import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// Creates and configures the Redux store using Redux Toolkit.
// The store is the central hub of the Redux application state.
const store = configureStore({
	// Register reducers with the store
	reducer: {
		// Add the slice reducer to the store, which is created in the "counterSlice" file
		counter: counterReducer,
	},
});

export default store;

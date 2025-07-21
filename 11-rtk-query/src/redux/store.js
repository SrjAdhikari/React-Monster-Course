import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsAPI } from "./service/data";

// Creating and exporting the Redux store
export const store = configureStore({
	// The reducer field defines the top-level state structure
	reducer: {
		// Adding the productsAPI reducer to the store
		[productsAPI.reducerPath]: productsAPI.reducer,
	},

	// Adding RTK Query's middleware to the default middleware
	// This enables caching, automated refetching, and other features
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsAPI.middleware),
});

// Enabling additional features such as automatic refetching on focus or reconnect
setupListeners(store.dispatch);

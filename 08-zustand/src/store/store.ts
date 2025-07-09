import { create } from "zustand";

// Define the shape of the counter store
type CounterStore = {
	count: number;
	increment: () => void;
	decrement: () => void;
};

// Create the counter store
const useCounter = create<CounterStore>((set) => ({
	// Initial state for the counter
	count: 0,

	// Functions to increment the count by 1
	increment: () => set((state) => ({ count: state.count + 1 })),

	// Function to decrement the count by 1
	decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounter;

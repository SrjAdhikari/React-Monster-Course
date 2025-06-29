import { createContext, useState, type PropsWithChildren } from "react";

// Define the shape of the context value
type ContextType = {
	count: number;
	increment: () => void;
	decrement: () => void;
};

// Create the CounterContext with a default value
export const CounterContext = createContext<ContextType>({
	count: 0,
	increment: () => {},
	decrement: () => {},
});

// Create the provider component that wraps its children with context
export const CounterProvider = ({ children }: PropsWithChildren<{}>) => {
	// State to hold the current counter value
	const [count, setCount] = useState<number>(0);

	// Function to increase the counter
	const increment = () => setCount((prev) => prev + 1);

	// Function to decrease the counter
	const decrement = () => setCount((prev) => prev - 1);

	return (
		// Provide the counter value and functions to all children components
		<CounterContext.Provider value={{ count, increment, decrement }}>
			{children}
		</CounterContext.Provider>
	);
};

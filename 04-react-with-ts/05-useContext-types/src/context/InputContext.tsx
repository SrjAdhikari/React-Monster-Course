import { createContext, useState, type PropsWithChildren } from "react";

// Define the shape of the context value
type ContextType = {
	// Current input value
	value: string;

	// Function to update the value
	updateValue: (newValue: string) => void;
};

// Create the context with default value 'undefined'
export const InputContext = createContext<ContextType | undefined>(undefined);

// Create the provider component that wraps its children with context
export const InputProvider = ({ children }: PropsWithChildren<{}>) => {
	// State to store the shared input value
	const [value, setValue] = useState<string>("");

	// Function to update the input value
	const updateValue = (newValue: string) => {
		setValue(newValue);
	};

	return (
		// Provide the current value and updater function to all children components
		<InputContext.Provider value={{ value, updateValue }}>
			{children}
		</InputContext.Provider>
	);
};

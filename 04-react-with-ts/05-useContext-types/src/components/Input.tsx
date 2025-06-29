import { useContext } from "react";
import { InputContext } from "../context/InputContext";

const Input = () => {
	// Access the context value using useContext hook
	const context = useContext(InputContext);

	// Safety check: ensure the component is used within CounterProvider
	if (!context) {
		throw new Error("Input must be used within an InputProvider");
	}

	// Destructure current value and functions from context
	const { value, updateValue } = context;

	return (
		<div>
			<h4>Value: {value}</h4>
			<input
				type="text"
				value={value}
				onChange={(e) => updateValue(e.target.value)}
			/>
		</div>
	);
};

export default Input;

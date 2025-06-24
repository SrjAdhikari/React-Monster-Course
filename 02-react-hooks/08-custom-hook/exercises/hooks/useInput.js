import { useState } from "react";

// Custom hook to manage the state and onChange handler for a form input
const useInput = () => {
	const [value, setValue] = useState("");

	// Event handler to update the value when input changes
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	// Return the value and the onChange handler
	return { value, onChange: handleChange };
};

export default useInput;

import { useRef } from "react";

const FocusInput = () => {
	const inputRef = useRef(null);

	const handleFocus = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<div>
			<input
				type="text"
				ref={inputRef}
				placeholder="Click the button to focus"
			/>
			<button onClick={handleFocus}>Focus Input</button>
		</div>
	);
};

export default FocusInput;

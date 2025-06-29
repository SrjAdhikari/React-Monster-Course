import { useRef } from "react";

const FocusInput = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleFocus = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<div>
			<input type="text" name="name" id="name" ref={inputRef} />
			<button onClick={handleFocus}>Click & Focus</button>
		</div>
	);
};

export default FocusInput;

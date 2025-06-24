import { useRef } from "react";
import TrackPrevCount from "./TrackPrevCount";
import FocusInput from "../exercises/FocusInput";
import Timer from "../exercises/Timer";

const App = () => {
	const inputRef = useRef(null);
	console.log(inputRef);

	const handleFocus = () => {
		inputRef.current.focus();
		inputRef.current.value = "Suraj";
	};

	return (
		<>
			<div>
				<input type="text" ref={inputRef} />
				<button onClick={handleFocus}>Focus & Write Suraj</button>
			</div>

			<TrackPrevCount />

			{/* 👇 Exercises */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
				}}
			>
				Exercises
			</h2>

			<FocusInput />
			<Timer />
		</>
	);
};

export default App;

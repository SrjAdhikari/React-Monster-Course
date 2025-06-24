import { useRef, useState, useEffect } from "react";

const TrackPrevCount = () => {
	const [count, setCount] = useState(0);

	// Ref to store the previous count
	const prevRef = useRef();

	const handleIncrement = () => {
		// Store current value before updating
		prevRef.current = count;
		setCount(count + 1);
	};

	//* Alternative Solution (With useEffect)
	// Update the ref whenever count changes
	// useEffect(() => {
	// 	prevRef.current = count;
	// }, [count]);

	return (
		<div>
			<p>Current Count: {count}</p>
			<p>Previous Count: {prevRef.current}</p>
			<button onClick={handleIncrement}>Increment</button>

			{/* With useEffect
			<button onClick={() => setCount(count + 1)}>Increment</button> */}
		</div>
	);
};

export default TrackPrevCount;

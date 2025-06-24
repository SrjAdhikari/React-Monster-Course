import { useEffect, useRef, useState } from "react";

const Timer = () => {
	const [second, setSecond] = useState(0);

	// Create a ref to store the interval ID
	const timerRef = useRef(null);

	// useEffect hook to handle side effects (timer setup and cleanup)
	useEffect(() => {
		// Start the interval when component mounts
		timerRef.current = setInterval(() => {
			setSecond((prevSecond) => prevSecond + 1);
		}, 1000);

		// Cleanup function to clear the interval when component unmounts
		return () => clearInterval(timerRef.current);
	}, []); // Empty dependency array: runs only once

	return (
		<div>
			<h3>Timer: {second} seconds</h3>
			<button onClick={() => clearInterval(timerRef.current)}>
				Stop Timer
			</button>
		</div>
	);
};

export default Timer;

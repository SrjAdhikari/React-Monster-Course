import type { MouseEvent } from "react";

const EventHandling = () => {
	const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
		console.log("Mouse Entered", e.currentTarget);
	};

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		alert("Button Clicked");
		console.log(e.currentTarget);
	};

	return (
		<div onMouseEnter={handleMouseEnter}>
			<h4>Event Handling Example</h4>
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
};

export default EventHandling;

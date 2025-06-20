import EventDemo from "../exercises/components/EventDemo";

//* Example 1: onClick() Event
//* Button Component
const Button = () => {
	const handleClick = () => {
		console.log(`Random Number: ${Math.floor(Math.random() * 10)}`);
	};

	return (
		// <button onClick={() => console.log("Button Clicked")}>Click</button>

		<button onClick={handleClick}>Click Me</button>
	);
};

//* Example 2: onCopy() Event
//* Copy Component
const Copy = () => {
	const handleCopy = () => {
		console.log(`Copied selected text`);
	};

	return (
		<p onCopy={handleCopy}>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum similique
			odio tempore sit recusandae pariatur laboriosam ipsa ducimus mollitia
			tenetur.
		</p>
	);
};

//* Example 3: onMouseMove() Event
//* Move Component
const Move = () => {
	const handleMouseMove = () => {
		alert("Mouse move event fired");
	};

	return (
		<p onMouseMove={handleMouseMove}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. In cupiditate
			quas id saepe corporis nam minus debitis nemo iure. Quis dolore quisquam
			quaerat rem! Facilis expedita voluptate officia voluptates illum.
		</p>
	);
};

const App = () => {
	return (
		<div>
			<Button />
			<Copy />
			<Move />

			{/* 👇 Exercises */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
					textAlign: "center",
				}}
			>
				React Event Handling Exercises
			</h2>

			<EventDemo />
		</div>
	);
};

export default App;

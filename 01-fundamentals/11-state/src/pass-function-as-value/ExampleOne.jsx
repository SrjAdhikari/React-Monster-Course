import { useState } from "react";

const ExampleOne = () => {
	// Passsing function as a value in useState() hook
	const [number, setNumber] = useState(() => {
		const initialNum = 5;
		return initialNum;
	});

	const handleClick = () => setNumber(number + 1);
	const handleReset = () => setNumber(5);

	const btnStyle = {
		padding: "5px 10px",
		margin: "4px",
		border: "1px solid tomato",
		borderRadius: "5px",
		cursor: "pointer",
	};

	const boxStyle = {
		width: "500px",
		margin: "10px auto",
		border: "2px solid tomato",
		padding: "10px",
		borderRadius: "10px",
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
	};

	return (
		<div style={boxStyle}>
			<p style={{ margin: "0" }}>Number: {number}</p>

			<button style={btnStyle} onClick={handleClick}>
				Increment
			</button>

			<button style={btnStyle} onClick={handleReset}>
				Reset
			</button>
		</div>
	);
};

export default ExampleOne;

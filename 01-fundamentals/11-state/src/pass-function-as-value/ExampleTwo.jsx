import { useState } from "react";

const ExampleTwo = () => {
	// Passsing function as a value in useState() hook
	const [randomNumber, setrandomNumber] = useState(() =>
		Math.floor(Math.random() * 100)
	);

	const handleClick = () => {
		const newNumber = Math.floor(Math.random() * 100);
		setrandomNumber(newNumber);
	};

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
			<p style={{ margin: "0" }}>Random Number: {randomNumber}</p>

			<button style={btnStyle} onClick={handleClick}>
				Generate New Number
			</button>
		</div>
	);
};

export default ExampleTwo;

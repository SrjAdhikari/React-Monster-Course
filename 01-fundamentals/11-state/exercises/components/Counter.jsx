import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => setCount(count + 1);

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
			<strong>Count: {count}</strong>
			<br />

			<button style={btnStyle} onClick={handleClick}>
				Increment
			</button>
		</div>
	);
};

export default Counter;

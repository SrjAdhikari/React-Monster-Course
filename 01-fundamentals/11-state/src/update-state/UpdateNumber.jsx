import { useState } from "react";

const UpdateNumber = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	const btnStyle = {
		padding: "5px 10px",
		margin: "4px",
		border: "1px solid tomato",
		borderRadius: "5px",
		cursor: "pointer",
	};

	const boxStyle = {
		width: "500px",
		margin: "auto",
		border: "2px solid tomato",
		padding: "10px",
		borderRadius: "10px",
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
	};

	return (
		<div style={boxStyle}>
			<h3 style={{ margin: "0" }}>Update Number</h3>

			<p>Count: {count}</p>

			<button style={btnStyle} onClick={increment}>
				Increment
			</button>

			<button style={btnStyle} onClick={decrement}>
				Decrement
			</button>
		</div>
	);
};

export default UpdateNumber;

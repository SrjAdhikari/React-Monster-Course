import { useState } from "react";

const App = () => {
	// --------------------------------------------
	// const [initialValue, setInitialValue] = useState(0);
	// const [initialValue, setInitialValue] = useState("Suraj");
	// const [initialValue, setInitialValue] = useState(["one", "two", "three"]);
	// const [initialValue, setInitialValue] = useState({
	//   one: "Alex",
	//   two: "John",
	//   three: "HuXn",
	// });
	// --------------------------------------------

	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	const btnStyle = {
		padding: "5px 10px",
		margin: "8px",
		border: "1px solid tomato",
		borderRadius: "5px",
		cursor: "pointer",
	};

	const boxStyle = {
		width: "200px",
		margin: "10px auto",
		border: "2px solid tomato",
		padding: "10px",
		borderRadius: "10px",
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
	};

	return (
		<div style={boxStyle}>
			<p style={{ textAlign: "center", margin: "10px" }}>Count: {count}</p>

			<div>
				<button style={btnStyle} onClick={increment}>
					Increment
				</button>

				<button style={btnStyle} onClick={decrement}>
					Decrement
				</button>
			</div>
		</div>
	);
};

export default App;

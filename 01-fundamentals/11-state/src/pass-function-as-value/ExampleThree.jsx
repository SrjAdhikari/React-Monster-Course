import { useState, useEffect } from "react";

const ExampleThree = () => {
	const [name, setName] = useState(() => {
		// Try to get saved name from localStorage
		const savedName = localStorage.getItem("name");

		// Return parsed value if exists, otherwise empty string
		return savedName ? JSON.parse(savedName) : "";
	});

	// Update localStorage whenever the name changes
	useEffect(() => {
		localStorage.setItem("name", JSON.stringify(name));
	}, [name]);

	const handleChange = (e) => setName(e.target.value);
	const handleClear = () => setName("");

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
			<p style={{ margin: "0" }}>Your name: {name}</p>

			<input
				type="text"
				value={name}
				onChange={handleChange}
				placeholder="Enter your name"
			/>

			<button style={btnStyle} onClick={handleClear}>
				Clear Name
			</button>
		</div>
	);
};

export default ExampleThree;

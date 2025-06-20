import { useState } from "react";

const Switcher = () => {
	const [switcher, setSwitcher] = useState(false);

	return (
		<div>
			{switcher ? (
				<span
					style={{
						background: "black",
						color: "#fff",
						padding: "500px",
						borderRadius: "20px",
					}}
				>
					Dark
				</span>
			) : (
				<span
					style={{
						background: "#eee",
						color: "#000",
						padding: "500px",
						borderRadius: "20px",
					}}
				>
					Light
				</span>
			)}

			<br />

			{/* Input field that gets remounted when theme changes */}
			<input
				type="text"
				// Key prop forces React to remount the input when switcher state changes
				// This clears any existing value in the input field
				key={switcher ? "dark" : "light"}
				style={{
					margin: "10px 5px 0px 400px",
				}}
			/>

			<button onClick={() => setSwitcher((sw) => !sw)}>Switch</button>
		</div>
	);
};
export default Switcher;

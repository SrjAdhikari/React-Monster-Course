import { useState } from "react";
import "../style.css";

// Functional component for toggling between light and dark themes
const ToggleColor = () => {
	const [bgColor, setBgColor] = useState("#fff");
	const [textColor, setTextColor] = useState("#1b1b1b");
	const [btnStyle, setBtnStyle] = useState("#fff");

	// Handler function to toggle between light and dark themes
	const handleClick = () => {
		// Toggle background color between white and dark
		setBgColor(bgColor === "#fff" ? "#1b1b1b" : "#fff");

		// Toggle text color between dark and orange
		setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");

		// Toggle button background color to contrast with section background
		setBtnStyle(bgColor === "#fff" ? "#1b1b1b" : "#fff");
	};

	return (
		<section style={{ backgroundColor: bgColor, color: textColor }}>
			<button
				onClick={handleClick}
				style={{
					backgroundColor: btnStyle,
					color: textColor,
					border: `2px solid ${textColor}`,
				}}
			>
				{bgColor == "#1b1b1b" ? "Dark Theme" : "Light Theme"}
			</button>

			<section className="content">
				<h1>
					Welcome To A <br /> Real World..
				</h1>
			</section>
		</section>
	);
};

export default ToggleColor;

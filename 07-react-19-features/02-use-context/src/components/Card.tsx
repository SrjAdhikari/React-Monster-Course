import { useTheme } from "../context/Theme";

const Card = () => {
	// Access theme context using custom hook
	const { theme, toggleTheme } = useTheme();

	// Theme-based styles
	const cardStyles = {
		padding: "2rem",
		borderRadius: "8px",
		maxWidth: "400px",
		margin: "2rem auto",
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
		backgroundColor: theme === "light" ? "#ffffff" : "#1a202c",
		color: theme === "light" ? "#1a202c" : "#e2e8f0",
		transition: "all 0.3s ease",
	};

	const buttonStyles = {
		padding: "0.5rem 1rem",
		borderRadius: "4px",
		border: "none",
		cursor: "pointer",
		fontWeight: "bold",
		backgroundColor: theme === "light" ? "#1a202c" : "#e2e8f0",
		color: theme === "light" ? "#ffffff" : "#1a202c",
		transition: "all 0.3s ease",
	};

	return (
		<div style={cardStyles}>
			<h3>Theme Card</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptas
				quae eaque reprehenderit ut laborum quaerat modi illum ad odio?
			</p>
			<button onClick={toggleTheme} style={buttonStyles}>
				{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
			</button>
		</div>
	);
};

export default Card;

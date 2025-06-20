// Import createPortal to render elements outside the main DOM hierarchy
import { createPortal } from "react-dom";

const PopupContent = ({ copied }) => {
	const boxStyle = {
		position: "absolute",
		bottom: "17rem",
		left: "25rem",
		padding: "10px",
		border: "2px solid tomato",
		borderRadius: "10px",
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
	};

	// createPortal renders the popup outside the main React DOM tree
	return createPortal(
		<section>
			{copied && <div style={boxStyle}>Copied to clipboard</div>}
		</section>,

		// Target DOM element where the portal content will be rendered
		document.querySelector("#popup-content")
	);
};

export default PopupContent;

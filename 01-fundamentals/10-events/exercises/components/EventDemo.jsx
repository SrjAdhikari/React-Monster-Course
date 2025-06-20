import { useState } from "react";

const EventDemo = () => {
	const [text, setText] = useState("Click the button");
	const [copyText, setCopyText] = useState("Copy this text");
	const [bgColor, setBgColor] = useState({ backgroundColor: "" });

	return (
		<div>
			{/* Button click example */}
			<p>{text}</p>
			<button onClick={() => setText("Button Clicked")}>Click</button>

			{/* Text copy example */}
			<div>
				<p onCopy={() => setCopyText("Text Copied!")}>{copyText}</p>
			</div>

			{/* Mouse hover example */}
			<div>
				<p
					onMouseEnter={() => setBgColor({ backgroundColor: "lightyellow" })}
					onMouseLeave={() => setBgColor({ backgroundColor: "" })}
					style={bgColor}
				>
					Hover over this text
				</p>
			</div>
		</div>
	);
};

export default EventDemo;

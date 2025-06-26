import { useState } from "react";
import "../style.css";

const testimonials = [
	{
		testimonial:
			"This product transformed the way I work—fast, reliable, and easy to use.",
		author: "Alice Johnson",
	},
	{
		testimonial: "Exceptional service and user experience. Highly recommended!",
		author: "David Smith",
	},
	{
		testimonial: "I was amazed at how intuitive and powerful this tool is.",
		author: "Maria Rodriguez",
	},
	{
		testimonial:
			"It saved us hours of manual work. Absolutely worth every penny.",
		author: "James Lee",
	},
	{
		testimonial:
			"Great support team and consistent updates. Love the experience!",
		author: "Emma Brown",
	},
	{
		testimonial: "Smooth interface and excellent performance. Will use again.",
		author: "Liam Wilson",
	},
	{
		testimonial: "Very professional and user-focused. They listen and deliver.",
		author: "Olivia Martinez",
	},
	{
		testimonial: "A complete game-changer for our business workflow.",
		author: "Noah Davis",
	},
	{
		testimonial: "Reliable, efficient, and visually appealing. Five stars!",
		author: "Sophia Anderson",
	},
	{
		testimonial: "Using this tool daily now—can’t imagine work without it.",
		author: "William Thompson",
	},
];

// Functional component to display one testimonial at a time
const Testimonials = () => {
	// Track the index of the currently displayed testimonial
	const [currIndex, setCurrIndex] = useState(0);

	// Go to the previous testimonial (circular navigation)
	const handlePrevClick = () => {
		setCurrIndex(
			(prevIndex) => (prevIndex + testimonials.length - 1) % testimonials.length
		);
	};

	// Go to the next testimonial (circular navigation)
	const handleNextClick = () => {
		setCurrIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	return (
		<div className="testimonials">
			{/* Display the current testimonial text */}
			<div className="testimonials-quote">
				{testimonials[currIndex].testimonial}
			</div>

			{/* Display the author of the current testimonial */}
			<div className="testimonials-author">
				- {testimonials[currIndex].author}
			</div>

			{/* Navigation buttons to cycle through testimonials */}
			<div className="testimonials-btn">
				<button onClick={handlePrevClick}>Prev</button>
				<button onClick={handleNextClick}>Next</button>
			</div>
		</div>
	);
};

export default Testimonials;

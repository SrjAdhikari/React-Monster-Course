import { useFormStatus } from "react-dom";

const Button = () => {
	const { pending } = useFormStatus();

	return (
		<div>
			<button type="submit" disabled={pending} className="submit-btn">
				{pending ? "Submitting..." : "Submit"}
			</button>
		</div>
	);
};

export default Button;

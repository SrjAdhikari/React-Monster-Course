import Button from "./Button";
import "../style.css";

const Form = () => {
	const formAction = async (formData: FormData) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));

		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
		};

		console.log(data);
	};

	return (
		<div className="form-container">
			<form action={formAction} className="form">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter your name"
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email"
						required
					/>
				</div>

				<Button />
			</form>
		</div>
	);
};

export default Form;

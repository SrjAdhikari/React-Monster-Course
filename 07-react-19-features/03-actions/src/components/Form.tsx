import "../style.css";

const Form = () => {
	const formAction = (formData: any) => {
		const userData = {
			name: formData.get("name"),
			email: formData.get("email"),
			password: formData.get("password"),
		};

		console.log(userData);
	};

	return (
		<div className="form-container">
			<form action={formAction} className="form">
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Enter your name"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Enter your email"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Enter your password"
					/>
				</div>

				<button type="submit" className="submit-btn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;

import { useForm, type SubmitHandler } from "react-hook-form";
import "../style.css";

// Define the shape of the form data
type FormDataType = {
	name: string;
	email: string;
	password: string;
};

// SignupForm component
const SignupForm = () => {
	// Initialize react-hook-form
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormDataType>();

	/**
	 * Handle form submission
	 * @param data - validated form data
	 */
	const onSubmit: SubmitHandler<FormDataType> = (data) => {
		console.log(data);
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit(onSubmit)} className="form">
				<h2 className="form-title">Signup Form</h2>

				{/* Name Field */}
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						placeholder="Enter your name"
						{...register("name", { required: "Name is required" })}
					/>
					{errors.name && <p className="error">{errors.name.message}</p>}
				</div>

				{/* Email Field */}
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						placeholder="Enter your email"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address",
							},
						})}
					/>
					{errors.email && <p className="error">{errors.email.message}</p>}
				</div>

				{/* Password Field */}
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						placeholder="Enter your password"
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters",
							},
						})}
					/>
					{errors.password && (
						<p className="error">{errors.password.message}</p>
					)}
				</div>

				{/* Submit Button */}
				<button type="submit" disabled={isSubmitting} className="submit-btn">
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>
			</form>
		</div>
	);
};

export default SignupForm;

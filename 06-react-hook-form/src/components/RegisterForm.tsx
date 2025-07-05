import { useForm, type SubmitHandler } from "react-hook-form";
import "../style.css";

// Define the shape of the form data
interface FormDataType {
	firstName: string;
	lastName: string;
	email: string;
	city: string;
	state: string;
	zip: string;
	country: string;
}

// RegisterForm component
const RegisterForm = () => {
	// Initialize react-hook-form
	const {
		register,
		handleSubmit,
		formState: { errors },
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
				<h2 className="form-title">Registration Form</h2>

				{/* First Name Field */}
				<div className="form-group">
					<label htmlFor="firstName">First Name:</label>
					<input
						type="text"
						id="firstName"
						placeholder="Enter your first name"
						{...register("firstName", { required: "First Name is required" })}
					/>
					{errors.firstName && (
						<p className="error">{errors.firstName.message}</p>
					)}
				</div>

				{/* Last Name Field */}
				<div className="form-group">
					<label htmlFor="lastName">Last Name:</label>
					<input
						type="text"
						id="lastName"
						placeholder="Enter your last name"
						{...register("lastName", { required: "Last Name is required" })}
					/>
					{errors.lastName && (
						<p className="error">{errors.lastName.message}</p>
					)}
				</div>

				{/* Email Field with validation */}
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						placeholder="Enter your email address"
						{...register("email", {
							required: "Email Address is required",
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: "Invalid email address",
							},
						})}
					/>
					{errors.email && <p className="error">{errors.email.message}</p>}
				</div>

				{/* City Field */}
				<div className="form-group">
					<label htmlFor="city">City:</label>
					<input
						type="text"
						id="city"
						placeholder="Enter your city name"
						{...register("city", { required: "City is required" })}
					/>
					{errors.city && <p className="error">{errors.city.message}</p>}
				</div>

				{/* State Field */}
				<div className="form-group">
					<label htmlFor="state">State:</label>
					<input
						type="text"
						id="state"
						placeholder="Enter your state name"
						{...register("state", { required: "State is required" })}
					/>
					{errors.state && <p className="error">{errors.state.message}</p>}
				</div>

				{/* ZIP Code Field */}
				<div className="form-group">
					<label htmlFor="zip">ZIP:</label>
					<input
						type="text"
						id="zip"
						placeholder="Enter your zip code"
						{...register("zip", { required: "ZIP is required" })}
					/>
					{errors.zip && <p className="error">{errors.zip.message}</p>}
				</div>

				{/* Country Field */}
				<div className="form-group">
					<label htmlFor="country">Country:</label>
					<input
						type="text"
						id="country"
						placeholder="Enter your country name"
						{...register("country", { required: "Country is required" })}
					/>
					{errors.country && <p className="error">{errors.country.message}</p>}
				</div>

				{/* Submit Button */}
				<button type="submit" className="submit-btn">
					Register
				</button>
			</form>
		</div>
	);
};

export default RegisterForm;

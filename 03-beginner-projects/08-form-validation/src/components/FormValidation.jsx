import { useState } from "react";
import "../style.css";

// FormValidation component to handle basic input validations
const FormValidation = () => {
	// State for form input values
	const [username, setUsename] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	// State for error messages
	const [usernameError, setUsernameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	// State for border colors (visual feedback)
	const [userColor, setUserColor] = useState("");
	const [emailColor, setEmailColor] = useState("");
	const [passwordColor, setPasswordColor] = useState("");
	const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Username validation
		if (username.length > 8) {
			setUsernameError("");
			setUserColor("green");
		} else {
			setUsernameError("Username must be 8 letters long.");
			setUserColor("red");
		}

		// Email validation
		if (email.includes("@gmail")) {
			setEmailError("");
			setEmailColor("green");
		} else {
			setEmailColor("red");
			setEmailError("Email should have @gmail");
		}

		// Password validation
		if (password.length > 8) {
			setPasswordError("");
			setPasswordColor("green");
		} else {
			setPasswordError("Password should be 8 letters long ");
			setPasswordColor("red");
		}

		// Confirm password validation
		if (password != "" && password == confirmPassword) {
			setConfirmPasswordError("");
			setConfirmPasswordColor("green");
		} else {
			setConfirmPasswordError("Passwords didn't matched.");
			setConfirmPasswordColor("red");
		}
	};

	return (
		<>
			<div className="card">
				<div className="card-image" />

				<form onSubmit={handleSubmit}>
					{/* Username Field */}
					<input
						type="text"
						style={{ borderColor: userColor }}
						value={username}
						onChange={(e) => setUsename(e.target.value)}
						placeholder="Enter your name"
					/>
					<p className="error">{usernameError}</p>

					{/* Email Field */}
					<input
						type="text"
						style={{ borderColor: emailColor }}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your email"
					/>
					<p className="error">{emailError}</p>

					{/* Password Field */}
					<input
						type="password"
						style={{ borderColor: passwordColor }}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter your password"
					/>
					<p className="error">{passwordError}</p>

					{/* Confirm Password Field */}
					<input
						type="password"
						style={{ borderColor: confirmPasswordColor }}
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						placeholder="Enter your confirm password"
					/>
					<p className="error">{confirmPasswordError}</p>

					<button type="submit" className="submit-btn">
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default FormValidation;

import useInput from "../hooks/useInput";

// Component to render a form that uses the custom useInput hook
const FormComponent = () => {
	// Initialize form fields using the custom hook
	const name = useInput("");
	const email = useInput("");

	// Handler function for form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		alert(`Name: ${name.value}, Email: ${email.value}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					Name:
					<input
						type="text"
						value={name.value}
						onChange={name.onChange}
						placeholder="Enter your name"
					/>
					{/*
            👇 Alternative implementation using object spread:
            <input type="text" {...name} />
            
            This spreads the hook's return object (value and onChange) as props
            More concise but slightly less explicit
          */}
				</label>
			</div>

			<div>
				<label>
					Email:
					<input
						type="email"
						value={email.value}
						onChange={email.onChange}
						placeholder="Enter your email"
					/>
					{/*
            👇 Alternative implementation using object spread:
            <input type="email" {...email} />
          */}
				</label>
			</div>
			<br />

			<button type="submit">Submit</button>
		</form>
	);
};

export default FormComponent;

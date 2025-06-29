// Importing necessary hooks and types from React
import { useRef, useState, type FormEvent } from "react";

// Defining the shape of form data
type FormDataType = {
	name: string;
	email: string;
	password: string;
};

const Form = () => {
	// useState is used to store the submitted form data
	const [data, setData] = useState<FormDataType>({
		name: "",
		email: "",
		password: "",
	});

	// useRef is used to create references to the DOM input elements
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	// This function runs when the form is submitted
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Using ".current" property of refs to access the actual DOM input elements
		// The exclamation mark (!) is used to assert that the element is not null
		const nameValue = nameRef.current!.value;
		const emailValue = emailRef.current!.value;
		const passwordValue = passwordRef.current!.value;

		// Updating the state with the values retrieved via useRef
		setData({
			name: nameValue,
			email: emailValue,
			password: passwordValue,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Form Input</h3>

			{/* Input for name — "ref" is assigned for direct DOM access */}
			<input type="text" placeholder="Enter your name" ref={nameRef} />

			{/* Input for email — "ref" is assigned for direct DOM access */}
			<input type="email" placeholder="Enter your email" ref={emailRef} />

			{/* Input for password — "ref" is assigned for direct DOM access */}
			<input
				type="password"
				placeholder="Enter your password"
				ref={passwordRef}
			/>

			<button type="submit">Submit</button>

			<section>
				<h3>Form Data</h3>
				<h5>Name: {data.name}</h5>
				<h5>Email: {data.email}</h5>
				<h5>Password: {data.password}</h5>
			</section>
		</form>
	);
};

export default Form;

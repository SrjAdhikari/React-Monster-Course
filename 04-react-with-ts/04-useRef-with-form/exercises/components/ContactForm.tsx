import { useState, type ChangeEvent, type FormEvent } from "react";

type FormDataType = {
	name: string;
	email: string;
};

const ContactForm = () => {
	const [data, setData] = useState<FormDataType>({
		name: "",
		email: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted: ", data);

		// Clear the input fields
		setData({
			name: "",
			email: "",
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Form Input</h3>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={data.name}
					onChange={handleChange}
					placeholder="Enter your name"
				/>
			</label>

			<label>
				Email:
				<input
					type="email"
					name="email"
					value={data.email}
					onChange={handleChange}
					placeholder="Enter your email"
				/>
			</label>

			<button type="submit">Submit</button>
		</form>
	);
};

export default ContactForm;

import { useState } from "react";

const Profile = () => {
	const [profile, setProfiile] = useState({
		name: "",
		age: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setProfiile((prevProfile) => ({
			...prevProfile,
			[name]: value,
		}));

		// setProfiile({
		// 	...profile,
		// 	[name]: value,
		// });
	};

	const boxStyle = {
		width: "500px",
		margin: "10px auto",
		border: "2px solid tomato",
		padding: "10px",
		borderRadius: "10px",
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
	};

	return (
		<div style={boxStyle}>
			<div style={{ marginBottom: "8px" }}>
				<strong>User Information</strong>
				<br />

				<strong>Name: {profile.name}</strong>
				<br />

				<strong>Age: {profile.age}</strong>
			</div>

			<div>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={profile.name}
						onChange={handleChange}
						placeholder="Enter your name"
					/>
				</label>
			</div>

			<div>
				<label>
					Age:
					<input
						type="number"
						name="age"
						value={profile.age}
						onChange={handleChange}
						placeholder="Enter your age"
					/>
				</label>
			</div>
		</div>
	);
};

export default Profile;

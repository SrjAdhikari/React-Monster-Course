import { useState } from "react";

interface UserProfileType {
	name: string;
	age: number;
	email: string;
}

const UserProfile = () => {
	const [profile, setProfile] = useState<UserProfileType>({
		name: "",
		age: 0,
		email: "",
	});

	/*
    const updateName = (name: string) => {
      setProfile((prevProfile) => ({ ...prevProfile, name }));
    };

    const updateAge = (age: number) => {
      setProfile((prevProfile) => ({ ...prevProfile, age }));
    };

    const updateEmail = (email: string) => {
      setProfile((prevProfile) => ({ ...prevProfile, email }));
    };
  */

	return (
		<div>
			<h3>User Profile Input</h3>
			<input
				type="text"
				value={profile.name}
				onChange={(e) =>
					setProfile((prev) => ({ ...prev, name: e.target.value }))
				}
				placeholder="Enter your name"
				// onChange={(e) => updateName(e.target.value)}
			/>

			<input
				type="number"
				value={profile.age > 0 ? profile.age : ""}
				onChange={(e) =>
					setProfile((prev) => ({ ...prev, age: Number(e.target.value) }))
				}
				placeholder="Enter your age"
				// onChange={(e) => updateAge(Number(e.target.value))}
			/>

			<input
				type="email"
				value={profile.email}
				onChange={(e) =>
					setProfile((prev) => ({ ...prev, email: e.target.value }))
				}
				placeholder="Enter your email"
				// onChange={(e) => updateEmail(e.target.value)}
			/>

			<h3>Profile Summary</h3>
			<p>Name: {profile.name}</p>
			<p>Age: {profile.age}</p>
			<p>Email: {profile.email}</p>
		</div>
	);
};

export default UserProfile;

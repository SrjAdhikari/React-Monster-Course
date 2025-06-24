import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
	// Access the context
	const { user } = useContext(UserContext);

	return (
		<div>
			<h3>User Profile</h3>
			<strong>Name: {user.name}</strong>
		</div>
	);
};

export default UserProfile;

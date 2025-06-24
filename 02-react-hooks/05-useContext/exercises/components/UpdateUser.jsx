import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const UpdateUser = () => {
	// Access the context
	const { updateUser } = useContext(UserContext);

	const [newName, setNewName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (newName.trim()) {
			updateUser(newName);
			setNewName("");
		}
	};

	return (
		<div>
			<h3>Update User Name</h3>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={newName}
					onChange={(e) => setNewName(e.target.value)}
					placeholder="Enter new name"
				/>

				<button type="submit">Update</button>
			</form>
		</div>
	);
};

export default UpdateUser;

import { type Info } from "../../src/types";

const UserInformation = ({ id, name, email }: Info) => {
	return (
		<ul>
			<h3>User Information</h3>
			<li>ID: {id}</li>
			<li>Name: {name}</li>
			<li>Email: {email}</li>
		</ul>
	);
};

export default UserInformation;

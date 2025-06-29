import { type AdminInfoList } from "../../src/types";

const AdminInformation = ({
	id,
	name,
	email,
	role,
	lastLogin,
}: AdminInfoList) => {
	return (
		<ul>
			<h3>Admin Information</h3>
			<li>ID: {id}</li>
			<li>Name: {name}</li>
			<li>Email: {email}</li>
			<li>Role: {role}</li>
			<li>Last Login: {lastLogin.toLocaleString()}</li>
		</ul>
	);
};

export default AdminInformation;

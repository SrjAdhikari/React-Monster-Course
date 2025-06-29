import { type Info } from "./User_Info";

type AdminInfo = Info & {
	admin: string;
};

const Admin_Info = ({ username, email, age, location, admin }: AdminInfo) => {
	return (
		<ul>
			<h3>Admin Information</h3>
			<li>{username}</li>
			<li>{email}</li>
			<li>{age}</li>
			<li>{JSON.stringify(location)}</li>
			<li>{admin}</li>
		</ul>
	);
};

export default Admin_Info;

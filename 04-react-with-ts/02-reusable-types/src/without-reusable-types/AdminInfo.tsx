type AdminShape = {
	username: string;
	email: string;
	age: number;
	location: string[];
	admin: string;
};

const AdminInfo = ({ username, email, age, location, admin }: AdminShape) => {
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

export default AdminInfo;

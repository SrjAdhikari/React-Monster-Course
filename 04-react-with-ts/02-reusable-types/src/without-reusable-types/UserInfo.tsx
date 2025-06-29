type UserShape = {
	username: string;
	email: string;
	age: number;
	location: Array<string>;
};

const UserInfo = ({ username, email, age, location }: UserShape) => {
	return (
		<ul>
			<h3>User Information</h3>
			<li>{username}</li>
			<li>{email}</li>
			<li>{age}</li>
			<li>{JSON.stringify(location)}</li>
		</ul>
	);
};

export default UserInfo;

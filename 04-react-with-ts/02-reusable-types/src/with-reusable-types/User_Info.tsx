export type Info = {
	username: string;
	email: string;
	age: number;
	location: string[];
};

const User_Info = ({ username, email, age, location }: Info) => {
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

export default User_Info;

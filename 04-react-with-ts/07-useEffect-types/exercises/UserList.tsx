import { useState, useEffect } from "react";

// Type definition for user data
type UserDataType = {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
};

const UserList = () => {
	const [data, setData] = useState<UserDataType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// Fetch user data on component mount
	useEffect(() => {
		// Async function to fetch user data
		const fetchUsers = async () => {
			try {
				// Set loading to true before starting fetch
				setLoading(true);

				// Fetch user data from the API
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				);

				// Check if response was successful
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				// Parse JSON response with type safety
				const result: UserDataType[] = await response.json();

				// Update state if data exists
				if (result && result.length > 0) {
					setData(result);
				}

				// Clear any previous error
				setError(null);
			} catch (error) {
				// Type-safe error handling
				setError(error instanceof Error ? error.message : "An error occurred");
			} finally {
				// Always set loading to false when done
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	// Render loading state while fetching
	if (loading) return <div>Loading...</div>;

	// Render error message if fetch failed
	if (error) return <div>Error: {error}</div>;

	// Render user data in a table when available
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Username</th>
					<th>Email</th>
					<th>Phone</th>
				</tr>
			</thead>
			<tbody>
				{data.map((user) => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
						<td>{user.phone}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default UserList;

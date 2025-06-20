import { useState } from "react";

const UpdateArray = () => {
	const [friends, setFriends] = useState(["Alex", "John", "Bob"]);

	const addFriend = () => setFriends([...friends, "Suraj"]);

	const removeFriend = () =>
		setFriends(friends.filter((friend) => friend !== "John"));

	const updateFriend = () =>
		setFriends(
			friends.map((friend) => (friend === "Alex" ? "Alex Smith" : friend))
		);

	const btnStyle = {
		padding: "5px 10px",
		margin: "4px",
		border: "1px solid tomato",
		borderRadius: "5px",
		cursor: "pointer",
	};

	const boxStyle = {
		width: "500px",
		margin: "10px auto",
		border: "2px solid tomato",
		padding: "10px",
		borderRadius: "10px",
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
	};

	return (
		<div style={boxStyle}>
			<h3 style={{ margin: "0" }}>Update Array</h3>

			{friends.map((friend, index) => (
				<ul key={index}>
					<li>{friend}</li>
				</ul>
			))}

			<button style={btnStyle} onClick={addFriend}>
				Add Friend
			</button>

			<button style={btnStyle} onClick={removeFriend}>
				Remove Friend
			</button>

			<button style={btnStyle} onClick={updateFriend}>
				Update Friend
			</button>
		</div>
	);
};

export default UpdateArray;

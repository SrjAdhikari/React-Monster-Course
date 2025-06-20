import { useState } from "react";

const UpdateObject = () => {
	const [movie, setMovie] = useState({
		title: "Equalizer 3",
		rating: 5,
	});

	const changeRating = () => {
		// 🥂 To tell react about state updates, we have to give react a brand new object.

		// 👉 LONG WAY
		// This will copy all the properties, into the new object,
		// and then we can change whatever we want in new object.

		// const copyMovie = {
		//   ...movie,
		//   rating: 8
		// };

		// setMovie(copyMovie);

		// 👉 SHORT WAY
		setMovie({ ...movie, rating: 8 });
	};

	const btnStyle = {
		padding: "5px 10px",
		margin: "4px",
		border: "1px solid tomato",
		borderRadius: "5px",
		cursor: "pointer",
	};

	const boxStyle = {
		width: "500px",
		margin: "auto",
		border: "2px solid tomato",
		padding: "10px",
		borderRadius: "10px",
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
	};

	return (
		<div style={boxStyle}>
			<h3 style={{ margin: "0" }}>Update Object</h3>

			<ul>
				<li>Title: {movie.title}</li>
				<li>Rating: {movie.rating}</li>
			</ul>

			<button style={btnStyle} onClick={changeRating}>
				Change Rating
			</button>
		</div>
	);
};

export default UpdateObject;

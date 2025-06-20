import { useState } from "react";

const UpdateArrayOfObject = () => {
	const [movies, setMovies] = useState([
		{ id: 1, title: "Spider man", ratings: 3 },
		{ id: 2, title: "Superman", ratings: 6 },
	]);

	const changeMovieName = () => {
		setMovies(
			movies.map((movie) =>
				movie.id === 1 ? { ...movies, title: "John Wick 4", ratings: 8 } : movie
			)
		);
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
		margin: "10px auto",
		border: "2px solid tomato",
		padding: "10px",
		borderRadius: "10px",
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
	};

	return (
		<div style={boxStyle}>
			<h3 style={{ margin: "0" }}>Update Array Of Object</h3>

			{movies.map((movie, index) => (
				<ul key={index}>
					<li>Title: {movie.title}</li>
					<li>Ratings: {movie.ratings}</li>
				</ul>
			))}

			<button style={btnStyle} onClick={changeMovieName}>
				Change Movie
			</button>
		</div>
	);
};

export default UpdateArrayOfObject;

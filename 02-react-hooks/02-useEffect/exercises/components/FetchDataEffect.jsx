import { useEffect, useState } from "react";

const FetchDataEffect = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);

			const data = await response.json();

			setData(data);
		};

		getData();
	});

	return (
		<div>
			<h4>First Post Title: </h4>
			{data.length > 0 ? <p>{data[0].title}</p> : <p>Loading...</p>}
		</div>
	);
};

export default FetchDataEffect;

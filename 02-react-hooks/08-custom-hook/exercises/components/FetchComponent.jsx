import useFetch from "../hooks/useFetch";

const FetchComponent = () => {
	const [data, loading, error] = useFetch(
		"https://jsonplaceholder.typicode.com/posts"
	);

	{
		error && <p style={{ color: "red" }}>Error: {error}</p>;
	}

	return (
		<div>
			{/* Loading message */}
			{loading && <p>Loading ...</p>}

			{/* Error message */}
			{error && <p style={{ color: "red" }}>Error: {error}</p>}

			<ul>
				<h3>Post Title:</h3>
				{data.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};

export default FetchComponent;

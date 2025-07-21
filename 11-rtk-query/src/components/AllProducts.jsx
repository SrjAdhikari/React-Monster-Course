import { useGetAllProductQuery } from "../redux/service/data";

const AllProducts = () => {
	// Fetching all products using the custom hook provided by RTK Query
	const { data, isError, isLoading } = useGetAllProductQuery();
	console.log(data);

	// If there's an error during the API call, show an error message
	if (isError) {
		return <p>Error adding new product</p>;
	}

	// If the request is in progress, show a loading message
	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			{/* Looping through the list of products and displaying each one */}
			{data?.products.map((product) => (
				<>
					<h3 key={product.id}>{product.title}</h3>
					<p>{product.description}</p>
				</>
			))}
		</div>
	);
};

export default AllProducts;

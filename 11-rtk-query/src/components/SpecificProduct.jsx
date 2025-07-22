import { useGetProductByIdQuery } from "../redux/service/data";

const SpecificProduct = () => {
	// Fetching a specific product by ID (10 in this case)
	// This will trigger a request to the API to get the product details
	const { data, isError, isLoading } = useGetProductByIdQuery(10);

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
			<h3>{data?.brand}</h3>
			<p>{data?.category}</p>
			<p>{data?.description}</p>
		</div>
	);
};

export default SpecificProduct;

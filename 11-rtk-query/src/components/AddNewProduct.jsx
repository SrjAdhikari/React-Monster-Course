import { useAddNewProductMutation } from "../redux/service/data";

const AddNewProduct = () => {
	// Extracting the addNewProduct mutation from the service
	// `data`, `isError`, and `isLoading` are metadata from the request state
	const [addNewProduct, { data, isError, isLoading }] =
		useAddNewProductMutation();

	// If there's an error during the API call, show an error message
	if (isError) {
		return <p>Error adding new product</p>;
	}

	// If the request is in progress, show a loading message
	if (isLoading) {
		return <p>Loading...</p>;
	}

	// Function to handle the "Add New Product" button click
	const handleAddProduct = async () => {
		try {
			// Creating a new product object to be sent in the request
			const newProduct = {
				id: 1,
				title: "Amazing T-Shirt",
				description:
					"This is one of the best and amazing t-shirt in the market",
			};

			// Triggering the mutation to add the new product
			await addNewProduct(newProduct);
		} catch (error) {
			// Logging error in case of unexpected issues
			console.error("Error adding new product: ", error);
		}
	};

	return (
		<>
			<div>
				<p>{data?.id}</p>
				<p>{data?.title}</p>
				<p>{data?.description}</p>
			</div>

			<button onClick={handleAddProduct} disabled={isLoading}>
				Add New Product
			</button>
		</>
	);
};

export default AddNewProduct;

import { useUpdateProductMutation } from "../redux/service/data";

const UpdateProduct = ({ productId }) => {
	// Extract the updateProduct mutation from the service
	// This mutation will be used to update the product details
	const [updateProduct, { data, isError, isLoading }] =
		useUpdateProductMutation();

	// If there's an error during the API call, show an error message
	if (isError) {
		return <p>Error adding new product</p>;
	}

	// If the request is in progress, show a loading message
	if (isLoading) {
		return <p>Loading...</p>;
	}

	// Function to handle the product update action
	const handleProductUpdate = async () => {
		try {
			// Data to be sent in the update request
			const updatedProductData = {
				title: "Notebook 📓",
			};

			// Calling the update mutation with the product ID and updated data
			await updateProduct({
				id: productId,
				updatedProduct: updatedProductData,
			});
		} catch (error) {
			console.error("Error updating product: ", error);
		}
	};

	return (
		<div>
			<h3>{data?.title}</h3>

			<button onClick={handleProductUpdate} disabled={isLoading}>
				Update Product
			</button>
		</div>
	);
};

export default UpdateProduct;

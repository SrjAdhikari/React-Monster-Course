import { useDeleteProductMutation } from "../redux/service/data";

const DeleteProduct = ({ productId }) => {
	// Extracting the deleteProduct mutation from the service
	const [deleteProduct, { data, isError, isLoading }] =
		useDeleteProductMutation();

	// If there's an error during the API call, show an error message
	if (isError) {
		return <p>Error adding new product</p>;
	}

	// If the request is in progress, show a loading message
	if (isLoading) {
		return <p>Loading...</p>;
	}

	// Function to handle the delete button click
	const handleDeleteProduct = async () => {
		try {
			// Triggering the mutation to delete the product by ID
			await deleteProduct(productId);
		} catch (error) {
			// Handling unexpected errors
			console.error("Error deleting product: ", error);
		}
	};

	return (
		<div>
			<p>{data?.title ? `${data.title} sucessfully deleted!` : ""}</p>

			<button onClick={handleDeleteProduct} disabled={isLoading}>
				Delete Product
			</button>
		</div>
	);
};

export default DeleteProduct;

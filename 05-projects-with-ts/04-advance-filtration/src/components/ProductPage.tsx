import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

// Import Axios for HTTP requests
import axios from "axios";

// Define the type for a Product object
interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	rating: number;
	images: string[];
}

// React functional component for the ProductPage
const ProductPage: React.FC = () => {
	// Get the product ID from the route parameters
	const { id } = useParams<{ id: string }>();

	// Get the navigate function to allow programmatic navigation
	const navigate = useNavigate();

	// State to hold the fetched product details
	const [product, setProduct] = useState<Product | null>(null);

	// useEffect to fetch product data when the component mounts
	// or when the 'id' parameter changes
	useEffect(() => {
		if (id) {
			// Fetch product data using Axios
			axios
				.get<Product>(`https://dummyjson.com/products/${id}`)
				.then((response) => {
					setProduct(response.data);
				})
				.catch((error) => {
					console.error("Error fetching product data: ", error);
				});
		}
	}, [id]);

	// Render loading state while data is being fetched
	if (!product) return <div>Loading...</div>;

	return (
		<div className="p-5 w-[60%]">
			{/* Back button to navigate to previous page */}
			<button
				onClick={() => navigate(-1)}
				className="mb-5 px-4 py-2 bg-black text-white rounded"
			>
				Back
			</button>

			{/* Display main product image */}
			<img
				src={product.images[0]}
				alt={product.title}
				className="w-[50%] h-auto mb-5"
			/>

			{/* Display product title and description */}
			<h1 className="text-2xl mb-4 font-bold">{product.title}</h1>
			<p className="mb-4 text-gray-700 w-[70%]">{product.description}</p>

			{/* Display price and rating */}
			<div className="flex">
				<p>Price: ${product.price}</p>
				<p className="ml-10">Rating: {product.rating}</p>
			</div>
		</div>
	);
};

export default ProductPage;

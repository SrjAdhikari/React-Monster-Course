import { useEffect, useState } from "react";

// Define the type for a Product object
type ProductType = {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
};

const FetchData = () => {
	// State to hold the fetched product data
	const [data, setData] = useState<ProductType | null>(null);

	useEffect(() => {
		// Async function to perform fetch
		const getData = async () => {
			try {
				// Fetch product data from the API
				const response = await fetch("https://dummyjson.com/product/1");
				const result = await response.json();

				// Update state with fetched data
				setData(result);

				// Log to console for debugging
				console.log(result);
			} catch (error) {
				console.error("Error fetching data", error);
			}
		};

		getData();
	}, []);

	return (
		<div>
			{data ? (
				<div>
					<p>ID: {data.id}</p>
					<p>Title: {data.title}</p>
					<p>description: {data.description}</p>
					<p>price: {data.price}</p>
					<p>discountPercentage: {data.discountPercentage}</p>
					<p>rating: {data.rating}</p>
					<p>stock: {data.stock}</p>
					<p>brand: {data.brand}</p>
					<p>category: {data.category}</p>
					<p>thumbnail: {data.thumbnail}</p>

					{data.images.map((img) => (
						<img src={img} width={200} />
					))}
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default FetchData;

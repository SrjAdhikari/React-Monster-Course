import { useState } from "react";
import "./index.css";

import Navbar from "./navigation/Navbar";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import Card from "./components/Card.jsx";
import products from "./data/data.js";

const App = () => {
	// State to manage selected category (for filtering)
	const [selectedCategory, setSelectedCategory] = useState(null);

	// State to manage search query input
	const [query, setQuery] = useState("");

	// Handle text input change for search
	const handleInputChange = (e) => setQuery(e.target.value);

	// Handle radio button filter changes (e.g., category, Price)
	const handleChange = (e) => setSelectedCategory(e.target.value);

	// Handle filter button clicks (recommended filters)
	const handleClick = (e) => setSelectedCategory(e.target.value);

	// Filter the products list based on search query
	const filteredItems = products.filter(
		(product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
	);

	/**
	 * Filters products based on search query and selected category
	 * @param {Array} products - The full list of products
	 * @param {string|null} selected - The selected category filter
	 * @param {string} query - The search query string
	 * @returns {Array} - Array of filtered Card components
	 */

	const filteredData = (products, selected, query) => {
		// Create a copy of the original products array to avoid mutation
		let filteredProducts = [...products];

		// Filter by search query if input is provided
		if (query) {
			filteredProducts = filteredItems;
		}

		// Apply selected filters if any (category, company, etc.)
		if (selected) {
			filteredProducts = filteredProducts.filter(
				({ category, company, color, newPrice, title }) =>
					category === selected ||
					company === selected ||
					color === selected ||
					newPrice === selected ||
					title === selected
			);
		}

		// Return product cards based on filtered result
		return filteredProducts.map(
			({ img, title, reviews, prevPrice, newPrice }) => (
				<Card
					key={Math.random()}
					img={img}
					title={title}
					reviews={reviews}
					newPrice={newPrice}
					prevPrice={prevPrice}
				/>
			)
		);
	};

	// Get filtered results based on current filters
	const result = filteredData(products, selectedCategory, query);

	return (
		<>
			<Sidebar handleChange={handleChange} />
			<Navbar query={query} handleInputChange={handleInputChange} />
			<Recommended handleClick={handleClick} />
			<Products result={result} />
		</>
	);
};

export default App;

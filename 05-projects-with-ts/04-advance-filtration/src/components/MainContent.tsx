import { Tally3 } from "lucide-react";
import useFilter from "../context/useFilter";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const MainContent = () => {
	// Extracts filter values from context
	const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
		useFilter();

	// State for storing fetched products
	const [products, setProducts] = useState<any[]>([]);

	// State for current filter type: all, expensive, cheap, popular
	const [filter, setFilter] = useState("all");

	// State for pagination. Tracks current page number (1-based index)
	const [currentPage, setCurrentPage] = useState(1);

	// State for filter dropdown visibility
	const [dropdownOpen, setDropdownOpen] = useState(false);

	// Number of products to show per page
	const itemsPerPage = 12;

	// Fetch products when page or keyword changes
	useEffect(() => {
		let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
			(currentPage - 1) * itemsPerPage
		}`;

		if (keyword) {
			url = `https://dummyjson.com/products/search?q=${keyword}`;
		}

		axios
			.get(url)
			.then((response) => {
				setProducts(response.data.products);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, [currentPage, keyword]);

	// Applies all active filters to products
	const getFilteredProducts = () => {
		let filteredProducts = products;

		// Category filter
		if (selectedCategory) {
			filteredProducts = filteredProducts.filter(
				(product) => product.category === selectedCategory
			);
		}

		// Minimum price filter
		if (minPrice !== undefined) {
			filteredProducts = filteredProducts.filter(
				(product) => product.price >= minPrice
			);
		}

		// Maximum price filter
		if (maxPrice !== undefined) {
			filteredProducts = filteredProducts.filter(
				(product) => product.price <= maxPrice
			);
		}

		// Search query filter
		if (searchQuery) {
			filteredProducts = filteredProducts.filter((product) =>
				product.title.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		// Apply sorting based on selected filter
		switch (filter) {
			case "expensive":
				return filteredProducts.sort((a, b) => b.price - a.price);
			case "cheap":
				return filteredProducts.sort((a, b) => a.price - b.price);
			case "popular":
				return filteredProducts.sort((a, b) => b.rating - a.rating);
			default:
				return filteredProducts;
		}
	};

	// Final product list after all filters
	const filteredProducts = getFilteredProducts();

	// Total products available
	const totalProducts = 100;

	// Calculates total pages based on total products and items per page
	const totalPages = Math.ceil(totalProducts / itemsPerPage);

	// Handles change current page if within bounds
	const handlePageChange = (page: number) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	// Generate array of page numbers to show in pagination
	const getPaginationButtons = () => {
		const buttons: number[] = [];
		let startPage = Math.max(1, currentPage - 2);
		let endPage = Math.min(totalPages, currentPage + 2);

		// Adjust if near start
		if (currentPage - 2 < 1) {
			endPage = Math.min(totalPages, endPage + (2 - (currentPage - 1)));
		}

		// Adjust if near end
		if (currentPage + 2 > totalPages) {
			startPage = Math.max(1, startPage - (2 - (totalPages - currentPage)));
		}

		// Generate button numbers
		for (let page = startPage; page <= endPage; page++) {
			buttons.push(page);
		}

		return buttons;
	};

	return (
		<section className="xl:w-[55rem] mr-[10rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5">
			<div className="mb-5">
				{/* Filter Dropdown */}
				<div className="flex flex-col sm:flex-row justify-between items-center">
					<div className="relative mb-5 mt-5">
						<button
							onClick={() => setDropdownOpen(!dropdownOpen)}
							className="border px-4 py-2 rounded-full flex items-center"
						>
							<Tally3 className="mr-2" />
							{filter === "all"
								? "Filter"
								: filter.charAt(0).toLowerCase() + filter.slice(1)}
						</button>

						{/* Dropdown Menu */}
						{dropdownOpen && (
							<div className="absolute bg-white border border-gray-300 rounded mt-2 w-full sm:w-40">
								<button
									onClick={() => setFilter("cheap")}
									className="block px-4 py-2 w-full text-left hover:bg-gray-200"
								>
									Cheap
								</button>

								<button
									onClick={() => setFilter("expensive")}
									className="block px-4 py-2 w-full text-left hover:bg-gray-200"
								>
									Expensive
								</button>

								<button
									onClick={() => setFilter("popular")}
									className="block px-4 py-2 w-full text-left hover:bg-gray-200"
								>
									Popular
								</button>
							</div>
						)}
					</div>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-5">
					{filteredProducts.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							title={product.title}
							image={product.thumbnail}
							price={product.price}
						/>
					))}
				</div>

				{/* Pagination */}
				<div className="flex flex-col sm:flex-row justify-between items-center mt-5">
					{/* Previous Page */}
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="border px-4 py-2 mx-2 rounded-full"
					>
						Previous
					</button>

					{/* Page Buttons */}
					<div className="flex flex-wrap justify-center">
						{getPaginationButtons().map((page) => (
							<button
								key={page}
								onClick={() => handlePageChange(page)}
								className={`border px-4 py-2 mx-1 rounded-full ${
									page === currentPage ? "bg-black text-white" : ""
								}`}
							>
								{page}
							</button>
						))}
					</div>

					{/* Next Page */}
					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="border px-4 py-2 mx-2 rounded-full"
					>
						Next
					</button>
				</div>
			</div>
		</section>
	);
};

export default MainContent;

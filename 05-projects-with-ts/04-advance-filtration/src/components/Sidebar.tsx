import { useEffect, useState, type ChangeEvent } from "react";
import useFilter from "../context/useFilter";

// Type definition for a single product's category field
interface Products {
	category: string;
}

// Type definition for the API response format
interface FetchResponse {
	products: Products[];
}

const Sidebar = () => {
	// Consume filter context values and setters
	const {
		searchQuery,
		setSearchQuery,
		selectedCategory,
		setSelectedCategory,
		minPrice,
		setMinPrice,
		maxPrice,
		setMaxPrice,
		setKeyword,
	} = useFilter();

	// State to store unique categories fetched from API
	const [categories, setCategories] = useState<string[]>([]);

	// List of popular keywords for quick filtering
	const [keywords] = useState<string[]>([
		"Apple",
		"Watch",
		"Fashion",
		"Trend",
		"Shoes",
		"Shirt",
	]);

	// Effect to fetch all product categories on component mount.
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch("https://dummyjson.com/products");
				const data: FetchResponse = await response.json();

				// Use a Set to get unique categories
				const uniqueCategories = Array.from(
					new Set(data.products.map((product) => product.category))
				);
				console.log(uniqueCategories);

				setCategories(uniqueCategories);
			} catch (error) {
				console.error("Error fetching product", error);
			}
		};

		fetchCategories();
	}, []);

	// Handler for numeric min price input
	const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setMinPrice(value ? parseFloat(value) : undefined);
	};

	// Handler for numeric max price input
	const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setMaxPrice(value ? parseFloat(value) : undefined);
	};

	// Handler for update selected category in filter context
	const handleCategoriesChange = (category: string) => {
		setSelectedCategory(category);
	};

	// Sets a keyword filter
	const handleKeywordClick = (keyword: string) => {
		setKeyword(keyword);
	};

	// handler for clears all filters to their default states
	const handleResetFilters = () => {
		setSearchQuery("");
		setSelectedCategory("");
		setMinPrice(undefined);
		setMaxPrice(undefined);
		setKeyword("");
	};

	return (
		<div className="w-64 p-5 h-screen">
			<h1 className="text-2xl font-bold mb-10 mt-4">SRJ Store</h1>

			<section>
				{/* Search input */}
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="border-2 rounded px-2 py-1 w-full sm:mb-0"
					placeholder="Search product"
				/>

				{/* Price range inputs */}
				<div className="flex items-center mt-3 justify-center">
					<input
						type="text"
						value={minPrice ?? ""}
						onChange={handleMinPriceChange}
						className="border-2 mr-2 px-5 mb-3 w-full"
						placeholder="Min"
					/>

					<input
						type="text"
						value={maxPrice ?? ""}
						onChange={handleMaxPriceChange}
						className="border-2 mr-2 px-5 mb-3 w-full"
						placeholder="Max"
					/>
				</div>

				{/* Categories Section */}
				<div className="mb-5">
					<h2 className="text-xl font-semibold mb-3">Categories</h2>
				</div>

				<section>
					{categories.map((category, index) => (
						<label key={index} className="block mb-2">
							<input
								type="radio"
								name="category"
								value={category}
								onChange={() => handleCategoriesChange(category)}
								checked={selectedCategory === category}
								className="mr-2 w-[16px] h-[16px]"
							/>
							{category.toUpperCase()}
						</label>
					))}
				</section>

				{/* Keywords Section */}
				<div className="mb-5 mt-4">
					<h2 className="text-xl font-semibold mb-3">Keywords</h2>

					<div>
						{keywords.map((keyword, index) => (
							<button
								key={index}
								onClick={() => handleKeywordClick(keyword)}
								className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200"
							>
								{keyword.toUpperCase()}
							</button>
						))}
					</div>
				</div>

				{/* Reset button */}
				<button
					onClick={handleResetFilters}
					className="w-full mb-[4rem] py-2 bg-black text-white mt-5"
				>
					Reset Filters
				</button>
			</section>
		</div>
	);
};

export default Sidebar;

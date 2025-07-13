import { useEffect } from "react";
import useStore from "../src/store/useStore";

const Meals = () => {
	const { meals, searchQuery, setMeals, setSearchQuery } = useStore();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
				);

				const data = await response.json();
				setMeals(data.meals);
			} catch (error) {
				console.error("Error fetching meals: ", error);
			}
		};

		fetchData();
	}, [setMeals]);

	const filteredMeals = meals.filter((meal) =>
		meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100 p-6">
			<h1 className="text-4xl md:text-5xl font-bold text-teal-700 text-center mb-4">
				Seafood Recipes
			</h1>

			<p className="mb-10 max-w-xl mx-auto text-center text-base text-gray-500">
				Discover delicious seafood dishes from around the world
			</p>

			{/* Search Bar */}
			<div className="max-w-xl mx-auto mb-10 relative">
				<input
					type="text"
					placeholder="Search for a meal..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="w-full pl-12 pr-4 py-3 rounded-full border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white shadow"
				/>
			</div>

			{/* Meals Grid */}
			<div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{filteredMeals.length > 0 ? (
					filteredMeals.map((meal) => (
						<div
							key={meal.idMeal}
							className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer overflow-hidden"
						>
							<img
								src={meal.strMealThumb}
								alt={meal.strMeal}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h2 className="text-lg font-semibold text-teal-700">
									{meal.strMeal}
								</h2>
							</div>
						</div>
					))
				) : (
					<p className="text-center text-teal-600 col-span-full">
						No meals found
					</p>
				)}
			</div>
		</div>
	);
};

export default Meals;

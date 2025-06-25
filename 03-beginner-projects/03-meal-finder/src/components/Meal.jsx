import { useState, useEffect } from "react";
import "../style.css";

const Meal = () => {
	const [items, setItems] = useState([]);

	// useEffect hook to fetch data when the component mounts
	useEffect(() => {
		// Define an async function to fetch meal data
		const fetchData = async () => {
			try {
				// Fetch meals from the API
				const response = await fetch(
					"https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
				);

				// If the response is not OK, throw an error
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				// Parse the JSON data from the response
				const data = await response.json();

				// Update the state with the list of meals
				setItems(data.meals);
			} catch (error) {
				console.log("Fetch error:", error.message);
			}
		};

		// Call the fetch function
		fetchData();
	}, []);

	// Map the list of meals to JSX elements
	const mealsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
		return (
			<section className="card" key={idMeal}>
				{/* Meal image */}
				<img src={strMealThumb} alt={strMeal} />

				{/* Meal name and ID */}
				<section className="content">
					<p>{strMeal}</p>
					<p>#{idMeal}</p>
				</section>
			</section>
		);
	});

	// Render the list of meal cards
	return <div className="items-container">{mealsList}</div>;
};

export default Meal;

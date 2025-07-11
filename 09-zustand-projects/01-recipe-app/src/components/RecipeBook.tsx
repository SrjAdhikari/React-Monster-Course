import { useState } from "react";
import useStore from "../store/useStore";

// Define the type for a recipe data
interface Recipe {
	id: number;
	name: string;
	ingredients: string[];
	instructions: string;
}

// Define the RecipeBook component
const RecipeBook = () => {
	// Extract recipes state and actions from Zustand store
	const { recipes, addRecipe, removeRecipe } = useStore();

	// Define state variables for recipe form
	const [name, setName] = useState<string>("");
	const [ingredients, setIngredients] = useState<string>("");
	const [instructions, setInstructions] = useState<string>("");

	// State to track if user is editing an existing recipe
	const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

	// Function to handle adding a new recipe
	const handleAddRecipe = () => {
		// Check if any of the required fields are empty
		if (
			name.trim() === "" ||
			ingredients.trim() === "" ||
			instructions.trim() === ""
		) {
			return;
		}

		// Add the new recipe to the store
		addRecipe({
			id: Date.now(),
			name,
			ingredients: ingredients
				// Split ingredients by comma and trim whitespace
				.split(", ")
				.map((ingredient) => ingredient.trim()),
			instructions,
		});

		// Clear form fields
		setName("");
		setIngredients("");
		setInstructions("");
	};

	// Function to handle editing an existing recipe
	const handleEditRecipe = (recipe: Recipe) => {
		// Set the recipe to be edited
		setEditingRecipe(recipe);

		// Populate form fields with recipe data to be edited
		setName(recipe.name);
		setIngredients(recipe.ingredients.join(", "));
		setInstructions(recipe.instructions);
	};

	// Function to handle updating an existing recipe
	const handleUpdateRecipe = () => {
		// Check if any of the required fields are empty
		if (
			name.trim() === "" ||
			ingredients.trim() === "" ||
			instructions.trim() === ""
		) {
			return;
		}

		// Update the recipe in the store by removing the old recipe and adding the new one
		if (editingRecipe) {
			// Remove the old recipe
			removeRecipe(editingRecipe.id);

			// Add the new recipe with updated data
			addRecipe({
				id: Date.now(),
				name,
				ingredients: ingredients
					// Split ingredients by comma and trim whitespace
					.split(", ")
					.map((ingredient) => ingredient.trim()),
				instructions,
			});

			// Set editingRecipe to null to exit editing mode
			setEditingRecipe(null);
		}

		// Clear form fields
		setName("");
		setIngredients("");
		setInstructions("");
	};

	// Function to handle canceling recipe editing
	const handleCancelEdit = () => {
		// Set editingRecipe to null to exit editing mode
		setEditingRecipe(null);

		// Clear form fields
		setName("");
		setIngredients("");
		setInstructions("");
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-green-100">
			<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
				<h1 className="text-3xl font-bold mb-6 text-center text-green-800">
					Recipe Book
				</h1>

				{/* Recipe Form Section */}
				<div className="space-y-4 mb-6">
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter Recipe Name"
						className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
					/>

					<input
						type="text"
						value={ingredients}
						onChange={(e) => setIngredients(e.target.value)}
						placeholder="Enter Ingredients (Comma separated)"
						className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
					/>

					<textarea
						value={instructions}
						onChange={(e) => setInstructions(e.target.value)}
						placeholder="Enter Instructions"
						className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
					/>

					{/* Add or Edit Mode Buttons */}
					<div className="flex justify-between">
						{editingRecipe ? (
							<>
								<button
									onClick={handleUpdateRecipe}
									className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
								>
									Update Recipe
								</button>

								<button
									onClick={handleCancelEdit}
									className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
								>
									Cancel
								</button>
							</>
						) : (
							<>
								<button
									onClick={handleAddRecipe}
									className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
								>
									Add Recipe
								</button>
							</>
						)}
					</div>
				</div>

				{/* Render List of Recipes */}
				<ul className="space-y-4">
					{recipes.map((recipe) => (
						<li
							key={recipe.id}
							className="p-4 bg-green-50 rounded-lg shadow-sm"
						>
							<h2 className="text-xl font-semibold text-green-800 mb-2">
								{recipe.name}
							</h2>

							<p className="text-gray-700">
								<strong>Ingredients: </strong> {recipe.ingredients.join(", ")}
							</p>

							<p className="text-gray-700 mb-2">
								<strong>Instructions: </strong> {recipe.instructions}
							</p>

							{/* Edit and Delete Buttons */}
							<div className="flex justify-between">
								<button
									onClick={() => handleEditRecipe(recipe)}
									className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
								>
									Edit
								</button>

								<button
									onClick={() => removeRecipe(recipe.id)}
									className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
								>
									Delete
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RecipeBook;

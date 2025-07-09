import { create } from "zustand";

// Define the type for a recipe
interface Recipe {
	id: number;
	name: string;
	ingredients: string[];
	instructions: string;
}

// Define the type for the zustand store
interface RecipeStore {
	recipes: Recipe[];
	addRecipe: (recipe: Recipe) => void;
	removeRecipe: (id: number) => void;
}

// Create the zustand store
const useStore = create<RecipeStore>((set) => ({
	// Initial state for the store. Hold all recipe data
	recipes: [],

	// Function to add a new recipe to the store
	// Takes a recipe object as an argument and adds it to the existing recipes array.
	addRecipe: (recipe) =>
		set((state) => ({ recipes: [...state.recipes, recipe] })),

	// Function to remove a recipe from the store
	// Filters out the recipe with the matching id.
	removeRecipe: (id) =>
		set((state) => ({
			recipes: state.recipes.filter((recipe) => recipe.id !== id),
		})),
}));

export default useStore;

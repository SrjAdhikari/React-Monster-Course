import { create } from "zustand";

// Define the shape of a single Meals object
interface Meals {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
}

// Define the shape of the Zustand store
interface MealsStore {
	// Array of Meals
	meals: Meals[];

	// Current search query string
	searchQuery: string;

	// Action to set the meals
	setMeals: (meals: Meals[]) => void;

	// Action to set the search query
	setSearchQuery: (query: string) => void;
}

// Zustand store for managing meals data and search query.
const useStore = create<MealsStore>((set) => ({
	// Initial state
	meals: [],
	searchQuery: "",

	// Actions to set the entire meals array
	setMeals: (meals: Meals[]) => set({ meals }),

	// Action to set the search query string
	setSearchQuery: (query: string) => set({ searchQuery: query }),
}));

export default useStore;

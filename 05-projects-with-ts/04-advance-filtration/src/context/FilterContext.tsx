import { createContext, useState, type PropsWithChildren } from "react";

// Defines the shape of the context value for the filter state.
interface FilterContextType {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	selectedCategory: string;
	setSelectedCategory: (category: string) => void;
	minPrice: number | undefined;
	setMinPrice: (price: number | undefined) => void;
	maxPrice: number | undefined;
	setMaxPrice: (price: number | undefined) => void;
	keyword: string;
	setKeyword: (keyword: string) => void;
}

// Create a new context with the defined type.
// Initially undefined (checked by the consumer hook).
export const FilterContext = createContext<FilterContextType | undefined>(
	undefined
);

// Create the provider component that wraps its children with context
export const FilterProvider = ({ children }: PropsWithChildren) => {
	// Global search query for filtering items
	const [searchQuery, setSearchQuery] = useState<string>("");

	// Selected category for filtering
	const [selectedCategory, setSelectedCategory] = useState<string>("");

	// Minimum price filter (can be undefined if not set)
	const [minPrice, setMinPrice] = useState<number | undefined>(undefined);

	// Maximum price filter (can be undefined if not set)
	const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

	// Keyword filter for advanced search
	const [keyword, setKeyword] = useState<string>("");

	return (
		// Provide the state and functions to all children components
		<FilterContext.Provider
			value={{
				searchQuery,
				setSearchQuery,
				selectedCategory,
				setSelectedCategory,
				minPrice,
				setMinPrice,
				maxPrice,
				setMaxPrice,
				keyword,
				setKeyword,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};

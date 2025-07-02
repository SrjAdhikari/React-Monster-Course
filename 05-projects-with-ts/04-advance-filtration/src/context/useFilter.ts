import { useContext } from "react";
import { FilterContext } from "./FilterContext";

// Custom hook to consume the FilterContext
const useFilter = () => {
	const context = useContext(FilterContext);

	// Safety check to prevent usage outside of provider
	if (!context) {
		throw new Error("useFilter must be used within a FilterProvider");
	}

	// Return the context value (state and functions)
	return context;
};

export default useFilter;

import { useContext } from "react";
import { BlogContext } from "./BlogContext";

// Custom hook to consume the BlogContext
export const useBlogs = () => {
	const context = useContext(BlogContext);

	// Safety check to prevent usage outside of provider
	if (!context) {
		throw new Error("useBlogs must be used within a BlogProvider");
	}

	// Return the context value (state and functions)
	return context;
};

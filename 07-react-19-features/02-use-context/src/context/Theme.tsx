import { createContext, useContext, useState, type ReactNode } from "react";
// import Card from "../components/Card";

// Define available theme options
type Theme = "light" | "dark";

// Define the shape of the context
interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

// Create context with undefined default value and proper TypeScript type
export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
);

// Props type for the provider (children to render inside)
type ProviderType = {
	children: ReactNode;
};

// ThemeProvider component to manage and provide theme state
export const ThemeProvider = ({ children }: ProviderType) => {
	// State to track current theme, defaulting to 'light'
	const [theme, setTheme] = useState<Theme>("light");

	// Function to toggle between light and dark themes
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	// Provide the theme and toggle function to all childrens
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// Custom hook to access theme context
export const useTheme = (): ThemeContextType => {
	// Get the context value
	const context = useContext(ThemeContext);

	// Enforce that this hook is used within a ThemeProvider
	if (!context) {
		throw new Error("useTheme must be within a ThemeProvider");
	}

	return context;
};

// Main component that wraps Card with ThemeProvider
// const Theme = () => {
// 	return (
// 		<ThemeProvider>
// 			<Card />
// 		</ThemeProvider>
// 	);
// };

// export default Theme;

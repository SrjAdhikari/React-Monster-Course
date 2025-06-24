import { createContext, useState } from "react";

// Creating a context for sharing data across the component tree
const UserContext = createContext();

// Creating a context provider component
const UserProvider = ({ children }) => {
	const [user, setUser] = useState({ name: "John Doe" });

	const updateUser = (newName) => {
		setUser({ name: newName });
	};

	// Wrapping children with UserContext.Provider and passing the value
	return (
		<UserContext.Provider value={{ user, updateUser }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };

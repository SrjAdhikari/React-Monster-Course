//* How to useContext()
// 1. Create a Context
// 2. Provide the Context
// 3. Consume the Context

import { createContext } from "react";
import ComponentA from "./components/ComponentA";
import { UserProvider } from "../exercises/context/UserContext";
import UserProfile from "../exercises/components/userProfile";
import UpdateUser from "../exercises/components/UpdateUser";

// 1. Create a Context
export const NameContext = createContext();
export const AgeContext = createContext();

const App = () => {
	const name = "Suraj Adhikari";
	const age = 25;

	return (
		<>
			{/* 2. Provide the Context */}
			<NameContext.Provider value={name}>
				<AgeContext.Provider value={age}>
					<ComponentA />
				</AgeContext.Provider>
			</NameContext.Provider>

			{/* 👇 Exercises */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
				}}
			>
				Exercises
			</h2>
			<UserProvider>
				<UserProfile />
				<UpdateUser />
			</UserProvider>
		</>
	);
};

export default App;

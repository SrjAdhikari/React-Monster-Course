//* Context
// Context provides a way to share values between components without explicitly passing props through every level

//* Context API
// The Context API is a feature that allows us to manage & share data (state) across multiple components
// without having to pass props manually at every level (called "prop drilling").

//* How to Use Context API
// 1. Create a Context
// 2. Provide the Context
// 3. Consume the Context

//***********************************************

import { createContext } from "react";
import ComponentA from "./components/ComponentA";

// 1. Create a Context
export const NameContext = createContext();
export const AgeContext = createContext();

const App = () => {
	const name = "Suraj";
	const age = 25;

	return (
		<>
			{/* 2. Provide the Context */}
			<NameContext.Provider value={name}>
				<AgeContext.Provider value={age}>
					<ComponentA />
				</AgeContext.Provider>
			</NameContext.Provider>
		</>
	);
};

export default App;

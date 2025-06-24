import { useContext } from "react";
import { AgeContext, NameContext } from "../App";

const ComponentC = () => {
	// 3. Consume the Context
	const userName = useContext(NameContext);
	const userAge = useContext(AgeContext);

	return (
		<h1>
			My name is {userName} And I'm {userAge} years old.
		</h1>
	);
};

export default ComponentC;

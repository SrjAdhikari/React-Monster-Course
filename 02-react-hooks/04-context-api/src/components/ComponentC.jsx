import { NameContext, AgeContext } from "../App";

const ComponentC = () => {
	// 3. Consume the Context
	return (
		<NameContext.Consumer>
			{(name) => {
				// return <h1>My name is: {name}</h1>;
				return (
					<AgeContext.Consumer>
						{(age) => {
							return (
								<h1>
									My name is {name} and I'm {age} years old.
								</h1>
							);
						}}
					</AgeContext.Consumer>
				);
			}}
		</NameContext.Consumer>
	);
};

export default ComponentC;

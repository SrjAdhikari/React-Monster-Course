//* 📌 UseId
// The useId hook generates unique, stable IDs for accessibility attributes
// like: "aria-labelledby" or "htmlFor" across client and server side rendering.

//* 📌 Basic Syntax
// import { useId } from "react";
// const id = useId();

//*********************************************

import UniqueID from "./components/UniqueID";

const App = () => {
	return (
		<div>
			<UniqueID />

			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
				consequatur quos quidem cupiditate voluptatem aliquam consequuntur
				excepturi placeat, officia eos commodi et voluptatum beatae quis dicta
				repellat vero maiores nulla.
			</p>

			<UniqueID />
		</div>
	);
};

export default App;

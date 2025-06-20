import { useState } from "react";

import UpdateArray from "./update-state/UpdateArray";
import UpdateArrayOfObject from "./update-state/UpdateArrayOfObject";
import UpdateObject from "./update-state/UpdateObject";
import UpdateNumber from "./update-state/UpdateNumber";

import ComponentOne from "./share-state/ComponentOne";
import ComponentTwo from "./share-state/ComponentTwo";

import ExampleOne from "./pass-function-as-value/ExampleOne";
import ExampleTwo from "./pass-function-as-value/ExampleTwo";
import ExampleThree from "./pass-function-as-value/ExampleThree";

import Counter from "../exercises/components/Counter";
import TodoList from "../exercises/components/TodoList";
import Profile from "../exercises/components/Profile";
import ShoppingList from "../exercises/components/ShoppingList";

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			{/* 👇 Update State */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
					textAlign: "center",
				}}
			>
				Update State
			</h2>
			<UpdateNumber />
			<UpdateArray />
			<UpdateObject />
			<UpdateArrayOfObject />

			{/* 👇 Share State */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
					textAlign: "center",
				}}
			>
				Share State
			</h2>
			<ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
			<ComponentTwo count={count} onClickHandler={() => setCount(count - 1)} />

			{/* 👇 Pass Function As Value */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
					textAlign: "center",
				}}
			>
				Pass Function As Value
			</h2>
			<ExampleOne />
			<ExampleTwo />
			<ExampleThree />

			{/* 👇 Exercises */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
					textAlign: "center",
				}}
			>
				Exercises
			</h2>
			<Counter />
			<TodoList />
			<Profile />
			<ShoppingList />
		</div>
	);
};

export default App;

//* 📌 Custom Hook
// A custom hook in React is a JavaScript function whose name starts with "use"
// and that uses other React hooks inside it (useState, useEffect, etc.).

//* 📌 Basic Structure of a Custom Hook
/*
	const useCustom = () => {
		👉 State management (if needed)
		const [state, setState] = useState(null);

		👉 Side effects (if needed)
		useEffect(() => {
			console.log("Hook logic runs here");
			return () => {}
		}, []);

		👉 Must return something (state, functions, etc.)
		return [state, setState];
	};

	export default useCustom;
*/

//*********************************************

import FetchComponent from "../exercises/components/FetchComponent";
import FormComponent from "../exercises/components/FormComponent";
import ToggleComponent from "../exercises/components/ToggleComponent";
import useFetch from "./useFetch";

const App = () => {
	const [users] = useFetch("https://jsonplaceholder.typicode.com/users");

	console.log(users);

	return (
		<>
			<div>
				<ul>
					<h3>Users Name:</h3>
					{users && users.map((user) => <li key={user.id}>{user.name}</li>)}
				</ul>
			</div>

			{/* 👇 Exercises */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
				}}
			>
				Exercises
			</h2>

			<ToggleComponent />
			<FormComponent />
			<FetchComponent />
		</>
	);
};

export default App;

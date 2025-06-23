//* Props Drilling
// Props drilling is the process of passing data (props) from a parent component to a deeply
// nested child component through multiple intermediate components.
// It’s called "drilling" because the props are passed down through multiple layers of components, like drilling through layers of rock.
// This can make the code hard to manage and less readable, especially as the application grows.

import ComponentA from "./components/ComponentA";

const App = () => {
	const name = "Suraj";

	return (
		<div>
			<ComponentA name={name} />
		</div>
	);
};

export default App;

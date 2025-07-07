import WithoutTransition from "./WithoutTransition";
import WithTransition from "./WithTransition";

const App = () => {
	return (
		<div>
			<WithTransition />
			<WithoutTransition />
		</div>
	);
};

export default App;

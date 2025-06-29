import Counter from "./components/Counter";
import Input from "./components/Input";
import { CounterProvider } from "./context/CounterContext";
import { InputProvider } from "./context/InputContext";

const App = () => {
	return (
		<div>
			<CounterProvider>
				<Counter />
			</CounterProvider>

			<InputProvider>
				<Input />
			</InputProvider>
		</div>
	);
};

export default App;

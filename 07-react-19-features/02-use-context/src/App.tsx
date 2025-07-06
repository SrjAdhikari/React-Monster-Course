import Card from "./components/Card";
import { ThemeProvider } from "./context/Theme";

const App = () => {
	return (
		<ThemeProvider>
			<Card />
		</ThemeProvider>
	);
};

export default App;

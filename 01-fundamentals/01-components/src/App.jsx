//* App Component : The root component of the React application.

import Footer from "../exercises/components/Footer";
import Greet from "../exercises/components/Greet";
import Header from "../exercises/components/Header";
import MainContent from "../exercises/components/MainContent";

const App = () => {
	return (
		<div>
			{/* 👇 Exercise 3: Register "Greet" component */}
			<Greet />

			{/* 👇 Another Exercises */}
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
};

export default App;

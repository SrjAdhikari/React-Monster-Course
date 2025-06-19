import Card from "./components/Card";

const App = () => {
	return (
		<div>
			<Card>
				<h2>My Card 1</h2>
				<h3>This is some content for card 1</h3>
			</Card>

			<Card>
				<h2>My Card 2</h2>
				<h3>This is some content for card 2</h3>
			</Card>

			<Card>
				<h2>My Card 3</h2>
				<h3>This is some content for card 3</h3>
			</Card>
		</div>
	);
};

export default App;

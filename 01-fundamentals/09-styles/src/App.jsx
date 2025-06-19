import IconComponent from "../exercises/components/IconComponent";
import ProfileCard from "../exercises/components/ProfileCard";
import StyledCard from "../exercises/components/StyledCard";

const App = () => {
	const style = {
		color: "white",
		backgroundColor: "crimson",
		padding: "2rem",
	};

	return (
		<section>
			<h2 style={{ color: "white", backgroundColor: "teal", padding: "2rem" }}>
				Inline Style
			</h2>

			<h2 style={style}>Internal Style</h2>

			{/* 👇 Exercises */}
			<StyledCard />
			<br />

			<ProfileCard />
			<br />

			<IconComponent />
		</section>
	);
};

export default App;

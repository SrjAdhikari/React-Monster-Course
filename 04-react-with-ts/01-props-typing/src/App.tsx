import Person from "./components/Person";
import User from "./components/User";
import Button from "../exercises/components/Button";

const App = () => {
	return (
		<div>
			<User name="Suraj" age={25} />

			<Person>
				<p>Suraj is 25 years old and he is not a student.</p>
			</Person>

			{/* 👇 Exercises */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
				}}
			>
				Props Typing Exercises
			</h2>
			<Button
				label="Click"
				onClick={() => alert("Button Clicked!")}
				disabled={false}
			/>
		</div>
	);
};

export default App;

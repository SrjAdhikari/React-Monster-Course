import FetchData from "./FetchData";
import UserList from "../exercises/UserList";

const App = () => {
	return (
		<div>
			<FetchData />

			{/* 👇 Exercises */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
					marginTop: "50px",
				}}
			>
				useEffect Exercises
			</h2>
			<UserList />
		</div>
	);
};

export default App;

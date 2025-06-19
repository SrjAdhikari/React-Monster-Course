import Greeting from "../exercises/components/Greeting";
import UserStatus from "../exercises/components/UserStatus";
import Weather from "../exercises/components/Weather";

//* Example 1: IF Condition And Ternary Operator
const ValidPassword = () => <h1>Provided password is valid</h1>;

const InvalidPassword = () => <h1>Provided password is invalid</h1>;

const Password = ({ isValid }) => {
	/*
  if(isValid)
    return <ValidPassword />
  else
    return <InvalidPassword />
  */

	// Conditional Rendering Using Ternary Operator
	return isValid ? <ValidPassword /> : <InvalidPassword />;
};

//* Example 2: AND (&&) Operator
const Cart = () => {
	const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"];

	return (
		<div>
			<h1>Cart 🛒</h1>
			{items.length > 0 && <h2>You have {items.length} items in your cart.</h2>}

			<ul>
				<h4>👇 Products</h4>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<Password isValid={false} />
			<Cart />

			{/* 👇 Exercises */}

			{/* Weather component */}
			<Weather temperature={10} />
			<Weather temperature={20} />
			<Weather temperature={30} />
			<br />

			{/* UserStatus component */}
			<UserStatus loggedIn={true} isAdmin={true} />
			<UserStatus loggedIn={true} isAdmin={false} />
			<br />

			{/* Greeting component */}
			<Greeting timeOfDay="morning" />
			<Greeting timeOfDay="afternoon" />
		</div>
	);
};

export default App;

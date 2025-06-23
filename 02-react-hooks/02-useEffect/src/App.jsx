// We setup useEffect hook to run some code WHEN
// 👉 Component renders for the (First Time)
// 👉 & WHENEVER it re-renders
// 👉 & some data in our component changed.

import { useEffect, useState } from "react";
import BasicEffect from "../exercises/components/BasicEffect";
import CounterEffect from "../exercises/components/CounterEffect";
import FetchDataEffect from "../exercises/components/FetchDataEffect";

//* Example 1: Without dependency array
const WithOutArray = () => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		console.log("useEffect called!");
		document.title = `Increment ${value}`;
	}); //❗No dependency array means this effect runs after every render

	return (
		<>
			<h4>Current Value: {value}</h4>
			<button onClick={() => setValue(value + 1)}>Click Me</button>
		</>
	);
};

//***************************************************

//* Example 2: Conditional Statement
const Conditional = () => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		console.log("useEffect called!");
		if (value > 0) {
			document.title = `Increment ${value}`;
		}
	}); //❗No dependency array means this effect runs after every render

	return (
		<>
			<h4>Current Value: {value}</h4>
			<button onClick={() => setValue(value + 1)}>Click Me</button>
		</>
	);
};

//***************************************************

//* Example 3: With dependency array
// If the dependency array is empty ([]), the effect runs only once (after the initial render).
// If the dependency array contains values, the effect runs whenever those values change.
// If there’s no dependency array, the effect runs after every render.

const WithArray = () => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		console.log("useEffect called!");
		if (value > 0) {
			document.title = `Increment ${value}`;
		}
	}, [value]); // ✅ This effect runs when value change

	return (
		<>
			<h4>Current Value: {value}</h4>
			<button onClick={() => setValue(value + 1)}>Click Me</button>
		</>
	);
};

//***************************************************

//* Example 4: Cleanup
// The cleanup can prevent memory leaks and remove unwanted things. Some use-cases for this are:
// Clean up subscriptions
// Clean up modals
// Remove event listeners
// Clear timeouts

const Cleanup = () => {
	// State to store the current window width
	const [size, setSize] = useState(window.innerWidth);

	// Function to update size state when the window is resized
	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", checkSize);

		// Cleanup function: Eemoves the event listener when the component unmounts
		return () => {
			console.log("Cleanup");
			window.removeEventListener("resize", checkSize);
		};
	}); //❗No dependency array means this effect runs after every render

	return (
		<>
			<h3>window</h3>
			<h4>{size}px</h4>
		</>
	);
};

//***************************************************

//* Example 5: Fetching Data from 3rd party
const FetchData = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			const data = await response.json();

			if (data && data.length) setData(data);
		};

		getData();
	}, []);

	return (
		<>
			<ul>
				{data.map((item) => (
					<li key={Math.random()}>{item.title}</li>
				))}
			</ul>
		</>
	);
};

const App = () => {
	return (
		<div>
			<WithOutArray />
			<Conditional />
			<WithArray />
			<Cleanup />
			<FetchData />

			{/* 👇 Exercises */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
					textAlign: "center",
				}}
			>
				Exercises
			</h2>
			<BasicEffect />
			<CounterEffect />
			<FetchDataEffect />
		</div>
	);
};

export default App;

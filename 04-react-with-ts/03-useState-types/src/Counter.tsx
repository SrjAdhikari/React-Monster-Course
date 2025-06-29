import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div>
			<h3>Counter App</h3>
			<h4>Count: {count}</h4>

			<button onClick={() => setCount(count + 1)}>Increment</button>

			<button onClick={() => setCount(count - 1)}>Decrement</button>
		</div>
	);
};

export default Counter;

import useCounter from "./store/store";

const Button = () => {
	const { increment, decrement } = useCounter();

	return (
		<div>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};

export default Button;

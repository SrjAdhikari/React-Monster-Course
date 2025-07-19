import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

const Counter = () => {
	// Read the data from the redux "store"
	const count = useSelector((state) => state.counter.value);

	// Changing the data by sending "actions" to the store
	const dispatch = useDispatch();

	return (
		<div className="counter-container">
			<p>Count is : {count}</p>

			<div className="buttons">
				{/* Dispatch the increment action when the button is clicked */}
				<button onClick={() => dispatch(increment())}>Increment</button>

				{/* Dispatch the decrement action when the button is clicked */}
				<button onClick={() => dispatch(decrement())}>Decrement</button>

				{/* Dispatch the reset action when the button is clicked */}
				<button onClick={() => dispatch(reset())}>Reset</button>
			</div>
		</div>
	);
};

export default Counter;

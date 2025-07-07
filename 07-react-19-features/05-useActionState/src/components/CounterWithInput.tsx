import { useActionState } from "react";
import "../style.css";

const counterAction = async (previousState: number, FormData: FormData) => {
	const name = FormData.get("name");
	console.log(name);

	return previousState + 1;
};

const CounterWithInput = () => {
	const [state, formAction] = useActionState(counterAction, 0);

	return (
		<div className="form-container">
			<form className="form">
				<div className="form-group">
					<h4>Current State: {state}</h4>
					<button className="increment-btn" formAction={formAction}>
						Increment
					</button>
				</div>

				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter your name"
					/>
				</div>
			</form>
		</div>
	);
};

export default CounterWithInput;

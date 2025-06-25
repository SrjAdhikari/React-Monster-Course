import { useId } from "react";

const UniqueID = () => {
	// Generate a unique ID that is stable across renders
	const id = useId();

	return (
		<div>
			{/* Associate label with input using a unique id to ensure accessibility and uniqueness */}
			<label htmlFor={`${id}-name`}>Name: </label>
			<input type="text" id={`${id}-name`} />
			<br />

			{/* Another input-label pair using the same base unique id with a different suffix */}
			<label htmlFor={`${id}-email`}>Email: </label>
			<input type="email" id={`${id}-email`} />
		</div>
	);
};

export default UniqueID;

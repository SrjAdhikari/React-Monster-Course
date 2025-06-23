import { useEffect } from "react";

const BasicEffect = () => {
	useEffect(() => {
		console.log("BasicEffect component mounted");
	}, []);

	return (
		<div>
			<h3>Check the console to see the message</h3>
		</div>
	);
};

export default BasicEffect;

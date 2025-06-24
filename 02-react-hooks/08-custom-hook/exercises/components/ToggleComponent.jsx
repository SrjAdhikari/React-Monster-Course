import useToggle from "../hooks/useToggle";

const ToggleComponent = () => {
	const [isToggled, toggle] = useToggle();

	return (
		<div style={{ marginBottom: "20px" }}>
			<button onClick={toggle}>{isToggled ? "Hide" : "Show"}</button>

			{isToggled && <p>This is a toggled message!</p>}
		</div>
	);
};

export default ToggleComponent;

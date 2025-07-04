import Input from "../../components/Input";
import "./colors.css";

const Colors = ({ handleChange }) => {
	return (
		<div>
			<h2 className="sidebar-title color-title">Colors</h2>

			<label className="sidebar-label-container">
				<input type="radio" onChange={handleChange} name="test3" value="" />
				<span className="checkmark all"></span> All
			</label>

			<Input
				handleChange={handleChange}
				value="black"
				title="Black"
				name="test3"
				color="black"
			/>

			<Input
				handleChange={handleChange}
				value="blue"
				title="Blue"
				name="test3"
				color="blue"
			/>

			<Input
				handleChange={handleChange}
				value="red"
				title="Red"
				name="test3"
				color="red"
			/>

			<Input
				handleChange={handleChange}
				value="green"
				title="Green"
				name="test3"
				color="green"
			/>

			<label className="sidebar-label-container">
				<input
					type="radio"
					onChange={handleChange}
					name="test3"
					value="white"
				/>
				<span
					className="checkmark"
					style={{ background: "#fff", border: "2px solid #000" }}
				></span>
				White
			</label>
		</div>
	);
};

export default Colors;

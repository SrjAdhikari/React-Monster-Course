import { useState } from "react";

const ShoppingList = () => {
	const [items, setItems] = useState([]);
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const newItem = {
			name,
			quantity: parseInt(quantity),
		};

		setItems([...items, newItem]);
		setName("");
		setQuantity("");
	};

	const btnStyle = {
		padding: "5px 10px",
		margin: "4px",
		border: "1px solid tomato",
		borderRadius: "5px",
		cursor: "pointer",
	};

	const boxStyle = {
		width: "500px",
		margin: "10px auto",
		border: "2px solid tomato",
		padding: "10px",
		borderRadius: "10px",
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
	};

	return (
		<div style={boxStyle}>
			<h4 style={{ margin: "0" }}>Shopping Items:</h4>

			<ul>
				{items.map((item, index) => (
					<li key={index}>
						{item.name} - Quantity: {item.quantity}
					</li>
				))}
			</ul>

			<form onSubmit={handleSubmit}>
				<div>
					<label>
						Item:
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Enter item name"
						/>
					</label>
				</div>

				<div>
					<label>
						Quantity:
						<input
							type="text"
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
							placeholder="Enter quantity"
						/>
					</label>
				</div>

				<button style={btnStyle} type="submit">
					Add Item
				</button>
			</form>
		</div>
	);
};
export default ShoppingList;

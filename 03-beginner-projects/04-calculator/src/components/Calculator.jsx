import { useState } from "react";
import "../style.css";

const Calculator = () => {
	const [inputValue, setInputValue] = useState("0");

	// Function to append a value (number/operator) to the current input
	const display = (value) => {
		setInputValue((prev) => {
			// Prevent multiple leading zeros
			if (prev === "0") {
				return value;
			}
			return prev + value;
		});
	};

	// Function to evaluate the expression and display the result
	const calculate = () => {
		const result = eval(inputValue);

		// Convert result to string before setting state
		setInputValue(result.toString());
	};

	// Function to clear the input display
	const clear = () => setInputValue("0");

	return (
		// Calculator form layout
		<form class="calculator" name="calc">
			{/* Display screen for current input or result */}
			<input type="text" class="value" value={inputValue} readOnly />

			{/* Calculator buttons */}
			<span class="num clear" onClick={clear}>
				C
			</span>
			<span onClick={() => display("/")}>/</span>
			<span onClick={() => display("*")}>*</span>

			<span onClick={() => display("7")}>7</span>
			<span onClick={() => display("8")}>8</span>
			<span onClick={() => display("9")}>9</span>
			<span onClick={() => display("-")}>-</span>

			<span onClick={() => display("4")}>4</span>
			<span onClick={() => display("5")}>5</span>
			<span onClick={() => display("6")}>6</span>
			<span className="plus" onClick={() => display("+")}>
				+
			</span>

			<span onClick={() => display("1")}>1</span>
			<span onClick={() => display("2")}>2</span>
			<span onClick={() => display("3")}>3</span>

			<span onClick={() => display("0")}>0</span>
			<span onClick={() => display("00")}>00</span>
			<span onClick={() => display(".")}>.</span>

			{/* Evaluate the expression when "=" is clicked */}
			<span class="num equal" onClick={calculate}>
				=
			</span>
		</form>
	);
};

export default Calculator;

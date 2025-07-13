import { useEffect, useState } from "react";
import useStore from "../store/useStore";

const PasswordGenerator = () => {
	// Extract state and actions from Zustand store
	const {
		length,
		setLength,
		includeNumbers,
		toggleNumbers,
		includeSymbols,
		toggleSymbols,
		includeUppercase,
		toggleUppercase,
		includeLowercase,
		toggleLowercase,
		generatedPassword,
		generatePassword,
	} = useStore();

	// State to track copy success
	const [copySuccess, setCopySuccess] = useState<string>("");

	// Check if no options are selected
	const noOptionsSelected =
		!includeNumbers &&
		!includeSymbols &&
		!includeUppercase &&
		!includeLowercase;

	// Generate a new password on button click
	const handleGeneratePassword = () => {
		generatePassword();
		setCopySuccess("");
	};

	// Copy the generated password to clipboard and show a success message
	const handleCopy = () => {
		if (generatedPassword) {
			navigator.clipboard.writeText(generatedPassword);
			setCopySuccess("Password copied to clipboard!");

			// Hide the message after 2 seconds
			setTimeout(() => setCopySuccess(""), 2000);
		}
	};

	// Generate initial password on first mount.
	useEffect(() => {
		generatePassword();
	}, []);

	return (
		<div className="max-w-lg mx-auto p-8 dark:bg-gray-900 rounded-2xl shadow-2xl">
			<h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
				🔐 Password Generator
			</h1>

			{/* Password Output */}
			<div className="mt-4 mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700">
				{generatedPassword && (
					<div className="flex items-center justify-between">
						<p className="text-lg font-mono break-all text-gray-800 dark:text-gray-200">
							{generatedPassword}
						</p>
						<button
							onClick={handleCopy}
							className="ml-4 px-3 py-1 rounded-md bg-green-600 text-white hover:bg-green-700 transition duration-300 text-sm"
						>
							Copy
						</button>
					</div>
				)}
			</div>

			{/* Show error if no options selected */}
			{noOptionsSelected && (
				<p className="text-red-500 text-base text-center mb-4">
					Please select at least one option!
				</p>
			)}

			{/* Show success message after copy */}
			{copySuccess && (
				<p className="text-green-600 text-sm text-center mb-4">{copySuccess}</p>
			)}

			{/* Controls */}
			<div className="space-y-6">
				{/* Length Slider */}
				<div>
					<label
						htmlFor="length"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
					>
						Password Length: <span className="font-semibold">{length}</span>
					</label>

					<input
						type="range"
						id="length"
						name="length"
						value={length}
						onChange={(e) => setLength(Number(e.target.value))}
						min={6}
						max={50}
						className="w-full accent-blue-600"
					/>
				</div>

				{/* Options */}
				<div className="grid grid-cols-2 gap-4">
					{/* Include Numbers */}
					<div className="flex items-center space-x-2">
						<input
							id="numbers"
							type="checkbox"
							checked={includeNumbers}
							onChange={toggleNumbers}
							className="accent-blue-600"
						/>
						<label
							htmlFor="numbers"
							className="text-gray-700 dark:text-gray-300 text-sm"
						>
							Include Numbers
						</label>
					</div>

					{/* Include Symbols */}
					<div className="flex items-center space-x-2">
						<input
							id="symbols"
							type="checkbox"
							checked={includeSymbols}
							onChange={toggleSymbols}
							className="accent-blue-600"
						/>
						<label
							htmlFor="symbols"
							className="text-gray-700 dark:text-gray-300 text-sm"
						>
							Include Symbols
						</label>
					</div>

					{/* Include Uppercase */}
					<div className="flex items-center space-x-2">
						<input
							id="uppercase"
							type="checkbox"
							checked={includeUppercase}
							onChange={toggleUppercase}
							className="accent-blue-600"
						/>
						<label
							htmlFor="uppercase"
							className="text-gray-700 dark:text-gray-300 text-sm"
						>
							Include Uppercase
						</label>
					</div>

					{/* Include Lowercase */}
					<div className="flex items-center space-x-2">
						<input
							id="lowercase"
							type="checkbox"
							checked={includeLowercase}
							onChange={toggleLowercase}
							className="accent-blue-600"
						/>
						<label
							htmlFor="lowercase"
							className="text-gray-700 dark:text-gray-300 text-sm"
						>
							Include Lowercase
						</label>
					</div>
				</div>

				{/* Generate Button */}
				<button
					onClick={handleGeneratePassword}
					className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold transition duration-300"
				>
					Generate Password
				</button>
			</div>
		</div>
	);
};

export default PasswordGenerator;

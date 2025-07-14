import type { ChangeEvent } from "react";

// Props definition for the FormField component
interface FormFieldProps {
	field: {
		label: string;
		type: "text" | "number" | "password" | "textarea" | "date" | "file";
		value: string;
	};
	index: number;
	onUpdate: (
		index: number,
		updatedField: {
			label: string;
			type: "text" | "number" | "password" | "textarea" | "date" | "file";
			value: string;
		}
	) => void;
	onRemove: (index: number) => void;
}

// A single, reusable dynamic form field component
const FormField = ({ field, index, onUpdate, onRemove }: FormFieldProps) => {
	// Generic change handler for text-based inputs and textarea
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		onUpdate(index, { ...field, value: e.target.value });
	};

	// Specialized change handler for file input
	// Stores file names as a comma-separated string
	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		onUpdate(index, {
			...field,
			value: e.target.files
				? Array.from(e.target.files)
						.map((file) => file.name)
						.join(", ")
				: "",
		});
	};

	return (
		<div className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
			<label className="block mb-2 text-lg font-medium text-gray-700">
				{field.label}
			</label>

			{/* Conditional rendering based on field type */}
			{field.type === "textarea" ? (
				<textarea
					value={field.value}
					onChange={handleChange}
					className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			) : field.type === "file" ? (
				<input
					type="file"
					onChange={handleFileChange}
					className="border border-gray-300 rounded-lg"
				/>
			) : (
				<input
					type={field.type}
					value={field.value}
					onChange={handleChange}
					className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			)}

			{/* Remove button */}
			<button
				type="button"
				onClick={() => onRemove(index)}
				className="mt-2 bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition duration-200"
			>
				Remove
			</button>
		</div>
	);
};

export default FormField;

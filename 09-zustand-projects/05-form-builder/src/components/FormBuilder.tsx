import { useState, type ChangeEvent } from "react";
import useStore from "../store/useStore";
import FormField from "./FormField";

// Define the shape of the form fields
interface NewField {
	label: string;
	type: "text" | "number" | "password" | "textarea" | "date" | "file";
	value: string;
}

// FormBuilder component
const FormBuilder = () => {
	// Extract form fields state and actions from Zustand store
	const { formFields, addField, updateField, removeField, resetForm } =
		useStore();

	// State to build a new field before adding it to the store
	const [newField, setNewField] = useState<NewField>({
		label: "",
		type: "text",
		value: "",
	});

	// Handler to add new field to the form
	const handleAddField = () => {
		addField(newField);
		setNewField({ label: "", type: "text", value: "" });
	};

	// Handle changes in the new field input
	const handleFieldChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setNewField((prev) => ({ ...prev, [name]: value }));
	};

	// Handles updating a field in the global store
	const handleFieldUpdate = (index: number, updatedField: NewField) => {
		updateField(index, updatedField);
	};

	// Handles removing a field from the global store
	const handleFieldRemove = (index: number) => {
		removeField(index);
	};

	return (
		<div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
			<h1 className="text-2xl font-bold mb-4 text-center">FormBuilder</h1>

			{/* Section to add new field */}
			<div className="flex flex-col mb-6">
				<input
					type="text"
					name="label"
					placeholder="Field Label"
					value={newField.label}
					onChange={handleFieldChange}
					className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<select
					name="type"
					value={newField.type}
					onChange={handleFieldChange}
					className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					<option value="text">Text</option>
					<option value="number">Number</option>
					<option value="textarea">Textarea</option>
					<option value="date">Date</option>
					<option value="file">File</option>
				</select>

				{/* Add and Reset buttons */}
				<div className="flex justify-between">
					<button
						type="button"
						onClick={handleAddField}
						className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
					>
						Add Field
					</button>

					<button
						type="button"
						onClick={resetForm}
						className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
					>
						Reset Form
					</button>
				</div>
			</div>

			{/* Render all added fields */}
			<form>
				{formFields.map((field, index) => (
					<FormField
						key={index}
						field={field}
						index={index}
						onUpdate={handleFieldUpdate}
						onRemove={handleFieldRemove}
					/>
				))}
			</form>
		</div>
	);
};

export default FormBuilder;

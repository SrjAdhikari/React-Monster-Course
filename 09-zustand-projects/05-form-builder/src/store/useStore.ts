import { create } from "zustand";

// Define the shape of the form fields
interface FormFields {
	label: string;
	type: "text" | "number" | "password" | "textarea" | "date" | "file";
	value: string;
}

// Define the shape of the Zustand store
interface FormStoreState {
	formFields: FormFields[];
	addField: (field: FormFields) => void;
	removeField: (index: number) => void;
	updateField: (index: number, updatedField: FormFields) => void;
	resetForm: () => void;
}

const useStore = create<FormStoreState>((set) => ({
	// Initial state: An empty array to hold form fields
	formFields: [],

	// Actions to add a new field to the form
	addField: (field) =>
		set((state) => ({ formFields: [...state.formFields, field] })),

	// Actions to remove a field from the form
	removeField: (index) =>
		set((state) => ({
			formFields: state.formFields.filter((_, idx) => index !== idx),
		})),

	// Actions to update a field in the form
	updateField: (index, updatedField) =>
		set((state) => ({
			formFields: state.formFields.map((field, idx) =>
				idx === index ? updatedField : field
			),
		})),

	// Actions to reset the form to its initial empty state
	resetForm: () => set({ formFields: [] }),
}));

export default useStore;

import { create } from "zustand";

// Define the type for an expense
interface Expense {
	id: number;
	description: string;
	amount: number;
}

// Define the type for the zustand store for expenses
interface ExpenseStore {
	expenses: Expense[];
	addExpense: (expense: Expense) => void;
	removeExpense: (id: number) => void;
}

// Create the zustand store
const useStore = create<ExpenseStore>((set) => ({
	// Initial state for the store: empty list of expenses
	expenses: [],

	// Function to adds a new expense to the list by appending it.
	addExpense: (expense) =>
		set((state) => ({ expenses: [...state.expenses, expense] })),

	// Function to remove an expense from the store by its id
	removeExpense: (id) =>
		set((state) => ({
			expenses: state.expenses.filter((expense) => expense.id !== id),
		})),
}));

export default useStore;

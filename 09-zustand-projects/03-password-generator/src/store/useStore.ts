import { create } from "zustand";

// Define the type for the password store
type PasswordStore = {
	// State for password generation
	length: number;
	includeNumbers: boolean;
	includeSymbols: boolean;
	includeUppercase: boolean;
	includeLowercase: boolean;

	// Generated password
	generatedPassword: string;

	// Actions to update the store
	setLength: (length: number) => void;
	toggleNumbers: () => void;
	toggleSymbols: () => void;
	toggleUppercase: () => void;
	toggleLowercase: () => void;
	generatePassword: () => void;
};

// Create the password store
const useStore = create<PasswordStore>((set) => ({
	// Default the initial state for the password generator settings
	length: 12,
	includeNumbers: true,
	includeSymbols: false,
	includeUppercase: true,
	includeLowercase: true,
	generatedPassword: "",

	// Action: Set the password length
	setLength: (length) => set({ length }),

	// Action: Toggle inclusion of numbers in password
	toggleNumbers: () =>
		set((state) => ({ includeNumbers: !state.includeNumbers })),

	// Action: Toggle inclusion of symbols in password
	toggleSymbols: () =>
		set((state) => ({ includeSymbols: !state.includeSymbols })),

	// Action: Toggle inclusion of uppercase letters in password
	toggleUppercase: () =>
		set((state) => ({ includeUppercase: !state.includeUppercase })),

	// Action: Toggle inclusion of lowercase letters in password
	toggleLowercase: () =>
		set((state) => ({ includeLowercase: !state.includeLowercase })),

	// Action: Generate a random password based on the current settings
	generatePassword: () =>
		set((state) => {
			// Character sets for password generation
			const numbers = "0123456789";
			const symbols = "!@#$%^&*()_-+={}[]|:;'<>?,./~";
			const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			const lowercase = "abcdefghijklmnopqrstuvwxyz";

			// Build the character set based on selected options
			let characters = "";
			if (state.includeNumbers) characters += numbers;
			if (state.includeSymbols) characters += symbols;
			if (state.includeUppercase) characters += uppercase;
			if (state.includeLowercase) characters += lowercase;

			// If no characters are selected, return an empty password
			if (!characters) {
				return { generatedPassword: "" };
			}

			// Generate password by randomly selecting characters
			let password = "";
			for (let i = 0; i < state.length; i++) {
				password += characters[Math.floor(Math.random() * characters.length)];
			}

			// Update the generated password state with the new password
			return { generatedPassword: password };
		}),
}));

export default useStore;

//* 📌 React Form Hook
// React Hook Form is a lightweight library to manage form state, validation, and submission in React applications.
// It uses "uncontrolled components" and "Refs" under the hood,
// which makes it fast and less re-render intensive than other form libraries

//* 📌 Key Concepts
/*
  const {
    register,         // Connects inputs to the form
    handleSubmit,     // Handles form submission
    watch,            // Watches specific field changes
    reset,            // Resets the form
    setValue,         // Programmatically sets a field value
    getValues,        // Gets current values
    formState: {
      errors,         // Form validation errors
      isSubmitting,   // Submitting state
      isValid         // Form validity
    }
  } = useForm<Types For Form Data>();
*/

import RegisterForm from "./components/RegisterForm";
import SignupForm from "./components/SignupForm";

const App = () => {
	return (
		<div>
			<SignupForm />
			<RegisterForm />
		</div>
	);
};

export default App;

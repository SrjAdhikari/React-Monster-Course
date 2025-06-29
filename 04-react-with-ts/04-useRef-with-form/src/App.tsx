import Form from "./Form";
import FocusInput from "../exercises/components/FocusInput";
import ContactForm from "../exercises/components/ContactForm";
import EventHandling from "../exercises/components/EventHandling";

const App = () => {
	return (
		<div>
			<Form />

			{/* 👇 Exercises */}
			<h2
				style={{
					textDecoration: "underline",
					color: "Red",
				}}
			>
				useRef Exercises
			</h2>
			<FocusInput />
			<ContactForm />
			<EventHandling />
		</div>
	);
};

export default App;

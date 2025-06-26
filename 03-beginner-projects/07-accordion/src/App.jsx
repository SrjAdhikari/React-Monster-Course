import Accordion from "./components/Accordion";

const data = [
	{
		title: "What is React?",
		content: "React is a JavaScript library for building user interfaces.",
	},
	{
		title: "What is JSX?",
		content:
			"JSX stands for JavaScript XML. It's a syntax extension used in React to describe UI elements.",
	},
	{
		title: "What is a Hook in React?",
		content:
			"Hooks are functions that let you use state and other React features without writing a class.",
	},
	{
		title: "What is the Virtual DOM?",
		content:
			"The Virtual DOM is a lightweight representation of the real DOM used to optimize rendering performance in React.",
	},
	{
		title: "What is useEffect?",
		content:
			"useEffect is a hook that lets you perform side effects (like fetching data) in functional components.",
	},
];

const App = () => {
	return (
		<div>
			<div className="accordion">
				{data.map(({ title, content }) => (
					<Accordion title={title} content={content} />
				))}
			</div>
		</div>
	);
};

export default App;

import { create } from "zustand";

// Type definition for a single quiz question
type Question = {
	question: string;
	options: string[];
	correctAnswer: number;
};

// Type definition for the quiz state
interface QuizState {
	// Index of the current diaplayed question
	currentQuestion: number;

	answers: (number | null)[];
	score: number;
	showScore: boolean;

	// Array of all quiz questions
	questions: Question[];

	// Records user's selected answer for a question
	selectAnswer: (optionIndex: number) => void;

	nextQuestion: () => void;
	prevQuestion: () => void;
	resetQuiz: () => void;
}

const useStore = create<QuizState>((set) => ({
	currentQuestion: 0,

	// Initialize answers array (should be length of questions)
	answers: Array(3).fill(null),

	score: 0,
	showScore: false,

	// Array of all quiz questions
	questions: [
		{
			question: "What does CSS stand for?",
			options: [
				"Computer Style Sheets",
				"Creative Style Sheets",
				"Cascading Style Sheets",
				"Colorful Style Sheets",
			],
			correctAnswer: 2,
		},
		{
			question: "What does HTTP stand for?",
			options: [
				"Hypertext Technical Protocol",
				"Hypertext Transfer Protocol",
				"High Transfer Text Protocol",
				"Hyper Transfer Text Protocol",
			],
			correctAnswer: 1,
		},
		{
			question: "Which language is primarily used for web scripting?",
			options: ["JavaScript", "Python", "C++", "Java"],
			correctAnswer: 0,
		},
		{
			question: "What does SQL stand for?",
			options: [
				"Standard Question Language",
				"Simple Query Language",
				"Sequential Query Language",
				"Structured Query Language",
			],
			correctAnswer: 3,
		},
		{
			question: "What is the main function of a web server?",
			options: [
				"To store data",
				"To run applications",
				"To serve web pages to clients",
				"To protect networks",
			],
			correctAnswer: 2,
		},
		{
			question: "Which company developed the Java programming language?",
			options: ["Sun Microsystems", "Microsoft", "IBM", "Apple"],
			correctAnswer: 0,
		},
		{
			question: "What is the purpose of the <title> tag in HTML?",
			options: [
				"To create a new section",
				"To define the title of the web page",
				"To add a comment",
				"To include a script",
			],
			correctAnswer: 1,
		},
		{
			question: "What does API stand for?",
			options: [
				"Application Program Interface",
				"Advanced Programming Interface",
				"Application Programming Interface",
				"Automated Program Interface",
			],
			correctAnswer: 2,
		},
		{
			question: "What is the purpose of a database index?",
			options: [
				"To store large files",
				"To create backups",
				"To manage user permissions",
				"To speed up data retrieval",
			],
			correctAnswer: 3,
		},
		{
			question:
				"Which protocol is commonly used for secure communication over the internet?",
			options: ["HTTPS", "FTP", "HTTP", "SMTP"],
			correctAnswer: 0,
		},
	],

	// Action to record user's answer for current question
	selectAnswer: (optionIndex) =>
		set((state) => {
			// Create a copy of the answers array
			const answers = [...state.answers];

			// Update current question's answer
			answers[state.currentQuestion] = optionIndex;

			// Return updated state
			return { answers };
		}),

	// Action to move to the next question or calculate final score
	nextQuestion: () =>
		set((state) => {
			// Check if it's the last question
			const isLastQuestion =
				state.currentQuestion === state.questions.length - 1;

			// If it's the last question, calculate final score
			if (isLastQuestion) {
				let score = 0;

				// Compare user's answers with correct answers
				state.questions.forEach((question, index) => {
					if (state.answers[index] === question.correctAnswer) {
						score++;
					}
				});

				// Return updated state with score and showScore flag
				return { showScore: true, score };
			}

			// If not last question, just move to next question
			return { currentQuestion: state.currentQuestion + 1 };
		}),

	// Action to move to previous question (can't go below 0)
	prevQuestion: () =>
		set((state) => ({
			currentQuestion: Math.max(state.currentQuestion - 1, 0),
		})),

	// Action to reset quiz to initial state
	resetQuiz: () =>
		set(() => ({
			currentQuestion: 0,
			answers: Array(3).fill(null),
			score: 0,
			showScore: false,
		})),
}));

export default useStore;

import useStore from "../store/useStore";

const Question = () => {
	// Extract required state and actions from Zustand store
	const {
		questions,
		currentQuestion,
		selectAnswer,
		answers,
		nextQuestion,
		prevQuestion,
		showScore,
		score,
		resetQuiz,
	} = useStore();

	// If showScore is true, display score and restart button
	if (showScore) {
		return (
			<div className="w-3/4 p-6">
				<h2 className="text-2xl font-semibold">Your Score</h2>

				<p className="mt-4 text-lg">
					You scored {score} out of {questions.length}
				</p>

				<button
					onClick={resetQuiz}
					className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					Restart Quiz
				</button>
			</div>
		);
	}

	// Get current question data
	const question = questions[currentQuestion];

	// Get user's answer for current question (null if unanswered)
	const currentAnswer = answers[currentQuestion];

	// Handler for selecting an answer option
	const handleSelect = (optionIndex: any) => {
		selectAnswer(optionIndex);
	};

	// Handler for submitting the quiz (on last question)
	const handleSubmit = () => {
		// This will trigger score calculation in store
		nextQuestion();
	};

	return (
		<div className="w-3/4 p-6">
			<h3 className="text-2xl font-semibold">{question.question}</h3>

			{/* Answer options container */}
			<div className="mt-4">
				{question.options.map((option, index) => (
					<div key={index} className="my-2">
						<label className="flex items-center">
							<input
								type="radio"
								name={`question-${currentQuestion}`}
								// Check if this option is selected
								checked={currentAnswer === index}
								onChange={() => handleSelect(index)}
								className="mr-2"
							/>
							{option}
						</label>
					</div>
				))}
			</div>

			{/* Navigation buttons */}
			<div className="mt-6">
				{/* Show Previous button only if not on first question */}
				{currentQuestion > 0 && (
					<button
						onClick={prevQuestion}
						className="mr-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
					>
						Previous
					</button>
				)}

				{/* Show Next button or Submit button based on question position */}
				{currentQuestion < questions.length - 1 ? (
					// Next button for all questions except last
					<button
						onClick={nextQuestion}
						className="px-4 py-2 bg-blue-500 
            text-white rounded hover:bg-blue-600"
					>
						Next
					</button>
				) : (
					// Submit button for last question
					<button
						onClick={handleSubmit}
						className="px-4 py-2 bg-green-500
            text-white rounded hover:bg-green-600"
					>
						Submit
					</button>
				)}
			</div>
		</div>
	);
};

export default Question;

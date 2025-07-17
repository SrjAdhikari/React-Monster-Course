import useStore from "../store/useStore";
import { FaCheckCircle } from "react-icons/fa";

const Sidebar = () => {
	// Access state and actions from Zustand store
	const { questions, currentQuestion } = useStore();

	return (
		<div className="w-1/4 bg-gray-100 p-4">
			<h2 className="text-xl font-bold mb-4">Quiz Progress</h2>

			{/* Display progress indicators for each question */}
			<ul>
				{questions.map((_, index) => (
					<li key={index} className="mb-2 flex items-center">
						<FaCheckCircle
							className={`mr-2 ${
								index <= currentQuestion ? "text-green-500" : "text-gray-400"
							}`}
						/>

						<span>Question {index + 1}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;

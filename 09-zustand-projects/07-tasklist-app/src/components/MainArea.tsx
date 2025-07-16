import { FaPlus } from "react-icons/fa";
import useStore from "../store/useStore";

const MainArea = () => {
	// Extract required state and actions from Zustand store
	const {
		lists,
		workspaces,
		selectedList,
		selectedWorkspace,
		todoText,
		setSelectedList,
		setSelectedWorkspace,
		setTodoText,
		handleAddTodo,
	} = useStore();

	return (
		<div className="flex-1 p-6">
			<div className="mb-4">
				{/* Todo input field */}
				<input
					type="text"
					value={todoText}
					onChange={(e) => setTodoText(e.target.value)}
					placeholder="Add a new todo"
					className="border border-gray-300 p-2 rounded-lg w-full"
				/>

				{/* Container for dropdowns and add button */}
				<div className="mt-2 flex items-center">
					{/* List selection dropdown */}
					<select
						value={selectedList}
						onChange={(e) => setSelectedList(e.target.value)}
						className="border border-gray-300 p-2 rounded-lg mr-2"
					>
						<option value="" disabled>
							Select List
						</option>

						{/* Map through all lists to create dropdown options */}
						{lists.map((list, index) => (
							<option value={list.name} key={index}>
								{list.emoji} {list.name}
							</option>
						))}
					</select>

					{/* Workspace selection dropdown */}
					<select
						value={selectedWorkspace}
						onChange={(e) => setSelectedWorkspace(e.target.value)}
						className="border border-gray-300 p-2 rounded-lg"
					>
						<option value="" disabled>
							Select Workspace
						</option>

						{/* Map through all workspaces to create dropdown options */}
						{workspaces.map((workspace, index) => (
							<option value={workspace.name} key={index}>
								{workspace.emoji} {workspace.name}
							</option>
						))}
					</select>

					{/* Add Todo button */}
					<button
						onClick={handleAddTodo}
						className="bg-black text-white px-4 py-2 rounded-lg ml-4 flex items-center"
					>
						<FaPlus className="mr-2" /> Add Todo
					</button>
				</div>
			</div>
		</div>
	);
};

export default MainArea;

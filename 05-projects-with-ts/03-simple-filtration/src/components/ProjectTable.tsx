import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import { MdSort } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { data } from "../utils/data";

// Define the Project type interface
interface Project {
	client: string;
	country: string;
	email: string;
	project: string;
	progress: string;
	status: string;
	date: string;
	image: string;
}

const ProjectTable = () => {
	// State to hold all project data
	const [projects, setProjects] = useState<Project[]>(data);

	// State to manage current sorting configuration
	const [sortConfig, setSortConfig] = useState<{
		key: string;
		direction: string;
	} | null>(null);

	// State to control visibility of sorting dropdown
	const [dropdownVisible, setDropdownVisible] = useState(false);

	// State to control visibility of filters dropdown
	const [filtersVisible, setFiltersVisible] = useState(false);

	// State for search query
	const [searchQuery] = useState("");

	// State for all filter inputs
	const [filters, setFilters] = useState({
		name: "",
		country: "",
		email: "",
		project: "",
		status: "",
	});

	// State to control which row’s status dropdown is currently visible
	const [statusDropdownVisible, setStatusDropdownVisible] = useState<
		number | null
	>(null);

	// Function to sort projects by a specific key
	const sortProjects = (key: keyof Project) => {
		let sortedProjects = [...projects];

		// Check if already sorted by this key in ascending order
		if (
			sortConfig &&
			sortConfig.key === key &&
			sortConfig.direction === "ascending"
		) {
			// Sort in descending order
			sortedProjects.sort((a, b) => (a[key] > b[key] ? -1 : 1));
			setSortConfig({ key, direction: "descending" });
		} else {
			// Sort in ascending order
			sortedProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
			setSortConfig({ key, direction: "ascending" });
		}

		setProjects(sortedProjects);
	};

	// Handle selection of a sorting option from dropdown
	const handleSortOptionClick = (key: keyof Project) => {
		sortProjects(key);
		setDropdownVisible(false);
	};

	// Update filter state when any filter input changes
	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilters({
			...filters,
			[e.target.name]: e.target.value,
		});
	};

	// Handle updating the status of a project
	const handleStatusChange = (index: number, newStatus: string) => {
		const updatedProjects = projects.map((project, i) =>
			i === index
				? {
						...project,
						status: newStatus,
						progress: newStatus === "Completed" ? "100%" : project.progress,
				  }
				: project
		);
		setProjects(updatedProjects);
		setStatusDropdownVisible(null);
	};

	// Filter projects based on search query and filters
	const filteredProjects = projects.filter(
		(project) =>
			// Search query filter
			(searchQuery === "" ||
				Object.values(project).some((value) =>
					value.toLowerCase().includes(searchQuery.toLowerCase())
				)) &&
			// Name filter
			(filters.name === "" ||
				project.client.toLowerCase().includes(filters.name.toLowerCase())) &&
			// Country filter
			(filters.country === "" ||
				project.country
					.toLowerCase()
					.includes(filters.country.toLowerCase())) &&
			// Email filter
			(filters.email === "" ||
				project.email.toLowerCase().includes(filters.email.toLowerCase())) &&
			// Project name filter
			(filters.project === "" ||
				project.project
					.toLowerCase()
					.includes(filters.project.toLowerCase())) &&
			// Status filter
			(filters.status === "" ||
				project.status.toLowerCase().includes(filters.status.toLowerCase()))
	);

	// Calculate paginated data
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 7;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentProjects = filteredProjects.slice(
		startIndex,
		startIndex + itemsPerPage
	);
	const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

	// Handle changing the page number in the pagination controls.
	const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<div className="p-4 w-[93%] ml-[5rem]">
			{/* Sorting */}
			<div className="flex items-center mb-5">
				<div className="relative">
					<button
						onClick={() => setDropdownVisible(!dropdownVisible)}
						className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
					>
						<BiSort className="mr-[0.3rem]" />
						Sort
						<AiOutlineDown className="ml-2" />
					</button>

					{/* Dropdown for sorting */}
					{dropdownVisible && (
						<div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg">
							<button
								onClick={() => handleSortOptionClick("client")}
								className="block px-4 py-2 text-white w-full hover:bg-gray-700"
							>
								Name
							</button>

							<button
								onClick={() => handleSortOptionClick("country")}
								className="block px-4 py-2 text-white hover:bg-gray-700"
							>
								Country
							</button>

							<button
								onClick={() => handleSortOptionClick("date")}
								className="block px-4 py-2 text-white  w-full hover:bg-gray-700"
							>
								Date
							</button>
						</div>
					)}
				</div>

				{/* Filters Button */}
				<div className="relative ml-4 w-full">
					<button
						onClick={() => setFiltersVisible(!filtersVisible)}
						className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
					>
						<MdSort className="mr-[0.3rem]" />
						Filters
						<AiOutlineDown className="ml-2" />
					</button>

					{/* Filters Panel */}
					{filtersVisible && (
						<div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg p-4">
							<div className="mb-2">
								<label className="block text-white">Filter by Name:</label>
								<input
									type="text"
									name="name"
									value={filters.name}
									onChange={handleFilterChange}
									className="bg-gray-900 text-white rounded p-2 w-full"
								/>
							</div>

							<div className="mb-2">
								<label className="block text-white">Filter by Country:</label>
								<input
									type="text"
									name="country"
									value={filters.country}
									onChange={handleFilterChange}
									className="bg-gray-900 text-white rounded p-2 w-full"
								/>
							</div>

							<div className="mb-2">
								<label className="block text-white">Filter by Email:</label>
								<input
									type="text"
									name="email"
									value={filters.email}
									onChange={handleFilterChange}
									className="bg-gray-900 text-white rounded p-2 w-full"
								/>
							</div>

							<div className="mb-2">
								<label className="block text-white">Filter by Project:</label>
								<input
									type="text"
									name="project"
									value={filters.project}
									onChange={handleFilterChange}
									className="bg-gray-900 text-white rounded p-2 w-full"
								/>
							</div>

							<div className="mb-2">
								<label className="block text-white">Filter by Status:</label>
								<input
									type="text"
									name="status"
									value={filters.status}
									onChange={handleFilterChange}
									className="bg-gray-900 text-white rounded p-2 w-full"
								/>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Main Table */}
			<table className="min-w-full table-auto rounded border border-gray-700 text-white">
				<thead>
					<tr>
						<th className="px-5 py-3 text-left">Image</th>
						<th className="px-5 py-3 text-left">Name</th>
						<th className="px-5 py-3 text-left">Country</th>
						<th className="px-5 py-3 text-left">Email</th>
						<th className="px-5 py-3 text-left">Project Name</th>
						<th className="px-5 py-3 text-left">Task Progress</th>
						<th className="px-5 py-3 text-left">Status</th>
						<th className="px-5 py-3 text-left">Date</th>
						<th className="px-5 py-3 text-left">Actions</th>
					</tr>
				</thead>

				<tbody>
					{/* Render current page of projects */}
					{currentProjects.map((project, index) => (
						<tr key={index} className="border border-gray-700">
							<td className="px-4 py-2">
								<img
									src={project.image}
									alt={project.client}
									className="w-[3rem] h-[3rem] object-cover rounded-full"
								/>
							</td>
							<td className="px-4 py-2">{project.client}</td>
							<td className="px-4 py-2">{project.country}</td>
							<td className="px-4 py-2">{project.email}</td>
							<td className="px-4 py-2">{project.project}</td>

							<td className="px-4 py-2">
								<div className="w-24 h-2 bg-gray-700 rounded">
									<div
										className={`w-[${project.progress}] h-2 bg-green-500 rounded`}
									></div>
								</div>
							</td>

							<td className="px-4 py-2 w-[10rem]">
								<span
									className={`bg-${
										project.status === "Completed" ? "green" : "yellow"
									}-500 p-1 rounded`}
								>
									{project.status}
								</span>
							</td>

							<td className="px-4 py-2">{project.date}</td>

							<td className="px-4 py-2">
								<div className="relative">
									<BsThreeDots
										className="cursor-pointer"
										onClick={() => setStatusDropdownVisible(index)}
									/>

									{/* Status Change Dropdown */}
									{statusDropdownVisible === index && (
										<div className="absolute top-full right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg">
											<button
												onClick={() => handleStatusChange(index, "In Progress")}
												className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
											>
												In Progress
											</button>

											<button
												onClick={() => handleStatusChange(index, "Completed")}
												className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
											>
												Completed
											</button>
										</div>
									)}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Pagination */}
			<div className="flex justify-end mt-4">
				<button
					disabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}
					className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50"
				>
					Previous
				</button>

				<span className="px-4 py-2 text-white">
					Page {currentPage} of {totalPages}
				</span>

				<button
					disabled={currentPage === totalPages}
					onClick={() => handlePageChange(currentPage + 1)}
					className="px-4 py-2 bg-gray-700 text-white rounded ml-2 disabled:opacity-50"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default ProjectTable;

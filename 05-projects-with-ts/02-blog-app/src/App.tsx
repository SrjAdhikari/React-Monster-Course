import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

// Import app components
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendList from "./components/TrendList";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import ArticleList from "./components/ArticleList";

// Import Blog context and Blog type
import { BlogProvider, type Blog } from "./shared/BlogContext";

const App = () => {
	// State to control whether the modal is open
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	// State to hold the blog being edited
	const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

	// Function to open modal for adding a new blog
	const openModalForNewBlog = () => {
		setEditingBlog(null);
		setIsModalOpen(true);
	};

	// Function to open modal with an existing blog to edit
	const openModalForEdit = (blog: Blog) => {
		setEditingBlog(blog);
		setIsModalOpen(true);
	};

	return (
		<div>
			{/* Provide BlogContext to the entire app */}
			<BlogProvider>
				<Navigation />

				<div className="flex justify-center">
					<section className="mx-auto p-6">
						<div>
							<button
								onClick={openModalForNewBlog}
								className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
							>
								Add Blog <IoMdAddCircle className="ml-[0.5rem]" />
							</button>

							<ArticleList onEdit={openModalForEdit} />

							{/* Modal for Add/Edit Blog Form */}
							{isModalOpen && (
								<Modal onClose={() => setIsModalOpen(false)}>
									<BlogForm
										existingBlog={editingBlog}
										onClose={() => setIsModalOpen(false)}
									/>
								</Modal>
							)}
						</div>
					</section>

					{/* Right sidebar with People, Trends, Topics */}
					<div className="w-[30%]">
						<PeopleToFollow />
						<TrendList />
						<TopicsList />
					</div>
				</div>
			</BlogProvider>
		</div>
	);
};

export default App;

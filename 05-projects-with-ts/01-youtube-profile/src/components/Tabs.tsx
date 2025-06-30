import { useState } from "react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import Card from "./Card";
import About from "./About";
import Contact from "./Contact";

const tabs = [
	{
		id: "home",
		icon: <FaHome />,
		label: "Home",
		content: (
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{Array.from({ length: 6 }).map((_, index) => (
					<Card
						key={index}
						title="Amazing Card"
						description="This is a cool-looking card component using React and Tailwind CSS."
						image="https://picsum.photos/400/300"
					/>
				))}
			</div>
		),
	},
	{
		id: "about",
		icon: <FaInfoCircle />,
		label: "About",
		content: <About />,
	},
	{
		id: "projects",
		icon: <GoProjectSymlink />,
		label: "Projects",
		content: (
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{Array.from({ length: 6 }).map((_, index) => (
					<Card
						key={index}
						title="Amazing Card"
						description="This is a cool-looking card component using React and Tailwind CSS."
						image="https://picsum.photos/400/300"
					/>
				))}
			</div>
		),
	},
	{
		id: "courses",
		icon: <SiCoursera />,
		label: "Courses",
		content: (
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{Array.from({ length: 6 }).map((_, index) => (
					<Card
						key={index}
						title="Amazing Card"
						description="This is a cool-looking card component using React and Tailwind CSS."
						image="https://picsum.photos/400/300"
					/>
				))}
			</div>
		),
	},
	{
		id: "contact",
		icon: <FaPhone />,
		label: "Contact",
		content: <Contact />,
	},
];

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(tabs[0].id);

	return (
		<div className="p-4 mt-12 max-w-7xl mx-auto">
			{/* Tab Bar */}
			<div className="flex overflow-x-auto border-b border-gray-700 bg-[#1a1c1e] rounded-t-lg">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`
							flex-1 min-w-[100px] flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium
							transition
							${
								activeTab === tab.id
									? "text-white border-b-2 border-red-500 bg-[#2a2c2e]"
									: "text-gray-400 hover:text-white hover:bg-[#232527]"
							}
						`}
					>
						{tab.icon}
						<span>{tab.label}</span>
					</button>
				))}
			</div>

			{/* Content Area */}
			<div className="mt-4 p-6 bg-[#1a1c1e] rounded-lg shadow-lg border border-gray-700">
				{tabs.find((tab) => tab.id === activeTab)?.content}
			</div>
		</div>
	);
};

export default Tabs;

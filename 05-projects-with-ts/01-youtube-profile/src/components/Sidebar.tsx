import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
	return (
		<aside className="fixed top-0 left-0 h-screen w-20 bg-gradient-to-b from-[#111214] to-[#1a1c1e] text-white shadow-lg">
			<ul className="flex flex-col justify-between items-center h-full py-6">
				{/* Top Section */}
				<div className="flex flex-col space-y-6">
					<li className="group cursor-pointer">
						<FaHome
							size={22}
							className="text-gray-400 group-hover:text-white transition duration-300"
						/>
					</li>

					<li className="group cursor-pointer">
						<FaUser
							size={22}
							className="text-gray-400 group-hover:text-white transition duration-300"
						/>
					</li>

					<li className="group cursor-pointer">
						<FaSearch
							size={22}
							className="text-gray-400 group-hover:text-white transition duration-300"
						/>
					</li>
				</div>

				{/* Bottom Section */}
				<div className="flex flex-col space-y-6">
					<li className="group cursor-pointer">
						<IoMdSettings
							size={22}
							className="text-gray-400 group-hover:text-white transition duration-300"
						/>
					</li>

					<li className="group cursor-pointer">
						<FaUser
							size={22}
							className="text-gray-400 group-hover:text-white transition duration-300"
						/>
					</li>
				</div>
			</ul>
		</aside>
	);
};

export default Sidebar;

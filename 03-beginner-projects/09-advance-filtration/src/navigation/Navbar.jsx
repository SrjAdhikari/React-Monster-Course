import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./navbar.css";

const Navbar = ({ query, handleInputChange }) => {
	return (
		<nav>
			<div className="nav-container">
				<input
					className="search-input"
					type="text"
					onChange={handleInputChange}
					value={query}
					placeholder="Enter your search products"
				/>
			</div>

			<div className="profile-container">
				<a href="#">
					<FiHeart className="nav-icons" />
				</a>

				<a href="">
					<AiOutlineShoppingCart className="nav-icons" />
				</a>

				<a href="">
					<AiOutlineUserAdd className="nav-icons" />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;

import { useState } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
import "../src/style.css";

// Demonstrates tab switching without using React's useTransition hook.
const WithoutTransition = () => {
	// State to manage the active tab
	const [activeTab, setActiveTab] = useState("home");

	// Function to render content based on the active tab
	const renderContent = () => {
		switch (activeTab) {
			case "home":
				return <Home />;
			case "posts":
				return <Posts />;
			case "contact":
				return <Contact />;
			default:
				break;
		}
	};

	return (
		<div className="transition-container">
			<h4 className="title">Without useTransition Hook</h4>

			{/* Navigation buttons for tab selection */}
			<div className="tab-buttons">
				<button
					className={`tab-button ${activeTab === "home" ? "active" : ""}`}
					onClick={() => setActiveTab("home")}
				>
					Home
				</button>

				<button
					className={`tab-button ${activeTab === "posts" ? "active" : ""}`}
					onClick={() => setActiveTab("posts")}
				>
					Posts
				</button>

				<button
					className={`tab-button ${activeTab === "contact" ? "active" : ""}`}
					onClick={() => setActiveTab("contact")}
				>
					Contect
				</button>
			</div>

			{/* Content area that shows the selected tab component */}
			<div className="tab-content">{renderContent()}</div>
		</div>
	);
};

export default WithoutTransition;

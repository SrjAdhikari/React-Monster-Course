import { useState, useTransition } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
import "../src/style.css";

// Demonstrates tab switching with React's useTransition hook.
const WithTransition = () => {
	// State to manage the active tab
	const [activeTab, setActiveTab] = useState("home");

	// useTransition hook to manage the transition state
	// isPending indicates if the transition is in progress
	// startTransition is used to mark updates as transitions
	const [isPending, startTransition] = useTransition();

	// Function to handle tab changes
	// Uses startTransition to defer the state update, making it less blocking.
	const handleTabChange = (tab: string) => {
		startTransition(() => {
			setActiveTab(tab);
		});
	};

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
			<h4 className="title">With useTransition Hook</h4>

			{/* Navigation buttons for tab selection */}
			<div className="tab-buttons">
				<button
					className={`tab-button ${activeTab === "home" ? "active" : ""}`}
					onClick={() => handleTabChange("home")}
				>
					Home
				</button>
				<button
					className={`tab-button ${activeTab === "posts" ? "active" : ""}`}
					onClick={() => handleTabChange("posts")}
				>
					Posts
				</button>
				<button
					className={`tab-button ${activeTab === "contact" ? "active" : ""}`}
					onClick={() => handleTabChange("contact")}
				>
					Contact
				</button>
			</div>

			{/* Loading indicator shown when transition is pending */}
			{isPending && <p className="loading-indicator">Loading...</p>}

			{/* Content area that shows the selected tab component */}
			<div className="tab-content">{renderContent()}</div>
		</div>
	);
};

export default WithTransition;

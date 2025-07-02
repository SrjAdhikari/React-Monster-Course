import { useState, useEffect } from "react";

// Define the structure of each author
interface Author {
	name: string;
	isFollowing: boolean;
	image: string;
}

const TopSellers = () => {
	// State to store the list of authors
	const [authors, setAuthors] = useState<Author[]>([]);

	// useEffect to fetch authors data
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch 7 random users
				const response = await fetch("https://randomuser.me/api/?results=7");
				const data = await response.json();

				// Transform API data into our Author format
				const authorsData: Author[] = data.results.map((user: any) => ({
					name: `${user.name.first} ${user.name.last}`,
					isFollowing: false,
					image: user.picture.medium,
				}));

				setAuthors(authorsData);
			} catch (error) {
				console.error("Error fetching authors:", error);
			}
		};

		fetchData();
	}, []);

	// Handles follow/unfollow toggle for a specific author by index
	const handleFollowClick = (index: number) => {
		setAuthors((prevAuthors) =>
			prevAuthors.map((author, idx) =>
				idx === index ? { ...author, isFollowing: !author.isFollowing } : author
			)
		);
	};

	return (
		<div className="bg-white p-5 mx-5 mt-[5rem] border w-[23rem] rounded">
			<h2 className="text-xl font-bold mb-5">Top Sellers</h2>

			<ul>
				{authors.map((author, index) => (
					<li key={index} className="flex items-center justify-between mb-4">
						{/* Author Profile Info */}
						<section className="flex justify-center items-center">
							<img
								src={author.image}
								className="w-[25%] h-[25%] justify-center rounded-full"
								alt={author.name}
							/>

							<span className="ml-4">{author.name}</span>
						</section>

						{/* Follow/Unfollow Button */}
						<button
							onClick={() => handleFollowClick(index)}
							className={`py-1 px-3 rounded ${
								author.isFollowing
									? "bg-red-500 text-white"
									: "bg-black text-white"
							}`}
						>
							{author.isFollowing ? "Unfollow" : "Follow"}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TopSellers;

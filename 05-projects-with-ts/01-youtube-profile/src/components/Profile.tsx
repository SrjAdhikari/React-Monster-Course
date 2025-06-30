import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
	const [bannerUrl, setBannerUrl] = useState("https://picsum.photos/1500/400");
	const [profileUrl, setProfileUrl] = useState("https://picsum.photos/100");

	const handleBannerChange = (e: any) => {
		const file = e.target.files[0];
		if (file) setBannerUrl(URL.createObjectURL(file));
	};

	const handleProfileChange = (e: any) => {
		const file = e.target.files[0];
		if (file) setProfileUrl(URL.createObjectURL(file));
	};

	return (
		<div className="relative ml-20 w-[calc(100%-5rem)] bg-[#0f0f0f] text-white min-h-screen">
			{/* Banner */}
			<div className="relative">
				<img
					src={bannerUrl}
					alt="Banner"
					className="w-full h-60 md:h-72 lg:h-80 object-cover"
				/>

				<button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
					<label htmlFor="banner-upload" className="cursor-pointer">
						<FaCamera size={24} />
					</label>

					<input
						type="file"
						id="banner-upload"
						accept="image/*"
						className="hidden"
						onChange={handleBannerChange}
					/>
				</button>
			</div>

			{/* Profile + Info */}
			<div className="relative flex flex-col md:flex-row items-center md:items-start px-4 md:px-8 -mt-16 md:-mt-20">
				<div className="relative">
					<img
						src={profileUrl}
						alt="Profile"
						className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-[#0f0f0f]"
					/>

					<label
						htmlFor="profile-upload"
						className="absolute bottom-1 right-1 bg-black/60 p-2 rounded-full cursor-pointer hover:bg-black/80 transition"
					>
						<FaCamera size={18} />
						<input
							id="profile-upload"
							type="file"
							accept="image/*"
							className="hidden"
							onChange={handleProfileChange}
						/>
					</label>
				</div>

				<div className="mt-4 lg:mt-20 md:mt-20 md:ml-6 w-full max-w-2xl">
					<h1 className="text-2xl md:text-3xl font-bold">Suraj</h1>

					<p className="text-gray-400">1M views</p>

					<p className="mt-2 text-gray-300 text-sm md:text-base">
						This is a short description of the YouTube channel. It gives an
						overview of the content and what viewers can expect.
					</p>

					<button className="mt-4 bg-red-600 hover:bg-red-500 transition px-5 py-2 rounded-full font-semibold">
						Subscribe
					</button>
				</div>
			</div>

			{/* Tabs */}
			<div className="mt-6 px-4 md:px-8">
				<Tabs />
			</div>
		</div>
	);
};

export default Profile;

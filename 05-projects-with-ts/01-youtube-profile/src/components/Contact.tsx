import { FaTwitter, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
	const links = [
		{
			href: "https://twitter.com",
			label: "Twitter",
			icon: <FaTwitter className="h-6 w-6" />,
			color: "hover:text-blue-400",
		},
		{
			href: "https://youtube.com",
			label: "YouTube",
			icon: <FaYoutube className="h-6 w-6" />,
			color: "hover:text-red-400",
		},
		{
			href: "https://github.com/SrjAdhikari",
			label: "GitHub",
			icon: <FaGithub className="h-6 w-6" />,
			color: "hover:text-gray-400",
		},
		{
			href: "https://instagram.com",
			label: "Instagram",
			icon: <FaInstagram className="h-6 w-6" />,
			color: "hover:text-pink-400",
		},
	];

	return (
		<section className="bg-[#1a1c1e] py-12 px-4 sm:px-6 lg:px-8 text-white">
			<h2 className="text-3xl font-extrabold mb-8 text-center">Contact Me</h2>

			<div className="flex flex-wrap justify-center gap-6">
				{links.map((link) => (
					<a
						key={link.label}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						className={`flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 ${link.color}`}
					>
						{link.icon}
						<span className="text-lg">{link.label}</span>
					</a>
				))}
			</div>
		</section>
	);
};

export default Contact;

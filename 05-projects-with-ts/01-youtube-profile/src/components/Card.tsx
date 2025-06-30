interface CardProps {
	title: string;
	description: string;
	image: string;
}

const Card = ({ title, description, image }: CardProps) => {
	return (
		<div className="max-w-sm mx-auto bg-[#1a1c1e] rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl transition-shadow duration-300">
			<img src={image} alt={title} className="w-full h-48 object-cover" />

			<div className="p-5">
				<h2 className="text-xl font-semibold text-white mb-2">{title}</h2>

				<p className="text-gray-300 mb-4 text-sm">{description}</p>

				<a
					href={image}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block px-4 py-2 bg-red-600 text-white font-medium rounded-full hover:bg-red-500 transition-colors duration-200"
				>
					Learn More
				</a>
			</div>
		</div>
	);
};

export default Card;

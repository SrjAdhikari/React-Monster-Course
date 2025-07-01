import type { Blog } from "../shared/BlogContext";
import { useBlogs } from "../shared/useBlogs";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
	onEdit: (blog: Blog) => void;
}

const ArticleList = ({ onEdit }: ArticleListProps) => {
	const { blogs, deleteBlog } = useBlogs();

	return (
		<div className="ml-[5rem]">
			{blogs.map((blog) => (
				<ArticleCard
					key={blog.id}
					article={blog}
					onDelete={() => deleteBlog(blog.id)}
					onEdit={() => onEdit(blog)}
				/>
			))}
		</div>
	);
};

export default ArticleList;

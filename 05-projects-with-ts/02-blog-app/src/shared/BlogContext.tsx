import { createContext, useState, type PropsWithChildren } from "react";

// Define the Blog type
export interface Blog {
	id: number;
	title: string;
	description: string;
	image: string;
	time: string;
}

// Define the context value's shape
// This is what the context will provide to consumers
interface BlogContextType {
	blogs: Blog[];
	addBlog: (blog: Blog) => void;
	updateBlog: (blog: Blog) => void;
	deleteBlog: (id: number) => void;
}

// Create the BlogContext with a default value
export const BlogContext = createContext<BlogContextType | undefined>(
	undefined
);

// Create the provider component that wraps its children with context
export const BlogProvider = ({ children }: PropsWithChildren) => {
	// State to hold the array of blog posts
	const [blogs, setBlogs] = useState<Blog[]>([]);

	// Function to add a new blog post
	const addBlog = (blog: Blog) => {
		setBlogs([...blogs, blog]);
	};

	// Function to update existing blog post by id
	const updateBlog = (updateBlog: Blog) => {
		setBlogs(
			blogs.map((blog) => (blog.id === updateBlog.id ? updateBlog : blog))
		);
	};

	// Function to delete a blog post by id
	const deleteBlog = (id: number) => {
		setBlogs(blogs.filter((blog) => blog.id !== id));
	};

	return (
		// Provide the state and functions to all children components
		<BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
			{children}
		</BlogContext.Provider>
	);
};

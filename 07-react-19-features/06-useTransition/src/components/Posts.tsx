const Posts = () => {
	// Generating a large list of posts to demonstrate the useTransition hook
	const posts = Array.from({ length: 100000 }, (_, index) => ({
		id: index + 1,
		title: `Post ${index + 1}`,
		content: `This is the content for post ${index + 1}.`,
	}));

	return (
		<div className="posts">
			<h2>Posts</h2>

			<div className="posts-list">
				{posts.map((post) => (
					<div key={post.id} className="post-card">
						<h3>{post.title}</h3>
						<p>{post.content}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Posts;

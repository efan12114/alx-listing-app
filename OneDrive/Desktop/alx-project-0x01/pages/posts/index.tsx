import React, { useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal"; // Import the Modal
import { PostData, PostProps } from "@/interfaces";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts: initialPosts }) => {
  const [posts, setPosts] = useState<PostProps[]>(initialPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle adding a new post
  const handleAddPost = (newPost: PostData) => {
    // Create a temporary ID based on list length + 1
    const postWithId = { ...newPost, id: posts.length + 1 };
    // Add new post to the BEGINNING of the list
    setPosts([postWithId, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Post Content</h1>
          <button 
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            onClick={() => setIsModalOpen(true)} 
          >
            Add Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <PostCard 
                key={post.id} 
                userId={post.userId} 
                id={post.id} 
                title={post.title} 
                body={post.body} 
              />
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </div>

      {/* Conditionally render the Modal */}
      {isModalOpen && (
        <PostModal 
          onClose={() => setIsModalOpen(false)} 
          onSubmit={handleAddPost} 
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return { props: { posts } };
  } catch (error) {
    return { props: { posts: [] } };
  }
}

export default Posts;
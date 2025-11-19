import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header"; // <--- This was the missing piece!
import React from "react";
import { PostProps } from "@/interfaces";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Post Content</h1>
          <button 
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            onClick={() => console.log('Add Post clicked')} 
          >
            Add Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: PostProps) => (
            <PostCard 
              key={post.id} 
              userId={post.userId} 
              id={post.id} 
              title={post.title} 
              body={post.body} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  
  return {
    props: {
      posts,
    }
  }
}

export default Posts;
import React from "react";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
  <>
    <Header />
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p className="mt-2 text-gray-600">Welcome to the home page.</p>
    </main>
  </>
);
}

import React from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <p className="mt-2 text-gray-600">Welcome to the home page.</p>
        <Card title="Sample Card" content="This is a sample card built with TypeScript and Tailwind CSS." />
      </main>
    </>
  );
}

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";

const HomePage = () => {
  const [posts, setPosts] = useState([{ title: "Initial Post", content: "Hello, world!" }]);

  const handlePostSubmit = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <p className="mt-2 text-gray-600">Welcome to the home page.</p>
        <Card title="Sample Card" content="This is a sample card built with TypeScript and Tailwind CSS." />
        <PostModal onClose={() => {}} onSubmit={handlePostSubmit} />
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </main>
    </>
  );
};

export default HomePage;

import React from "react";
import { AppProps } from "next/app";
import Header from "@/components/layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Header />
    <Component {...pageProps} />
  </>
);
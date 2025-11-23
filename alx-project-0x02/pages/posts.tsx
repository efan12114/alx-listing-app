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
import React from "react";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
  <>
    <Header />
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Posts</h1>
      <p className="mt-2 text-gray-600">This is the posts page.</p>
    </main>
  </>
);
}

import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();
  return { props: { posts } };
}

export default function PostsPage() {
  const { posts } = getServerSideProps();

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Posts</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </>
  );
}

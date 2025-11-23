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

export default function UsersPage() {
  return (
  <>
    <Header />
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Users</h1>
      <p className="mt-2 text-gray-600">This is the users page.</p>
    </main>
  </>
);
}

import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();
  return { props: { users } };
}

export default function UsersPage() {
  const { users } = getServerSideProps();

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Users</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </>
  );
}
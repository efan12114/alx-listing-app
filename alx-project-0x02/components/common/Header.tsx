import React from "react";
import Link from "next/link";
import { ButtonProps } from "@/interfaces";

const Header: React.FC = () => (
  <header className="w-full bg-white shadow">
    <nav className="container mx-auto px-4 py-4 flex gap-6 items-center">
      <Link href="/" className="font-bold text-blue-700">Home</Link>
      <Link href="/home" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/posts" className="hover:underline">Posts</Link>
      <Link href="/users" className="hover:underline">Users</Link>
      <Button size="sm">Sign Up</Button>
    </nav>
  </header>
);

export default Header;
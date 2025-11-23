import React from "react";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
  <>
    <Header />
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-2 text-gray-600">This is the about page.</p>
    </main>
  </>
);
}

import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
  <>
    <Header />
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-2 text-gray-600">This is the about page.</p>
      <div className="mt-4 flex gap-2">
        <Button size="sm" shape="sm">Small Button</Button>
        <Button size="md">Medium Button</Button>
        <Button size="lg" shape="full">Large Full Button</Button>
      </div>
    </main>
  </>
);
}

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

export default function AboutPage() {
  return (
  <>
    <Header />
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-2 text-gray-600">This is the about page.</p>
    </main>
  </>
);
}
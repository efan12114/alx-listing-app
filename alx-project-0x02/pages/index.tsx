import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/layout/Header";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/home");
  }, []);
  return null;
}

// interfaces/index.ts
export interface CardProps {
  title: string;
  content: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  shape?: "sm" | "md" | "full";
  onClick?: () => void;
  children: React.ReactNode;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
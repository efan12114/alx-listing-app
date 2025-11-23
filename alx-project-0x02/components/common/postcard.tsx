import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body }) => (
  <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{body}</p>
  </div>
);

export default PostCard;
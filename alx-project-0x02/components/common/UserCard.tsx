import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => (
  <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <p className="text-gray-600">{email}</p>
    <p className="text-sm text-gray-500">{address.street}, {address.city}</p>
  </div>
);

export default UserCard;
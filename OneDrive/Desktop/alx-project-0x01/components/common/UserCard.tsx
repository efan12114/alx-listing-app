import React from 'react';
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {name.charAt(0)}
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-blue-500 text-sm">@{username}</p>
        </div>
      </div>

      <div className="space-y-2 text-gray-600 text-sm">
        <p>📧 {email}</p>
        <p>📞 {phone}</p>
        <p>🌐 {website}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {company.name}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
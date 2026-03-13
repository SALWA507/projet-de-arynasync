import React from "react";

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="bg-white p-3 rounded-xl shadow mt-4 flex items-center">
      <input
        type="text"
        placeholder="Rechercher un tournoi..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 outline-none"
      />
      <button className="bg-blue-500 text-white px-3 py-1 rounded-lg"></button>
    </div>
  );
}
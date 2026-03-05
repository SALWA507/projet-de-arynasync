import React from "react";

export default function SearchBar() {
  return (
    <div className="bg-white p-3 rounded-xl shadow mt-4 flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="flex-1 outline-none"
      />
      <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">
        Filter
      </button>
    </div>
  );
}
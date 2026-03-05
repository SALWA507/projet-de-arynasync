
import React from "react";

export default function StatusBadge({ status }) {
  const colors = {
    "On Going": "bg-green-500",
    Upcoming: "bg-blue-500",
    Pending: "bg-orange-500",
  };

  return (
    <span
      className={`${colors[status] || "bg-gray-400"} text-white px-2 py-1 rounded-full text-sm`}
    >
      {status}
    </span>
  );
}
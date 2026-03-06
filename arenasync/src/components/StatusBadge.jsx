
import React from "react";
function StatusBadge({ status }) {

  let colorClass = "";

  if (status === "On Going") {
    colorClass = "bg-green-500";
  } else if (status === "Upcoming") {
    colorClass = "bg-blue-500";
  } else if (status === "Pending") {
    colorClass = "bg-orange-500";
  }

  return (
    <span className={`text-white px-3 py-1 rounded-full text-sm ${colorClass}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
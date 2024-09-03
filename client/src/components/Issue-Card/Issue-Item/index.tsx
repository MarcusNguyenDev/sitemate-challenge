import React from "react";

interface IssueItemProps {
  id: number;
  title: string;
  description: string;
}

function IssueItem({ issue, key }: { key: number; issue: IssueItemProps }) {
  return (
    <div
      key={key}
      className="bg-white shadow-md rounded-lg p-6 border-gray-200 border my-2"
    >
      <h2 className="text-xl font-bold text-gray-800">{issue.title}</h2>
      <p className="text-gray-700 mt-2">{issue.description}</p>
    </div>
  );
}
export default IssueItem;

"use client";
import React from "react";
import UpdateModal from "@/components/Issue-Card/update-modal";
import DeleteModal from "@/components/Issue-Card/delete-modal";
import { useState } from "react";

interface IssueItemProps {
  id: number;
  title: string;
  description: string;
}

function IssueItem({ issue, key }: { key: number; issue: IssueItemProps }) {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border-gray-200 border my-2">
      <h2 className="text-xl font-bold text-gray-800">{issue.title}</h2>
      <p className="text-gray-700 mt-2">{issue.description}</p>
      <div>
        <button
          className={
            "py-1 px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-400"
          }
          onClick={() => {
            setEditModal(true);
          }}
        >
          Edit
        </button>
        <button
          className={
            "py-1 px-6 ml-2 mt-2 bg-blue-600 text-white rounded-xl hover:bg-blue-400"
          }
          onClick={() => {
            setDeleteModal(true);
          }}
        >
          Delete
        </button>
      </div>

      <UpdateModal open={editModal} setOpen={setEditModal} issue={issue} />
      <DeleteModal open={deleteModal} setOpen={setDeleteModal} issue={issue} />
    </div>
  );
}
export default IssueItem;

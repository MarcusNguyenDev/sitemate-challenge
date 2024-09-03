import React from "react";
import CreateModal from "./create-modal";
import { useState } from "react";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  return (
    <div className={"w-[800px]"}>
      <div className="bg-white shadow-lg rounded-lg p-6 px-4 border-gray-200 border">
        <h2 className="text-xl font-bold text-gray-800 mb-6">{title}</h2>
        <button
          className={
            "py-2 px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-400"
          }
          onClick={() => setOpenCreateModal(true)}
        >
          Create
        </button>
        {children}
      </div>

      {/*
      Modal declaration
      */}
      <CreateModal open={openCreateModal} setOpen={setOpenCreateModal} />
    </div>
  );
}

export default Card;

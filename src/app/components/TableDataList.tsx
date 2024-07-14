// components/TableDataList.tsx

import React, { useState } from "react";
import { TableData } from "../models/TableData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import TableDataAdd from "./TableDataAdd"; // Separate component for editing

interface TableDataListProps {
  data: TableData[];
  onUpdate: (updatedData: TableData) => void; // Add an update handler if needed
  onDelete: (id: number) => void; // Add a delete handler
}

const TableDataList: React.FC<TableDataListProps> = ({ data, onUpdate }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<TableData | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<TableData | null>(null);

  const handleEditClick = (item: TableData) => {
    setEditData(item);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (item: TableData) => {
    setDeleteConfirm(item);
  };

  const handleDeleteConfirm = async () => {
    const formData =  new FormData();
    formData.append("id", deleteConfirm.id);

    if (deleteConfirm) {
      try {
        const response = await fetch(`/api/delete-table-data`, {
          method: "DELETE",
          body: formData
        });

        if (response.ok) {
          setDeleteConfirm(null);
        } else {
          console.error("Failed to delete data:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to delete data:", error);
      }
    }
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setEditData(null);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">TableData List</h2>
      <ul className="divide-y divide-gray-700 overflow-auto" style={{height:720}}>
        {data.map((item) => (
          <li key={item.id} className="py-4">
            <div className="flex items-center justify-between">
              <div className="mt-2 w-full grid grid-cols-7 auto-cols-min">
                <div className="text-lg font-semibold text-white">
                  {item.tableName}
                </div>
                <div className="text-gray-300">{item.name}</div>
                <div className="text-gray-300">{item.title}</div>
                <div className="text-gray-300">{item.tableName}</div>
                <div className="text-gray-300 overflow-hidden">
                  <img src={item.photo} style={{ width: 32 }} alt="Item" />
                </div>
                <div className="text-gray-300">
                  <img src={`../flags/${item.flag}.png`} style={{ width: 32 }} alt="Flag" />
                </div>
                <div className="flex text-white">
                  <EditIcon className="cursor-pointer" onClick={() => handleEditClick(item)} />
                  <DeleteIcon sx={{ color: red[400] }} className="cursor-pointer ms-3" onClick={() => handleDeleteClick(item)} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {deleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-white">Are you sure you want to delete this item?</p>
            <div className="flex justify-end mt-4">
                <button
                className="px-4 py-2 me-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                onClick={() => setDeleteConfirm(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                onClick={handleDeleteConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && editData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <TableDataAdd
              initialData={editData}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TableDataList;

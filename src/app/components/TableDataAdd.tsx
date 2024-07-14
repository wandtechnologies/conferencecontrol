// components/TableDataAdd.tsx

import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { TableData } from "../models/TableData";
import $ from "jquery";
import "select2";
import { countryOptions } from "../utilities/countryList";
import "select2/dist/css/select2.min.css";

interface TableDataAddProps {
  initialData?: TableData; // Optional initial data for editing
  onClose: () => void; // Handler to close the modal
}

const TableDataAdd: React.FC<TableDataAddProps> = ({
  initialData,
  onClose,
}) => {
  const [id, setId] = useState(0);
  const [tableName, setTableName] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null); // State to hold the selected photo file
  const [flag, setFlag] = useState("");

  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (initialData) {
      setId(initialData.id);
      setTableName(initialData.tableName);
      setName(initialData.name);
      setTitle(initialData.title);
      setFlag(initialData.flag); // Set initial flag value
    }

    // Initialize Select2
    const selectElement = $(selectRef.current!);
    selectElement.select2({
      data: countryOptions.map((country) => ({
        id: country.value,
        text: country.label,
      })),
      templateResult: (country: any) => {
        if (!country.id) return country.text;
        return $(
          `<span class="flex items-center text-white"><span><img src="../flags/${country.id.toLowerCase()}.png" class="me-2" style="width:24px"/></span>${country.text}</span>`
        );
      },
      templateSelection: (country: any) => {
        if (!country.id) return country.text;
        return $(
          `<span class="flex items-center text-white"><span><img src="../flags/${country.id.toLowerCase()}.png" class="me-2" style="width:24px"/></span>${country.text}</span>`
        );
      },
      escapeMarkup: (markup: string) => markup,
    });

    // Set initial value for Select2
    if (initialData && initialData.flag) {
      selectElement.val(initialData.flag).trigger("change");
    }

    // Handle change event
    selectElement.on("change", (e) => {
      const selectedFlag = $(e.target).val();
      setFlag(selectedFlag as string);
    });

    // Cleanup
    return () => {
      selectElement.select2("destroy");
    };
  }, [initialData]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setPhotoFile(files[0]);
    }
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("id", String(id));
    formData.append("tableName", tableName);
    formData.append("name", name);
    formData.append("title", title);
    if (photoFile) {
      formData.append("photo", photoFile);
    }
    formData.append("flag", flag);

    try {
      let response;
      if (initialData) {
        // Update existing data
        response = await fetch(`/api/update-table-data`, {
          method: "PUT",
          body: formData,
        });
      } else {
        // Add new data
        response = await fetch("/api/add-table-data", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          setId(0); // Reset numeric fields to initial state
          setTableName("");
          setName("");
          setTitle("");
          setPhotoFile(null); // Reset photo file state
          setFlag("");
        }
      }

      if (response.ok) {
        onClose();
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg" style={{ width: 560 }}>
      <h2 className="text-2xl font-bold text-white mb-4">
        {initialData ? "Edit TableData" : "Add TableData"}
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="space-y-4"
      >
        <input type="hidden" value={id} name="id" />
        <div className="flex items-center space-x-4">
          <div className="w-1/4">
            <label className="text-sm font-medium text-white">Table Name:</label>
          </div>
          <div className="w-3/4">
            <input
              type="text"
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
              required
              className="px-3 py-2 w-full bg-gray-700 text-white rounded"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-1/4">
            <label className="text-sm font-medium text-white">Name:</label>
          </div>
          <div className="w-3/4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="px-3 py-2 w-full bg-gray-700 text-white rounded"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-1/4">
            <label className="text-sm font-medium text-white">Title:</label>
          </div>
          <div className="w-3/4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="px-3 py-2 w-full bg-gray-700 text-white rounded"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-1/4">
            <label className="text-sm font-medium text-white">Photo:</label>
          </div>
          <div className="w-3/4">
            <input
              type="file"
              onChange={handleFileChange}
              className="bg-gray-700 text-white rounded"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-1/4">
            <label className="text-sm font-medium text-white">Flag:</label>
          </div>
          <div className="w-3/4">
            <select
              ref={selectRef}
              className="px-3 py-2 w-full bg-gray-700 text-white rounded"
            ></select>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            {initialData ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TableDataAdd;

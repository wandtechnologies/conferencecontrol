// pages/tableData/index.tsx
"use client"
import React, { useState, useEffect } from 'react';
import TableDataList from '../../components/TableDataList';
import TableDataAdd from '../../components/TableDataAdd';
import { TableData } from '../../models/TableData';

const TableDataPage: React.FC = () => {
  const [data, setData] = useState<TableData[]>([]);
  const [tableData, setTableData] = useState<TableData[]>([]);

  const handleAdd = (newData: TableData) => {
    setData([...data, newData]);
  };

  useEffect(() => {
    const fetchDataTable = () => {
        fetch('/api/table-data')
        .then(response => {
          if (!response.ok) {
            throw new Error('Response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setTableData(data.formattedData);
        })
        .catch(error => {
          console.error('Error fetching table data:', error);
        });
    };

    // Initial update
    fetchDataTable();

    // Update every second
    const intervalId = setInterval(fetchDataTable, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-start h-screen">
      <div className="container mx-auto p-8 px-0 flex justify-between w-full">
        <div className="w-1/2 pr-4">
          <TableDataAdd onAdd={handleAdd} />
        </div>
        <div className="w-1/2">
          <TableDataList data={tableData} />
        </div>
      </div>
    </div>
  );
};

export default TableDataPage;

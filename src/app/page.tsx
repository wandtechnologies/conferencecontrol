"use client"
import React, { useEffect, useState } from 'react';
import Tables from './components/Tables';

interface TableData {
  id: number;
  tableName: string;
  name: string;
  photo: string;
  title: string;
  flag: string;
}

interface SelectedTableData {
  tableName: string;
  timestamp: string; // Change to string if timestamp is stored as ISO string
  selectedTime: number;
  name: string;
  photo: string;
  title: string;
  flag: string;
}

export default function Home() {
  const [selectedTable, setSelectedTable] = useState<SelectedTableData | null>(null);
  const [remainingTime, setRemainingTime] = useState<number>(0); // Initialize with 0
  const [tableData, setTableData] = useState<TableData[]>([]);

  useEffect(() => {
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

    const updateSelectedTable = () => {
      try {
        const savedTable = localStorage.getItem('selectedTable');
        if (savedTable) {
          const parsedTable: SelectedTableData = JSON.parse(savedTable);
          setSelectedTable(parsedTable);
          const currentTime = new Date();
          const timeStamp = new Date(parsedTable.timestamp);
          const endTime = new Date(timeStamp.getTime() + parsedTable.selectedTime * 60000); // Convert minutes to milliseconds
          
          let initialRemainingTime = endTime.getTime() - currentTime.getTime();
          if (initialRemainingTime < 0) {
            initialRemainingTime = 0;
          }
          
          setRemainingTime(initialRemainingTime);
        } else {
          // Handle case where no selected table is found
          setSelectedTable(null);
          setRemainingTime(0);
        }
      } catch (error) {
        console.error('Error parsing or calculating remaining time:', error);
        // Handle error as needed
      }
    };

    // Initial update
    updateSelectedTable();

    // Update every second
    const intervalId = setInterval(updateSelectedTable, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (milliseconds: number): string => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    
    // Ensure minutes and seconds are always two digits
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    return `${formattedMinutes} min ${formattedSeconds} sec`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 py-10">
      <div className="flex w-full">
        <div className="w-1/4 p-4 flex items-center justify-center">
          <div className="w-80 h-80 border shadow-lg rounded-lg items-center flex px-4 overflow-hidden rounded">
            <img src="logo-no-background.png" alt="Random"  className='w-full'/>
          </div>
        </div>
        <div className="w-3/4 p-4">
          <div className="w-full rounded-lg shadow-md bg-gray-300 p-6 py-12 justify-center items-center">
            <h1 className="text-4xl text-center">Uluslararası Sipopo Konferansı</h1>
          </div>
          <div className="w-full mt-5 text-white flex rounded-lg shadow-md border p-6 py-12 justify-center items-center">
            <div className="flex w-1/4 text-lg items-center">
              Selected Table: <b className='ms-2 p-3 rounded-xl shadow-lg bg-green-500'>{selectedTable ? selectedTable.tableName : "None"}</b>
            </div>
            <div className="flex w-1/4 text-lg items-center">
              Remaining Time: <b className='ms-2 p-3 rounded-xl shadow-lg bg-green-500'>{remainingTime !== null ? formatTime(remainingTime) : "N/A"}</b>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-auto pt-6">
        <Tables data={tableData} />
      </div>
    </main>
  );
}

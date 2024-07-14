"use client"
import React, { useState, useEffect } from 'react';

interface SelectedTableData {
  tableName: string;
  timestamp: string; // Adjust based on your data type
  selectedTime: number;
  name: string;
  photo: string;
  title: string;
  flag: string;
}

const Page: React.FC = () => {
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const [tableData, setTableData] = useState<SelectedTableData | null>(null);

  useEffect(() => {
    const updateRemainingTime = () => {
      try {
        const savedTable = localStorage.getItem('selectedTable');
        if (savedTable) {
          const parsedTable = JSON.parse(savedTable);

          setTableData(parsedTable);

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
          setRemainingTime(0);
        }
      } catch (error) {
        console.error('Error parsing or calculating remaining time:', error);
        // Handle error as needed
      }
    };

    // Initial update
    updateRemainingTime();

    // Update every second
    const intervalId = setInterval(updateRemainingTime, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (milliseconds: number): string => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    
    // Ensure minutes and seconds are always two digits
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 py-10">
      <div className="absolute w-3/4 h-80 left-0 flex justify-end rounded-r-3xl p-5 pe-7" style={{ zIndex: -1, background: "rgb(79,94,211)" }}>
        <h1 className="text-4xl text-white">Sipopo Uluslararası Conferansı</h1>
      </div>
      <div className="absolute right-4 rounded p-4 border items-center flex" style={{width: "256px", height:"256px"}}>
        <img src="logo-no-background.png" alt="Random"  className='w-full'/>
      </div>
      <div className="text-white flex w-full z-10 pt-6" style={{ fontSize: "10rem" }}>
        <h1>{remainingTime !== null ? formatTime(remainingTime) : "N/A"}</h1>
      </div>
      <div className="flex w-full justify-center items-center">
        <div className="pe-10">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src={`flags/${tableData?.flag}.png`} style={{ height: 450 }} alt="Flag"></img>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-lg shadow-lg relative" style={{ width: 500, height: 575 }}>
            <img src={tableData?.photo} alt="Placeholder"></img>
            <div className="flex absolute flex-col w-full bottom-0 p-5 pt-2" style={{ height: 150, backgroundColor: "#2b2b2b95", backdropFilter: "blur(25px)" }}>
              <div className="flex w-full text-white" style={{ fontSize: "3rem" }}>
                <h1>{tableData?.name}</h1>
              </div>
              <div className="flex w-full text-white" style={{ fontSize: "1.7rem" }}>
                <h1>{tableData?.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;

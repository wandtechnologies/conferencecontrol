"use client"
import React, { useState } from 'react';

interface TableData {
  id: number;
  tableName: string;
  name: string;
  photo: string;
  title: string;
  flag: string;
}

interface TablesProps {
  data: TableData[];
}

const Tables: React.FC<TablesProps> = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState<TableData | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [numberValue, setNumberValue] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<number | null>(0);
  const [showConfirmPopup, setShowConfirmPopup] = useState<boolean>(false);
  const [warning, setWarning] = useState<string>('');
  const [shake, setShake] = useState<boolean>(false);

  const handleItemClick = (item: TableData) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
    setNumberValue(0);
    setSelectedTime(null);
    setWarning('');
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setNumberValue(value);
    setSelectedTime(value);
    setWarning('');
  };

  const handleTimeValue = (time: number) => {
    setSelectedTime(time);
    setNumberValue(0);
    setWarning('');
  };

  const closeConfirmPopup = () => {
    setShowConfirmPopup(false);
    setSelectedItem(null);
    setNumberValue(0);
    setSelectedTime(null);
  };

  const handleConfirmClick = () => {
    if (selectedTime === 0 || selectedTime === null) {
      setWarning('Please select a valid time.');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      setShowConfirmPopup(true);
    }
  };

  const handleFinalConfirmClick = () => {
    if (selectedItem && selectedTime) {
      const entry = {
        tableName: selectedItem.tableName,
        name: selectedItem.name,
        title: selectedItem.title,
        photo: selectedItem.photo,
        flag: selectedItem.flag,
        timestamp: new Date().toISOString(),
        selectedTime
      };
      localStorage.setItem('selectedTable', JSON.stringify(entry));
      closeConfirmPopup();
      window.location.reload()
    }
  };

  return (
    <>
    <div className='grid w-full grid-cols-10 gap-y-1 px-14'>
      {data.map(item =>(
        <div className="flex p-2 py-0" key={item.id}>
          <div className="rounded-lg tableButton justify-center items-center text-center flex flex-auto text-white" onClick={() => handleItemClick(item)}>
            {item.tableName}
          </div>
        </div>
      ))}
    </div>
    {showPopup && selectedItem && (
      <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ${shake ? 'shake' : ''}`} style={{backdropFilter:"blur(6px)"}}>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Select Time for <b style={{fontSize:"1.7rem"}} className="text-blue-900">{selectedItem.tableName}</b></h2>
          <div className={`text-md bg-red-500 m-4 text-white rounded-xl p-3 ${warning ? '' : 'hidden'}`}>
            Please select a valid time.
          </div>
          <div className="flex justify-center pt-2">
            {[5, 10, 15, 20].map(time => (
                <button
                  key={time}
                  className={`me-4 px-4 py-2 rounded text-white ${selectedTime === time ? 'active' : ''} timeButton`}
                  onClick={() => handleTimeValue(time)}
                >
                  {time} min
                </button>
              ))}
          </div>
          <div className="flex justify-center pt-4 box-border px-5">
            <label className="block text-sm font-medium text-gray-700">Custom Amount (min):</label>
              <input
                type="number"
                value={numberValue}
                onChange={handleNumberChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
          </div>
          <div className="flex justify-between mt-7">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={closePopup}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-green-800 text-white rounded"
              onClick={handleConfirmClick}
            >
              Confirm
            </button>
          </div>
    
        </div>
      </div>
    )}

    {showConfirmPopup && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70" style={{backdropFilter:"blur(6px)"}}>
          <div className="bg-red-500  mb-40 text-white p-6 bg-opacity-50 rounded-lg shadow-lg" style={{backdropFilter:"blur(2px)"}}>
            <h2 className="text-4xl font-bold mb-4">Please Confirm Selection!</h2>
            <hr></hr>
            <div className="flex flex-col p-4">
              <div className="flex p-4 text-2xl border-b-2 rounded-md">
                <p>Table : <b className="text-yellow-300">{selectedItem.tableName}</b></p>
              </div>
              <div className="flex text-2xl mt-4 p-4 border-b-2 rounded-md">
                <p>Time  : <b className="text-yellow-300">{selectedTime} min</b></p>  
              </div>
            </div>
            <div className="flex justify-between mt-7">
              <button
                className="px-4 py-2 bg-red-500 border text-white rounded"
                onClick={closeConfirmPopup}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-800 text-white rounded"
                onClick={handleFinalConfirmClick}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
 </>
  );
};

export default Tables;

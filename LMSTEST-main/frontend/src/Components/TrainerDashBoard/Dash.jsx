import React from 'react';

const Dash = () => {
  return (
    <div className="dashboard-content flex flex-col">
      <h1>Dashboard</h1>
      <div className="dashboard-section flex">
        <h2>Learning Resources</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
          View Learning Resources
        </button>
      </div>
      <div className="dashboard-section flex">
        <h2>Attendance Report</h2>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
          View Attendance Report
        </button>
      </div>
    </div>
  );
};

export default Dash;

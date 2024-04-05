import React from 'react';

const BatchDetails = () => {
  // Replace with actual batch data (e.g., retrieved from an API or state)
  const batch = {
    name: 'Sample Batch',
    startDate: '2024-04-01',
    endDate: '2024-04-30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    size: 25, // Total batch size
    learningPlanLink: '/learning-plan', // Replace with the actual route
    employees: [
      { id: 1, name: 'John Doe', role: 'Developer' },
      { id: 2, name: 'Jane Smith', role: 'Designer' },
      // Add more employees as needed
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">{batch.name}</h1>
      <p className="text-gray-600 mb-2">
        Start Date: {batch.startDate} | End Date: {batch.endDate}
      </p>
      <p className="mb-4">{batch.description}</p>

      <div className="mb-6">
        <p className="text-gray-600 mb-2">Batch Size:</p>
        <p className="font-semibold">{batch.size} students</p>
      </div>

      <a
        href={batch.learningPlanLink}
        className="text-blue-500 hover:underline mb-4 block"
      >
        View Learning Plan
      </a>

      <h2 className="text-lg font-semibold mb-2">Employees</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300">Name</th>
              <th className="py-2 px-4 border-b border-gray-300">Role</th>
            </tr>
          </thead>
          <tbody>
            {batch.employees.map((employee) => (
              <tr key={employee.id}>
                <td className="py-2 px-4 border-b border-gray-300">
                  {employee.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {employee.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BatchDetails;

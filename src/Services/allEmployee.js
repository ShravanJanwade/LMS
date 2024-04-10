// traineesAPI.js

export async function fetchEmployees(batchId) {
    try {
      const response = await fetch(`http://localhost:1212/users/allUsers/${batchId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch trainees");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching trainees:", error);
      return null;
    }
  }
  
  // batchUsers.js

export async function sendSelectedUsers(selectedUsers, batchId) {
  console.log({userIds:selectedUsers})
  try {
    const response = await fetch(`http://localhost:1212/batches/${batchId}/users`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userIds: selectedUsers })
    });
    if (!response.ok) {
      throw new Error('Failed to add users to batch');
    }
    // Handle response if needed
  } catch (error) {
    console.error('Error adding users to batch:', error);
    throw error; // Propagate error to caller if needed
  }
}

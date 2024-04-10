// traineesAPI.js

export async function fetchTrainees(batchId) {
    try {
      const response = await fetch(`http://localhost:1212/batches/${batchId}/users`);
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
  
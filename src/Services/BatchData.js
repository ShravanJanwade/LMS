export async function fetchBatchData() {
  try {
    // Fetch data from the endpoint
    const response = await fetch("http://172.18.4.243:8078/batch");

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch batch data");
    }

    // Parse the JSON data
    const data = await response.json();

    // Get today's date
    const today = new Date();

    // Iterate over each batch object and update the online property
    const updatedData = data.map((batch) => {
      const startDate = new Date(batch.startDate);
      const endDate = new Date(batch.endDate);
      const online = startDate <= today && today <= endDate;
      return { ...batch, online };
    });

    // Return the updated data
    return updatedData;
  } catch (error) {
    // Handle errors
    console.error("Error fetching batch data:", error);
    return [];
  }
}
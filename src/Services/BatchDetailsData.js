export async function fetchBatchDetails(batchId) {
  try {
    const response = await fetch(`http://localhost:1212/batches/${batchId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch batch details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching batch details:", error);
    return null;
  }
}

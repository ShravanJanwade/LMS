export async function fetchProgressData() {
  try {
    const response = await fetch(`http://localhost:1111/progress/batchwise`);
    if (!response.ok) {
      throw new Error("Failed to fetch progress");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching progress:", error);
    return null;
  }
}

export async function fetchBatchProgress(batchId) {
  try {
    const response = await fetch(`http://localhost:1111/progress/batch/${batchId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch progress");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching progress:", error);
    return null;
  }
}


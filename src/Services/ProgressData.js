import { ProgressIp } from "./IpAddress";
export async function fetchProgressData() {
  try {
    const response = await fetch(`${ProgressIp}/batch-progress`);
    if (!response.ok) {
      // throw new Error("Failed to fetch progress");
      return [];
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching progress:", error);
    return [];
  }
}

export async function fetchBatchProgress(batchId) {
  try {
    const response = await fetch(`${ProgressIp}/batch-progress/${batchId}`);
    if (!response.ok) {
      // throw new Error("Failed to fetch progress");
      return [];
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching progress:", error);
    return [];
  }
}

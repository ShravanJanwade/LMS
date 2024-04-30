import {AttendanceIp,myHeaders} from './IpAddress'
export async function getBatches() {
    try {
      const response = await fetch(`${AttendanceIp}/batch`,{
        headers:myHeaders,
      });
      if (!response.ok) {
        throw new Error("Failed to fetch batch details");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching batch details:", error);
      return null;
    }
  }
  export async function getCourses(batchId) {
    try {
      const response = await fetch(`${AttendanceIp}/batch/${batchId}/courses`,{
        headers:myHeaders,
      });
      if (!response.ok) {
        throw new Error("Failed to fetch batch details");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching batch details:", error);
      return null;
    }
  }
  
  
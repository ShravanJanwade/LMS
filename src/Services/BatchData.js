// export const batchData = [
//     {
//       id: 1,
//       name: "Batch 100",
//       description:
//         "Batch Description-Because itapos;s about motivating the doers.Because Iapos;m here to follow my dreams and inspire others.",
//       online: true,
//       date: "23/04/18",
//     },
//     {
//       id: 2,
//       name: "Batch 101",
//       description:
//         "Batch Description-Because itapos;s about motivating the doers.Because Iapos;m here to follow my dreams and inspire others.",
//       online: false,
//       date: "23/05/19",
//     },
//     {
//       id: 3,
//       name: "Batch 102",
//       description:
//         "Batch Description-Because itapos;s about motivating the doers.Because Iapos;m here to follow my dreams and inspire others.",
//       online: false,
//       date: "19/09/17",
//     },
//     {
//       id: 4,
//       name: "Batch 103",
//       description:
//         "Batch Description-Because itapos;s about motivating the doers.Because Iapos;m here to follow my dreams and inspire others.",
//       online: true,
//       date: "24/12/08",
//     },
//     {
//       id: 5,
//       name: "Batch 104",
//       description:
//         "Batch Description-Because itapos;s about motivating the doers.Because Iapos;m here to follow my dreams and inspire others.",
//       online: false,
//       date: "04/10/21",
//     },
//   ];

// Define an asynchronous function to fetch batch data
// Import any necessary libraries if needed

// Function to fetch batch data from the endpoint
export async function fetchBatchData() {
  try {
    // Fetch data from the endpoint
    const response = await fetch("http://localhost:1212/batches");

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

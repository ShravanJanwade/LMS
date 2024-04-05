import { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";


function CreateBatch() {
  const [batchName, setBatchName] = useState("");
  const [batchDescription, setBatchDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [batchSize, setBatchSize] = useState("");
  const [duration, setDuration] = useState("");

  // Calculate duration when start or end date changes
  const handleDateChange = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // Calculate the difference in time
    const diffInTime = end.getTime() - start.getTime();
  
    // Calculate the difference in days
    let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24)) + 1; // Add 1 to include both start and end dates
  
    // Check if start date and end date are the same
    if (diffInDays < 1) {
      diffInDays = 0; // Set duration to 0 days
    }
  
    // Update duration
    setDuration(`${diffInDays} days`);
  };
  
  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;

    // Update start date
    setStartDate(newStartDate);

    // Update duration
    handleDateChange();
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;

    // Update end date
    setEndDate(newEndDate);

    // Update duration
    handleDateChange();
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save batch details to your backend or perform other actions
    console.log("Batch details:", {
      batchName,
      batchDescription,
      startDate,
      endDate,
      batchSize,
      duration,
    });
  };

  return (
    <div className="flex justify-center items-center h-full mt-10">
      <Card color="lightBlue" shadow="regular" className="w-full max-w-lg p-8">
        <Typography variant="h4" color="blueGray" className="mb-6">
          Batch Creation
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="batchName">Batch Name:</label>
            <Input
              id="batchName"
              size="lg"
              placeholder="Batch Name"
              value={batchName}
              onChange={(e) => setBatchName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="batchDescription">Batch Description:</label>
            <Input
              id="batchDescription"
              size="lg"
              placeholder="Batch Description"
              value={batchDescription}
              onChange={(e) => setBatchDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="startDate">Start Date:</label>
            <Input
              id="startDate"
              type="date"
              size="lg"
              placeholder="Start Date"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="endDate">End Date:</label>
            <Input
              type="date"
              size="lg"
              placeholder="End Date"
              value={endDate}
              onChange={handleEndDateChange}
              min={startDate} // Set the minimum selectable date as the start date
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="batchSize">Batch Size:</label>
            <Input
              id="batchSize"
              size="lg"
              placeholder="Batch Size"
              value={batchSize}
              onChange={(e) => setBatchSize(e.target.value)}
            />
          </div>
          <Typography variant="body" color="gray">
            Duration: {duration}
          </Typography>
          <Button type="submit" color="lightBlue" size="lg" ripple="light">
            Create Batch
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default CreateBatch;

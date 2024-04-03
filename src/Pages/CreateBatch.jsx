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
    const diffInMilliseconds = end - start;
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    setDuration(`${diffInDays} days`);
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
          <Input
            size="lg"
            placeholder="Batch Name"
            value={batchName}
            onChange={(e) => setBatchName(e.target.value)}
          />
          <Input
            size="lg"
            placeholder="Batch Description"
            value={batchDescription}
            onChange={(e) => setBatchDescription(e.target.value)}
          />
          <Input
            type="date"
            size="lg"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              handleDateChange();
            }}
          />
          <Input
            type="date"
            size="lg"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              handleDateChange();
            }}
          />
          <Input
            size="lg"
            placeholder="Batch Size"
            value={batchSize}
            onChange={(e) => setBatchSize(e.target.value)}
          />
          <Typography variant="body" color="gray">
            Duration: {duration}
          </Typography>
          <Link to="/" size="lg width-full">
            <Button type="submit" color="lightBlue" size="lg" ripple="light">
              Create Batch
            </Button>
          </Link>
        </form>
      </Card>
    </div>
  );
}

export default CreateBatch;

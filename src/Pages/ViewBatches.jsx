import BatchHeader from "../Components/BatchHeader";
import BatchDetailsCards from "../Components/BatchDetailsCards";
import BatchDetailsTable from "../Components/BatchDetailsTable";
import { useState } from "react";

const batchData = [
  {
    id: 1,
    name: "Batch 100",
    description:
      "Batch Description-Because itapos;s about motivating the doers.Because Iapos;m here to follow my dreams and inspire others.",
    online: true,
    date: "23/04/18",
  },
  {
    id: 2,
    name: "Batch 101",
    description:
      "Batch Description-Because itapos;s about motivating the doers.Because Iapos;m here to follow my dreams and inspire others.",
    online: false,
    date: "23/05/19",
  },
  {
    id: 3,
    name: "Batch 102",
    description:
      "Batch Description-Because itapos;s about motivating the doers.Because Iapos;m here to follow my dreams and inspire others.",
    online: false,
    date: "19/09/17",
  },
  {
    id: 4,
    name: "Batch 103",
    description:
      "Batch Description-Because itapos;s about motivating the doers.Because Iapos;m here to follow my dreams and inspire others.",
    online: true,
    date: "24/12/08",
  },
  {
    id: 5,
    name: "Batch 104",
    description:
      "Batch Description-Because itapos;s about motivating the doers.Because Iapos;m here to follow my dreams and inspire others.",
    online: false,
    date: "04/10/21",
  },
  {
    id: 6,
    name: "Batch 105",
    description:
      "Batch Description-Because itapos;s about motivating the doers.Because Iapos;m here to follow my dreams and inspire others.",
    online: false,
    date: "04/10/21",
  },  {
    id: 7,
    name: "Batch 106",
    description:
      "Batch Description-Because itapos;s about motivating the doers.Because Iapos;m here to follow my dreams and inspire others.",
    online: false,
    date: "04/10/21",
  },
];
const progressData = [
  {
    batchId: 1,
    progressValue: 50,
  },
  {
    batchId: 2,
    progressValue: 90,
  },
  {
    batchId: 3,
    progressValue: 30,
  },
  {
    batchId: 4,
    progressValue: 70,
  },
  {
    batchId: 5,
    progressValue: 10,
  },
  {
    batchId: 6,
    progressValue: 70,
  }, {
    batchId: 7,
    progressValue: 100,
  },
];

const ViewBatches = () => {
  const [card, setCard] = useState(true);
  const [status, setStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const toggleHandler = () => {
    setCard((prev) => !prev);
  };
  const statusHandler = (value) => {
    setStatus(value);
  };
  const searchHandler = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  return (
    <div>
      <BatchHeader
        toggleHandler={toggleHandler}
        card={card}
        onStatusChange={statusHandler}
        searchHandler={searchHandler}
      />
      {card ? (
        <BatchDetailsCards
          status={status}
          searchQuery={searchQuery}
          batchData={batchData}
          progressData={progressData}
        />
      ) : (
        <BatchDetailsTable
          status={status}
          searchQuery={searchQuery}
          batchData={batchData}
          progressData={progressData}
        />
      )}
    </div>
  );
};
export default ViewBatches;

import BatchHeader from "../Components/BatchHeader";
import BatchDetailsCards from "../Components/BatchDetailsCards";
import BatchDetailsTable from "../Components/BatchDetailsTable";
import { useState } from "react";
import { batchData } from "../Services/BatchData";
import { progressData } from "../Services/ProgressData";
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

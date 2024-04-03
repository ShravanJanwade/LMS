import BatchHeader from "../Components/BatchHeader";
import BatchDetailsCards from "./BatchDetailsCards";
import BatchDetailsTable from "./BatchDetailsTable";
import { useState } from "react";

const ViewBatches = () => {
  const [card, setCard] = useState(true);
  const [status, setStatus] = useState("All");
  const toggleHandler = () => {
    setCard((prev) => !prev);
  };
  const statusHandler = (value) => {
    setStatus(value);
  };

  return (
    <div>
      <BatchHeader
        toggleHandler={toggleHandler}
        card={card}
        onStatusChange={statusHandler}
      />
      {card ? (
        <BatchDetailsCards
          card={card}
          toggleHandler={toggleHandler}
          status={status}
        />
      ) : (
        <BatchDetailsTable
          card={card}
          toggleHandler={toggleHandler}
          status={status}
        />
      )}
    </div>
  );
};
export default ViewBatches;

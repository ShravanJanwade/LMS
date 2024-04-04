import BatchHeader from "../Components/BatchHeader";
import BatchDetailsCards from "./BatchDetailsCards";
import BatchDetailsTable from "./BatchDetailsTable";
import { useState } from "react";

const ViewBatches = () => {
  const [card, setCard] = useState(true);
  const [status, setStatus] = useState("All");
  const [searchQuery,setSearchQuery]=useState("");
  const toggleHandler = () => {
    setCard((prev) => !prev);
  };
  const statusHandler = (value) => {
    setStatus(value);
  };
  const searchHandler=(e)=>{
    setSearchQuery(e.target.value.toLowerCase());
    console.log(searchQuery)
  }
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
          card={card}
          toggleHandler={toggleHandler}
          status={status}
          searchQuery={searchQuery}
        />
      ) : (
        <BatchDetailsTable
          card={card}
          toggleHandler={toggleHandler}
          status={status}
          searchQuery={searchQuery}
        />
      )}
    </div>
  );
};
export default ViewBatches;

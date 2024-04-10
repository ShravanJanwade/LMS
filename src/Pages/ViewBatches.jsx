import BatchHeader from "../Components/BatchHeader";
import BatchDetailsCards from "../Components/BatchDetailsCards";
import BatchDetailsTable from "../Components/BatchDetailsTable";
import { useState, useEffect } from "react";
import { fetchBatchData } from "../Services/BatchData";
import { fetchProgressData } from "../Services/ProgressData";
const ViewBatches = () => {
  const [card, setCard] = useState(true);
  const [status, setStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [progressData,setProgressData]=useState([]);
  const toggleHandler = () => {
    setCard((prev) => !prev);
  };
  const statusHandler = (value) => {
    setStatus(value);
  };
  const searchHandler = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  const [batchData, setBatchData] = useState([]);

  // Function to fetch batch data when the component mounts
  useEffect(() => {
    async function fetchData() {
      const data = await fetchBatchData();
      const  progress=await fetchProgressData();
      setProgressData(progress);
      setBatchData(data);
    }
    fetchData();
  }, [batchData,progressData]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchProgressData();
      setProgressData(data);
    }
    fetchData();
  }, [progressData]);


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

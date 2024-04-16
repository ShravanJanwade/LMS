import React from "react";
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
  const [progressData, setProgressData] = useState([]);
  const [change, setChange] = useState(false);
  const [batchData, setBatchData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false); // Track if data has been fetched
  const toggleHandler = () => {
    setCard((prev) => !prev);
  };

  const statusHandler = (value) => {
    setStatus(value);
  };

  const searchHandler = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    async function fetchData() {
      if (!dataFetched) {
        // Check if data has already been fetched
        const batch = await fetchBatchData();
        const progress = await fetchProgressData();
        setBatchData(batch);
        setProgressData(progress);
        setDataFetched(true); // Mark data as fetched
      }
    }
    fetchData();
  }, [dataFetched]); // Trigger the effect only when dataFetched changes

  const changeCardLayout = () => {
    setChange((prev) => !prev);
  };
  useEffect(() => {
    return () => {
      setDataFetched(false); // Reset dataFetched when component unmounts
    };
  });

  return (
    <div>
      <BatchHeader
        toggleHandler={toggleHandler}
        card={card}
        onStatusChange={statusHandler}
        searchHandler={searchHandler}
        changeCardLayout={changeCardLayout}
      />
      {card ? (
        <BatchDetailsCards
          status={status}
          searchQuery={searchQuery}
          batchData={batchData}
          progressData={progressData}
          change={change}
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

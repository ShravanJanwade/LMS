import { CourseCard } from "./CourseCard";
import PropTypes from "prop-types";

const BatchDetailsCards = ({
  status,
  searchQuery,
  batchData,
  progressData,
}) => {
  let filteredTable = batchData;

  // Filter table data based on status
  if (status === "Active") {
    filteredTable = batchData.filter(({ online }) => online);
  } else if (status === "Non-Active") {
    filteredTable = batchData.filter(({ online }) => !online);
  }
  const progressHandler = (batchId) => {
    const res = progressData.filter((data) => data.batchId == batchId);
    if(res==undefined || res==null || res.length == 0){
      return 0;
    }
    return res[0].batchProgress;
  };
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredTable = filteredTable.filter(({ batchName }) =>
      batchName.toLowerCase().includes(query)
    );
    batchData = batchData.filter(({ batchName }) =>
      batchName.toLowerCase().includes(query)
    );
  }

  return (
    <div className="flex flex-wrap justify-center sm:justify-start space-evenly ml-4 sm:ml-12">
      {status === "All"
        ? batchData.map(
            ({ batchId, batchName, batchDescription, online, startDate }) => (
              <CourseCard
                key={batchId}
                online={online}
                progressValue={progressHandler(batchId)}
                name={batchName}
                description={batchDescription}
                date={startDate}
                batchId={batchId}
              />
            )
          )
        : filteredTable.map(
            ({ batchId, batchName, batchDescription, online, startDate }) => (
              <CourseCard
                key={batchId}
                online={online}
                progressValue={progressHandler(batchId)}
                name={batchName}
                description={batchDescription}
                date={startDate}
                batchId={batchId}
              />
            )
          )}
    </div>
  );
};

BatchDetailsCards.propTypes = {
  status: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  batchData: PropTypes.array.isRequired,
  progressData: PropTypes.array.isRequired,
};

export default BatchDetailsCards;

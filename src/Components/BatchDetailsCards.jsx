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
    return res[0].progressValue;
  };
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredTable = filteredTable.filter(({ name }) =>
      name.toLowerCase().includes(query)
    );
    batchData = batchData.filter(({ name }) =>
      name.toLowerCase().includes(query)
    );
  }

  return (
    <div className="flex flex-wrap justify-center sm:justify-start space-evenly ml-4 sm:ml-12">
      {status === "All"
        ? batchData.map(({ id, name, description, online, date }) => (
            <CourseCard
              key={id}
              online={online}
              progressValue={progressHandler(id)}
              name={name}
              description={description}
              date={date}
            />
          ))
        : filteredTable.map(({ id, name, description, online, date }) => (
            <CourseCard
              key={id}
              online={online}
              progressValue={progressHandler(id)}
              name={name}
              description={description}
              date={date}
            />
          ))}
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

import { CourseCard } from "../Components/CourseCard";
import PropTypes from "prop-types";

const table = [
  { cardId: 1, online: true, progressValue: 50 },
  { cardId: 2, online: false, progressValue: 70 },
  { cardId: 3, online: true, progressValue: 90 },
  { cardId: 4, online: false, progressValue: 10 },
  { cardId: 5, online: false, progressValue: 20 },
  { cardId: 6, online: true, progressValue: 80 },
  { cardId: 7, online: true, progressValue: 62 },
];
const BatchDetailsCards = ({ status,searchQuery }) => {
  let filteredTable = table;

  // Filter table data based on status
  if (status === "Active") {
    filteredTable = table.filter(({ online }) => online);
  } else if (status === "Non-Active") {
    filteredTable = table.filter(({ online }) => !online);
  }

  return (
    <div className="flex flex-wrap justify-center sm:justify-start space-evenly ml-4 sm:ml-12">
      {status === "All"
        ? table.map(({ cardId, online,progressValue }) => (
            <CourseCard
              key={cardId}
              online={online}
              progressValue={progressValue}
            />
          ))
        : filteredTable.map(({ cardId, online,progressValue }) => (
            <CourseCard
              key={cardId}
              online={online}
              progressValue={progressValue}
            />
          ))}
    </div>
  );
};

BatchDetailsCards.propTypes = {
  status: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  
};

export default BatchDetailsCards;

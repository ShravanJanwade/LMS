import { CourseCard } from "../Components/CourseCard";
import PropTypes from "prop-types";

const table = [
  { cardId: 1, online: true },
  { cardId: 2, online: false },
  { cardId: 3, online: true },
  { cardId: 4, online: false },
  { cardId: 5, online: false },
  { cardId: 6, online: true },
  { cardId: 7, online: true },
];
const BatchDetailsCards = ({ status }) => {
  let filteredTable = table;

  // Filter table data based on status
  if (status === "Active") {
    filteredTable = table.filter(({ online }) => online);
  } else if (status === "Non-Active") {
    filteredTable = table.filter(({ online }) => !online);
  }

  return (
    <div className="flex flex-wrap justify-start space-evenly ml-12">
      {status === "All"
        ? table.map(({ cardId, online }) => (
            <CourseCard key={cardId} online={online} />
          ))
        : filteredTable.map(({ cardId, online }) => (
            <CourseCard key={cardId} online={online} />
          ))}
    </div>
  );
};

BatchDetailsCards.propTypes = {
  status: PropTypes.string.isRequired,
};

export default BatchDetailsCards;

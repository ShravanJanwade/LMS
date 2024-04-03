
import BatchHeader from "../Components/BatchHeader";
import { CourseCard } from "../Components/CourseCard";
import PropTypes from 'prop-types';


const BatchDetailsCards = ({toggleHandler,card}) => {
 
  return (
    <div>
      <BatchHeader toggleHandler={toggleHandler} card={card}/>
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />

    </div>
  );
};
BatchDetailsCards.propTypes = {
  card: PropTypes.bool.isRequired,
  toggleHandler: PropTypes.func.isRequired,
};

export default BatchDetailsCards;

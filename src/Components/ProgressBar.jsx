import { Progress } from "@material-tailwind/react";
import PropTypes from "prop-types";
const ProgressBar=({progressValue})=> {
  return <Progress value={progressValue} color="green" size="sm"/>;
}
export default ProgressBar;
ProgressBar.propTypes = {
    progressValue: PropTypes.number.isRequired,
  };
  
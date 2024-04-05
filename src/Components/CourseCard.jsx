import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Chip,
  Button,
} from "@material-tailwind/react";
import ProgressBar from "./ProgressBar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export function CourseCard({ online, progressValue, name, description, date }) {
  return (
    <Card className="mt-6 w-96 inline-block m-2">
      <CardBody>
        <div className="flex space-x-4 justify-end inline-block">
          <div className="w-max">
            <Chip
              variant="ghost"
              size="sm"
              value={online ? "Active" : "Non-Active"}
              color={online ? "green" : "blue-gray"}
            />
          </div>
          <div className="w-max">
            <Chip
              variant="ghost"
              size="sm"
              value={date}
              color={online ? "green" : "blue-gray"}
            />
          </div>
        </div>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-glyphs/60/layers.png"
          alt="layers"
        />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0 mb-0">
        <a href="#" className="inline-block">
          <Link to="/lms/batchDetails">
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2"
            >
              Batch Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </a>
        <ProgressBar progressValue={progressValue} />
      </CardFooter>
    </Card>
  );
}
CourseCard.propTypes = {
  online: PropTypes.bool.isRequired,
  progressValue: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

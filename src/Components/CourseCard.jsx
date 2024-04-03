import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Chip,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function CourseCard({ online }) {
  return (
    <Card className="mt-6 w-96 inline-block m-5">
      <CardBody>
        <img
          width="60"
          height="60"
          src="https://img.icons8.com/ios-glyphs/60/layers.png"
          alt="layers"
        />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Batch Name
        </Typography>
        <Typography>
          Batch Description-Because it&apos;s about motivating the doers.
          Because I&apos;m here to follow my dreams and inspire others.
        </Typography>
        <div className="w-max">
          <Chip
            variant="ghost"
            size="sm"
            value={online ? "online" : "offline"}
            color={online ? "green" : "blue-gray"}
          />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
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
        </a>
      </CardFooter>
    </Card>
  );
}
CourseCard.propTypes = {
  online: PropTypes.bool.isRequired,
};

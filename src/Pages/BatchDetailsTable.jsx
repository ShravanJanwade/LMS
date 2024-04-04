import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";
import {
  Card,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import ProgressBar from "../Components/ProgressBar";
const TABLE_HEAD = [
  "Batch Name",
  "Progress",
  "Status",
  "Batch Created Date",
  "View Batch",
];

const TABLE_ROWS = [
  {
    name: "Batch 100",
    progressValue: 50,
    online: true,
    date: "23/04/18",
  },
  {
    name: "Batch 101",
    progressValue: 70,
    online: false,
    date: "23/04/18",
  },
  {
    name: "Batch 102",
    progressValue: 20,
    online: false,
    date: "19/09/17",
  },
  {
    name: "Batch 103",
    progressValue: 90,
    online: true,
    date: "24/12/08",
  },
  {
    name: "Batch 104",
    progressValue: 40,
    online: false,
    date: "04/10/21",
  },
];

const BatchDetailsTable = ({ status }) => {
  const filteredRows =
    status === "All"
      ? TABLE_ROWS
      : status === "Active"
      ? TABLE_ROWS.filter((row) => row.online)
      : TABLE_ROWS.filter((row) => !row.online);
  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-scroll px-0 m-5">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map(({ name,progressValue, online, date }, index) => {
              // Render each row based on filteredRows
              const isLast = index === filteredRows.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <ProgressBar progressValue={progressValue}/>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={online ? "Active" : "Non-Active"}
                        color={online ? "green" : "blue-gray"}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Link to="/lms/batchDetails">
                    <Tooltip content="Batch Details">
                      <IconButton variant="text">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip></Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
BatchDetailsTable.propTypes = {
  status: PropTypes.string.isRequired,
};

export default BatchDetailsTable;

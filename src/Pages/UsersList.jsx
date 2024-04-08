import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import Modal from "../Components/Modal";
import EmployeeTable from "../Components/EmployeeTable";
import { TABLE_HEAD, TABLE_ROWS } from "../Services/BatchData.js";
import SearchBar from "../Components/SearchBar";

const UsersList = () => {
  const [rows, setRows] = useState(TABLE_ROWS);
  const [selectedRows, setSelectedRows] = useState({});

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleCheckboxChange = (employeeId) => {
    setSelectedRows((prevSelectedRows) => ({
      ...prevSelectedRows,
      [employeeId]: !prevSelectedRows[employeeId],
    }));
  };

  return (
    <Card className="h-full w-full mt-2">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Employees list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Select The employees you want to add to this batch
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <SearchBar setRows={setRows} TABLE_ROWS={TABLE_ROWS} setSelectedRows={setSelectedRows} rows={rows}/>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              className="flex items-center gap-3"
              size="sm"
              onClick={handleOpen}
            >
              <Modal handleOpen={handleOpen} open={open} />
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Trainees
              To Batch
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <EmployeeTable
          TABLE_HEAD={TABLE_HEAD}
          rows={rows}
          selectedRows={selectedRows}
          handleCheckboxChange={handleCheckboxChange}
          setSelectedRows={setSelectedRows}
        />
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

export default UsersList;
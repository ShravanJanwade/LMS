import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ProgressBar from "../Components/ProgressBar";
import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import EmployeeTable from "../Components/EmployeeTable";
import { TABLE_HEAD, TABLE_ROWS } from "../Services/BatchData.js";
import Modal from "../Components/Modal";
const BatchDetails = () => {
  const [rows, setRows] = useState(TABLE_ROWS);
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const deleteHandler = () => {
    setOpen((prev) => !prev);
  };
  const deleteBatchhandler = () => {
    setDeleteOpen((prevs) => !prevs);
  };
  return (
    <div className="flex h-screen">
      <div className="flex w-1/2">
        <div className="flex flex-col w-full m-5">
          <Card className="mt-0 mb-6 w-full m-1 h-1/2">
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-5 flex">
                Batch Name: Batch 103
                <div className="flex justify-end  ml-12 w-80">
                  <Button onClick={deleteBatchhandler}>Delete Batch</Button>
                  <Modal open={deleteOpen} handleOpen={deleteBatchhandler} />
                </div>
              </Typography>
              <Typography className="mb-5" variant="h6" color="gray">
                Batch Description: The place is close to Barceloneta Beach and
                bus stop just 2 min by walk and near to &quot;Naviglio&quot;
                where you can enjoy the main night life in Barcelona.
              </Typography>
              <Typography className="mb-5">StartDate: 12/04/2024</Typography>
              <Typography className="mb-5">EndDate: 19/04/2024</Typography>
              <Typography>Batch Size:50</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <ProgressBar progressValue={62} />
            </CardFooter>
          </Card>
          <Card className="mt-6 w-full h-1/3">
            <CardBody>
              <Typography variant="h3" color="blue-gray" className="mb-2">
                Learning Plan for Batch
              </Typography>
              <Typography>Type of Plan: Bootcamp</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to="/lms/batches/batchDetails/learningPlan">
              <Button>View Learning Plan</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="w-1/2">
        <Card className="h-full m-5 mt-10">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-0 mt-0 flex items-center justify-between gap-10">
              <div>
                <Typography variant="h5" color="blue-gray">
                  List of Trainees in the Batch
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex shrink-0 flex-col gap-0 sm:flex-row">
                  <Link
                    to="/lms/batches/batchDetails/addUsersToBatch"
                    className="self-end m-3 mr-0"
                  >
                    <Button className="flex items-center gap-1 w-64" size="sm">
                      <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
                      Trainees To Batch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <SearchBar
                setRows={setRows}
                TABLE_ROWS={TABLE_ROWS}
                className="mb-5"
              />
              <Button
                onClick={deleteHandler}
                className="flex items-center gap-3"
                color="red"
                size="sm"
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Delete
                Trainees From Batch
              </Button>
              <Modal open={open} handleOpen={deleteHandler} />
            </div>
          </CardHeader>

          <CardBody>
            <EmployeeTable
              TABLE_HEAD={TABLE_HEAD}
              rows={rows}
              setRows={setRows}
              className="mt-5"
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default BatchDetails;

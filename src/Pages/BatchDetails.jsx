import { UserPlusIcon } from "@heroicons/react/24/solid";
import { useNavigate, Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ProgressBar from "../Components/ProgressBar";
import { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import EmployeeTable from "../Components/EmployeeTable";
import { TABLE_HEAD, TABLE_ROWS } from "../Services/EmployeeData.js";
import Modal from "../Components/Modal";
import { fetchBatchDetails } from "../Services/BatchDetailsData.js";
import { useBatch } from "../Context/BatchContext";

const BatchDetails = () => {
  const [rows, setRows] = useState(TABLE_ROWS);
  const [selectedRows, setSelectedRows] = useState({});
  const { id } = useBatch();
  const navigate = useNavigate();
  const handleCheckboxChange = (employeeId) => {
    setSelectedRows((prevSelectedRows) => ({
      ...prevSelectedRows,
      [employeeId]: !prevSelectedRows[employeeId],
    }));
  };
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const deleteHandler = () => {
    console.log(batchDetails);
    console.log(id);
    setOpen((prev) => !prev);
  };
  const deleteBatchhandler = () => {
    console.log(batchDetails);
    setDeleteOpen((prevs) => !prevs);
  };
  const [batchDetails, setBatchDetails] = useState(null);

  useEffect(() => {
    async function fetchBatch() {
      const id = sessionStorage.getItem("id");
      if (!id) return;
      try {
        const data = await fetchBatchDetails(id);
        if (data) {
          setBatchDetails(data);
        } else {
          throw new Error("Failed to fetch batch details");
        }
      } catch (error) {
        console.error("Error fetching batch details:", error);
      }
    }
    fetchBatch();
  }, [id]);

  return (
    <div className="flex h-screen">
      <div className="flex w-1/2">
        <div className="flex flex-col w-full m-5">
          <Card className="mt-0 mb-6 w-full m-1 h-1/2">
            <CardBody>
              {batchDetails ? (
                <>
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mb-5 flex"
                  >
                    Batch Name: {batchDetails.batchName}
                    <div className="flex justify-end w-80">
                      <Link to="/lms/batches/editBatch">
                        <Button className="mr-2" onClick={deleteBatchhandler}>
                          Edit Batch
                        </Button>
                      </Link>
                      <Button className="h-10" onClick={deleteBatchhandler}>
                        Delete Batch
                      </Button>
                      <Modal
                        open={deleteOpen}
                        handleOpen={deleteBatchhandler}
                      />
                    </div>
                  </Typography>
                  <Typography className="mb-5" variant="h6" color="gray">
                    Batch Description: {batchDetails.batchDescription}
                  </Typography>
                  <Typography className="mb-5">
                    StartDate: {batchDetails.startDate}
                  </Typography>
                  <Typography className="mb-5">
                    EndDate: {batchDetails.endDate}
                  </Typography>
                  <Typography>Batch Size:{batchDetails.batchSize}</Typography>
                </>
              ) : (
                <Typography>Loading...</Typography>
              )}
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
              <Button>View Learning Plan</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <Card className="h-full m-1 mt-5">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none h-56"
          >
            <div className="mb-0 mt-0 flex items-center justify-between gap-10 mb-0">
              <div>
                <Typography variant="h5" color="blue-gray">
                  List of Trainees in the Batch
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-0">
                <div className="flex shrink-0 flex-col gap-0 sm:flex-row">
                  <Link
                    to="/lms/batches/batchDetails/addUsersToBatch"
                    className="self-end m-1 mr-0"
                  >
                    <Button className="flex items-center gap-1 w-60" size="sm">
                      <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
                      Trainees To Batch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row mt-3 ">
              <SearchBar
                setRows={setRows}
                TABLE_ROWS={TABLE_ROWS}
                setSelectedRows={setSelectedRows}
                rows={rows}
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

          <CardBody className="overflow-auto mt-0 ">
            <EmployeeTable
              TABLE_HEAD={TABLE_HEAD}
              rows={rows}
              selectedRows={selectedRows}
              handleCheckboxChange={handleCheckboxChange}
              setSelectedRows={setSelectedRows}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default BatchDetails;

import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import SearchBar from "./SearchBar";
import Modal from "./Modal";
import { deleteTraineesFromBatch } from "../Services/BatchDetailsData";
import EmployeeTable from "./EmployeeTable";
import { TABLE_HEAD } from "../Services/EmployeeData";
import { modalDeleteTrainee } from "../Data/ModalData";
import { fetchTrainees } from "../Services/BatchEmployee";
import DeletedModal from "./DeletedModal";
const AddOrDeleteEmployees = () => {
    const [trainees, setTrainees] = useState([]);
  const [rows, setRows] = useState(trainees);
  const [selectedRows, setSelectedRows] = useState({});
  const [fetch, setFetch] = useState(false);
  const [clearSearch, setClearSearch] = useState(false);
  const [submitOpen, setSubmitOpen] = useState(false);
  // const { id } = useBatch();
  const id = sessionStorage.getItem("id");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const handleCheckboxChange = (employeeId) => {
    setSelectedRows((prevSelectedRows) => ({
      ...prevSelectedRows,
      [employeeId]: !prevSelectedRows[employeeId],
    }));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrainees(id);
        if (data) {
          setTrainees(data);
          setLoading(false);
          setLoader(false);
          setError(null);
        } else {
          throw new Error("Failed to fetch trainees");
        }
      } catch (error) {
        setError("Error  Fetching Batch Employees");
        setLoading(false);
        console.error("Error fetching trainees:", error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function
    };
  }, [id, fetch]);

  // Update rows state when trainees change
  useEffect(() => {
    setRows(trainees); // Make sure trainees are correctly set to rows state
  }, [trainees, fetch]);

  const deleteHandler = () => {
    if (open) {
      // setFetch((prev) => !prev);
      deleteHandlerEmployees();
      // setFetch((prev) => !prev);
      setClearSearch(true);
      setSelectedRows({});
      setLoading(true);
      setLoader(true);
      setSubmitOpen(true);
      setTimeout(() => {
        setSubmitOpen(false);
        setLoader(false);
        setLoading(false);
        setFetch((prev) => !prev);
      }, 3000);
    }
    setOpen((prev) => !prev);
    // ReloadAfterDelay();
  };
  const deleteHandlerEmployees = async () => {
    try {
      setFetch((prev) => !prev); // Trigger re-fetch of trainees list
      const selectedUserIds = Object.keys(selectedRows).filter(
        (userId) => selectedRows[userId]
      );
      await deleteTraineesFromBatch(id, selectedUserIds);
      // After successful deletion, update the UI
      const updatedTrainees = trainees.filter(
        (trainee) => !selectedUserIds.includes(trainee.id)
      );
      setTrainees(updatedTrainees);
      setRows(updatedTrainees);
      setSelectedRows({});
      setLoading(false);
      setClearSearch(true); // Set clearSearch flag to true to clear search bar
      setLoader(false);
    } catch (error) {
      console.error("Error deleting trainees:", error);
    }
  };
  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  const height =
    rows.length < 11 ? "h-42" : rows.length <= 25 ? "h-48" : "h-72";
  return (
              <Card className="h-full w-full m-1 mt-5">
              <DeletedModal submitted={submitOpen}/>
          <CardHeader
            floated={false}
            shadow={false}
            className={`rounded-none ${height}`}
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
                    <Button
                      className="flex items-center gap-1 w-60"
                      size="sm"
                      style={{ background: "#023047" }}
                    >
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
                TABLE_ROWS={trainees}
                setSelectedRows={setSelectedRows}
                rows={rows}
                clearSearch={clearSearch}
              />

              <Button
                onClick={deleteHandler}
                className="flex items-center gap-3"
                color="red"
                size="sm"
                disabled={Object.values(selectedRows).every((value) => !value)} // Disable button if no trainees are selected
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Delete
                Trainees From Batch
              </Button>

              <Modal
                open={open}
                handleOpen={deleteHandler}
                handleClose={handleClose}
                data={modalDeleteTrainee}
              />
            </div>
          </CardHeader>

          <CardBody className="overflow-auto mt-0 ">
            {loader && "Deleting Employees"}
            {!loader && (
              <EmployeeTable
                TABLE_HEAD={TABLE_HEAD}
                rows={rows}
                selectedRows={selectedRows}
                handleCheckboxChange={handleCheckboxChange}
                setSelectedRows={setSelectedRows}
                error={error}
                loading={loading}
              />
            )}
          </CardBody>
        </Card>
  )
}

export default AddOrDeleteEmployees

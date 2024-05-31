// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ProgressBar from "../Components/ProgressBar";
import { useState, useEffect } from "react";
import Modal from "../Components/Modal";
import {
  fetchBatchDetails,
  deleteBatch,
} from "../Services/BatchDetailsData.js";
import { fetchBatchProgress } from "../Services/ProgressData.js";
import { modalDeleteBatch } from "../Data/ModalData.jsx";
import DeletedModal from "../Components/DeletedModal.jsx";
import Yell from "../assets/Yell.svg";
import AddOrDeleteEmployees from "../Components/AddOrDeleteEmployees.jsx";
const BatchDetails = () => {
  const [fetch, setFetch] = useState(false);
  const [submitOpen, setSubmitOpen] = useState(false);
  // const { id } = useBatch();
  const id = sessionStorage.getItem("id");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [batchDetails, setBatchDetails] = useState(null);
  const [progressData, setProgressData] = useState(0);
  const [loading, setLoading] = useState(true);
  const [learningPlan, setLearningPlan] = useState(false);
  const navigate = useNavigate();
  const deleteBatchhandler = () => {
    if (deleteOpen) {
      deleteBatchFromList();
      navigate("/lms/batches");
      window.location.reload(); // Reload the page after navigating
    }
    setDeleteOpen((prevs) => !prevs);
  };
  const handleDeleteClose = () => {
    setDeleteOpen((prev) => !prev);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const batchData = await fetchBatchDetails(id);
        if (batchData) {
          setBatchDetails(batchData);
          setLearningPlan(batchData.learningPlan);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch batch details");
        }
      } catch (error) {
        console.error("Error fetching batch details:", error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function
    };
  }, [id, fetch]);

  const deleteBatchFromList = async () => {
    try {
      await deleteBatch(id);
    } catch (error) {
      console.error("Error deleting trainees:", error);
    }
  };
  useEffect(() => {
    async function fetchData() {
      const data = await fetchBatchProgress(id);
      if (data) {
        setProgressData(data.batchProgress);
      } else {
        setProgressData(0);
      }
    }
    fetchData();
  }, [progressData]);

  return (
    <div className="flex h-screen">
      <div className="flex w-1/2">
        <div className="flex flex-col w-full m-5">
          <Card
            className="mt-0 mb-6 w-full m-1 h-1/2"
            style={{ background: `url(${Yell})` }}
          >
            <CardBody>
              {batchDetails ? (
                <>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-5 flex"
                  >
                    Batch Name: {batchDetails.batchName}
                    <div className="flex justify-end w-80">
                      <Link to="/lms/batches/editBatch">
                        <Button
                          className="mr-2"
                          onClick={deleteBatchhandler}
                          style={{ background: "#023047" }}
                        >
                          Edit Batch
                        </Button>
                      </Link>
                      <Button
                        className="h-10"
                        onClick={deleteBatchhandler}
                        style={{ background: "#023047" }}
                      >
                        Delete Batch
                      </Button>
                      <Modal
                        open={deleteOpen}
                        handleOpen={deleteBatchhandler}
                        handleClose={handleDeleteClose}
                        data={modalDeleteBatch}
                      />
                      <DeletedModal submitted={submitOpen} />
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
              <ProgressBar
                progressValue={
                  progressData == (null || undefined) ? 0 : progressData
                }
              />
            </CardFooter>
          </Card>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="course-card-wrapper"
            style={{ zIndex: 1 }}
          >
            <Card
              className="mt-6 w-full"
              style={{ background: `url(${Yell})` }}
            >
              <CardBody>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                  Learning Plan for Batch
                </Typography>
                <Typography>Type of Plan: Bootcamp</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                {learningPlan && (
                  <Link to="/lms/batches/batchDetails/learningPlan">
                    <Button style={{ background: "#023047" }}>
                      View Learning Plan
                    </Button>
                  </Link>
                )}
                {!learningPlan && (
                  <Link to="/lms/batches/batchDetails/learningPlan">
                    <Button style={{ background: "#023047" }}>
                      Attach Learning Plan
                    </Button>
                  </Link>
                )}
                <Link to="/lms/batches/batchDetails/batchUsersProgress">
                  <Button style={{ background: "#023047" }} className="ml-5">
                    View Batch Trainee Progress
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <AddOrDeleteEmployees />
      </div>
    </div>
  );
};

export default BatchDetails;

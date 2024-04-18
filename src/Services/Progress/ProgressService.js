import axios from "./axios";

const getBatchProgress = async () => {
  try {
    const response = await axios.get("/batch-progress");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const getBatchProgressByID = async ({ batchID }) => {
  try {
    const response = await axios.get(`/batch-progress/${batchID}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const getAllUserBatchProgressByID = async ({ batchID }) => {
  try {
    const response = await axios.get(`/batch-progress/allusers/${batchID}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const getUserProgressByID = async ({ userID }) => {
  try {
    const response = await axios.get(`/user-progress/${batchID}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const getUserProgressOfTopicsByID = async ({ userID, batchID, topicID }) => {
  try {
    const response = await axios.get(
      `/user-progress/${userID}/batch/${batchID}/topic/${topicID}`
    );
    console.log("response",response.data);
    return response.data;
    
  } catch (error) {
    console.error(error);
  }
};

const getUserProgressOfResourcesByID = async ({ userID, resourceID }) => {
  try {
    const response = await axios.get(
      `/user-progress/${userID}/resource/${resourceID}`
    );

    // console.log(response);
    return response.data
  } catch (error) {
    console.error(error);
  }
};

const getUserProgressOfCoursesByID = async ({ userID, courseID ,batchID}) => {
  try {
    console.log("userID",userID)
    console.log("courseID",courseID)
    console.log("batchID",batchID)
    const response = await axios.get(
      `/user-progress/${userID}/batch/${batchID}/course/${courseID}`
    );
    // console.log(response);
    return response.data
  } catch (error) {
    console.error(error);
  }
};

const getUserProgressOfTopicsByArray = async ({ userID, topicIDs }) => {
  console.log("userid", userID);
  console.log("tid", topicIDs);

  try {
    const response = await axios.post(`/user-progress/resource-progress`, {
      userId: userID,
      topicIds: topicIDs,
    });
    console.log(response[1]);
  } catch (error) {}
};

const getUserProgressOfCoursesByArray = async ({ userID, coursesIDs }) => {
  try {
    const response = await axios.post(`/user-progress/course-progress`, {
      userId: userID,
      courseIds: coursesIDs,
    });
  } catch (error) {}
};

const setProgress = async ({ userID, resourceID, progress }) => {
  try {
    const response = await axios.patch(
      `/user-progress/${userID}/resource/${resourceID}/update/${progress}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const ProressService = {
  getBatchProgress,
  getBatchProgressByID,
  getAllUserBatchProgressByID,
  getUserProgressByID,
  getUserProgressOfTopicsByID,
  getUserProgressOfResourcesByID,
  getUserProgressOfCoursesByID,
  getUserProgressOfTopicsByArray,
  getUserProgressOfCoursesByArray,
  setProgress,
};
export default ProressService;

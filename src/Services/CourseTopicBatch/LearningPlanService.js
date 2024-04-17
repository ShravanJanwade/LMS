import axios from "./axios"

const getLearningPlanDetails = async (batchID) => {
    try {
        const response = await axios.get(`/learning-plan/dto/${batchID}`)
        // console.log(response)
        return response
    }
    catch (error) {
        console.error(error)
    }
}
const courseDeets = async (courseID) => {
    try {
        const response = await axios.get(`/course/id/${courseID}`)
        return response.data
    }
    catch (error) {
        console.error(error)
    }
}
const courseWiseTopicList = async (courseID) =>{
    try {
        const response = await axios.get(`/topic/course/${courseID}`)
       return response;
    }
    catch (error) {
        console.error(error)
    }
}






const getBatchProgressByID = async ({ batchID }) => {
    try {
        const response = await axios.get(`/batch-progress/${batchID}`)
        console.log(response)
    }
    catch (error) {
        console.error(error)
    }
}

const getAllUserBatchProgressByID = async ({ batchID }) => {
    try {
        const response = await axios.get(`/batch-progress/allusers/${batchID}`)
        console.log(response)
    }
    catch (error) {
        console.error(error)
    }
}


const getUserProgressByID = async ({ userID }) => {
    try {
        const response = await axios.get(`/user-progress/${batchID}`)
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

const getUserProgressOfTopicsByID = async ({ userID, topicID }) => {
    try {
        const response = await axios.get(`/user-progress/${userID}/topic/${topicID}`)
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

const getUserProgressOfResourcesByID = async ({ userID, resourceID }) => {
    try {
        const response = await axios.get(`/user-progress/${userID}/resource/${resourceID}`)
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

const getUserProgressOfCoursesByID = async ({ userID, courseID }) => {
    try {
        const response = await axios.get(`/user-progress/${userID}/course/${courseID}`)
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}


const getUserProgressOfTopicsByArray = async ({ userID, topicIDs }) => {
    console.log("userid", userID)
    console.log("tid", topicIDs)

    try {
        const response = await axios.post(`/user-progress/resource-progress`, {
            userId: userID,
            topicIds: topicIDs
        })
        console.log(response[1])
    } catch (error) {

    }
}

const getUserProgressOfCoursesByArray = async ({ userID, coursesIDs }) => {

    try {
        const response = await axios.post(`/user-progress/course-progress`, {
            userId: userID,
            courseIds: coursesIDs
        })

    } catch (error) {

    }
}


const setProgress = async ({ userID, resourceID, progress }) => {

    try {
        const response = await axios.patch(`/user-progress/${userID}/resource/${resourceID}/update/${progress}`)
        console.log(response)
    } catch (error) {
        console.log(error)
    }

}






const LearningPlanService = {
    getLearningPlanDetails,
    courseWiseTopicList,
    courseDeets


}
export default LearningPlanService
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Progress,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";
import { Timeline } from "vertical-timeline-component-react";
import {
  ArchiveBoxIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { TopicsTimeLine } from "../Components/TopicsTimeLine";

const Courses = [
  {
    courseId: "1",
    courseName: "Java",
    description: "Java is an Object Oriented Programming Language",
    startDate: "25-05-2024",
    endDate: "25-06-2024",
    trainerName: "Maqdum Sharieff",
    progress: 50,
    difficultyLevel: "moderate",
    topics: [
      {
        topicName: "Introduction to OOPS",
        description: "OOPS - Object Oriented Programming System",
        startDate: "25-05-2024",
        endDate: "27-05-2024",
        progress: 100,
      },
      {
        topicName: "Exception Handling",
        description: "Handling exceptions in Java programs",
        startDate: "28-05-2024",
        endDate: "30-05-2024",
        progress: 80,
      },
      {
        topicName: "Multithreading",
        description: "Introduction to multithreading concepts in Java",
        startDate: "01-06-2024",
        endDate: "03-06-2024",
        progress: 60,
      },
      {
        topicName: "Collections Framework",
        description: "Working with collections in Java",
        startDate: "04-06-2024",
        endDate: "06-06-2024",
        progress: 40,
      },
      {
        topicName: "File Handling",
        description: "Reading from and writing to files in Java",
        startDate: "07-06-2024",
        endDate: "09-06-2024",
        progress: 20,
      },
      {
        topicName: "GUI Programming with Swing",
        description: "Creating graphical user interfaces using Swing library",
        startDate: "10-06-2024",
        endDate: "12-06-2024",
        progress: 10,
      },
    ],
  },
  {
    courseId: "2",
    courseName: "Linux",
    description: "Linux Operating System Fundamentals",
    startDate: "15-05-2024",
    endDate: "30-06-2024",
    trainerName: "John Doe",
    progress: 20,
    difficultyLevel: "beginner",
    topics: [
      {
        topicName: "Introduction to Linux",
        description: "Basic overview of Linux operating system",
        startDate: "15-05-2024",
        endDate: "17-05-2024",
        progress: 100,
      },
      {
        topicName: "File System Management",
        description: "Working with files and directories in Linux",
        startDate: "18-05-2024",
        endDate: "20-05-2024",
        progress: 80,
      },
      {
        topicName: "Shell Scripting",
        description: "Writing and executing shell scripts in Linux",
        startDate: "21-05-2024",
        endDate: "23-05-2024",
        progress: 60,
      },
      {
        topicName: "Networking Basics",
        description: "Introduction to networking concepts in Linux",
        startDate: "24-05-2024",
        endDate: "26-05-2024",
        progress: 40,
      },
      {
        topicName: "User and Group Management",
        description: "Managing users and groups in Linux",
        startDate: "27-05-2024",
        endDate: "29-05-2024",
        progress: 20,
      },
      {
        topicName: "System Administration Tasks",
        description: "Performing system administration tasks in Linux",
        startDate: "30-05-2024",
        endDate: "01-06-2024",
        progress: 10,
      },
    ],
  },
  {
    courseId: "3",
    courseName: "Azure",
    description: "Microsoft Azure Cloud Computing Platform",
    startDate: "10-06-2024",
    endDate: "25-07-2024",
    trainerName: "Jane Smith",
    progress: 10,
    difficultyLevel: "intermediate",
    topics: [
      {
        topicName: "Introduction to Azure",
        description: "Overview of Microsoft Azure cloud services",
        startDate: "10-06-2024",
        endDate: "12-06-2024",
        progress: 100,
      },
      {
        topicName: "Azure Virtual Machines",
        description: "Creating and managing virtual machines in Azure",
        startDate: "13-06-2024",
        endDate: "15-06-2024",
        progress: 80,
      },
      {
        topicName: "Azure Storage",
        description: "Working with Azure storage services",
        startDate: "16-06-2024",
        endDate: "18-06-2024",
        progress: 60,
      },
      {
        topicName: "Azure App Services",
        description: "Deploying and managing web applications on Azure",
        startDate: "19-06-2024",
        endDate: "21-06-2024",
        progress: 40,
      },
      {
        topicName: "Azure Functions",
        description: "Developing serverless functions with Azure Functions",
        startDate: "22-06-2024",
        endDate: "24-06-2024",
        progress: 20,
      },
      {
        topicName: "Azure Networking",
        description: "Configuring networking in Azure",
        startDate: "25-06-2024",
        endDate: "27-06-2024",
        progress: 10,
      },
    ],
  },
  {
    courseId: "4",
    courseName: "Jenkins",
    description: "Jenkins Automation Server Fundamentals",
    startDate: "01-07-2024",
    endDate: "15-07-2024",
    trainerName: "Michael Brown",
    progress: 5,
    difficultyLevel: "advanced",
    topics: [
      {
        topicName: "Introduction to Jenkins",
        description: "Overview of Jenkins automation server",
        startDate: "01-07-2024",
        endDate: "03-07-2024",
        progress: 100,
      },
      {
        topicName: "Pipeline as Code",
        description: "Writing Jenkins pipelines as code",
        startDate: "04-07-2024",
        endDate: "06-07-2024",
        progress: 80,
      },
      {
        topicName: "Jenkins Plugins",
        description: "Extending Jenkins functionality with plugins",
        startDate: "07-07-2024",
        endDate: "09-07-2024",
        progress: 60,
      },
      {
        topicName: "Jenkins Security",
        description: "Implementing security measures in Jenkins",
        startDate: "10-07-2024",
        endDate: "12-07-2024",
        progress: 40,
      },
      {
        topicName: "Jenkins Administration",
        description: "Administering Jenkins server",
        startDate: "13-07-2024",
        endDate: "15-07-2024",
        progress: 20,
      },
      {
        topicName: "Jenkins Integration",
        description: "Integration of Jenkins with other tools",
        startDate: "16-07-2024",
        endDate: "18-07-2024",
        progress: 10,
      },
    ],
  },
  {
    courseId: "5",
    courseName: "Kubernetes",
    description: "Kubernetes Container Orchestration Platform",
    startDate: "05-08-2024",
    endDate: "30-09-2024",
    trainerName: "Emily Johnson",
    progress: 0,
    difficultyLevel: "expert",
    topics: [
      {
        topicName: "Kubernetes Architecture",
        description: "Understanding Kubernetes architecture components",
        startDate: "05-08-2024",
        endDate: "07-08-2024",
        progress: 100,
      },
      {
        topicName: "Pods and Deployments",
        description: "Working with pods and deployments in Kubernetes",
        startDate: "08-08-2024",
        endDate: "10-08-2024",
        progress: 80,
      },
      {
        topicName: "Services and Networking",
        description: "Configuring networking and services in Kubernetes",
        startDate: "11-08-2024",
        endDate: "13-08-2024",
        progress: 60,
      },
      {
        topicName: "Storage in Kubernetes",
        description: "Persistent storage management in Kubernetes",
        startDate: "14-08-2024",
        endDate: "16-08-2024",
        progress: 40,
      },
      {
        topicName: "Security in Kubernetes",
        description: "Implementing security measures in Kubernetes",
        startDate: "17-08-2024",
        endDate: "19-08-2024",
        progress: 20,
      },
      {
        topicName: "Scaling and Load Balancing",
        description: "Scaling applications and load balancing in Kubernetes",
        startDate: "20-08-2024",
        endDate: "22-08-2024",
        progress: 10,
      },
    ],
  },
  {
    courseId: "6",
    courseName: "Docker",
    description: "Docker Containerization Platform",
    startDate: "01-10-2024",
    endDate: "15-10-2024",
    trainerName: "William Miller",
    progress: 0,
    difficultyLevel: "expert",
    topics: [
      {
        topicName: "Docker Basics",
        description: "Understanding Docker basics and terminology",
        startDate: "01-10-2024",
        endDate: "03-10-2024",
        progress: 100,
      },
      {
        topicName: "Docker Images and Containers",
        description: "Working with Docker images and containers",
        startDate: "04-10-2024",
        endDate: "06-10-2024",
        progress: 80,
      },
      {
        topicName: "Docker Compose",
        description: "Using Docker Compose for multi-container applications",
        startDate: "07-10-2024",
        endDate: "09-10-2024",
        progress: 60,
      },
      {
        topicName: "Docker Networking",
        description: "Networking options and configurations in Docker",
        startDate: "10-10-2024",
        endDate: "12-10-2024",
        progress: 40,
      },
      {
        topicName: "Docker Volumes",
        description: "Managing data volumes in Docker containers",
        startDate: "13-10-2024",
        endDate: "15-10-2024",
        progress: 20,
      },
      {
        topicName: "Docker Swarm",
        description: "Introduction to Docker Swarm for orchestration",
        startDate: "16-10-2024",
        endDate: "18-10-2024",
        progress: 10,
      },
    ],

     colorCodes : ["ff70a6","ff9770","ffd670","e9ff70","70d6ff"]
  },
 
  // Add more courses similarly
];

const Topics = [
  {
    topicName: "Introduction to OOPS",
    description: "OOPS - Object Orient Progragramming System",
    startDate: "25-5-2024",
    endDate: "27-5-2024",
    progress: 100,
  },
];
const colorCodes = ["ff70a6","ff9770","ffd670","e9ff70","70d6ff"];


const LearningPlan = () => {
   

    
  

  return (
    <div className="w-full">
      <VerticalTimeline lineColor="black" layout="1-column-left">
        {Courses.map((data, key) => {
        //  setSelected(colorCodes[Math.floor(Math.random() * colorCodes.length)])
        //    console.log(data.colorCodes.map(()=>))
        //   console.log(selectedColor)
          return (
            <VerticalTimelineElement
              key={key}
              // style={{ width: "900px", marginLeft:"0" }}
              className=" vertical-timeline-element--work w-full p-2 mr-52 min-w-[300px]"
              // contentStyle={{ background: "rgb(33, 150, 243)", color: "#5cd561" , padding:"px"}}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
                width: "300px",
              }}
              // date="2011 - 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#5cd561" }}

              // icon={<WorkIcon />}
            >
              <Card className={`min-h-52 max-h-96 w-[900px] flex-row  mr-52 bg-[#${data.colorCodes[Math.floor(Math.random() * 5)]}]`} >
                <CardHeader
                  shadow={false}    
                  floated={false}
                  className="m-0 w-3/5 shrink-0 rounded-r-none p-3 overflow-y-auto"
                >
                  <TopicsTimeLine topics={data.topics} />
                </CardHeader>

                <CardBody className="relative flex flex-col justify-between w-full md:w-4/5">
                  <Progress className="absolute -m-6 " value={data.progress} />

                  <div>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                      {data.courseName}
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                      {data.description}
                    </Typography>
                    <Typography color="gray" variant="paragraph">
                      Trainer: {data.trainerName}
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default LearningPlan;

import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Avatar,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { CircularProgressbar } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";

const ProgressList = () => {
  const [isOpenBatch, setIsOpenBatch] = useState(false);
  const [isOpenCourse, setIsOpenCourse] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    batch: "",
    course: "",
  });
  const [bothOptionsSelected, setBothOptionsSelected] = useState(false);

  // Array of batch options
  const batchOptions = [
    "Batch-101",
    "Batch-102",
    "Batch-103",
    "Batch-104",
    "Batch-105",
  ];
  const courseOptions = ["Java", "Python", "SQL", "Linux", "Software Testing"];

  const toggleDropdownBatch = () => {
    setIsOpenBatch(!isOpenBatch);
  };
  const toggleDropdownCourse = () => {
    setIsOpenCourse(!isOpenCourse);
  };

  const handleOptionSelectBatch = (option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      batch: option,
      course: "", // Reset course when batch changes
    }));
    setIsOpenBatch(false);
  };

  const handleOptionSelectCourse = (option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      course: option,
    }));
    setIsOpenCourse(false);
  };

  // Update bothOptionsSelected state when either of the options changes
  useEffect(() => {
    setBothOptionsSelected(selectedOptions.batch !== "" && selectedOptions.course !== "");
  }, [selectedOptions.batch, selectedOptions.course]);

  const TABLE_HEAD = ["Name", "Employee Id", "Progress"];

  const TABLE_ROWS = [
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
      name: "John Michael",
      email: "john@creative-tim.com",
      job: "Manager",
      org: "CDEC",
      online: true,
      date: "23/04/18",
      empID: 7481,
      progress: 100,
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      job: "Programator",
      org: "CDEC",
      online: false,
      date: "23/04/18",
      empID: 7482,
      progress: 50,
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      name: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      job: "Executive",
      org: "CDEC",
      online: false,
      date: "19/09/17",
      empID: 7483,
      progress: 50,
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      job: "Programator",
      org: "CDEC",
      online: true,
      date: "24/12/08",
      empID: 7484,
      progress: 20,
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
      name: "Richard Gran",
      email: "richard@creative-tim.com",
      job: "Manager",
      org: "CDEC",
      online: false,
      date: "04/10/21",
      empID: 7485,
      progress: 90,
    },
  ];

  // Log the final object whenever it changes
  useEffect(() => {
    console.log("Selected Options:", selectedOptions);
  }, [selectedOptions]);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0  flex-col gap-2 sm:flex-row">
            {/* Dropdown component */}
            <div className="relative z-10">
              <select
                value={selectedOptions.batch}
                onChange={(e) => handleOptionSelectBatch(e.target.value)}
                className="bg-[#323232] p-2 border-solid border-2 border-gray-900 hover:border-dotted rounded-lg cursor-pointer hover:shadow-xl text-[#f0f0f0]"
              >
                <option value="none">SELECT BATCH</option>
                {batchOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* End of Dropdown component */}
            {selectedOptions.batch && ( // Only show course selection if batch is selected
              <div className="relative">
                <select
                  value={selectedOptions.course}
                  onChange={(e) => handleOptionSelectCourse(e.target.value)}
                  className="bg-[#323232] p-2 border-solid border-2 border-gray-900 hover:border-dotted rounded-lg cursor-pointer hover:shadow-xl text-[#f0f0f0]"
                >
                  <option value="none">SELECT COURSE</option>
                  {courseOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ img, name, email, org, empID, progress }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {empID}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {org}
                        </Typography>
                      </div>
                    </td>
                    <td>
                      <CircularProgressbar
                        value={progress}
                        text={`${progress}%`}
                        className="h-12 w-12"
                      />
                    </td>
                  </tr>
                );
              }
            )}
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

export default ProgressList;


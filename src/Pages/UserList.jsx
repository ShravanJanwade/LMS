import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
  } from "@heroicons/react/24/outline";
  import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
  import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Avatar,
    Checkbox 
  } from "@material-tailwind/react";
import { useState, useEffect } from "react";
   
  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Monitored",
      value: "monitored",
    },
    {
      label: "Unmonitored",
      value: "unmonitored",
    },
  ];
   
  const TABLE_HEAD = ["EmployeeId", "Name", "Designation","Business Unit", ""];
   
  const TABLE_ROWS = [
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
      name: "John Michael",
      email: "john@creative-tim.com",
      job: "Manager",
      org: "Organization",
      employeeId:1001,
      buisnessUnit:"TELCO",
      checked:false,
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      job: "Programator",
      org: "Developer",
      employeeId:1002,
      checked:false,

      buisnessUnit:"NBU-CDEC"

    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      name: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      job: "Executive",
      org: "Projects",
      employeeId:1003,
      checked:false,

      buisnessUnit:"NBU-CDEC"

    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      job: "Programator",
      org: "Developer",
      employeeId:1004,
      checked:false,

      buisnessUnit:"NBU-CDEC"

    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
      name: "Richard Gran",
      email: "richard@creative-tim.com",
      job: "Manager",
      org: "Executive",
      employeeId:1005,
      checked:false,
      buisnessUnit:"NBU-CDEC"

    },
  ];
   
 const UserList=() =>{
    const [searchQuery,setSearchQuery]=useState('');
    const [selectedAll,setSelectedAll]=useState(false);
    const [rows, setRows] = useState(TABLE_ROWS);
    const selectAllHandler=()=>{
        setSelectedAll(prev=>!prev)
        const allChecked = rows.every((row) => row.checked);
        setRows((prevRows) =>
          prevRows.map((row) => ({
            ...row,
            checked: !allChecked,
          }))
        );    }
    const handleCheckboxChange = (id) => {
        setRows((prevRows) =>
          prevRows.map((row) => {
            if (row.employeeId === id) {
              return { ...row, checked: !row.checked }; // Toggle the checked state
            }
            return row;
          })
        );
      };
      const searchQueryHandler=(e)=>{
        setSearchQuery(e.target.value);
        console.log(searchQuery);
      }
      useEffect(() => {
        // Filter rows based on search query
        if (searchQuery.trim() === '') {
          setRows(TABLE_ROWS); // Display all rows when search string is empty
        } else {
            const filteredRows = TABLE_ROWS.filter((row) => {
                return (
                  (typeof row.employeeId === 'number' && row.employeeId.toString().includes(searchQuery)) ||
                  row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  row.buisnessUnit.toLowerCase().includes(searchQuery.toLowerCase()) // Corrected property name
                );
              });
              
          setRows(filteredRows);
        }
      }, [searchQuery]);
      
      
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
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Trainees To Batch
              </Button>
              
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                onChange={searchQueryHandler}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
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
                      {index == TABLE_HEAD.length - 1 && (
                      <Checkbox color="green" onChange={selectAllHandler} checked={selectedAll}/>
                    )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(
                ({ img, name, email, job, org, online, buisnessUnit,employeeId ,checked}, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
   
                  return (
                    <tr key={name}>
                         <td className={classes}>
                        <div className="w-max">
                          <Typography
                            variant="ghost"
                            size="sm">
                                {employeeId}
                            </Typography>
                        </div>
                      </td>
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
                            {job}
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
                     
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {buisnessUnit}
                        </Typography>
                      </td>
                      <td className={classes}>
                      <Checkbox color="green" checked={checked}  onChange={() => handleCheckboxChange(employeeId)}  />
                      </td>
                    </tr>
                  );
                },
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
  }
  export default UserList;
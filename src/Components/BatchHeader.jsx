import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Button,
  CardHeader,
  Tabs,
  TabsHeader,
  Tab,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
const TABS = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Active",
    value: "Active",
  },
  {
    label: "UnActive",
    value: "Non-Active",
  },
];
const BatchHeader = ({ toggleHandler, card, onStatusChange,searchHandler}) => {
  const [status, setStatus] = useState("All");
  const handlerTabClick = (value) => {
    setStatus(value);
    onStatusChange(value);
    console.log(status);
  };
  return (
    <CardHeader floated={false} shadow={false} className="rounded-none">
    <div className="mb-4 sm:mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 ml-4 sm:ml-12">
      <div>
        <Typography variant="h5" color="blue-gray">
          Batch list
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          See information about all Batches
        </Typography>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <Button variant="outlined" onClick={toggleHandler} className="w-full sm:w-auto">
          {card ? "Table View" : "Card View"}
        </Button>
        <Link to="/lms/create-batch">
          <Button className="flex items-center gap-2">
            <UserPlusIcon strokeWidth={2} className="h-5 w-5" /> Create New Batch
          </Button>
        </Link>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 ml-4 sm:ml-12">
      <Tabs value="all" className="w-full sm:w-72 md:w-96">
        <TabsHeader>
          {TABS.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => handlerTabClick(value)}
            >
              &nbsp;&nbsp;{label}&nbsp;&nbsp;
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
      <div className="w-full sm:w-72 md:w-96">
        <Input
          label="Search"
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          className="w-full"
          onChange={searchHandler}
        />
      </div>
    </div>
  </CardHeader>
  
  );
};
BatchHeader.propTypes = {
  card: PropTypes.bool.isRequired,
  toggleHandler: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  searchHandler: PropTypes.func.isRequired,

};
export default BatchHeader;

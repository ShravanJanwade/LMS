import {
    MagnifyingGlassIcon,
  } from "@heroicons/react/24/outline";
  import {UserPlusIcon } from "@heroicons/react/24/solid";
    import {
      Input,
      Button,
      CardHeader,
      Tabs,
      TabsHeader,
      Tab,
      Typography
    } from "@material-tailwind/react";
    import PropTypes from 'prop-types';

const BatchHeader=({toggleHandler,card})=>{
    const TABS = [
        {
          label: "All",
          value: "all",
        },
        {
          label: "Active",
          value: "Active",
        },
        {
          label: "Non-Active",
          value: "Non-Active",
        },
      ];
       
    return   <CardHeader floated={false} shadow={false} className="rounded-none">
    <div className="mb-8 flex items-center justify-between gap-8">
      <div>
        <Typography variant="h5" color="blue-gray">
          Batch list
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          See information about all Batches
        </Typography>
      </div>
      <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
        <Button onClick={toggleHandler}>        {card ? 'Table View' : 'Card View'}
</Button>
        <Button variant="outlined" size="sm">
          view all
        </Button>
        <Button className="flex items-center gap-3" size="sm">
          <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Create Batch
        </Button>
      </div>
    </div>
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <Tabs value="all" className="w-full ">
        <TabsHeader>
          {TABS.map(({ label, value }) => (
            <Tab key={value} value={value}>
              &nbsp;&nbsp;{label}&nbsp;&nbsp;
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
      <div className="w-full md:w-72">
        <Input
          label="Search"
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
        />
      </div>
    </div>
  </CardHeader>
}
BatchHeader.propTypes = {
    card: PropTypes.bool.isRequired,
    toggleHandler: PropTypes.func.isRequired,
  };
export default BatchHeader;
import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { Input } from "@material-tailwind/react";
const SearchBar = ({ setRows, TABLE_ROWS }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchQueryHandler = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  };
  useEffect(() => {
    // Filter rows based on search query
    if (searchQuery.trim() === "") {
      setRows(TABLE_ROWS); // Display all rows when search string is empty
    } else {
      const filteredRows = TABLE_ROWS.filter((row) => {
        return (
          (typeof row.employeeId === "number" &&
            row.employeeId.toString().includes(searchQuery)) ||
          row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          row.buisnessUnit.toLowerCase().includes(searchQuery.toLowerCase()) // Corrected property name
        );
      });

      setRows(filteredRows);
    }
  }, [searchQuery]);
  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="w-full md:w-72">
        <Input
          onChange={searchQueryHandler}
          label="Search"
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
        />
      </div>
    </div>
  );
};
SearchBar.propTypes = {
  TABLE_ROWS: PropTypes.array.isRequired,
  setRows: PropTypes.func.isRequired,
};
export default SearchBar;

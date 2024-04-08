import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { Input } from "@material-tailwind/react";

const SearchBar = ({ setRows, TABLE_ROWS, setSelectedRows,rows }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchQueryHandler = (e) => {
    setSearchQuery(e.target.value);
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
          row.buisnessUnit.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });

      setRows(filteredRows);
    }
  }, [searchQuery]);

  useEffect(() => {
    // Preserve selected rows when rows change due to search
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = {};

      Object.keys(prevSelectedRows).forEach((employeeId) => {
        const matchingRow = TABLE_ROWS.find(
          (row) => row.employeeId === parseInt(employeeId)
        );
        if (matchingRow) {
          newSelectedRows[employeeId] = prevSelectedRows[employeeId];
        }
      });

      return newSelectedRows;
    });
  }, [TABLE_ROWS]);
  useEffect(() => {
    // Preserve selected rows when rows change due to search
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = {};
  
      // Map selected status from previous selected rows to new filtered rows
      rows.forEach((row) => {
        if (prevSelectedRows[row.employeeId] !== undefined) {
          newSelectedRows[row.employeeId] = prevSelectedRows[row.employeeId];
        } else {
          // If a row was not previously selected, default it to false
          newSelectedRows[row.employeeId] = false;
        }
      });
  
      return newSelectedRows;
    });
  }, [rows]);
  

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
  rows: PropTypes.array.isRequired,
  setRows: PropTypes.func.isRequired,
  setSelectedRows: PropTypes.func.isRequired,
};

export default SearchBar;
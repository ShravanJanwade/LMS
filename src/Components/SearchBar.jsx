import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { Input } from "@material-tailwind/react";
// eslint-disable-next-line no-unused-vars
import React from 'react';
const SearchBar = ({ setRows, TABLE_ROWS, setSelectedRows, clearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [initialRows, setInitialRows] = useState(TABLE_ROWS);

  const searchQueryHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    // Filter rows based on search query
    if (searchQuery.trim() === "") {
      setRows(initialRows); // Display all rows when search string is empty
    } else {
      const filteredRows = initialRows.filter((row) => {
        return (
          (typeof row.userId === "number" &&
            row.userId.toString().includes(searchQuery)) ||
          row?.userName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          row?.businessUnit?.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });

      setRows(filteredRows);
    }

    // Preserve selected rows when search query changes
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = {};

      // Map selected status from previous selected rows to new filtered rows
      initialRows.forEach((row) => {
        if (prevSelectedRows[row.userId] !== undefined) {
          newSelectedRows[row.userId] = prevSelectedRows[row.userId];
        } else {
          // If a row was not previously selected, default it to false
          newSelectedRows[row.userId] = false;
        }
      });

      return newSelectedRows;
    });
  }, [searchQuery]);

  useEffect(() => {
    // Preserve initial rows when TABLE_ROWS changes
    setInitialRows(TABLE_ROWS);
  }, [TABLE_ROWS, setRows]);

  useEffect(() => {
    // Clear search query when clearSearch flag is true
    if (clearSearch) {
      setSearchQuery("");
    }
  }, [clearSearch]);

  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="w-full md:w-72">
        <Input
          value={searchQuery}
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
  setSelectedRows: PropTypes.func.isRequired,
  clearSearch: PropTypes.bool.isRequired,
};

export default SearchBar;

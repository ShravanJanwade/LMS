import React from "react";
import { Select, Option } from "@material-tailwind/react";
import PropTypes from "prop-types";

const SelectOption = ({ disabled, selectHandler, data, label }) => {
  const handleChange = (event) => {
    if (selectHandler) {
      selectHandler(event); // Pass the selected value to the selectHandler function
    }
  };
  const dataArray = Array.isArray(data) ? data : [data];

  return (
    <div className="w-full">
      <Select
        size="lg"
        label={label}
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            disabled: true,
            className:
              "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
          })
        }
        disabled={disabled}
        onChange={handleChange}
      >
        {dataArray.map((item) => {
          if (item.batchName) {
            // Check if the item has 'batchName', indicating it's the first type of data
            return (
              <Option
                key={item.batchId}
                value={item.batchId}
                className="flex items-center gap-2"
              >
                {item.batchName}
              </Option>
            );
          } else if (item.courses) {
            // Check if the item has 'courses', indicating it's the second type of data
            return item.courses.map((course) => (
              <Option
                key={course.courseId}
                value={course.courseId}
                className="flex items-center gap-2"
              >
                {course.courseName}
              </Option>
            ));
          }
          return null; // Return null for unrecognized data format
        })}
      </Select>
    </div>
  );
};

SelectOption.propTypes = {
  disabled: PropTypes.bool,
  selectHandler: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};

export default SelectOption;

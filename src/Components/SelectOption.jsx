import React from "react";
import { Select, Option } from "@material-tailwind/react";
import PropTypes from "prop-types";

const SelectOption = ({ disabled, selectHandler, data, label }) => {
  const handleChange = (event) => {
    if (selectHandler) {
      selectHandler(event); // Pass the selected value to the selectHandler function
    }
  };

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
        {data.length === 0 ? (
          <Option disabled>No data found</Option>
        ) : (
          data.map((option) => (
            <Option
              key={option.id}
              value={{ id: option.id, name: option.name }}
              className="flex items-center gap-2"
            >
              {option.name}
            </Option>
          ))
        )}
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

import PropTypes from "prop-types";
import { Typography, Avatar, Checkbox } from "@material-tailwind/react";
import { useState } from "react";
const EmployeeTable = ({ TABLE_HEAD, rows, setRows }) => {
  const [selectedAll, setSelectedAll] = useState(false);
  const selectAllHandler = () => {
    setSelectedAll((prev) => !prev);
    const allChecked = rows.every((row) => row.checked);
    setRows((prevRows) =>
      prevRows.map((row) => ({
        ...row,
        checked: !allChecked,
      }))
    );
  };
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
  return (
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
                  <Checkbox
                    color="green"
                    onChange={selectAllHandler}
                    checked={selectedAll}
                  />
                )}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(
          (
            { img, name, email, job, buisnessUnit, employeeId, checked },
            index
          ) => {
            const isLast = index === rows.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <div className="w-max">
                    <Typography variant="lead" size="sm">
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
                  <Checkbox
                    color="green"
                    checked={checked}
                    onChange={() => handleCheckboxChange(employeeId)}
                  />
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};
EmployeeTable.propTypes = {
  TABLE_HEAD: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  setRows: PropTypes.func.isRequired,
};

export default EmployeeTable;

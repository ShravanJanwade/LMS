import PropTypes from "prop-types";
import { Typography, Avatar, Checkbox } from "@material-tailwind/react";

const EmployeeTable = ({
  TABLE_HEAD,
  rows,
  selectedRows,
  setSelectedRows,
  handleCheckboxChange,
}) => {
  const selectAllHandler = () => {
    const visibleRows = rows.filter((row) => !row.isHidden);
    const allVisibleRowsChecked = visibleRows.every(
      (row) => selectedRows[row.employeeId]
    );

    // Toggle the selection status of visible rows
    const newSelectedRows = { ...selectedRows };

    visibleRows.forEach((row) => {
      newSelectedRows[row.employeeId] = !allVisibleRowsChecked;
    });

    // Update the selectedRows state directly to ensure the select all checkbox state is updated
    setSelectedRows(newSelectedRows);
  };

  return (
    <table className="w-full min-w-max table-auto text-left">
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
                    id="select-all-checkbox"
                    color="green"
                    onChange={selectAllHandler}
                    checked={Object.values(selectedRows).every(Boolean)}
                  />
                )}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(
          ({ img, name, email, job, buisnessUnit, employeeId }, index) => {
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
                    checked={selectedRows[employeeId]}
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
  selectedRows: PropTypes.object.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  setSelectedRows: PropTypes.func.isRequired,
};

export default EmployeeTable;

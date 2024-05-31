import React from 'react'

import PropTypes from "prop-types";
import { Drawer } from '@material-tailwind/react';
import AddOrDeleteEmployees from './AddOrDeleteEmployees';

export function EmployeeDrawer({
  openRight,
  closeDrawerRight,
}) {
  
  return (
    <React.Fragment>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
        style={{ width: "1500px" }}
        size={800}
      >
        <AddOrDeleteEmployees/>
      </Drawer>
    </React.Fragment>
  );
}
EmployeeDrawer.propTypes = {
  openRight: PropTypes.string.isRequired,
  closeDrawerRight: PropTypes.func.isRequired,
};

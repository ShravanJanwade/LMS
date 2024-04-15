// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const AdminDashBoard = () => {
  return (
    <div>
      <Link to="/lms/batches">
        <Button>View Batches</Button>
      </Link>
    </div>
  );
};
export default AdminDashBoard;

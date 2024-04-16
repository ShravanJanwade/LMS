import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { sendExcelUserFile } from '../Services/allEmployee';

const FileModal = ({ handleOpen, open, handleClose, data, setFetch }) => {
  const [file, setFile] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      setFile(selectedFile);
      setFileSelected(true); // Set fileSelected to true when a file is selected
    } else {
      // Show an error message or alert the user that only Excel files are allowed
      alert("Please select a valid Excel file.");
      // Optionally, you can clear the file input here
      e.target.value = null;
    }
  };

  const handleFileUpload = () => {
    // Do something with the selected file
    console.log("Selected file:", file);
    const id = sessionStorage.getItem("id");
    sendExcelUserFile(file, id);
    setFetch(prev => !prev);
    handleClose(); // Close the modal after file upload
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>{data.title}</DialogHeader>
        <DialogBody>
          {data.message}
          <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          {/* Conditionally render the button based on whether a file is selected */}
          {fileSelected && (
            <Button variant="gradient" color={`${data.delete ? "red" : "green"}`} onClick={handleFileUpload}>
              <span>{data.actionText}</span>
            </Button>
          )}
        </DialogFooter>
      </Dialog>
    </>
  );
};

FileModal.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  setFetch: PropTypes.func.isRequired,
};

export default FileModal;

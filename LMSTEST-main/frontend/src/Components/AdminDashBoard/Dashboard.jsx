import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Modules } from "./Modules";
import { ProfilePage } from "./ProfilePage";
import { BulkUploadForm } from "./Bulkupload";
import { Bulkuploaddialog } from "./Bulkuploaddialog";
import { LogoutDialog } from "./LogoutDialog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserListPage from "./Userslist";

const Dashboard = () => {
  const [viewProfile, setViewProfile] = useState(false);
  const [BulkuploadOpen, setBulkuploadOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [users, setUsers] = useState([false]);
  const cards = [
    "Add Learning Plan",
    " Add Course",
    "Bulk upload Course and Topics",
    "Learning progress"
  ];

  const CardRow = ({ cards }) => (
    <div className="flex flex-wrap justify-center gap-0">
      {cards.map((CardName, index) => (
        <Modules key={index} CardName={CardName} />
      ))}
    </div>
  );

  const chunkedCards = [];
  for (let i = 0; i < cards.length; i += 4) {
    chunkedCards.push(cards.slice(i, i + 4));
  }

  return (
    <div className="flex w-full h-full">
      <Sidebar
        setViewProfile={setViewProfile}
        setBulkuploadOpen={setBulkuploadOpen}
        BulkuploadOpen={BulkuploadOpen}
        setShowLogoutPopup={setShowLogoutPopup}
        showLogoutPopup={showLogoutPopup}
        setUsers={setUsers}
        users={users}
      />
      <div className="flex flex-col items-center justify-between flex-grow gap-0">
        {chunkedCards.map((row, index) => (
          <CardRow key={index} cards={row} />
        ))}
        {viewProfile && <ProfilePage />}
      </div>
      {BulkuploadOpen && (
        <div className="flex flex-col flex-grow">
          <Bulkuploaddialog setBulkuploadOpen={setBulkuploadOpen} />
          <BulkUploadForm setBulkuploadOpen={setBulkuploadOpen} />
        </div>
      )}
      {showLogoutPopup && (
        <div className="flex flex-col flex-grow">
          <LogoutDialog
            setShowLogoutPopup={setShowLogoutPopup}
            showLogoutPopup={showLogoutPopup}
          />
        </div>
      )}
      <Routes>
        <Route path="/dashboard/admin/userlist" element={<UserListPage />} />
      </Routes>
    </div>
  );
};

export default Dashboard;

import React from "react";
import {
  AppContent,
  AppHeader,
  AppSidebar,
} from "../../components/Admin/index";

const AdminPage = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      ></link>
      {/* <AppSidebar /> */}
      <div className="">
        <AppHeader />
        <div className="body flex-grow-1 px-2">
          <AppContent />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

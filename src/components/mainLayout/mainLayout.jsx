import React from "react";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <div className="mt-5 p-4 md:flex gap-x-5">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;

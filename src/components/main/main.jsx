import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "../sidebar/sidebar";

function Main() {
  return (
    <>
      <Sidebar />
      <div className="w-full md:w-3/4 rounded-md  shadow-sm shadow-gray-400 my-5 p-4">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default Main;

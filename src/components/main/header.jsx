import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi2";
import { FiMessageCircle } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import { useSelector } from "react-redux";

function Header() {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div>
      <ul className="flex items-center justify-around ">
        <li>
          <NavLink
            to="users"
            className={`text-gray-600 font-semibold text-sm md:text-base ${
              darkMode === "dark" ? "text-white" : "text-gray-600"
            }`}
          >
            <HiOutlineUsers className="inline-block ml-2 text-2xl" />
            کاربران
          </NavLink>
        </li>
        <li>
          <NavLink
            to="infos"
            className={`font-semibold text-sm md:text-base ${
              darkMode === "dark" ? "text-white" : "text-gray-600"
            }`}
          >
            <FiInfo className="inline-block ml-2 text-2xl" />
            ثبت کاربر جدید
          </NavLink>
        </li>
        <li>
          <NavLink
            to="courses"
            className={`font-semibold text-sm md:text-base ${
              darkMode === "dark" ? "text-white" : "text-gray-600"
            }`}
          >
            <IoNewspaperOutline className="inline-block ml-2 text-2xl" />
            دوره ها
          </NavLink>
        </li>
        <li>
          <NavLink
            to="blogs"
            className={`font-semibold text-sm md:text-base ${
              darkMode === "dark" ? "text-white" : "text-gray-600"
            }`}
          >
            <FiMessageCircle className="inline-block ml-2 text-2xl" />
            وبلاگ ها
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoIosSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/login/loginSlice";
import { toggleTheme } from "../../features/theme/themeSlice";

function Header() {
  const { isAuth, user } = useSelector((state) => state.login);
  const { darkMode } = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div
      className={`p-4 shadow-sm shadow-gray-200  flex items-center justify-between ${
        darkMode === "dark" ? "bg-gray-800 text-white" : "bg-gray-50"
      }`}
    >
      <div>
        {/* menu icon */}
        <IoMenu className="text-3xl cursor-pointer" />
      </div>
      <ul className="flex items-center gap-x-5 ">
        <li className="cursor-pointer">
          {/* dark mode */}
          {darkMode === "dark" ? (
            <IoIosSunny
              className="text-2xl"
              onClick={() => dispatch(toggleTheme({ theme: "light" }))}
            />
          ) : (
            <FaRegMoon
              className="text-2xl"
              onClick={() => dispatch(toggleTheme({ theme: "dark" }))}
            />
          )}
        </li>

        <li className="relative cursor-pointer">
          {/* notifications */}
          <span className="h-[15px] p-1 flex items-center justify-center rounded-full bg-red-500 text-white absolute top-[-5px] left-0 text-xs ">
            1
          </span>
          <HiOutlineBellAlert className="text-2xl" />
        </li>

        <li className="py-1 flex items-center">
          {isAuth ? (
            <>
              <span
                className={`mb-1 ml-2  text-sm font-semibold ${
                  darkMode === "dark" ? "text-white" : "text-gray-600"
                }`}
              >
                {user.username}
              </span>
              <Link>
                <IoExitOutline
                  className="text-2xl text-red-500"
                  onClick={handleLogout}
                />
              </Link>
            </>
          ) : (
            <Link
              to="login"
              className={`mb-1 ml-2 text-gray-600 text-sm font-semibold ${
                darkMode === "dark" ? "text-white" : "text-gray-600"
              }`}
            >
              ورود
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Header;

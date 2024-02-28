import React from "react";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { MdModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";

function Sidebar() {
  const { user } = useSelector((state) => state.login);

  return (
    <div className="w-full md:w-1/4  my-5 p-4">
      <img
        src="/assets/user.png"
        alt=""
        className="w-32 rounded-full ring-4 ring-green-500 mx-auto"
      />
      <div className="w-full rounded-md p-4 shadow-sm shadow-gray-400 mt-[-30px]">
        <div className="mt-[30px] divide-y space-y-5 text-right ">
          <p className="font-semibold text-center">{user.usernme}</p>
          <div>
            <CiUser className="inline-block text-xl ml-1" />
            <span>نام کاربری : </span>
            <span>{user.username}</span>
          </div>

          <div>
            <CiUser className="inline-block text-xl ml-1" />
            <span>ایمیل : </span>
            <span>{user.email}</span>
          </div>

          <div>
            <CiBookmark className="inline-block text-xl ml-1" />
            <span> تعداد دوره ها : </span>
            <span>(10)</span>
          </div>

          <button className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 transition-all">
            ویرایش اطلاعات
            <MdModeEdit className="inline-block ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

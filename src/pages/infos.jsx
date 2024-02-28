import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../features/users/usersSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Infos() {
  const [inputVal, setInputVal] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    city: "",
    age: "",
  });

  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  const handleChanges = (event) => {
    setInputVal((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleAddNewUser = (e) => {
    e.preventDefault();
    if (
      inputVal.firstname &&
      inputVal.lastname &&
      inputVal.username &&
      inputVal.email &&
      inputVal.city &&
      inputVal.age
    ) {
      dispatch(addUser(inputVal));
      toast.success("کاربر با موفقیت ثبت شد");
      setInputVal({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        city: "",
        age: "",
      });
    } else {
      toast.error("لطفا همه ی فیلدهارا پر کنید");
    }
  };

  return (
    <div className="mt-10">
      <form action="" className="space-y-5" onSubmit={handleAddNewUser}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="نام "
            value={inputVal.firstname}
            name="firstname"
            className="focus:outline-none border border-gray-200 rounded-sm p-2 w-full focus:border-blue-400 text-black"
            onChange={handleChanges}
          />
          <input
            type="text"
            placeholder=" نام خانوادگی"
            value={inputVal.lastname}
            name="lastname"
            className="focus:outline-none border border-gray-200 rounded-sm p-2 w-full focus:border-blue-400 text-black"
            onChange={handleChanges}
          />
          <input
            type="text"
            placeholder=" نام کاربری"
            value={inputVal.username}
            name="username"
            className="focus:outline-none border border-gray-200 rounded-sm p-2 w-full focus:border-blue-400 text-black"
            onChange={handleChanges}
          />
          <input
            type="text"
            placeholder="ایمیل"
            value={inputVal.email}
            name="email"
            className="focus:outline-none border border-gray-200 rounded-sm p-2 w-full focus:border-blue-400 text-black"
            onChange={handleChanges}
          />
          <input
            type="text"
            placeholder="شهر"
            value={inputVal.city}
            name="city"
            className="focus:outline-none border border-gray-200 rounded-sm p-2 w-full focus:border-blue-400 text-black"
            onChange={handleChanges}
          />
          <input
            type="text"
            placeholder="سن"
            value={inputVal.age}
            name="age"
            className="focus:outline-none border border-gray-200 rounded-sm p-2 w-full focus:border-blue-400 text-black"
            onChange={handleChanges}
          />
        </div>

        <div className="flex items-end gap-x-2">
          <div className="w-32 space-y-2 mt-10">
            <h2
              className={`text-center font-semibold ${
                darkMode === "dark" ? "text-white" : "text-gray-600"
              }`}
            >
              عکس پروفایل
            </h2>
            <img
              src="assets/user.png"
              alt=""
              className="ring ring-green-400 rounded-full"
            />
          </div>
          <button className="bg-blue-600 text-white rounded-sm w-full p-2 flex items-center justify-center">
            ثبت اطلاعات
          </button>
        </div>
      </form>
    </div>
  );
}

export default Infos;

import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/users/usersSlice";
import Swal from "sweetalert2";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

function UserItem({ _id, firstname, lastname, email }) {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    Swal.fire({
      title: "آیا از حذف اطمینان دارید؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "بله",
      denyButtonText: "خیر",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(_id));
        Swal.fire({ title: "کاربر با موفقیت حذف شد", icon: "success" });
      }
    });
  };

  const handleShowUserInfo = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <div className="space-y-0 ">
          <div
            className="w-full z-40 bg-gray-900 fixed top-0 left-0 h-screen opacity-50"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="md:w-[50%] w-[90%] bg-white shadow-sm shadow-gray-500 fixed top-10 mx-auto rounded-md z-50 ">
            <div className="w-full bg-blue-400 p-4 rounded-t-md flex items-center justify-between text-white ">
              <h2 className="font-semibold">اطلاعات کاربر</h2>
              <IoIosCloseCircleOutline
                className="text-2xl cursor-pointer"
                onClick={() => setShowModal(false)}
              />
            </div>
            <div className="p-4">
              <form action="" className="space-y-5">
                <input
                  type="text"
                  value={firstname}
                  className="w-full px-4 py-1 rounded-sm border border-gray-300 focus:outline-none focus:border-blue-400 text-black"
                  readOnly="true"
                />
                <input
                  type="text"
                  value={lastname}
                  className="w-full px-4 py-1 rounded-sm border border-gray-300 focus:outline-none focus:border-blue-400 text-black"
                  readOnly="true"
                />
                <input
                  type="text"
                  value={email}
                  className="w-full px-4 py-1 rounded-sm border border-gray-300 focus:outline-none focus:border-blue-400 text-black"
                  readOnly="true"
                />
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="w-full p-2 border border-gray-200 rounded-md md:flex items-center">
        <div className="flex">
          <img
            src="/assets/user.png"
            alt=""
            className="w-[50px] ring rounded-full ring-orange-600"
          />
          <div className="mr-4">
            <p>
              {firstname}
              &nbsp;
              {lastname}
            </p>
            <p>{email}</p>
          </div>
        </div>
        <div className="mr-auto flex gap-x-2 justify-end">
          <button
            className="bg-blue-500 text-white p-2 rounded-md  hover:bg-blue-600 transition-all block md:w-auto my-2 text-sm md:text-base"
            onClick={handleShowUserInfo}
          >
            اطلاعات
          </button>

          <button
            className="bg-red-500 text-white p-2 rounded-md  hover:bg-red-600 transition-all block md:w-auto my-2 text-sm md:text-base"
            onClick={handleDeleteUser}
          >
            حذف
          </button>
        </div>
      </div>
    </>
  );
}

export default UserItem;

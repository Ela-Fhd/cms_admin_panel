import { useDispatch, useSelector } from "react-redux";
import UserItem from "../components/userItem/userItem";
import { useEffect } from "react";
import { fetchUsers } from "../features/users/usersSlice";
import Loading from "../components/loading/loading";

function Users() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) return <Loading text="users" />;

  return (
    <div>
      <form action="" className="mt-10" onSubmit={(e) => e.preventDefault()}>
        <div className="flex gap-x-2">
          <input
            type="text"
            placeholder="نام یا ایمیل کاربر را وارد کنید..."
            className="focus:outline-none border p-2  border-gray-200 rounded-md w-4/5 text-black"
          />
          <button className="bg-red-500 text-white p-2 rounded-md  hover:bg-red-600 transition-all w-1/5 text-sm md:text-base">
            حذف کاربر
          </button>
        </div>
      </form>

      <div className="mt-10 space-y-3">
        {users.map((user) => {
          return <UserItem key={user._id} {...user} />;
        })}
      </div>
    </div>
  );
}

export default Users;

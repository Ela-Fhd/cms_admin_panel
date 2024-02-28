import { MdModeEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteBlog } from "../../features/blogs/blogsSlice";

function BlogItem({ _id, title, category, views, desc }) {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  const handleDeleteBlog = () => {
    Swal.fire({
      title: "آیا از حذف اطمینان دارید؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "بله",
      denyButtonText: "خیر",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteBlog(_id));
        Swal.fire({ title: "کاربر با موفقیت حذف شد", icon: "success" });
      }
    });
  };

  return (
    <div className="w-full p-2 border border-gray-200 rounded-md ">
      <div className="flex">
        <img
          src="/assets/blog-1.png"
          alt=""
          className="w-[200px] rounded-md ring ring-purple-200"
        />
        <div className="mr-4">
          <p className="font-semibold text-purple-500 text-lg">{title}</p>
          <p className="text-sm md:text-base">{desc}</p>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex gap-x-5">
          <div
            className={`${
              darkMode === "dark" ? "text-green-500" : "text-gray-600"
            } `}
          >
            <FaRegEye className="inline-block ml-1" />
            <span className="text-sm">{views}</span>
          </div>

          <div
            className={`${
              darkMode === "dark" ? "text-green-500" : "text-gray-600"
            } `}
          >
            <BiCategory className="inline-block ml-1" />
            <span className="text-sm">دسته بندی : {category}</span>
          </div>
        </div>

        <div className="flex gap-x-2">
          <button className="h-10 bg-blue-500 text-white p-2 rounded-md  hover:bg-blue-600 transition-all block md:w-auto my-2 text-sm md:text-base">
            ویرایش
            <MdModeEdit className="inline-block ml-1" />
          </button>

          <button
            className="h-10 bg-red-500 text-white p-2 rounded-md  hover:bg-red-600 transition-all block md:w-auto my-2 text-sm md:text-base"
            onClick={handleDeleteBlog}
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;

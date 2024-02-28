import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deleteCourse } from "../../features/courses/coursesSlice";

function CourseItem({ _id, title, price, category, registersCount, desc }) {
  const dispatch = useDispatch();

  const handleDeleteCourse = () => {
    Swal.fire({
      title: "آیا از حذف اطمینان دارید؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "بله",
      denyButtonText: "خیر",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCourse(_id));
        Swal.fire({ title: "کاربر با موفقیت حذف شد", icon: "success" });
      }
    });
  };

  return (
    <div className="w-full p-2 border border-gray-200 rounded-md md:flex justify-between">
      <div className="flex">
        <img
          src="/assets/redux.jpg"
          alt=""
          className="w-[200px] h-[150px] rounded-md ring ring-purple-200"
        />
        <div className="mr-4 space-y-3">
          <p className="font-semibold text-purple-500 text-lg">{title}</p>
          <p className="text-sm md:text-base">{desc}</p>
          <p className="text-sm md:text-base">
            تعداد ثبتنامی ها : {registersCount}
          </p>
          <p className="text-sm md:text-base">قیمت دوره : {price}</p>
          <p className="text-sm md:text-base">دسته بندی : {category}</p>
        </div>
      </div>
      <div className="flex gap-x-2 items-end justify-center">
        <button className="h-10 bg-green-500 text-white p-2 rounded-md  hover:bg-green-600 transition-all block md:w-auto my-2 text-sm md:text-base">
          پیام ها
        </button>

        <button className="h-10 bg-blue-500 text-white p-2 rounded-md  hover:bg-blue-600 transition-all block md:w-auto my-2 text-sm md:text-base">
          اطلاعات
        </button>

        <button
          className="h-10 bg-red-500 text-white p-2 rounded-md  hover:bg-red-600 transition-all block md:w-auto my-2 text-sm md:text-base"
          onClick={handleDeleteCourse}
        >
          حذف
        </button>
      </div>
    </div>
  );
}

export default CourseItem;

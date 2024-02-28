import { useDispatch, useSelector } from "react-redux";
import CourseItem from "../components/courseItem/courseItem";
import { useEffect } from "react";
import { fetchCourses } from "../features/courses/coursesSlice";
import Loading from "../components/loading/loading";

function Courses() {
  const dispatch = useDispatch();
  const { courses, loading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  if (loading) return <Loading text="courses" />;

  return (
    <div className="my-10 space-y-5">
      {courses.map((course) => {
        return <CourseItem key={course._id} {...course} />;
      })}
    </div>
  );
}

export default Courses;

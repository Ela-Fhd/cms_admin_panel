import { useDispatch, useSelector } from "react-redux";
import BlogItem from "../components/blogItem/blogItem";
import { useEffect } from "react";
import { fetchBlogs } from "../features/blogs/blogsSlice";
import Loading from "../components/loading/loading";

function Blogs() {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  if (loading) return <Loading text="blogs" />;

  return (
    <div className="my-10 space-y-5">
      {blogs.map((blog) => {
        return <BlogItem key={blog._id} {...blog} />;
      })}
    </div>
  );
}

export default Blogs;

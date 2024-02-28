import "./App.css";
import Main from "./components/main/main";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/mainLayout/mainLayout";
import Users from "./pages/users";
import Blogs from "./pages/blogs";
import Courses from "./pages/courses";
import Infos from "./pages/infos";
import Login from "./pages/login";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/landing";
import { useSelector } from "react-redux";

function App() {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div
      className={`w-full min-h-screen ${
        darkMode === "dark" ? "bg-gray-800 text-white" : ""
      }
`}
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          >
            <Route index element={<Users />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="infos" element={<Infos />}></Route>
            <Route path="blogs" element={<Blogs />}></Route>
            <Route path="courses" element={<Courses />}></Route>
          </Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

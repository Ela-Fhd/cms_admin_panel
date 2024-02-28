import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/login/loginSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const fake_user = {
    username: "test",
    password: "12345$",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("test@gmail.com");

  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      if (username === fake_user.username && password === fake_user.password) {
        dispatch(login({ username, email, password }));
        toast.success("با موفقیت وارد شدید");
      } else toast.error("نام کاربری یا رمزعبور اشتباه است");
    } else {
      toast.error("لطفا همه ی فیلد هارا پر کنید");
    }
  };

  useEffect(() => {
    if (isAuth) navigate("/", { replace: true });
  }, [isAuth]);

  return (
    <>
      <form
        action=""
        className="grid grid-cols-1 gap-y-5  mx-auto w-[90%] md:w-[40%]"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          placeholder="نام کاربری"
          className="block border border-gray-200 px-2 py-1  rounded-sm focus:outline-none text-black"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="رمز عبور"
          className="block border border-gray-200 px-2 py-1 rounded-sm focus:outline-none text-black"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="true"
        />
        <button className="block w-full bg-green-500 text-white py-2 rounded-sm">
          ورود
        </button>
      </form>
    </>
  );
}

export default Login;

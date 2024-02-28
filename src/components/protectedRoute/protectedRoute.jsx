import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuth } = useSelector((state) => state.login);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, [isAuth, navigate]);

  return isAuth ? children : null;
}

export default ProtectedRoute;

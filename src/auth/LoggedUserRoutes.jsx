import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AppContext from "../contexts/AppContext";

function ProtectedRoute() {
  const { session } = useContext(AppContext);

  if (!session) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";
import { storage } from "@/utils/storage";

const AuthenticatedRoute = () => {
  const token = storage.getToken();
  if (token) {
    return <Outlet />;
  }
  // TODO: redirict to registration page when it is added. or redirict to home and show registration modal, if modal approach is used.
  return <Navigate to="/" />;
};
export default AuthenticatedRoute;

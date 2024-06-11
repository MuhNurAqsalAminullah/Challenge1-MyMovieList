import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const email = localStorage.getItem("email");
  return !!email;
};

export const ProtectRouteOutlet = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to={"/"} />;
};

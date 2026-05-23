import { useSelector } from "react-redux";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";

function MainRoutes() {
  const token = useSelector((state) => state.counter.token);

  return token ? <AppRoutes /> : <AuthRoutes />;
}

export default MainRoutes;

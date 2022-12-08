import Profile from "./Profile";
import ChangePW from "./password";
import Home from "./Home";

const routes = [
  { path: "/profile", exact: true, name: "" },
  {
    path: "/profile",
    name: "Thông tin tài khoản",
    element: Profile,
  },
  {
    path: "/pw",
    name: "Mật khẩu",
    element: ChangePW,
  },
  {
    path: "/home",
    name: "Trang chủ",
    element: Home,
  },
];

export default routes;

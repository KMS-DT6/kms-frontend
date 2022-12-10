import Profile from "./Profile";
import ChangePW from "./password";
import Home from "./Home";
import FootballPitchDetail from "./FootballPitchDetail";

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
  {
    path: "/admin/profile",
    name: "Profile",
    element: Profile,
  },
  {
    path: "/admin/pw",
    name: "PassWord",
    element: ChangePW,
  },
  {
    path: "/footballpitchdetail",
    name: "FootballPitchDetail",
    element: FootballPitchDetail,
  },
];

export default routes;

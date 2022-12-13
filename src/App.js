import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage"; 
import Menu from "./components/Menu";
// import Dashboard from './components/Dashboard';
import Header from "./components/Header";
import MyProfile from "./components/User/MyProfile";
import TurfPage from "./pages/TurfPage";
import Pitches from "./components/FootballPitches/Pitches";
import PitchPage from "./pages/PitchPage";
import PitchDetailPage from "./pages/PitchDetailPage";
import SchedulePage from "./pages/SchedulePage";
import MyProfilePage from "./pages/MyProfilePage";
import AdminPage from "./pages/AdminPage/AdminPage";
import ListSubFootballPitchPage from './pages/SubFootballPitch/ListSubFootballPitch';
import RegisterPage from './pages/Register/register';
import HistorybookingPage from "./pages/Booking/HistorybookingPage";
import FootballPitchAdminManagePage from "./pages/FootballPitchAdminManagePage";
import ListOtherServicePage from "./pages/OtherService/ListOtherServicePage"





// import TurfPage from "./pages/TurfPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pitch/:id" element={<PitchDetailPage />} />
        <Route path="/list-sub-pitch" element={<ListSubFootballPitchPage />} />
        <Route path="/turf/:id" element={<TurfPage />} />
        {/* <Route path="/" element={<PitchPage />} /> */}
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/pitch" element={<PitchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my" element={<MyProfilePage />} />
        <Route path="/historybooking" element={<HistorybookingPage />} />
        {/* <Route path="/schedule" element={<SchedulePage />} /> */}
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path="/manage" element={<FootballPitchAdminManagePage />} />
        <Route path="/list-other-service" element={<ListOtherServicePage />} />
        


        {/* <Route path="/turf/:id" element={<TurfPage />} />
        <Route path="/schedule/:turfId" element={<SchedulePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

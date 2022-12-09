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
import ListPitchPage from './pages/FootballPitchAdmin/ListPitch';
import AdminPage from "./pages/AdminPage/AdminPage";
import ListSubFootballPitchPage from './pages/SubFootballPitch/ListSubFootballPitch';
import UpdatePitchPage from './pages/FootballPitchAdmin/UpdatePitch';
import CreatePitchPage from './pages/FootballPitchAdmin/CreatePitch';




// import TurfPage from "./pages/TurfPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pitch/:id" element={<PitchDetailPage />} />
        <Route path="/list-sub-pitch/:id" element={<ListSubFootballPitchPage />} />
        <Route path="/turf/:id" element={<TurfPage />} />
        <Route path="/pitch" element={<PitchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my" element={<MyProfilePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path='/football-pitch-admin' element={<ListPitchPage/>} />
        <Route path='/pitch-admin-update/:id' element={<UpdatePitchPage/>} />
        <Route path='/pitch-admin-create' element={<CreatePitchPage/>} />


        {/* <Route path="/turf/:id" element={<TurfPage />} />
        <Route path="/schedule/:turfId" element={<SchedulePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

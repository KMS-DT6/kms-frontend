import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Menu from './components/Menu';
// import Dashboard from './components/Dashboard';
import Header from './components/Header';
import MyProfile from './components/User/MyProfile';
import TurfPage from './pages/TurfPage';
import Pitches from './components/FootballPitches/Pitches';
import PitchPage from './pages/PitchPage';
import PitchDetailPage from './pages/PitchDetailPage';
import SchedulePage from './pages/SchedulePage';
import MyProfilePage from './pages/MyProfilePage';
import PitchManage from './pages/PitchManage';
import PitchManageDetailPage from './pages/PitchManageDetail';


// import TurfPage from "./pages/TurfPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pitch/:id" element={<PitchDetailPage />} />
        <Route path="/manage-pitch/:id" element={<PitchManageDetailPage />} />
        <Route path="/turf/:id" element={<TurfPage />} />
        <Route path="/pitch" element={<PitchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/my' element={<MyProfilePage />} />
        <Route path='/schedule' element={<SchedulePage/>} />
        <Route path='/football-pitch-admin' element={<PitchManage/>} />
        {/* <Route path="/turf/:id" element={<TurfPage />} />
        <Route path="/schedule/:turfId" element={<SchedulePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
// import TurfPage from "./pages/TurfPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/turf/:id" element={<TurfPage />} />
        <Route path="/schedule/:turfId" element={<SchedulePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

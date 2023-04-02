import './App.css';
import Restaurants from './Pages/Restaurants';
import { Route, Routes, Navigate } from "react-router-dom";
import Registration from "./Pages/Registration";
import UserProfile from "./Pages/User";
import RegistrationMessage from "./Pages/Registration/RegistrationMessage";
import Login from "./Pages/Registration/Login";
import Verification from "./Pages/Registration/Verification";

function App() {
  return (
      <div>
          <Routes>
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/registration-message" element={<RegistrationMessage />} />
              <Route path="/verification" element={<Verification />} />
          </Routes>
      </div>
  );
}

export default App;

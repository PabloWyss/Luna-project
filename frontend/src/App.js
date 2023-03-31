import './App.css';
import Restaurants from './Pages/Restaurants';
import { Route, Routes } from "react-router-dom";
import Registration from "./Pages/Registration";
import UserProfile from "./Pages/User/User";

function App() {
  return (
      <div>
          <Routes>
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/profile" element={<UserProfile />} />
          </Routes>
      </div>
  );
}

export default App;

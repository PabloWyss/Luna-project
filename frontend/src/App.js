import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';
import Search from './Pages/Search/Search';
import RestaurantsGrid from './Pages/Search/RestaurantsGrid/RestaurantsGrid'
import ReviewsGrid from './Pages/Search/ReviewsGrid/ReviewsGrid'
import UsersGrid from './Pages/Search/UsersGrid/UsersGrid'
import User from './Pages/User'
import Login from "./Pages/Registration/Login";
import Registration from "./Pages/Registration";
import RegistrationMessage from "./Pages/Registration/RegistrationMessage";
import Verification from "./Pages/Registration/Verification";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/search" element={<Search />}>
                    <Route index element={<Navigate to="/search/restaurants" replace />} />
                    <Route path="restaurants" element={<RestaurantsGrid />} />
                    <Route path="reviews" element={<ReviewsGrid />} />
                    <Route path="users" element={<UsersGrid />} />
                </Route>
                <Route path="/profile" element={<User />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/registration-message" element={<RegistrationMessage />} />
                <Route path="/verification" element={<Verification />} />
            </Routes>
        </div>
    );
}

export default App;

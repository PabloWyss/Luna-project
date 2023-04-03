import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';
import Search from './Pages/Search/Search';
import RestaurantsGrid from './Pages/Search/RestaurantsGrid/RestaurantsGrid'
import ReviewsGrid from './Pages/Search/ReviewsGrid/ReviewsGrid'
import UsersGrid from './Pages/Search/UsersGrid/UsersGrid'
import Login from "./Pages/Registration/Login";
import Registration from "./Pages/Registration";
import UserProfile from "./Pages/User/User";
import RegistrationMessage from "./Pages/Registration/RegistrationMessage";
import Verification from "./Pages/Registration/Verification";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Restaurant from './Pages/Restaurant/Restaurant';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/search" element={<Search />}>
                    <Route index element={<Navigate to="/search/restaurants" replace />} />
                    <Route path="restaurants" element={<RestaurantsGrid />} />
                    <Route path="reviews" element={<ReviewsGrid />} />
                    <Route path="users" element={<UsersGrid />} />
                </Route>
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/registration-message" element={<RegistrationMessage />} />
                <Route path="/verification" element={<Verification />} />
                <Route path="/restaurant" element={<Restaurant />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

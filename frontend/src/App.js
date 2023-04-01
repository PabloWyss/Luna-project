import './App.css';
import { Route, Routes } from "react-router-dom";
import Search from './Pages/Search/Search';
import RestaurantsGrid from './Pages/Search/RestaurantsGrid/RestaurantsGrid'
import ReviewsGrid from './Pages/Search/ReviewsGrid/ReviewsGrid'
import UsersGrid from './Pages/Search/UsersGrid/UsersGrid'
import Registration from "./Pages/Registration";
import User from './Pages/User'
import Homepage from './Pages/Homepage/Homepage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/search" element={<Search />}>
                    <Route index element={<RestaurantsGrid />} />
                    <Route path="restaurants" element={<RestaurantsGrid />} />
                    <Route path="reviews" element={<ReviewsGrid />} />
                    <Route path="users" element={<UsersGrid />} />
                </Route>
                <Route path="/registration" element={<Registration />} />
                <Route path="/profile" element={<User />} />
            </Routes>
        </div>
    );
}

export default App;

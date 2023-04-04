import UserCard from './UserCard/UserCard'
import {useOutletContext} from "react-router-dom";
import RestaurantCard from "../RestaurantsGrid/RestaurantCard/RestaurantCard";

const UsersGrid = () => {

    const [listOfRestaurantFiltered,listOfUsersFiltered] = useOutletContext();
  return (
    <>
        {listOfUsersFiltered.map((user,index)=>{
            return <UserCard user={user} key={index}/>
        })}
    </>
  );
}

export default UsersGrid;
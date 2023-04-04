import RestaurantCard from './RestaurantCard/RestaurantCard'
import lunaAPI from "../../../Axios/lunaApi";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const RestaurantsGrid = () => {
    const navigate = useNavigate()
    const [listOfRestaurants,setListOfRestaurants] = useState([])
    const obtainAllRestaurants = async () => {
    let response = await lunaAPI.get('/restaurants/')
        try {
            setListOfRestaurants(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(listOfRestaurants)

    useEffect(() => {
        obtainAllRestaurants()
    },[])

  return (
    <>
        {listOfRestaurants.map((restaurant)=>{
            return <RestaurantCard restaurant={restaurant}/>
        })}
    </>
  );
}

export default RestaurantsGrid;
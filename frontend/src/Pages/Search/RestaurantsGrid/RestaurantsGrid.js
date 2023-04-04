import RestaurantCard from './RestaurantCard/RestaurantCard'
import lunaAPI from "../../../Axios/lunaApi";
import {useEffect, useState} from "react";

const RestaurantsGrid = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([])
    const obtainAllRestaurants = async () => {
    let response = await lunaAPI.get('/restaurants/')
        try {
            setListOfRestaurants(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtainAllRestaurants()
    },[])

  return (
    <>
        {listOfRestaurants.map((restaurant,index)=>{
            return <RestaurantCard restaurant={restaurant} key={index}/>
        })}
    </>
  );
}

export default RestaurantsGrid;
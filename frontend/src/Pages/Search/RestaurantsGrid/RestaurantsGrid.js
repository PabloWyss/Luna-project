import RestaurantCard from './RestaurantCard/RestaurantCard'
import lunaAPI from "../../../Axios/lunaApi";
import {useEffect, useState} from "react";
import {useOutletContext} from "react-router-dom";

const RestaurantsGrid = () => {

    const [listOfRestaurants,setListOfRestaurants] = useOutletContext();

  return (
    <>
        {listOfRestaurants.map((restaurant,index)=>{
            return <RestaurantCard restaurant={restaurant} key={index}/>
        })}
    </>
  );
}

export default RestaurantsGrid;
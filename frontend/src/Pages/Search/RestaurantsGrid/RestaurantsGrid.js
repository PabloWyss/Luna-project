import RestaurantCard from './RestaurantCard/RestaurantCard'
import { useOutletContext } from "react-router-dom";

const RestaurantsGrid = () => {
  const [listOfRestaurants] = useOutletContext();


  console.log(listOfRestaurants)

  return (
    <>
      {listOfRestaurants.map((restaurant, index) => {
        return <RestaurantCard restaurant={restaurant} key={index} reviews={restaurant.reviews} />
      })}
    </>
  );
}

export default RestaurantsGrid;
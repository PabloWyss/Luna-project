import RestaurantCard from './RestaurantCard/RestaurantCard'
import { useOutletContext } from "react-router-dom";

const RestaurantsGrid = () => {
  const [listOfRestaurants] = useOutletContext();

  return (
    <>
      {listOfRestaurants.map((restaurant, index) => {
        return <RestaurantCard restaurant={restaurant} key={index} />
      })}
    </>
  );
}

export default RestaurantsGrid;
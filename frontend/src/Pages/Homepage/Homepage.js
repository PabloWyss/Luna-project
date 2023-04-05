import { Grid, HomeBanner, HomeBody, Main, Underline } from "./HomepageStyles";
import RestaurantsGrid from '../Search/RestaurantsGrid/RestaurantsGrid';
import { useEffect, useState } from "react";
import lunaAPI from "../../Axios/lunaApi";
import RestaurantCard from "../Search/RestaurantsGrid/RestaurantCard/RestaurantCard";

const Homepage = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([])

  useEffect(() => {
    const getFourBestRatedRestaurants = async () => {
      try {
        const response = await lunaAPI.get(`/restaurants/`)
        setListOfRestaurants(response.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    getFourBestRatedRestaurants();
  }, [])

  const sortedList = listOfRestaurants?.sort((a, b) => b.rating - a.rating);
  const topFourList = sortedList?.slice(0, 4);
  console.log(topFourList);

  return (

    <Main>
      <HomeBanner>
        <div>SearchBar</div>
      </HomeBanner>
      <HomeBody>
        <p>Best rated restaurants</p>
        <Underline></Underline>
        <Grid>
          {
            topFourList?.map(restaurant => {
              return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            })
          }
        </Grid>
      </HomeBody>
    </Main >
  );
}

export default Homepage;
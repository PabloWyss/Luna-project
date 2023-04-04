import RestaurantCard from "../Search/RestaurantsGrid/RestaurantCard/RestaurantCard";
import { Grid, HomeBanner, HomeBody, Main, Underline } from "./HomepageStyles";

const Homepage = () => {
  return (

    <Main>
      <HomeBanner>
        <div>SearchBar</div>
      </HomeBanner>
      <HomeBody>
        <p>Best rated restaurants</p>
        <Underline></Underline>
        <Grid>
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </Grid>
      </HomeBody>
    </Main >
  );
}

export default Homepage;
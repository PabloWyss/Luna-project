import arrow from "../../Assets/arrow.svg";
import RestaurantCard from './RestaurantCard/RestaurantCard';
import ReviewCard from "./ReviewCard/ReviewCard";
import { Grid, Main, MainMenu, SearchBar, SearchBarContainer, SearchCategory, Tab } from "./RestaurantsStyles";
import UserCard from "./UserCard/UserCard";

const Restaurants = () => {
  return (
    <div>
      <SearchBarContainer>
        <SearchBar>
          <p>Search</p>
        </SearchBar>
        <SearchCategory>
          <p>Select a category...</p>
          <img src={arrow}></img>
        </SearchCategory>
      </SearchBarContainer>
      <Main>
        <MainMenu>
          <Tab>Restaurants</Tab>
          <Tab>Reviews</Tab>
          <Tab>Users</Tab>
        </MainMenu>
        <Grid>
          {/* <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard /> */}

          {/* <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard /> */}

          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </Grid>
      </Main>
    </div >
  );
}

export default Restaurants;
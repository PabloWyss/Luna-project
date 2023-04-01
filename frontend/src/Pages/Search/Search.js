import { Outlet } from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import { Grid, Main, MainMenu, SearchBar, SearchBarContainer, SearchCategory, Tab } from "./SearchStyles";

const Search = () => {
  return (
    <div>
      <SearchBarContainer>
        <SearchBar>
          <input placeholder="Search..." />
        </SearchBar>
        <SearchCategory>
          <p>Select a category...</p>
          <img src={arrow}></img>
        </SearchCategory>
      </SearchBarContainer>
      <Main>
        <MainMenu>
          <Tab to='restaurants' activeClassName="current">Restaurants</Tab>
          <Tab to='reviews' activeClassName="current">Reviews</Tab>
          <Tab to='users' activeClassName="current">Users</Tab>
        </MainMenu>
        <Grid>
          <Outlet />
        </Grid>
      </Main>
    </div >
  );
}

export default Search;
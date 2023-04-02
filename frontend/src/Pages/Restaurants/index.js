import styled from 'styled-components'
import RestaurantCard from './RestaurantCard'
import Header from "../../Components/Header";

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #D8D8D8;
  font-size: 20px;
  font-weight: 700;
  border: 1px solid #D8D8D8;
`
const SearchBar = styled.div`
  width: 80%;
  border-right: 1px solid #D8D8D8;
  padding: 12px 32px;
`

const SearchCategory = styled.div`
  width: 20%;
  padding: 12px 32px;
`

const Main = styled.div`
  background: #F2F2F2;
  padding: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  border-bottom: 1px solid #D8D8D8;
`

const Tab = styled.p`
  width: 200px;
  padding: 12px;
  color: #4C4C4C;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 3px solid #E47D31;
`

const Grid = styled.div`
  padding: 60px 150px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 29px;
`

const Restaurants = () => {
  return (
    <div>
      <Header></Header>
      <SearchBarContainer>
        <SearchBar>
          <p>Search</p>
        </SearchBar>
        <SearchCategory>
          <p>Select a category</p>
        </SearchCategory>
      </SearchBarContainer>
      <Main>
        <MainMenu>
          <Tab>Restaurants</Tab>
          <Tab>Reviews</Tab>
          <Tab>Users</Tab>
        </MainMenu>
        <Grid>
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
          <RestaurantCard />
          <RestaurantCard />
        </Grid>
      </Main>
    </div >
  );
}

export default Restaurants;
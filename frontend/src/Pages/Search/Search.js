import { Outlet } from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import Header from "../../Components/Header";
import { Grid, Main, MainMenu, SearchBar, SearchBarContainer, SearchCategory, Tab } from "./SearchStyles";
import {useEffect, useState} from "react";
import lunaAPI from "../../Axios/lunaApi";
import SearchFilterComponent from "../../Components/SearchFilterComponent";

const Search = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([])
    const [searchText, setSearchText] = useState('')
    const [listOfRestaurantFiltered, setListOfRestaurantsFiltered] = useState([])

    const searchHandler =(e)=>{
        e.preventDefault()
        setSearchText(e.target.value)
        let listFiltered = SearchFilterComponent(searchText,listOfRestaurants)
        setListOfRestaurantsFiltered(listFiltered)
    }

    const obtainAllRestaurants = async () => {
    let response = await lunaAPI.get(`/restaurants/`)
        try {
            setListOfRestaurants(response.data)
            setListOfRestaurantsFiltered(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtainAllRestaurants()
    },[])

  return (
    <div>
      <SearchBarContainer>
        <SearchBar>
          <input placeholder="Search..." onChange={searchHandler}/>
        </SearchBar>
        <SearchCategory>
          <p>Select a category...</p>
          <img src={arrow}></img>
        </SearchCategory>
      </SearchBarContainer>
      <Main>
        <MainMenu>
          <Tab to='restaurants'>Restaurants</Tab>
          <Tab to='reviews'>Reviews</Tab>
          <Tab to='users'>Users</Tab>
        </MainMenu>
        <Grid>
          <Outlet context={[listOfRestaurantFiltered]}/>
        </Grid>
      </Main>
    </div >
  );
}

export default Search;


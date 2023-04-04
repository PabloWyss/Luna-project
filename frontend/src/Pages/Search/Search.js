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
    const [listOfUsers,setListOfUsers] = useState([])
    const [listOfUsersFiltered, setListOfUsersFiltered] = useState([])

    const searchHandler =(e)=>{
        e.preventDefault()
        setSearchText(e.target.value)
        let listRestFiltered = SearchFilterComponent(searchText,listOfRestaurants)
        setListOfRestaurantsFiltered(listRestFiltered)
        let listUsFiltered = SearchFilterComponent(searchText,listOfUsers)
        setListOfUsersFiltered(listUsFiltered)
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

    const obtainAllUsers = async () => {
    let response = await lunaAPI.get(`/user/list/`)
        try {
            setListOfUsers(response.data)
            setListOfUsersFiltered(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtainAllRestaurants()
        obtainAllUsers()
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
          <Outlet context={[listOfRestaurantFiltered,listOfUsersFiltered]}/>
        </Grid>
      </Main>
    </div >
  );
}

export default Search;


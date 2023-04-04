import { Outlet } from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import Header from "../../Components/Header";
import { Grid, Main, MainMenu, SearchBar, SearchBarContainer, SearchCategory, Tab } from "./SearchStyles";
import {useEffect, useState} from "react";
import lunaAPI from "../../Axios/lunaApi";

const Search = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([])
    const [searchText, setSearchText] = useState('')

    const searchHandler =(e)=>{
        e.preventDefault()
        setSearchText(e.target.value)
        const searchRoute = ('?search='+setSearchText)
    }



    const obtainAllRestaurants = async (search) => {
    let response = await lunaAPI.get(`/restaurants/${search}`)
        try {
            setListOfRestaurants(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // const search = '?search='+searchText
        obtainAllRestaurants(searchText)
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
          <Outlet context={[listOfRestaurants,setListOfRestaurants]}/>
        </Grid>
      </Main>
    </div >
  );
}

export default Search;


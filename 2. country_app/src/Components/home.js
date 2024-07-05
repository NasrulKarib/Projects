import React,{useState,useEffect} from 'react'
import Countries from './countries'
import Search from './searchCountry'
import useFetch from './useFetch';

const Home = () => {
  const urls = 'https://restcountries.com/v3.1/all';
  
  const {countries,loading,error,deleteCountry} = useFetch(urls);
  const [searchQuery, setSearchQuery] = useState('');

  const handleRemoveCountry = (name) =>{
    deleteCountry(name);
  }


  const handleSearch = (name)=>{
    setSearchQuery(name);
  }

  // The filteredCountries variable filters the countries array based on the searchQuery. 
  // It checks if the country's name includes the search query .
  const filterCountry = countries.filter(country => 
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase()
  ));
  
  return (
    <>
      <h1 >Country App</h1>
      <Search onSearch = {handleSearch}/>
      {loading && <h2>Countries are loading...</h2>}
      {error && <h2 style = {{color:'red'}}>{error.message}</h2>}
      {countries && <Countries countries = {filterCountry.length ? filterCountry:countries} onRemoveCountry = {handleRemoveCountry}/>}
    </>
  )
}

export default Home;

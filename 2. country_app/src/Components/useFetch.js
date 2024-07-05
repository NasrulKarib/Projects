import React,{useState,useEffect} from 'react'
import axios from 'axios'

const useFetch = (urls) => {
const [countries,setCountries] = useState([]);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);

const getData = async()=>{
    try{
        const res = await axios.get(urls);
        setCountries(res.data);
        setLoading(false);
    }catch(error){
        setError(error);
        setLoading(false);
    }
};

const deleteCountry = (name) =>{
    setCountries(countries.filter((country) => country.name.common !== name));
}

  
useEffect(()=>{
    getData();
},[]);

return  {countries,loading,error,deleteCountry}
}

export default useFetch;

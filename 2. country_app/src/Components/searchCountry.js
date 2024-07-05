import React,{useState,useEffect} from 'react'

const SearchCountry = (props) => {

const [search, setSearch] = useState('');

const handleChange =(event) =>{
    setSearch(event.target.value)
}

useEffect(()=>{
    props.onSearch(search);
},[search])
return (
    <div style={{textAlign:'center'}}>
     <input  type='text' placeholder='Enter a country' onChange ={handleChange}></input>
    </div>
  )
}

export default SearchCountry

import React from 'react'
import style from './country.module.css'

const country = (props) => {
  const {country}= props.country;
  const {flags,name,capital,population, area} = country;


  return (
    <div className = {style.country}>
        <div  >
            <img src={flags.png} alt={name.common} className ={style.flag}></img>
            <h3>Name : {name.common}</h3>
            <h3>Capital : {capital}</h3>
            <h3>Population : {population}</h3>
            <h3>Area : {area}</h3>
            <button className = {style.btn} onClick={()=>{props.onRemoveCountry(name.common)}}>Remove</button>
        </div>

    </div>
  )
}

export default country

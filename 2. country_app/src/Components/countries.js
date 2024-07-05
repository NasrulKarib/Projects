import React from 'react'
import Country from './country'
import {v4 as uuidv4} from 'uuid'
import style from './countries.module.css'

const countries = (props) => {

  return (
    <section className = {style.countries}>
        {props.countries.map(country => {
            const countryNew = {country, id: uuidv4()};
            //console.log(countryNew);
            return <Country country = {countryNew} key = {countryNew.id} onRemoveCountry ={props.onRemoveCountry}/>
        }
            
        )}
    </section>
  )
}

export default countries

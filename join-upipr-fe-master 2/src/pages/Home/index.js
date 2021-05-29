import React from 'react';
import logo from './star-wars-logo.png';
import './index.css';
import axios from "axios";
import {FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Person from '../Person';

function HomePage() {

  const [data,setData] = React.useState()


  

function fetchData(val){
  axios.get(`https://swapi.dev/api/people/?search=${val}`)
  .then(res=>setData(res.data.results))
}


let x
function debounce(e){
  let {value} = e.target
  x && clearTimeout(x)
  x=setTimeout(()=>{
  fetchData(value)
  },500)
}





  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Star Wars Logo" />
      </div>
      <input className="search-input" placeholder="Search by name" onChange={(e)=>debounce(e)}/>
      {/* <span className="span"><FaSearch className="inputicons"/></span> */}
      {
        data?.map(elm=>{
          return (
          <Link to={`person/${elm.name}`}><p>{elm.name}</p></Link>
          )
        })
      }
    </div>
  );
}

export default HomePage;

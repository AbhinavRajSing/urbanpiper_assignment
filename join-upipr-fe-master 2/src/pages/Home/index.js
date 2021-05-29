import React from 'react';
import logo from './star-wars-logo.png';
import './index.css';
import axios from "axios";
import {FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Person from '../Person';

function HomePage() {

  const [data,setData] = React.useState([])
  const [active, setActive] = React.useState(0);
  const [q,setQ] = React.useState("")

  

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
const handleClear=(e)=>{
  setQ("")
  setData([])
  
}



  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Star Wars Logo" />
      </div>
      <div className="wrapper">
        <input className="search-input" placeholder="Search by name" onChange={(e)=>{debounce(e);setQ(e.target.value)}} value={q}/>
        <span className="span">{!q ?<FaSearch className="inputicons"/>:
        <span className="clear" onClick={(e)=>handleClear(e)}>x</span>}</span>
      </div>
      <div className="dropbox" >{
        data?.map(elm=>{
          return (
            <Link to={`person/${elm.name}`}>
              <p >{elm.name}</p>
            </Link>
          )
        })
      }</div>
    </div>
  );
}

export default HomePage;

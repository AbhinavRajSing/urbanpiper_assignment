import React from 'react';
import logo from './star-wars-logo.png';
import './index.css';
import axios from "axios";
import {FaSearch} from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import Person from '../Person';

function HomePage() {

  const history = useHistory();
  const [data,setData] = React.useState([])
  const [active, setActive] = React.useState(-1);
  const [q,setQ] = React.useState("")
  const [load,setLoad] = React.useState(false)
  const [err, setErr] = React.useState(false)

  

function fetchData(val){
  setLoad(true)
  axios.get(`https://swapi.dev/api/people/?search=${val}`)
  .then(res=>setData(res.data.results))
  .catch((err)=>setErr(true))
  .finally(()=>setLoad(false))
}


let x
function debounce(e){
  let {value} = e.target
  if(e.keyCode !== 40 && e.keyCode !== 38 && e.keyCode !==13){
    x && clearTimeout(x)
  x=setTimeout(()=>{
    fetchData(value)
  },500)
  }
}


const keyMovement = (e)=>{
  switch (e.keyCode) {
    case 40: setActive( prev => prev +1)
              break;
    case 38: setActive( prev => prev -1)
              break;
    case 13: let info ;
              active > -1 ? info = data[active].name : info = null;
              info?history.push(`/person/${info}`):history.push("/ungabunga")
              break;
    default:
      break;
  }
}



const handleClear=(e)=>{
  setQ("")
  setData([])
}



  return (
    <div className="outer">
      <div className="logo">
        <img src={logo} alt="Star Wars Logo" />
      </div>
      <div onKeyUp={(e)=>keyMovement(e)} className="main">
        <div className="wrapper">
          <input className="search-input" placeholder="Search by name" onChange={(e)=>{setQ(e.target.value)}} onKeyUp={(e)=>debounce(e)} value={q}/>
          {load && <div className="unknown"></div>}
          <span className="span">{!q ?<FaSearch className="inputicons"/>:
          <span className="clear" onClick={(e)=>handleClear(e)}>x</span>}</span>
        </div>
        
        <div className="dropbox" style={data.length>0?{paddingTop:"10px"}:null} >{
          data?.map((elm,i)=>
            ( 
              <div style = {active === i? {backgroundColor:"yellow", color:"#110B0B"}: null}  className="rescard" onClick = {()=> history.push(`/person/${elm.name}`)}>
                <div>
                  <span>
                    {elm.name}
                  </span>
                  <span>
                    {elm.birth_year}
                  </span>
                </div>
                <div>
                  {elm.gender}
                </div>
              </div>
            )
          )
        }</div>
      </div>
    </div>
  );
}

export default HomePage;

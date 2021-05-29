import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

function Person() {
  const [data,setData] = React.useState({})
  let {name} = useParams()
  console.log(name)

  React.useEffect(()=>{
    fetchData()
  },[])

  function fetchData(){
    axios.get(`https://swapi.dev/api/people/?search=${name}`)
    .then(res=>setData(res.data.results[0]))
  }

  return (
    <div className="person">
      <p>{data.name}</p>
      <p>{data.birth_year}</p>
      <p>{data.hair_color}</p>
      <p>{data.height}</p>
      <p>{data.mass}</p>
    </div>
  );
}

export default Person;

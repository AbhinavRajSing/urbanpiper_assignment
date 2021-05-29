import axios from 'axios';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './index.css';

function Person() {
  const [data,setData] = React.useState({})
  let {name} = useParams()
  // console.log(name)

  let history = useHistory()

  React.useEffect(()=>{
    fetchData()
  },[])

  function fetchData(){
    axios.get(`https://swapi.dev/api/people/?search=${name}`)
    .then(res=>setData(res.data.results[0]))
  }

  return (
    
      <div className="person">
        <div className="persondata">
          <h1 className="datas">Name: {data.name}</h1>
          <h1 className="datas">Birth Year: {data.birth_year}</h1>
          <h1 className="datas">Hair Color: {data.hair_color}</h1>
          <h1 className="datas">Height:  {data.height}</h1>
          <h1 className="datas">Mass: {data.mass}</h1>
          <button onClick={()=>history.push("/")}>Go Back</button>
        </div>
    </div>
    
  );
}

export default Person;

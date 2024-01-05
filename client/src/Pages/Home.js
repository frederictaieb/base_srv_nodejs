import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const Home = () =>  {

    const [listOfCandidates, setListOfCandidates] = useState([]);
    let navigate = useNavigate();

    useEffect(()=> {
      axios.get("http://localhost:3001/Candidates").then((response)=> {
        setListOfCandidates(response.data);
        console.log(response.data);
      })
    }, []);
  
    return (
      <div className="Home">
        <h1>List of candidates</h1>
        {listOfCandidates.map((value, key) =>{
            return(
              <div key = {key} className='candidate' onClick={()=>navigate(`/candidate/${value.id}`)} >
                  <div className="lastname">{value.lastname}</div>
                  <div className="firstname">{value.firstname}</div>
              </div>
            )
        }
        )}
      </div>
    );
}

export default Home;

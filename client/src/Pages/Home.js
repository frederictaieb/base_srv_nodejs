import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () =>  {

    const [listOfCandidates, setListOfCandidates] = useState([]);

    useEffect(()=> {
      axios.get("http://localhost:3001/Candidates").then((response)=> {
        setListOfCandidates(response.data);
        console.log(response.data);
      })
    }, []);
  
    return (
      <div className="Home">
        {listOfCandidates.map((value, key) =>{
            return(
                <div className="Candidate">
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

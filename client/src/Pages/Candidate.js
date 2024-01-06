import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Candidate() {
  let { id } = useParams();
  const [candidateObject, setCandidateObject]=useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/candidates/byId/${id}`).then((response) => {
      setCandidateObject(response.data);
    });
  },[]);

  return (
    
    <div className="candidatePage">
      <div className="candidate" id="individual">
        <div className="firstname">{candidateObject.firstname}</div>
        <div className="lastname">{candidateObject.lastname}</div>
        <div className="email">{candidateObject.email}</div>
        <div className="phone">{candidateObject.phone}</div>
        <div className="nationality">{candidateObject.nationality}</div>
        <div className="languages">{candidateObject.languages}</div>
        <div className="academics">{candidateObject.academics}</div>
        <div className="linkedin">{candidateObject.linkedin}</div>

        <div className="career">{candidateObject.career}</div>
        <div className="daybyday">{candidateObject.daybyday}</div>
        <div className="strat">{candidateObject.strat}</div>
        <div className="stratAssets">{candidateObject.stratAssets}</div>
        <div className="stratRegion">{candidateObject.stratRegion}</div>
        <div className="stratFreq">{candidateObject.stratFreq}</div>
        <div className="skills">{candidateObject.skills}</div>
        
        <div className="needs">{candidateObject.needs}</div>
        <div className="target">{candidateObject.target}</div>

        <div className="compBase">{candidateObject.compBase}</div>
        <div className="compBonus">{candidateObject.compBonus}</div>
        <div className="compDeffered">{candidateObject.compDeffered}</div>
        <div className="compExpectations">{candidateObject.compExpectations}</div>

        <div className="ncperiod">{candidateObject.ncperiod}</div>
        <div className="relocation">{candidateObject.relocation}</div>
        <div className="other">{candidateObject.other}</div>

      </div>
    </div>
  )
}

export default Candidate

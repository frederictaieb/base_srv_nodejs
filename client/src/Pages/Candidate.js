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
        <div className="linkedin">{candidateObject.linkedin}</div>
      </div>
    </div>
  )
}

export default Candidate

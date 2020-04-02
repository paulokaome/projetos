import React, { useState } from 'react'
import { Link , useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";
import api from '../../service/api'


import heroesLogo from "../../assets/logo.svg";

export default function NewIncident(){

  const [ title , setTitle] = useState();
  const [ description , setDescription] = useState();
  const [ value , setValue] = useState();
  const ongId = localStorage.getItem("ongId");
  const history = useHistory();

  async function handleNewIncidents(event){
    event.preventDefault();
    const data = {
      title,
      description,
      value
    };
    try {

      await api.post('incidents' , data , {
        headers : {Authorization : ongId}
      })
      history.push('/profile')

    } catch (error) {
      alert("erro ao cadastrar um novo caso")
    }
  }

return(
  <div className='new-incident-container'>
  <div className='content'>
    <section>
      <img src={heroesLogo} alt="Be the Hero"/>
      <h1>New Case</h1>
      <p>describe the case in detail to find a hero to solve this.</p>
      
      <Link className="back-link" to="/">
        <FiArrowLeft size={16} color="#E02041" />
        Back to Home
      </Link>
    </section>
    <form onSubmit={handleNewIncidents}>
      <input placeholder="Title of Case"
          value={title}
          onChange={e => setTitle(e.target.value)}
      />
      <textarea placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
      />
      <input placeholder="Value"
          value={value}
          onChange={e => setValue(e.target.value)}
      />

     
      <button className="button" type="submit">Submit</button>
    </form>
  </div>
</div>
) 


}
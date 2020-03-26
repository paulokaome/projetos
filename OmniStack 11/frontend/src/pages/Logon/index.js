import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link , useHistory } from "react-router-dom";

import api from "../../service/api";

import "./styles.css";
import heroes from "../../assets/heroes.png";
import heroesLogo from "../../assets/logo.svg";

export default function Logon() {
  const [id , setId ] = useState('')
  const history = useHistory();

  async function handleLogin(event){
    event.preventDefault()

    try {
      const response  = await api.post('sessions', { id })
      localStorage.setItem('ongId' , id)
      localStorage.setItem('ongName' , response.data.name)
      history.push('profile');

    } catch (error) {
      alert(`Login Fail`)
    }

  }

  return (
    <div className="logon-container">

      <section className="form">
        <img src={heroesLogo} alt="" />

        <form onSubmit={handleLogin}>

          <h1>Sign In</h1>
          <input onChange={e => setId(e.target.value)} placeholder="Sua Id" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            No have Id
          </Link>
        </form>
      
      </section>
      <img src={heroes} alt="Imagem de Fundo" />
    </div>
  );
}

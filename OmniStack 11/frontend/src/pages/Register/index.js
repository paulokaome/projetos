import React, { useState } from "react";
import { Link , useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../service/api";

import "./styles.css";

import heroesLogo from "../../assets/logo.svg";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    const data = ({ 
      name,
      email,
      whatsapp,
      city,
      uf
    })
    try{
      const response = await api.post('ongs',data)
      alert(`Seu id de Acesso ${response.data.id}`)
      history.push('/')

    }catch(error){
      
      console.log("Erro")
    }
    
    
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={heroesLogo} alt="Be the Hero" />
          <h1>Sign Up</h1>
          <p>
            make your registration, enter the platform and help find the cases
            of your ONGS
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            No have Id
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            onChange={e => setName(e.target.value)}
            placeholder="Name of ONG"
          />
          <input
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={e => setWhatsapp(e.target.value)}
            placeholder="WhatsApp"
          />

          <div className="input-group">
            <input
              onChange={e => setCity(e.target.value)}
              placeholder="Cidade"
            />
            <input
              onChange={e => setUf(e.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
            />
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

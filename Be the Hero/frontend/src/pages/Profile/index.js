import React, { useEffect,useState } from "react";
import { Link  , useHistory} from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import api from "../../service/api";

import heroesLogo from "../../assets/logo.svg";
import "./styles.css";

export default function Profile() {
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");
  const [incidents, setIncidents] = useState([]);
  const history = useHistory()
 

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id){
    try {
      await api.delete(`incidents/${id}`,{
         headers : {Authorization : ongId, }
      });
      setIncidents(incidents.filter(incidents => incidents.id !== id));

    } catch (error) {
        alert("Erro ao deletar caso , tente novamente")
    }

  }

  function handleLougout(){
      
        localStorage.clear();
        history.push('/')

  }


  return (
    <div className="profile-container">
      <header>
        <img src={heroesLogo} alt="" />
        <span>Welcome to , {ongName}</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo Caso
        </Link>
        <button type="button" onClick={handleLougout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Cases</h1>

      <ul>
        {incidents.map(data => (

          <li key={data.id}>
            <strong>Case:</strong>
            <p>{data.title}</p>

            <strong>Description:</strong>
            <p>{data.description}</p>

            <strong>Value:</strong>
            <p>{Intl.NumberFormat('pt-BR' , { style : 'currency' , currency : 'BRL'}).format(data.value)}</p>

            <button type="button" onClick={() => handleDeleteIncident(data.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

        ))}
      </ul>
    </div>
  );
}

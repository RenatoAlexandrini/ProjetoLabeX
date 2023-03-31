import React from "react"
import * as Stl from './CardsTripsStl.js'
import sunImg from '../../Images/Sol.png';
import mercuryImg from '../../Images/Mercurio.png';
import venusImg from '../../Images/Venus.png';
import earthImg from '../../Images/Terra.png';
import marsImg from '../../Images/Marte.png';
import jupiterImg from '../../Images/Jupiter.png';
import saturnImg from '../../Images/Saturno.png';
import uranusImg from '../../Images/Urano.png';
import neptuneImg from '../../Images/Netuno.png';
import plutoImg from '../../Images/Plutao.png';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import deleteImg from '../../Images/assets/DeleteTrip.png'
import axios from 'axios';
import { BASE_URL } from '../../constants/constants.js';

function CardsTrips(props) {



  const planetImg = (planet) => {

    switch (planet) {

      case "Sol":
        return <Stl.PlntImg src={sunImg} />
      case "Mercúrio":
        return <Stl.PlntImg src={mercuryImg} />
      case "Vênus":
        return <Stl.PlntImg src={venusImg} />
      case "Terra":
        return <Stl.PlntImg src={earthImg} />
      case "Marte":
        return <Stl.PlntImg src={marsImg} />
      case "Jupiter":
        return <Stl.PlntImg src={jupiterImg} />
      case "Saturno":
        return <Stl.PlntImg src={saturnImg} />
      case "Urano":
        return <Stl.PlntImg src={uranusImg} />
      case "Netuno":
        return <Stl.PlntImg src={neptuneImg} />
      case "Plutão":
        return <Stl.PlntImg src={plutoImg} />
    }
  }

  const { trips } = props

  const navigate = useNavigate();

  const goToApplicationForm = (id) => {
    navigate(`forms/application/${id}`)
  }

  const goToDetailTrips = (id) => {
    navigate(`detail/trips/${id}`)
  }

  const DeleteTrip = (id) => {
    const HEADER = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    if (window.confirm("Tem certeza que deseja deletar essa viagem?")) {
      axios
        .delete(`${BASE_URL}/trips/${id}`, HEADER)
        .then((res) => {
          navigate("/login/admin/homepage");
          alert("Viagem deletada com sucesso!")
        })
        .catch((err) => {
          alert("Houve um erro, tente novamente!")
        })
    }
  }
  let itemId = useParams().id

  return (

    <Stl.Card key={trips.id}>
      <Stl.TrpName>{trips.name}</Stl.TrpName>
      <Stl.ImgDiv>
        {planetImg(trips.planet)}
      </Stl.ImgDiv>
      <Stl.TrpDescription>{trips.description}</Stl.TrpDescription>
      <Stl.TrpPlanet>Planeta: {trips.planet}</Stl.TrpPlanet>
      <Stl.TrpDuration>Duração: {trips.durationInDays} dias</Stl.TrpDuration>
      <Stl.TrpDate>Partida: {trips.date}</Stl.TrpDate>
      <Stl.BaseButtonDiv>
        <Stl.DivButtonVariants>
          {localStorage.token == null && itemId == undefined ? <Stl.ButtonWithVariants onClick={() => goToApplicationForm(trips.id)}>Candidate se </Stl.ButtonWithVariants>
            : localStorage.token == null && itemId !== undefined ? <></>
              : localStorage.token !== null && itemId == undefined ? <Stl.ButtonWithVariants onClick={() => goToDetailTrips(trips.id)}>Detalhes</Stl.ButtonWithVariants>
                : <Stl.DeleteButton onClick={() => DeleteTrip(trips.id)}>
                  <Stl.DeleteImage src={deleteImg} />
                </Stl.DeleteButton>}
        </Stl.DivButtonVariants>
      </Stl.BaseButtonDiv>

    </Stl.Card>

  )
}

export default CardsTrips
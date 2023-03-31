import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Stl from './TripDetailStl.js';
import Header from '../../Components/Header/Header.js';
import { BASE_URL } from '../../constants/constants.js';
import axios from 'axios';
import CardsTrips from '../../Components/CardsTrips/CardTrips.js';
import useProtectedPage from '../../Hooks/useProtectedPage.js';
import noCandidates from '../../Images/assets/SemCandidatos.jpg'
import aproveImg from '../..//Images/assets/aprove.png'
import reproveImg from '../..//Images/assets/reprove.png'


function TripDetails() {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [details, setDetails] = useState("")

    const token = localStorage.getItem("token");
    const [id] = useState(useParams())

    const navigate = useNavigate();

    useProtectedPage()

    useEffect(() => {
        TripDetail()
    }, [id, token]);

    const TripDetail = () => {
        setIsLoading(true)
        axios.get(`${BASE_URL}/trip/${id.id}`, { headers: { auth: token } })

            .then((res) => {
                setIsLoading(false)
                setDetails(res.data.trip)
            })

            .catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    }

    const ApproveCandidate = (decision, candidateID) => {
        const BODY = {
            approve: decision,
        };

        axios.put(`${BASE_URL}/trips/${id.id}/candidates/${candidateID}/decide`,
            BODY,
            { headers: { auth: token } }
        )
            .then((res) => {
                if (decision === true) {
                    alert("Candidato registrado com sucesso!");
                    TripDetail()
                } else { alert("Candidato reprovado"); TripDetail() }
            })
            .catch((err) => {
                alert("Houve um erro, tenta novamente")
                console.log(err);
            });
    }


    const listOfPendencies = details && details.candidates.map((candidate) => {

        return (
            <Stl.ListsDiv key={candidate.id}>
                <Stl.TextDiv>
                    <Stl.ListsText>Nome: {candidate.name}</Stl.ListsText>
                    <Stl.ListsText>Idade: {candidate.age} anos</Stl.ListsText>
                    <Stl.ListsText>{candidate.applicationText}</Stl.ListsText>
                    <Stl.ListsText>Profissão: {candidate.profession}</Stl.ListsText>
                    <Stl.ListsText>Origem: {candidate.country}</Stl.ListsText>
                </Stl.TextDiv>
                <Stl.ButtonsDiv>
                    <Stl.AproveButton onClick={() => ApproveCandidate(true, candidate.id)}>
                        <Stl.ImageButton src={ aproveImg} />
                        Aprovar</Stl.AproveButton>
                    <Stl.ReproveButton onClick={() => ApproveCandidate(false, candidate.id)}>
                        <Stl.ImageButton src={reproveImg } />
                        Reprovar</Stl.ReproveButton>
                </Stl.ButtonsDiv>
            </Stl.ListsDiv>

        )
    })
    const listOfApprovedCandidates = details && details.approved.map((apprCand) => {
        return (
            <Stl.ListsDiv>
                <Stl.ListsText>Astronauta Aprovado: </Stl.ListsText>
                <Stl.ListsText>{apprCand.name}</Stl.ListsText>
            </Stl.ListsDiv>
        )
    })

    return (
        <Stl.Main>
            <Header />
            <Stl.PageDiv>
                {isLoading && <p>Carregando</p>}
                {!isLoading && error && <p>Ocorreu um erro</p>}
                {!isLoading && details && <CardsTrips trips={details} />}
                <Stl.CandidatesDiv>
                    {listOfPendencies.length === 0 && listOfApprovedCandidates.length === 0 ? <Stl.NoCandidatesImg src={noCandidates} /> :
                        listOfPendencies.length > 0 ? listOfPendencies :
                            listOfApprovedCandidates}
                </Stl.CandidatesDiv>
            </Stl.PageDiv>
        </Stl.Main>

    )
}

export default TripDetails;
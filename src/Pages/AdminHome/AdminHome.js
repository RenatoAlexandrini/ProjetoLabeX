import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage.js';
import * as Stl from './AdminHomeStl.js';
import CardsTrips from '../../Components/CardsTrips/CardTrips.js';
import { BASE_URL } from '../../constants/constants.js';
import { useGetData } from '../../Hooks/useGetData.js'
import Header from '../../Components/Header/Header.js';


function AdminHome() {

    useProtectedPage()

    const navigate = useNavigate();
    const [data, isLoadingTrips, errorTrips] = useGetData(`${BASE_URL}/trips`)

    const goToCreateTrips = () => {
        navigate("create/trips")
    }
    const goToDetailTrips = (id) => {
        navigate(`detail/trips/${id}`)
    }




    useEffect(() => {

        const token = localStorage.getItem("token");

        axios.get(`${BASE_URL}/trip/:${token}`,
            {
                headers: {
                    auth: token
                }
            }).then((res) => {

            }).catch((err) => {
                console.log("Deu erro: ", err)
            })
    }, [useNavigate]);

    const listOfTrips = data && data.trips.map((trip) => {
        return (

            <div>
                <CardsTrips trips={trip} goToDetailTrips={goToDetailTrips}>
                </CardsTrips>
            </div>
        )

    })
    return (
        <Stl.Main >
            <Header />
            <Stl.CreateButtonDiv>
            <Stl.BtnCreate onClick={goToCreateTrips}>Criar Viagem</Stl.BtnCreate>
            </Stl.CreateButtonDiv>            
            <Stl.CardDiv>
                {isLoadingTrips && <p>Carregando</p>}
                {!isLoadingTrips && errorTrips && <p>Ocorreu um erro</p>}
                {!isLoadingTrips && data && data.trips.length > 0 && listOfTrips}
                {!isLoadingTrips && data && data.trips.length === 0 && (<p>não há viagens</p>)}
            </Stl.CardDiv>
        </Stl.Main>
    )

}

export default AdminHome;
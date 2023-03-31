import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header.js';
import * as Stl from './HomePageStl.js'
import viagens from '../../Images/assets/Viagens.png'


function HomePage() {

    const navigate = useNavigate();


    const goToListTrips = () => {
        navigate("lists/trips")
    }
    const goToAdminHome = () => {
        navigate("/login/admin/homepage")

    }
    return (
        <Stl.Main>
            <Header />
            <Stl.BtnAlign>
                {localStorage.token == null ?
                    <Stl.BtnListTrips src={viagens} onClick={goToListTrips}></Stl.BtnListTrips>
                    : <Stl.BtnListTrips src={viagens} onClick={goToAdminHome}></Stl.BtnListTrips>
                }
            </Stl.BtnAlign>
        </Stl.Main>
    )
}

export default HomePage;
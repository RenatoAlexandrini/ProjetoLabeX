import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import * as Stl from './ApplicationForStl.js';
import { useForm } from '../../Hooks/useForm.js';
import { BASE_URL } from '../../constants/constants.js';
import { Countries } from '../../constants/countries.js';
import Header from '../../Components/Header/Header.js';
import { useGetData } from '../../Hooks/useGetData.js';
import CardsTrips from '../../Components/CardsTrips/CardTrips.js';
import submitImage from '../../Images/assets/SubmitImage.png'


function ApplicationForm() {

    const [data, isLoadingTrips, errorTrips] = useGetData(`${BASE_URL}/trips`)
    const [id, setId] = useState(useParams())

    const idTrip = useParams().id

    const [form, onChange, clear] = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
    });

    const tripSelected = data && data.trips.filter((trip) => {
        return trip.id === id.id;
    })
        .map((trip) => {
            return (
                <CardsTrips trips={trip} />

            )
        })

    const navigate = useNavigate();


    const Apply = (event) => {
        event.preventDefault();
        axios.post(`${BASE_URL}/trips/${idTrip}/apply`, form)
            .then((res) => {
                alert("Cadastro realizado com sucesso!")
                clear();
                navigate("/")

            })
            .catch((err) => {
                alert(err.response);
            });
    };



    const countryChoose = Countries.map((country) => {
        return (
            <option key={country.ordem} value={country.nome}>
                {country.nome}
            </option>
        );
    });

    return (
        <Stl.Main>
            <Header />
                      <Stl.Title>
                <h1>Faça sua inscrição</h1>
                      </Stl.Title>
            <Stl.FormDiv>
            {tripSelected}
          
                <Stl.DataDiv onSubmit={Apply}>
                    <Stl.Name
                        value={form.name}
                        name="name"
                        onChange={onChange}
                        placeholder={"Nome"}
                        required
                        pattern={"^.{2,}"}
                        title={"O nome deve ter no mínimo 2 letras"}
                    />
                    <Stl.Age
                        value={form.age}
                        name="age"
                        onChange={onChange}
                        placeholder={"Idade"}
                        required
                        type="number"

                    />
                    <Stl.Profission
                        value={form.profession}
                        name="profession"
                        onChange={onChange}
                        placeholder={"Profissão"}
                        required

                    />
                    <Stl.Country
                        value={form.country}
                        name="country"
                        onChange={onChange}
                        required
                    >
                        <option value="">Seleciona um país</option>
                        {countryChoose}
                    </Stl.Country>
                    <Stl.Text
                        value={form.applicationText}
                        name="applicationText"
                        onChange={onChange}
                        placeholder={"Frase Candidatura"}
                        required

                    />
                   <Stl.ButtonDiv>
                        <Stl.SubmitButton type='submit'>
                            <Stl.SubmitImage src={submitImage}/>
                            Enviar
                            </Stl.SubmitButton>
                   </Stl.ButtonDiv>
                </Stl.DataDiv>        
            </Stl.FormDiv>
        </Stl.Main>
    );
};


export default ApplicationForm;
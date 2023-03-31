import React, { useState } from 'react';
import axios from 'axios';
import * as Stl from './CreateTripStl.js';
import { useForm } from '../../Hooks/useForm.js';
import { BASE_URL } from '../../constants/constants.js';
import Header from '../../Components/Header/Header.js';
import useProtectedPage from '../../Hooks/useProtectedPage.js';
import createIcon from '../../Images/assets/CreateIcon.png'

function CreateTrip() {

    const token = localStorage.getItem("token");
    useProtectedPage()
    const [form, onChange, clear] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
    });

    const NewTrip = (event) => {
        event.preventDefault();
        axios
            .post(`${BASE_URL}/trips`, form,
                { headers: { auth: token } }
            )
            .then((res) => {
                alert("Viagem criada com sucesso!");
                clear()
            })
            .catch((err) => {
                alert("Houve um erro, tenta novamente")
                clear()

            });
    }

    const planets = ['Sol', 'Mercúrio', 'Venus', 'Terra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Netuno', 'Plutão']

    const choosePlanet = planets.map((planeta) => {
        return (
            <option key={planeta} value={planeta}>
                {planeta}
            </option>
        );
    });

    return (
        <Stl.Main>
            <Header />
            <Stl.FormDiv>
                <Stl.FormData onSubmit={NewTrip}>
                    <Stl.Title>Crie uma nova Viagem</Stl.Title>
                    <Stl.LabelInput>Nome da viagem:</Stl.LabelInput>
                    <Stl.NameInput
                        value={form.name}
                        name="name"
                        onChange={onChange}
                        placeholder={"Título"}
                        required
                    />
                    <Stl.LabelInput>Destino:</Stl.LabelInput>
                    <Stl.DestinyInput
                        value={form.planet}
                        name="planet"
                        onChange={onChange}
                        required
                    >
                        <option value="">Selecione um planeta:</option>
                        {choosePlanet}
                    </Stl.DestinyInput>
                    <Stl.LabelInput>Data de saída:</Stl.LabelInput>
                    <Stl.DateInput
                        value={form.date}
                        name="date"
                        onChange={onChange}
                        placeholder={"date"}
                        required
                        type="date"
                    />
                    <Stl.LabelInput>Descrição:</Stl.LabelInput>
                    <Stl.DescriptionInput
                        value={form.description}
                        name="description"
                        onChange={onChange}
                        placeholder={"Mínimo 30 caracteres"}
                        required
                        pattern={"^.{30,}"}
                        title={"A descrição deve ter no mínimo  30 caracteres"}
                    />
                    <Stl.LabelInput>Duração da viagem:</Stl.LabelInput>
                    <Stl.DaysDiv>
                        <Stl.DurationInput
                            value={form.durationInDays}
                            name="durationInDays"
                            onChange={onChange}
                            placeholder={"0"}
                            required
                            type="number"

                        />
                        <Stl.LabelInput> dias</Stl.LabelInput>

                    </Stl.DaysDiv>
                    <Stl.SubmitButton type='submit'>
                            <Stl.SubmitImage src={createIcon}/>
                            Criar
                            </Stl.SubmitButton>

                </Stl.FormData>
            </Stl.FormDiv>

        </Stl.Main>

    )
}

export default CreateTrip;
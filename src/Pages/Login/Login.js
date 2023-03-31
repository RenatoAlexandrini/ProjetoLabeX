import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header.js';
import { useForm } from '../../Hooks/useForm.js';
import { BASE_URL } from '../../constants/constants.js';
import * as Stl from './LoginStl.js';
import submitImage from '../../Images/assets/SubmitImage.png'


function Login() {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ email: '', password: '' })

    const fazerLogin = (event) => {
        event.preventDefault()

        axios.post(`${BASE_URL}/login`, form)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                navigate("/login/admin/homepage")
                console.log(localStorage.getItem())
            })
            .catch((err) => console.log(err.message))
        clear();
    }

    return (
        <Stl.Main>
            <Header />
            <Stl.BoxLogin>

                <Stl.FormLogin onSubmit={fazerLogin}>
                    <Stl.LabelLogin htmlFor="email"> Email: </Stl.LabelLogin>
                    <Stl.InputLogin
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        value={form.email}
                        onChange={onChange}
                        type="email"
                        required
                    />
                    <Stl.LabelLogin htmlFor="senha"> Senha: </Stl.LabelLogin>
                    <Stl.InputLogin
                        name="password"
                        id="senha"
                        placeholder="Senha"
                        value={form.password}
                        onChange={onChange}
                        type="password"
                        pattern="^.{3,}$"
                        title="mínimo de 3 caracteres"
                        required
                    />
                    <Stl.ButtonDiv>
                        <Stl.BtnLogin type='submit'>
                            <Stl.SubmitImage src={submitImage} />
                            Enviar
                        </Stl.BtnLogin>
                    </Stl.ButtonDiv>
                </Stl.FormLogin>
            </Stl.BoxLogin>

        </Stl.Main>

    )
}

export default Login;
import React from "react";
import { useNavigate } from 'react-router-dom';
import * as Stl from "./HeaderStl.js";
import Logo from '../../Images/logo.png';



function Header() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login")
    }

    const goToHome = () => {
        navigate("/")
    }

    const goToLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    const goToAdminHome = () => {
        navigate("/login/admin/homepage")
    }
        return (
            <Stl.Main>
                <Stl.HomeButton onClick={goToHome} >
                    <Stl.ImgLoginButton src={Logo} />
                </Stl.HomeButton>
                <Stl.LoginButtonAndImage>
                    <Stl.LoginPhotoAndName>
                    </Stl.LoginPhotoAndName>
                    {localStorage.token == null ? <Stl.LoginButton onClick={goToLogin}>Login</Stl.LoginButton>
               : <Stl.LoginButton onClick={goToLogout}>Logout</Stl.LoginButton>}
               </Stl.LoginButtonAndImage>
            </Stl.Main>
        )
   }
    export default Header
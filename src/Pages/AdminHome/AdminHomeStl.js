import styled from "styled-components";
import BG from '../../Images/assets/TripsBG.png'
import createBG from '../../Images/assets/CreateBG.jpg'

export const Main = styled.div`
background-image: url(${BG});
background-size:103%;
background-size:auto;
`;

export const CreateButtonDiv = styled.div`
display:flex;
justify-content:center;
margin:5%;
`;

export const CardDiv = styled.div`
display:flex;
justify-content:space-around;
flex-wrap:wrap;
`;

export const BtnDetails = styled.button`
margin-left:20%;
margin-bottom:20px;
`;

export const BtnCreate = styled.button`
background-image: url(${createBG});
background-repeat: no-repeat;
background-size: auto;
width:40%;
height:20vh;
color:white;
justify-items:right;
font-size:25px;
border-radius:20px;
border: solid 4px;
:hover{
    border:none;
    box-shadow: inset 0 0 1em white, 0 0 1em white;

}
`;


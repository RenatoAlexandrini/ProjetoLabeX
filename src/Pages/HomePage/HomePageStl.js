import styled from 'styled-components'
import BG from '../../Images/assets/bg.jpg'

export const Main = styled.div`
background-image: url(${BG});
background-size:145vw;
height:100vh;
`;

export const BtnAlign = styled.div`
 display: flex;
 justify-content: center;
margin-top:15vh;

`

export const BtnListTrips = styled.img`
width:350px;
height:350px;
border-radius:20%20%;
border: 5px solid white;
opacity:0.8;
:hover{
border:none;
width:355px;
height:355px;
opacity:1;

}
`;



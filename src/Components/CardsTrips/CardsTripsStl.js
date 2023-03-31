import styled from "styled-components";
import cardBG from '../../Images/assets/CardBG.jpg';

export const Card = styled.div`
max-width:25vw;
min-width:360px;
min-height:50vh;
border: 4px solid;
border-radius: 20px;
margin:10px;
align-self: center;
background-color:white;
padding-left:5px;
padding-right:5px;
background-image: url(${cardBG});
background-size:cover;
color:white;
border-color:white;

`;
export const ImgDiv = styled.div`
text-align:center;

`;

export const PlntImg = styled.img`
width:30%;
border-radius:100%100%;

`;

export const TrpName = styled.p`
font-family: calibri;
font-size:25px;
font-weight:bolder;
margin-top:3%;
text-align:center;

`;

export const TrpDescription = styled.p`
font-family: calibri;
font-size:16px;
font-weight:bolder;
min-height:10vh;
max-height:10vh;
word-wrap: break-word;

`;

export const TrpPlanet = styled.p`
font-family: calibri;
font-size:15px;
font-weight:bolder;

`;

export const TrpDuration = styled.p`
font-family: calibri;
font-size:15px;
font-weight:bolder;

`;

export const TrpDate = styled.p`
font-family: calibri;
font-size:15px;
font-weight:bolder;

`;

export const DivButtonVariants = styled.div`
display:flex;
justify-content:flex-end;
margin-bottom:1%;
padding:1%;
margin-top:-5%;


`;

export const BaseButtonDiv = styled.div`
position:relative;
`;

export const ButtonWithVariants = styled.button`
padding:2%;
border-radius:3px;
border-bottom-right-radius:17px;
border:solid 3px;
font-weight:bolder;
color:white;
border-color:white;
background-color:transparent;
:hover{
  color: #2e86c1;
  border: #2e86c1 solid 3px;
  background:white;
}
`;

export const DeleteButton = styled.button`
margin-top:-6%;
margin-bottom:2%;
background-color:transparent;
border:solid 5px;
border-color:transparent;
padding:8px;
border-radius:100%;
opacity:0.7;

:hover{
border:solid 5px;
border-color:red;
opacity:1;
}
`;

export const DeleteImage = styled.img`
width:50px;
margin-top:4px;
`;


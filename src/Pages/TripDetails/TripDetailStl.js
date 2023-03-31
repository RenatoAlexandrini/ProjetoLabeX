import BG from '../../Images/assets/TripsBG.png'
import candidatesBg from '../../Images/assets/CandidatosBG.jpg'

import styled from "styled-components";

export const Main = styled.div`
background-image: url(${BG});
background-position:cover;
background-size:103%;
height:100%;
min-height:100vh;
`;

export const ListsDiv = styled.div`
margin:2%;
border:solid 4px;
border-color:white;
padding:1%;
border-radius:20px;

`;
export const ListsText = styled.p`
color:white;
font-family:Calibri;
font-weight:bold;
font-size:15px;
`;
export const TextDiv = styled.div`
margin:1%;
`;

export const PageDiv = styled.div`
display:flex;
margin:1%;
flex-wrap:wrap;
`;
export const CandidatesDiv = styled.div`
 border:solid 6px;
 overflow-y: scroll;
 width:65%;
 height:58vh;
 margin-top:1.5vh;
 border-color:white;
 border-bottom-left-radius:25px;
 border-top-left-radius:25px;
background-image:url(${candidatesBg});
background-size:100%;
background-position:center;
`;

export const ButtonsDiv = styled.div`
display:flex;
`;

export const AproveButton = styled.button`
font-family:Calibri;
font-weight:bolder;
font-size:15px;
padding-bottom:1%;
margin-right:0.5%;
border:solid 3px;
border-color:white;
background-color:transparent;
color:white;
border-bottom-left-radius:20px;
border-top-left-radius:20px;
:hover{
    background-color:white;
    color:green;
    border-color:green;
}
`;

export const ReproveButton = styled.button`
font-family:Calibri;
font-weight:bolder;
font-size:15px;
padding-bottom:1%;
border:solid 3px;
border-color:white;
background-color:transparent;
color:white;
border-bottom-right-radius:20px;
border-top-right-radius:20px;
:hover{
    background-color:white;
    color:red;
    border-color:red;
}
`;

export const ImageButton = styled.img`
margin-top:4%;
margin-bottom:-7%;
width:20%;
margin-right:5px;
margin-left:-15px;
`;

export const NoCandidatesImg = styled.img`
width:100%;
height:98%;
border-radius:25px;

`;


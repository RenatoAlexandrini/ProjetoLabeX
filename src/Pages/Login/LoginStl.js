import styled from "styled-components";
import loginBG from '../../Images/assets/LoginBG.jpg';

export const Main = styled.div`
background-image: url(${loginBG});
background-position:center;
height:100vh;
`;

export const BoxLogin = styled.div`
width:40vw;
border:solid 4px;
border-color:white;
margin-left:28%;
margin-top:10%;
border-radius:40px;

`;
export const FormLogin = styled.form`
display:flex;
flex-direction:column;
font-family: calibri;
font-weight: bold;
font-size:20px;
margin:3vw;
`;

export const LabelLogin = styled.label`
color:white;
`;

export const InputLogin = styled.input`
margin-bottom:4%;
height:22px;
border-radius:5px;
`;

export const ButtonDiv = styled.div`
display:flex;
justify-content:right;
`;

export const BtnLogin = styled.button`
font-size:20px;
font-weight:bold;
padding:5px;
padding-bottom:4px;
margin-top:2%;
margin-bottom:-4%;
border:solid 3px;
color:white;
background-color:transparent;
border-bottom-right-radius:12px;
border-top-right-radius:12px;
:hover{
  color: #2e86c1;
  border: #2e86c1 solid 3px;
  background:white;
}
`;

export const SubmitImage = styled.img`
width:20px;
margin-right:3px;
margin-left:3px;

`;
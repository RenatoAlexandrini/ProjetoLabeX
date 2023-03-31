import styled from  'styled-components'
import BG from '../../Images/assets/TripsBG.png';
import formBG from '../../Images/assets/FormBG.jpg';

export const Main = styled.div`
background-image: url(${BG});
margin:0;
min-height:100vh;

`;

export const FormDiv = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:center;
`;

export const Title = styled.div`
margin-left:7%;
`;

export const DataDiv = styled.form`
background-image: url(${formBG});
background-size:cover;
display:flex;
flex-direction:column;
border:solid 4px;
border-color:white;
min-width:60vw;
width:70vw;
height:49vh;
border-radius:20px;
background-color:white;
margin-top:10px;
margin-left:10px;
`;

export const Name = styled.input`
width:65vw;
height:6%;
margin-top:2%;
margin-left:2%;
border:solid 2px;
border-radius:5px;
`;

export const Age = styled.input`
width:5vw;
min-width:9%;
height:6%;
margin-top:2%;
margin-left:2%;
border:solid 2px;
border-radius:5px;
`;

export const Profission = styled.input`
width:65vw;
height:6%;
margin-top:2%;
margin-left:2%;
border:solid 2px;
border-radius:5px;
`;

export const Country = styled.select`
width:20vw;
height:6%;
margin-top:2%;
margin-left:2%;
border:solid 2px;
border-radius:5px;
`;

export const Text = styled.textarea`
width:65vw;
height:15vh;
margin-top:2%;
margin-left:2%;
border:solid 2px;
border-radius:5px;
text-align:start;
resize:none;
`;

export const ButtonDiv = styled.div`
display:flex;
justify-content:flex-end;
margin-top:2%;
margin-right:5%;
`;

export const SubmitButton = styled.button`
font-size:20px;
font-weight:bold;
padding:5px;
padding-bottom:4px;
margin-bottom:1%;
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




import styled from  'styled-components';
import BG from '../../Images/assets/TripsBG.png';
import createBG from '../../Images/assets/CreateBG.jpg'

export const Main = styled.div`
background-image: url(${BG});
background-size:cover;
height:100vh;
`;

export const FormDiv = styled.div`
background-image: url(${createBG});
display:flex;
justify-content:center;
border: solid 4px;
border-radius:30px;
border-color:white;
margin-left:20%;
margin-right:20%;
margin-top:2%;
padding:1%;

`;

export const Title = styled.h2`
color:white;
`;

export const FormData = styled.form`
display: flex;
flex-direction:column;
width: 50vw;
`;

export const NameInput = styled.input`
border-radius:5px;
height:23px;
margin-bottom:2%;
`;

export const DestinyInput = styled.select`
width:25%;
height:25px;
border-radius:5px;
margin-bottom:2%;
`;

export const DateInput = styled.input`
width:15%;
border-radius:5px;
height:23px;
margin-bottom:2%;
`;

export const DescriptionInput = styled.textarea`
resize:none;
border-radius:5px;
height:46px;
margin-bottom:2%;
`;

export const DurationInput = styled.input`
width:10%;
height:25px;
border-radius:5px;
margin-bottom:2%;
`;

export const LabelInput = styled.label`
font-style:calibri;
font-weight:bold;
color:white;
`;

export const DaysDiv = styled.div`

`;

export const SubmitButton = styled.button`

width:13%;
min-width:100px;
align-self:flex-end;
font-size:20px;
font-weight:bold;
padding:5px;
padding-bottom:6px;
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
margin-right:5px;
margin-left:-3px;
margin-top:2px;
`;
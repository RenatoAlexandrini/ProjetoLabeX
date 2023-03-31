import styled from  'styled-components'

export const Main = styled.div`
display: flex;
border: solid 2px black ;
justify-content: space-between;
background-color: black;
opacity:0.9;
padding:3px;

`;


export const LoginPhotoAndName = styled.div`
align-items:center;

`;

export const HomeButton = styled.button`
color:white;
border: none;
background-color: black;
width:13%;
border-radius:80px;
:hover{
box-shadow: inset 0 0 2em gray, 0 0 1em gray;

}
`;
export const ImgLoginButton = styled.img`
width:90%;
`;

export const LoginButtonAndImage = styled.div`
display: flex;

`;

export const LoginButton = styled.button`
margin-right:30%;
margin-left:-20%;
border:none;
height:95%;
font-family: calibri;
font-size: 150%;
font-weight:bolder;
background-color: black;
color: white;
:hover{
color:gray;
opacity:0.7;

}
`;
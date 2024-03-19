import styled from "styled-components";

export const Btn = styled.button`
border-radius: 8px;
background: var(--accentColor);
color: var(--white);
width: 100%;
height: 48px;
border: none;
font-family: Montserrat;
font-weight: 700;
line-height: 1.21
letter-spacing: 0px;
&:hover{
    background-color: #1A4032;
}
@media screen and (min-width: 768px){
   width: 236px;
}

`

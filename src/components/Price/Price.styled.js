import styled from "styled-components";

export const PriceBox = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
@media screen and (min-width: 768px){
   margin-bottom: 30px;
}
`


export const NewPriceP = styled.p`
color: var(--accentColor);
font-family: Fraunces;
font-size: 32px;
font-weight: 700;
line-height: 1;
letter-spacing: 0px;
text-align: left;
margin-right: 20px;
`


export const OldPriceP = styled.p`
color: var(--mainText);
font-family: Montserrat;
font-size: 13px;
font-weight: 500;
line-height: 1.77;
letter-spacing: 0px;
text-align: left;
text-decoration-line: line-through;
`


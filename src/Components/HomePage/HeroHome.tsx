import React from 'react';
import {Theme} from '../../theme';
import styled from "styled-components";
import { HeroConfig } from '../../config/HomeConfig';
import { useNavigate } from 'react-router-dom';
import HeroImage from '../../assets/HeroImage.svg'

const HeroHome: React.FC = ()=>{
    const navigate = useNavigate();
    return <Wrapper>
        <TextWrapper>
        <Title><Bold>Otwórz konto, zgarnij do 450 zł</Bold></Title>
        <Text>i oszczędzaj nawet na <Bold>8%!</Bold></Text>
        <Subtitle><Bold>Do konta mamy dla ciebie jeszcze:</Bold></Subtitle>
        <ListItem><Bold>pakiet wakacyjnych korzyści</Bold>, który opłaci Ci się podczas podróży</ListItem>
        <ListItem><Bold>premię</Bold> za polecenie konta znajomym</ListItem>
        <Button onClick = {()=> navigate(HeroConfig.onClickButtonRedirect)}>załóż konto przez aplikację</Button>
        </TextWrapper>
        <ImageWrapper>
            <Image src={HeroImage}/>
        </ImageWrapper>
    </Wrapper>
};



const Wrapper = styled.div`
width: 100%;
max-width: 1600px;
margin: 0 auto;
height: 550px;
position: relative;
background-color: #f0f0f0;
`

const TextWrapper = styled.div`
width: 550px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
position: absolute;
left: calc(10%);

`


const Title = styled.h1`
max-width: 450px;
font-weight: 400;
font-size: 40px;
line-height: 60px;
color: black;
@media (max-width: 480px) {
    font-size: 40px;
}
`


const Text = styled.p`
font-weight: 300;
font-size: 22px;
color: black;
margin-bottom: 18px;
@media (max-width: 480px) {
    width: 80%;
}
`

const Subtitle = styled.h1`
font-weight: 400;
font-size: 25px;
line-height: 50px;
color: black;
@media (max-width: 480px) {
    font-size: 40px;
}`;

const ListItem = styled.li`
list-style-type: none;
position: relative;
margin-left: 22px;
margin-bottom: 4px;
font-size: 20px;
&::before {
    content: "";
    height: 5px;
    width: 5px;
    background: #ae0000;
    position: absolute;
    left: -20px;
    top: 12px;
}
`;

const Bold = styled.span`
font-weight: 400;
`;

const Button = styled.button`
height: 40px;
width: 270px;
background-color: #ae0000;
border-radius: 32px;
font-family: inherit;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-top: 36px;
color: #FFFFFF;
border: none;
cursor: pointer;
transition: 0.2s ease-in-out;
&:hover {
    background-color: #850000;
}

`

const ImageWrapper = styled.div`
width: 425px;
height: 90%;
margin: auto 0;
display: flex;
flex-direction: column;
justify-content: center;
position: absolute;
right: 10%;
`;

const Image = styled.img`

`;

export default HeroHome;
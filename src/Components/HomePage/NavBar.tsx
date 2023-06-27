import React from 'react';
import {Theme} from '../../theme';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { NavBarConfig } from '../../config/HomeConfig';


const NavBar: React.FC = ()=>{
    if(NavBarConfig.length > 0)
    {
        return <Wrapper>
        <NavigationWrapper>
            {NavBarConfig.map((item)=>{
                return<NavigationLink key = {item.title} href={item.redirectTo}>{item.title}</NavigationLink>
            })}
        </NavigationWrapper>
    </Wrapper>
    }
    else{
        return null
    }

    
};

const Wrapper = styled.nav`
height: 80px;
align-items: center;
width: 100%;
display: flex;
justify-content: center;
margin: 0 auto;
max-width: 1500px;
background-color: white;
`

const NavigationWrapper = styled.ul`
display: flex;
color: #121212;
min-width: 400px;
height: 40px;
align-items: center;
@media (max-width: 480px) {
    margin-left: 0px;
    padding-left: 0;
    width: 100%;
    min-width: auto;
}
`

const NavigationLink = styled.a`
max-width: 300px;
text-overflow: "";
color: #121212;
margin: 0 20px;
font-size: 18px;
text-decoration: none;
opacity: 0.8;
transition: 0.2s ease-in-out all;
position: relative;
&::after {
    position absolute;
    width: 0;
    content: "";
    height: 3px;
    margin: 0 auto;
    left: 0;
    bottom: -12px;
    background: #993300;
    transition: all 0.3s ease-in-out;
  }
&:hover::after{
    width: 80%;
}
&.active{
    opacity: 1;
}
`

export default NavBar;



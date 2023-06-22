import React from "react";
import styled from "styled-components";
import { Theme } from "../../theme";
import WhiteLogo from "../../assets/FooterLogo.svg";
import logo from '../../assets/logo.png'


const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${Theme.footer};
  padding: 32px 0px;
  background-color: #333333;
`;

const Logo = styled.img`
  height: 40px;
  object-fit: contain;
  margin-left: 250px;

`;

export default Footer;

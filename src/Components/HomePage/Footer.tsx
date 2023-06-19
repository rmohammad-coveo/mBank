import React from "react";
import styled from "styled-components";
import { Theme } from "../../theme";
import WhiteLogo from "../../assets/FooterLogo.svg";


const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Logo src={WhiteLogo} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${Theme.footer};
  padding: 32px 0px;
`;

const Logo = styled.img`
  height: 20px;
  object-fit: contain;
  margin-left: 30px;
`;

export default Footer;

import React, { useContext, useEffect, useState } from "react";
import { Theme } from "../../theme";
import styled from "styled-components";
import HeaderLogo from "../../assets/HeaderLogo.svg";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";
import HomeSearchBox from "./HomeSearchBox";
import { x } from "react-icons-kit/feather/x";
import Fade from "@mui/material/Fade";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderConfig } from "../../config/HomeConfig";
import Popover from "@mui/material/Popover";
import ContextForm from "../CustomContext/ContextForm";
import { CustomContextContext } from "../CustomContext/CustomContextContext";
import HomeResultsSearchBox from "./HomeResultsSearchBox";

const Header: React.FC = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {getProfile} = useContext(CustomContextContext)
  const onSearchPage = location.pathname.includes("search");
  const toggleSearchBox = () => {
    if (onSearchPage) {
      const input = document.querySelector(".search-box input");
      if (input instanceof HTMLElement) {
        input.focus();
      }
      return;
    }
    setOpenSearch(!openSearch);
  };

  useEffect(() => {
    if (openSearch) {
      const input = document.querySelector(".home-search-box input");
      if (input instanceof HTMLElement) {
        input.focus();
      }
    }
  }, [openSearch]);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <LinesContainer>
        <Lines style={{width:"25%", backgroundColor:"red"}}/>
        <Lines style={{width:"5%", backgroundColor:"black"}}/>
        <Lines style={{width:"30%", backgroundColor:"orange"}}/>
        <Lines style={{width:"10%", backgroundColor:"brown"}}/>
        <Lines style={{width:"5%", backgroundColor:"blue"}}/>
        <Lines style={{width:"25%", backgroundColor:"green"}}/>
      </LinesContainer>
      <Wrapper>
        <Logo src={logo} onClick={() => navigate("/home")} />
        <RightWrapper>
          <LinkWrapper>
            {HeaderConfig.map((item) => {
              return (
                <NavigationLink key={item.title} to={item.redirectTo}>
                  {item.title}
                </NavigationLink>
              );
            })}
            </LinkWrapper>
            <IconsWrapper>
              <IconContainer
                style={{ color: Theme.headerIconColor, cursor: "pointer" }}
                onClick={() => toggleSearchBox()}
              >
                {openSearch && !onSearchPage ? (
                  <Icon icon={x} size={32} style={{color:"red"}}/>
                ) : (
                  <Icon icon={search} size={32} />
                )}
              </IconContainer>
              <ProfileIconContainer
                style={{ color: Theme.headerIconColor, cursor: "pointer" }}
                aria-describedby={id}
                onClick={(event)=>handleClick(event)}
              >
                <ProfileAvatar src = {getProfile().profile} alt = {'profile pic'}/>
                <ProfileName>{getProfile().name.split(' ').slice(0, -1).join(' ')}</ProfileName>
              </ProfileIconContainer>
              <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <ContextForm/>
                </Popover>
            </IconsWrapper>
        </RightWrapper>
      </Wrapper>
      <Fade in={openSearch && !onSearchPage}>
        <SearchContainer>
          <SearchBoxContainer>
            {!onSearchPage && 
            <HomeSearchBox toggleSearchBox={toggleSearchBox} />
            }
          </SearchBoxContainer>
        </SearchContainer>
      </Fade>
    </>
  );
};

const LinesContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100vw;
  max-width: 1600px;
`;

const Lines = styled.div`
  height: 5px;
`;

const Wrapper = styled.header`
  margin: 0 auto;
  max-width: 1500px;
  height: 80px;
  background-color: ${Theme.secondaryText};
  display: flex;
  padding: 0px 40px;
  align-items: center;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.01em;
`;

const Logo = styled.img`
  height: 50px;
  width: 150px;
  object-fit: contain;
  cursor: pointer;
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const LinkWrapper = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 1000px) {
    width: auto;
  }
`;

const NavigationLink = styled(Link)`
  color: ${Theme.primaryText};
  text-decoration: none;
  margin: 0 24px;
  font-size: 19px;
  font-weight: 300;
  opacity: 1;
  position: relative;
  &::after {
    position absolute;
    width: 0;
    content: "";
    height: 3px;
    margin: 0 auto;
    left: 0;
    top:-5px;
    background-color: #993300;
    transition: all 0.3s ease-in-out;
  }
  &:hover::after {
    width: 80%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
  `;
  
  const SearchContainer = styled.div`
  padding: 4px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 5px;
  left: calc(22vw);
  background-color: #0000000;
  justify-content: center;
  `;
  
  const SearchBoxContainer = styled.div`
    width: 56vw;
    background: white;
    border-bottom: 3px solid #2b60f0;
    box-shadow: 0 0 5px black;
    @media (max-width: 480px) {
      min-width: 80vw;
    }
  `;

  const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconContainer = styled.button`
background: none;
border: 0px;
width: 40px;
transition: 0.2s ease-in-out all;S
`

const ProfileName = styled.span`
font-size  : 20px;
font-weight: 400;
font-family: inherit;
margin-left: 15px;
color : #008520;
text-overflow: ellipsis;
`


const ProfileIconContainer = styled.button`
  background: none;
  border: 0px;
  margin-left: 20px;
  width: 90px;
  display: flex;
  align-items: center;
  transition: 0.2s ease-in-out all;

`



const ProfileAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
`

export default Header;

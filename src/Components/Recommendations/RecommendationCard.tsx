import React from "react";
import { Theme } from "../../theme";
import styled from "styled-components";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import { Icon } from "react-icons-kit";
import { globe } from 'react-icons-kit/feather/globe'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import singleLogo from '../../assets//sinlge-logo.gif'

interface RecommendationCardType {
  title: string;
  description: string;
  image: string;
  video?: boolean;
  clickUri: string;
  onClick: () => void;
  onContextMenu: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  source?: string;
}

const RecommendtionCard: React.FC<RecommendationCardType> = ({
  title,
  description,
  image,
  video = true,
  clickUri,
  onClick,
  onContextMenu,
  onMouseDown,
  onMouseUp,
  source = "",
}) => {
  return (
    <MainWrapper
      key={title}
      onClick={() => {
        onClick();
        window.open(clickUri, "_blank", "noopener,noreferrer");
      }}
      onContextMenu={onContextMenu}
    /* onMouseDown = {onMouseDown}
      onMouseUp = {onMouseUp} */
    >

      {!video
        ?
        <>
          <ImageContainer>
            <Title style={{marginRight: "32px"}} >{title}</Title>
            <Image src={singleLogo} />
          </ImageContainer>
          <TextWrapper>
            <SubTitle>{description}</SubTitle>
            <ReferralLink style={{marginBottom: "64px"}}>
              Dowiedz się więcej
              <ChevronContainer>
                <Icon icon={chevronRight} style={{ color: "#ae0000" }} />
              </ChevronContainer>
            </ReferralLink>
          </TextWrapper>
        </>
        :
        <>
          <ImageContainer style={{marginBottom: "12px"}}>
            <YTImage src={image} />
          </ImageContainer>
          <TextWrapper>
            <Title style={{marginBottom: "16px"}}>{title}</Title>
            <SubTitle>{description}</SubTitle>
            <ReferralLink>
              Oglądaj teraz
              <ChevronContainer>
                <Icon icon={chevronRight} style={{ color: "#ae0000" }} />
              </ChevronContainer>
            </ReferralLink>
          </TextWrapper>
        </>}
    </MainWrapper>
  );
};

export const SkeletonRecommendtionCard: React.FC = () => {
  return (
    <MainWrapper>
      <Skeleton
        style={{ height: "250px", position: "relative", top: "-5px" }}
      />
      <div style={{ padding: "30px 20px" }}>
        <Skeleton count={1} style={{ marginBottom: "20px", height: "50px" }} />
        <Skeleton count={2} style={{ margin: "10px 0px" }} />
      </div>
    </MainWrapper>
  );
};

const ImageContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin: 32px 16px 16px;
`;

const Image = styled.img`
  height: 40px;
  width: 40px
  object-fit: cover;
  transition: 0.2s ease-in-out all;
`;

const YTImage = styled.img`
  width: 90%;
  margin: 0 auto;
  object-fit: cover;
  transition: 0.2s ease-in-out all;
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 8px 16px;
  margin: 0 16px 16px;
`;

const Title = styled.a`
  font-family: inherit;
  text-decoration: none;
  font-style: normal;
  align-self: flex-start;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: ${Theme.primaryText};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const SubTitle = styled.span`
  font-family: inherit;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  color: ${Theme.primaryText};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 20px;
`;

const ReferralLink = styled.a`
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #ae0000;
  text-decoration: none;
  display: flex;
  align-self: flex-start;
  opacity: 0.8;
  cursor: pointer;
`;

const ChevronContainer = styled.div`
  color: ${Theme.link};
  margin-left: 10px;
  transition: all 300ms ease;
`;

const MainWrapper = styled.div`
  z-index: 10;
  position: relative;
  width: 350px;
  border: 3px solid #e5e8e8;
  overflow: hidden;
  margin: 20px;
  background: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 0 #cccccc;
  transition: all 300ms ease;
  &:hover {
    border-color: #ae0000;
    box-shadow: 0 0 0 #cccccc;
    filter: brightness(0.9);
  }

  &:hover ${Title} {
    color: #ae0000;
  }

  &:hover ${ReferralLink} {
    opacity: 1;
  }

  &:hover ${ChevronContainer} {
    transform: translatex(10px);
  }

  @media (max-width: 480px) {
    width: 90vw;
  }
`;



export default RecommendtionCard;

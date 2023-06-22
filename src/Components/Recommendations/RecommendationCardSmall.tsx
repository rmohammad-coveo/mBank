import React from "react";
import { Theme } from "../../theme";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import Icon from "react-icons-kit";
import "react-loading-skeleton/dist/skeleton.css";
import {play} from 'react-icons-kit/fa/play'


interface RecommendationCardSmallType {
  title : string,
  description : string,
  image : string,
  video? : boolean,
  clickUri : string,
  onClick : ()=>void,
  onContextMenu : ()=>void,
  onMouseDown : ()=>void,
  onMouseUp : ()=>void,
}


const RecommendtionCardSmall : React.FC<RecommendationCardSmallType> = ({
  title,
  description,
  video = false,
  clickUri,
  onClick,
  onContextMenu,
  onMouseDown,
  onMouseUp,
  image
}) => {
  return (
    <MainWrapper
      key={title}
      onClick={() => {
        onClick();
        window.open(clickUri, "_blank", "noopener,noreferrer");
      }}
      onContextMenu={onContextMenu}
     /*  onMouseDown={onMouseDown}
      onMouseUp={onMouseUp} */
    >
      {video ? (
        <VideoWrapper>
            <Icon className="play-icon" icon={play} size={50}/>
            <Image src = {image}/>
            <Title>{title}</Title>
        </VideoWrapper>
      ) : (
        <TextWrapper>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
        </TextWrapper>
      )}
    </MainWrapper>
  );
};

export const SkeletonRecommendtionCardSmall : React.FC = () => {
  return (
    <MainWrapper>
      <div style={{ padding: "30px 20px" }}>
        <Skeleton count={1} style={{ marginBottom: "20px", height: "40px" }} />
        <Skeleton count={2} style={{ margin: "10px 0px" }} />
      </div>
    </MainWrapper>
  );
};

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px;
  flex-direction: column;
`;

const Image = styled.img`
width: 100%;
object-fit : "center";
margin-bottom: 10px;
`

const VideoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
  filter: brightness(0.8);
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
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const SubTitle = styled.span`
  font-family: inherit;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 26px;
  color: ${Theme.primaryText};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReferralLink = styled.a`
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${Theme.link};
  text-decoration: none;
  display: flex;
  align-self: flex-start;
  opacity: 0.8;
  cursor: pointer;
`;

const MainWrapper = styled.div`
  /* width: 100%; */
  border: 1px solid #e5e8e8;
  overflow: hidden;
  margin: 20px;
  background: white;
  cursor: pointer;
  padding: 12px;
  box-shadow: 4px 4px #cccccc;
  transition: all 300ms ease;
  &:hover {
    border-color: #ae0000;
    box-shadow: 0px 0px #cccccc;
    filter: brightness(0.8);
  }

  &:hover ${Title} {
    color: #ae0000;
  }

  &:hover ${ReferralLink} {
    opacity: 1;
  }
`;

export default RecommendtionCardSmall;

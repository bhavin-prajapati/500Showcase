import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import PhotoDetails from "./PhotoDetails";
import MaterialIcon from "material-icons-react";
import Fullscreen from "react-full-screen";

const focusIn = keyframes`
  0% { 
    margin: 0 0 0 0; 
    height: 100%; 
    width: 100%;
    opacity: 0.8;
    padding: 0%;
    box-shadow: 0 0 0 rgba(0,0,0), 0 0 0 rgba(0,0,0);
  }
  100% { 
    margin: -10% -10% -10% -10%; 
    height: 120%; 
    width: 120%;
    opacity: 1;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
`;

const focusOut = keyframes`
  0% { 
    margin: -10% -10% -10% -10%; 
    height: 120%; 
    width: 120%;
    opacity: 1;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
  100% { 
    margin: 0 0 0 0; 
    height: 100%; 
    width: 100%;
    opacity: 0.8;
    padding: 0%;
    box-shadow: 0 0 0 rgba(0,0,0), 0 0 0 rgba(0,0,0);
  }
`;

const ThumbnailConstainer = styled.div`
  display: inline-block;
  background: none;
  z-index: 1;
  padding: 5px;
`;

const FullImageContainer = styled.div`
  display: inline-block;
  height: 100%;
  width: 80%;
`;

const Thumbnail = styled.img`
  display: inline;
  position: relative;
  animation: ${focusOut} 0.5s;
  opacity: 0.8;
  z-index: 2;
  &:hover {
    opacity: 1;
    height: 120%;
    width: 120%;
    z-index: 100;
    margin: -10% -10% -10% -10%;
    animation: ${focusIn} 0.5s;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;

const FullImage = styled.img`
  display: inline-block;
  width: 100%;
  height: inherit;
`;

const StyledModal = styled(Modal)`
  .modal-dialog {
    width: 90%;
    height: 90%;
    max-width: 90%;
    max-height: 90%;
  }
`;

const PhotoDetailsContainer = styled.div`
  display: inline-block;
  height: 100%;
  width: 20%;
  padding: 10px;
  text-align: center;
  vertical-align: top;
`;

const PhotoName = styled.div`
  padding: 10px;
  text-align: right;
  position: fixed;
  left: 0;
  vertical-align: top;
  top: 0;
  font-size: 18px;
  color: lightgray;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
`;

const FullscreenContainer = styled.div`
  padding: 10px;
  text-align: right;
  position: fixed;
  right: 20%;
  vertical-align: top;
  top: 0px;
  color: lightgray;
  cursor: pointer;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);

  i {
    font-size: 70px !important;
    color: lightgray !important;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 0.5);
    vertical-align: middle;
    padding: 5px;
  }

  .fullscreen {
    text-align: center;

    img {
      width: initial;
    }
  }
`;

const FullscreenButton = styled.div``;

const Rating = styled.div`
  padding: 10px;
  text-align: right;
  position: fixed;
  right: 20%;
  vertical-align: top;
  top: 70px;
  font-size: 18px;
  color: lightgray;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);

  i {
    color: lightgray !important;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 0.5);
    vertical-align: middle;
    padding: 5px;
  }
`;

const Votes = styled.div`
  padding: 10px;
  text-align: right;
  position: fixed;
  right: 20%;
  vertical-align: top;
  top: 100px;
  font-size: 18px;
  color: lightgray;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);

  i {
    color: lightgray !important;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 0.5);
    vertical-align: middle;
    padding: 5px;
  }
`;

const Views = styled.div`
  padding: 10px;
  text-align: right;
  position: fixed;
  right: 20%;
  vertical-align: top;
  top: 130px;
  font-size: 18px;
  color: lightgray;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
  i {
    color: lightgray !important;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 0.5);
    vertical-align: middle;
    padding: 5px;
  }
`;

function StyledImage(props) {
  const [showModal, setShowModal] = useState(false);
  const [isFull, setIsFull] = useState(false);

  const closeFullscreen = () => {
    setShowModal(false);
  };

  const openFullscreen = () => {
    setShowModal(true);
  };

  return (
    <ThumbnailConstainer>
      <Thumbnail onClick={openFullscreen} src={props.thumbnail} />
      <StyledModal
        show={showModal}
        onHide={closeFullscreen}
        aria-labelledby="modal-label"
        animation={false}
      >
        <FullImageContainer>
          <FullImage src={props.full} />
          <PhotoName>{props.photo.name}</PhotoName>
          <FullscreenContainer>
            <FullscreenButton onClick={() => setIsFull(true)}>
              <MaterialIcon icon="fullscreen" />
            </FullscreenButton>
            <Fullscreen enabled={isFull} onChange={isFull => setIsFull(isFull)}>
              <FullImage
                style={{ display: isFull ? "inline-block" : "none" }}
                src={props.full}
              />
            </Fullscreen>
          </FullscreenContainer>
          <Rating>
            {props.photo.rating}
            <MaterialIcon icon="star" />
          </Rating>
          <Votes>
            {props.photo.positive_votes_count}
            <MaterialIcon icon="favorite" />
          </Votes>
          <Views>
            {props.photo.times_viewed}
            <MaterialIcon icon="remove_red_eye" />
          </Views>
        </FullImageContainer>
        <PhotoDetailsContainer>
          <PhotoDetails photo={props.photo} />
        </PhotoDetailsContainer>
      </StyledModal>
    </ThumbnailConstainer>
  );
}

export default StyledImage;

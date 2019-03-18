import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import PhotoDetails from "./PhotoDetails";

const focusIn = keyframes`
  0% { 
    margin: 0 0 0 0; 
    height: 100%; 
    width: 100%;
    opacity: 0.8;
    padding: 0%;
  }
  100% { 
    margin: -10% -10% -10% -10%; 
    height: 120%; 
    width: 120%;
    opacity: 1;
    padding: 3%;
    background: #00aaff;
  }
`;

const focusOut = keyframes`
  0% { 
    margin: -10% -10% -10% -10%; 
    height: 120%; 
    width: 120%;
    opacity: 1;
    padding: 3%;
    background: #00aaff;
  }
  100% { 
    margin: 0 0 0 0; 
    height: 100%; 
    width: 100%;
    opacity: 0.8;
    padding: 0%;
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
    padding: 3%;
    background: #00aaff;
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

function StyledImage(props) {
  const [showModal, setShowModal] = useState(false);

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
        </FullImageContainer>
        <PhotoDetailsContainer>
          <PhotoDetails photo={props.photo} />
        </PhotoDetailsContainer>
      </StyledModal>
    </ThumbnailConstainer>
  );
}

export default StyledImage;

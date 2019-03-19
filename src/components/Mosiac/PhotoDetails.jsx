import React from "react";
import styled from "styled-components";
import MaterialIcon from "material-icons-react";

const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

const Name = styled.div`
  color: black;
  font-size: 18px;
  padding-top: 10px;
`;

const Description = styled.div`
  color: darkgray;
  font-size: 14px;
  padding-top: 10px;
  height: inherit;
  max-width: 100%;
  overflow-wrap: break-word;
`;

const Camera = styled.div`
  color: darkgray;
  font-size: 14px;
  padding-top: 10px;
  height: inherit;
  max-width: 100%;
  overflow-wrap: break-word;
  i {
    padding: 0px 5px;
    vertical-align: middle;
  }
`;

const Location = styled.img`
  padding-top: 10px;
  height: inherit;
  max-width: 100%;
`;

const PhotoDetails = ({ photo }) => {
  const position =
    photo.longitude & photo.latitude ? [photo.longitude, photo.latitude] : [];

  const aperture = photo.aperture ? (
    <React.Fragment>
      <MaterialIcon icon="camera" />
      {photo.aperture}
    </React.Fragment>
  ) : (
    ""
  );

  const camera = photo.camera ? (
    <Camera>
      <MaterialIcon icon="photo_camera" />
      <a href={`https://www.amazon.ca/s?k=${photo.camera}`} target="_blank">
        {photo.camera}
      </a>
      <br />
      {aperture}
    </Camera>
  ) : (
    ""
  );

  const location =
    position.length > 0 ? (
      <Location
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${
          position[0]
        },${
          position[1]
        }&zoom=3&size=400x400&maptype=roadmap&markers=color:red%7C%7C${
          position[0]
        },${position[1]}&key=AIzaSyD7NRmu-X1aC7HK0uUi_JX3Pd4EsGBExAc`}
      />
    ) : (
      ""
    );
  console.log(photo);
  console.log(position);

  return (
    <div>
      <Avatar src={photo.user.avatars.default.https} />
      <Name>{photo.user.fullname}</Name>
      <Description>{photo.description}</Description>
      {camera}
      {location}
    </div>
  );
};

export default PhotoDetails;

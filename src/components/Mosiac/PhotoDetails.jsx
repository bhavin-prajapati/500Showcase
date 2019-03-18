import React from "react";
import styled from "styled-components";

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

const Location = styled.img`
  height: 300px;
  width: 300px;
`;

const PhotoDetails = ({ photo }) => {
  const position = [photo.longitude, photo.latitude];
  return (
    <div>
      <Avatar src={photo.user.avatars.default.https} />
      <Name>{photo.user.fullname}</Name>
      <Location src={`https://maps.googleapis.com/maps/api/staticmap?center=${photo.longitude},${photo.latitude}&zoom=13&size=300x300&maptype=roadmap&markers=color:red%7Clabel:C%7C${photo.longitude},${photo.latitude}&key=AIzaSyD7NRmu-X1aC7HK0uUi_JX3Pd4EsGBExAc`} />
    </div>
  );
};

export default PhotoDetails;

/*
affection: 2452091
avatars:
default: {https: "https://drscdn.500px.org/user_avatar/1547425/q%3D8…3b30bf896acbd71a7c0e80e6092af102ead343c2cff914697"}
large: {https: "https://drscdn.500px.org/user_avatar/1547425/q%3D8…7a4e0246bec3420d74595eeea06c76a34cc317c375abfebfc"}
small: {https: "https://drscdn.500px.org/user_avatar/1547425/q%3D8…bd866aaac489b2fbdd2a3b5be524226ec1f12302113ccb74e"}
tiny: {https: "https://drscdn.500px.org/user_avatar/1547425/q%3D8…41c797d17b8c4cccf29789252e3135e016e3c2131c964d19d"}
__proto__: Object
city: "Luxembourg"
country: "Luxembourg"
cover_url: "https://drscdn.500px.org/user_cover/1547425/q%3D65_m%3D2048/v2?webp=true&v=5&sig=731189ab3e214cdf1cf2494c8a4525b1863bd1e507a194c7758bc5d3909740b8"
firstname: "Georg"
fullname: "Georg Scharf"
id: 1547425
lastname: "Scharf"
store_on: true
upgrade_status: 3
username: "info373"
userpic_https_url: "https://drscdn.500px.org/user_avatar/1547425/q%3D85_w%3D300_h%3D300/v2?webp=true&v=1&sig=fa731271a3e325c3b30bf896acbd71a7c0e80e6092af102ead343c2cff914697"
userpic_url: "https://drscdn.500px.org/user_avatar/1547425/q%3D85_w%3D300_h%3D300/v2?webp=true&v=1&sig=fa731271a3e325c3b30bf896acbd71a7c0e80e6092af102ead343c2cff914697"
usertype: 0
*/

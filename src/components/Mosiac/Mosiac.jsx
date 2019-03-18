import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import StyledImage from "../Mosiac/StyledImage";

const MosiacContainer = styled.div`
  background: black;
  text-align: center;
`;

const MosiacComponent = ({ photos }) => {
  if (!photos) return <div />;
  return (
    <MosiacContainer>
      {photos.map((photo, index) => {
        let thumbnail = photo.images.filter(image => image.size === 3)[0].url;
        let base = photo.images.filter(image => image.size === 1080)[0].url;
        let full = photo.images.filter(image => image.size === 2048)[0].url;
        return (
          <StyledImage
            photo={photo}
            thumbnail={thumbnail}
            base={base}
            full={full}
            key={index}
          />
        );
      })}
    </MosiacContainer>
  );
};

MosiacComponent.propTypes = {
  photos: PropTypes.array
};

MosiacComponent.defaultProps = {
  photos: null
};

const mapStateToProps = state => {
  return {
    photos: state.showcase.photos ? state.showcase.photos : []
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

const Mosiac = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MosiacComponent)
);

export default Mosiac;

import React, { Component } from "react";
import LoadingOverlay from "react-loading-overlay";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Col, Row } from "react-bootstrap";
import Mosiac from "../Mosiac/Mosiac";
import * as showcaseActionCreator from "../../actionCreators/showcaseActionCreator";

export class ShowcaseComponent extends Component {
  componentWillMount() {
    if (!this.props.showcase) {
      this.props.getPopular(this.props.current_page);
    }
    document.addEventListener("scroll", this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  trackScrolling = () => {
    const wrappedElement = document.body;
    if (this.isBottom(wrappedElement)) {
      console.log("header bottom reached");
      this.props.getPopular(this.props.current_page);
    }
  };

  render() {
    let loadingSpinner = "";
    if (this.props.loading) {
      loadingSpinner = (
        <LoadingOverlay
          styles={{
            overlay: base => ({
              ...base,
              position: "fixed",
              height: "100%",
              width: "100%",
              background: "rgba(0, 0, 0, 0.5)"
            })
          }}
          active={this.props.loading}
          spinner
        />
      );
    }
    let photos = "";
    if (this.props.showcase) {
      photos = this.props.showcase.photos;
    }
    return (
      <Grid fluid>
        <Row>
          <Col>
            {loadingSpinner}
            <Mosiac photos={photos} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

ShowcaseComponent.propTypes = {
  getPopular: PropTypes.func,
  showcase: PropTypes.shape({
    data: PropTypes.string
  }),
  loading: PropTypes.bool
};

ShowcaseComponent.defaultProps = {
  getPopular: () => {},
  photos: null,
  current_page: 0,
  loading: false
};

const mapStateToProps = state => {
  return {
    photos: state.showcase.photos,
    current_page: state.showcase.current_page,
    loading: state.showcase.loading
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getPopular: showcaseActionCreator.getPopular
    },
    dispatch
  );
};

const Showcase = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShowcaseComponent)
);

export default Showcase;

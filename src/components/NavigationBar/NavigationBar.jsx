import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

export class NavigationBarComponent extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavigationBarComponent.propTypes = {};

NavigationBarComponent.defaultProps = {
  search: () => {}
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

const NavigationBar = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavigationBarComponent)
);

export default NavigationBar;

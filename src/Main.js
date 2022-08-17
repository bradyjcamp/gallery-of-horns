import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HornedBeast from "./components/BeastCards/HornedBeast.js";
import FilteredBeasts from "./components/FilteredBeasts/FilteredBeasts.js";

import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <main>
        <FilteredBeasts
          handleSelectHorns={this.props.handleSelectHorns}
          data={this.props.data}
        />
        <Row xs={1} md={2} lg={3}>
          {this.props.data.map((animal, index) => {
            return (
              <Col key={animal.title}>
                <HornedBeast
                  selectedBeast={animal}
                  handleShowModal={this.props.handleShowModal}
                />
              </Col>
            );
          })}
        </Row>
      </main>
    );
  }
}

export default Main;

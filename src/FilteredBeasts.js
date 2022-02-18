import React from "react";
import { Form, Container } from "react-bootstrap";

class FilteredBeasts extends React.Component {
  render() {
    return (
      <Container>
        <Form className="mb-4" style={{ width: "max-content", margin: "auto" }}>
          <Form.Group controlId="selected">
            <Form.Label>Filter by horns:</Form.Label>
            <Form.Select onChange={this.props.handleSelectHorns}>
              <option value="all">All</option>
              <option value="one">1 horns</option>
              <option value="two">2 horns</option>
              <option value="most">100 horns</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default FilteredBeasts;

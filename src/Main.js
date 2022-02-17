import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import HornedBeast from './HornedBeast.js';

import './Main.css';

class Main extends React.Component {
  render(){
    return (
      <main>
        <Row xs={1} md={2} lg={3}>
          {this.props.data.map((animal, index) => {
            return(
            <Col key={index}>
              <HornedBeast 
                selectedBeast={animal}
                handleShowModal={this.props.handleShowModal}
              />
            </Col>
            )
          }
          )}
        </Row>
      </main>
      );
    }
}

export default Main;
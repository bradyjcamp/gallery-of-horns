import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import HornedBeast from './HornedBeast.js';
import data from './data.json'
import './Main.css';

class Main extends React.Component {
  render(){
    return (
      <main>
        <Row xs={1} md={2} lg={3}>
          {data.map((animal, index) => (
            <Col>
              <HornedBeast  
                key={index}
                title={animal.title}
                imageUrl={animal.image_url}
                description={animal.description}
              />
            </Col>
            )
          )}
        </Row>
      </main>
      );
    }
}

export default Main;
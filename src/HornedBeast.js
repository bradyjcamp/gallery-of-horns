import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class HornedBeast extends React.Component{
  // THIS is how we setup state in a component
  constructor(props){
    super(props);
    this.state = {
      favorited: 0,
    }
  }

  handleFavorite = () => {
    this.setState({
      favorited: this.state.favorited + 1,
    });
  }

  render(){
    return(
      <article>
        <Row xs ={1} md={2} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col lg={"auto"}>
              <Card style={{ width: '18rem' }}>
                <Card.Img onClick={this.handleFavorite} 
                  src={this.props.imageUrl} 
                  alt={this.props.description} 
                  title={this.props.title}
                  variant="top" 
                />
                <Card.Body>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Text>💖: {this.state.favorited}</Card.Text>
                  <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            )   
          )
        }
        </Row>
    </article>
    );
}
}

export default HornedBeast;
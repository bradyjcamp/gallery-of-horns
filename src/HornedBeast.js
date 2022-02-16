import React from 'react';
import Card from 'react-bootstrap/Card'

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
        <Card 
        className="square border border-3 border-primary mx-auto mb-4" 
        style={{ width: '18rem' }}>
          <Card.Img onClick={this.handleFavorite} 
            src={this.props.imageUrl} 
            alt={this.props.description} 
            title={this.props.title}
            variant="top" 
          />
          <Card.Body className="text-center">
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>💖: {this.state.favorited}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
    </article>
    );   
  }
}

export default HornedBeast;
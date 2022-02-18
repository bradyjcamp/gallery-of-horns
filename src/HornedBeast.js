import React from "react";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  // THIS is how we setup state in a component
  constructor(props) {
    super(props);
    this.state = {
      favorited: 0,
    };
  }

  handleFavorite = () => {
    this.setState({
      favorited: this.state.favorited + 1,
    });
  };

  handleAnimalClick = () => {
    this.props.handleShowModal(this.props.selectedBeast);
    this.handleFavorite();
  };

  render() {
    return (
      <article>
        <Card
          className="square border border-3 border-primary mx-auto mb-4"
          style={{ width: "18rem" }}
        >
          <Card.Img
            src={this.props.selectedBeast.image_url}
            alt={this.props.selectedBeast.description}
            title={this.props.selectedBeast.title}
            variant="top"
            onClick={this.handleAnimalClick}
          />
          <Card.Body className="text-center">
            <Card.Title>{this.props.selectedBeast.title}</Card.Title>
            <Card.Text>💖: {this.state.favorited}</Card.Text>
            <Card.Text>{this.props.selectedBeast.description}</Card.Text>
          </Card.Body>
        </Card>
      </article>
    );
  }
}

export default HornedBeast;

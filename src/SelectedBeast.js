import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Image
          src={this.props.selectedBeast.image_url}
          alt={this.props.selectedBeast.description}
          title={this.props.selectedBeast.title}
        />
        <Modal.Body>
          {this.props.selectedBeast.description} is an important part of this
          community
        </Modal.Body>
      </Modal>
    );
  }
}

export default SelectedBeast;

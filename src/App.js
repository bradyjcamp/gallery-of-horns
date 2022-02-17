import React from 'react';
import './App.css';
import Header from './Header.js';
import SelectedBeast from './SelectedBeast.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from "react-bootstrap/Modal"


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {}
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  
  handleShowModal = (selectedBeast) => {
    // const selectedBeast = data.find(beast => beast.title === name);
    this.setState({
      selectedBeast,
      showModal: true,
    });
  }


  render(){
    return (
      <> 
      <Header />
      <SelectedBeast
        handleCloseModal={this.handleCloseModal}
        showModal={this.state.showModal}
        selectedBeast={this.state.selectedBeast}

      />


      {/* <Modal show ={this.state.showModal} onHide={this.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.name} is an important part of this community
        </Modal.Body>


      </Modal> */}


      <Main 
      data={data} 
      handleShowModal={this.handleShowModal}/> 
      <Footer />
    </>
    );
  }
}

export default App;

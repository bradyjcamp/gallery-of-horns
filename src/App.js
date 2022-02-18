import React from "react";
import "./App.css";
import Header from "./Header.js";
import SelectedBeast from "./SelectedBeast.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import data from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      data: data,
    };
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleShowModal = (selectedBeast) => {
    this.setState({
      selectedBeast,
      showModal: true,
    });
  };

  handleSelectHorns = (event) => {
    let selected = event.target.value;
    if (selected === "one") {
      let newSelectedBeast = data.filter((beast) => beast.horns === 1);
      this.setState({ data: newSelectedBeast });
    } else if (selected === "two") {
      let newSelectedBeast = data.filter((beast) => beast.horns === 2);
      this.setState({ data: newSelectedBeast });
    } else if (selected === "three") {
      let newSelectedBeast = data.filter((beast) => beast.horns === 3);
      this.setState({ data: newSelectedBeast }); 
    } else if (selected === "most") {
      let newSelectedBeast = data.filter((beast) => beast.horns === 100);
      this.setState({ data: newSelectedBeast });
    } else {
      this.setState({ data: data });
    }
  };

  render() {
    console.log("app state", this.state);
    return (
      <>
        <Header />
        <SelectedBeast
          handleCloseModal={this.handleCloseModal}
          showModal={this.state.showModal}
          selectedBeast={this.state.selectedBeast}
        />

        <Main
          data={this.state.data}
          handleShowModal={this.handleShowModal}
          handleSelectHorns={this.handleSelectHorns}
        />
        <Footer />
      </>
    );
  }
}

export default App;

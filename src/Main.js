import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  render(){
    let beastsArr = [];
    this.props.data.forEach((animal, index) => {
      beastsArr.push(
        <HornedBeast 
          key={index}
          title={animal.title}
          imageUrl={animal.image_url}
          description={animal.description}
        />
      )
    })

    return(
      <main>
        {beastsArr}
      </main>
    );
  }
}

export default Main;
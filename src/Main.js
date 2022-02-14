import React from 'react';
import Person from './Person';

class Main extends React.Component {
  render(){
    return(
      <main>
        <Person name='Brady'/>
        <Person name='John'/>
        <Person name='Sam'/>
        <Person name='Tom'/>
      </main>
    );
  }
}

export default Main;
import React from 'react';

class Person extends React.Component{
  render(){
    return(
      <article>
          <h3>{this.props.name}</h3>
          <p> 
            Lorem ipsum dolar sit amet consectetur adipisicing
          </p>
        </article>
    );
  }
}

export default Person;
import React from 'react';
import './App.css';
import Header from './Header.js'
import Main from './Main.js'

class App extends React.Componet {
  render(){
    return (
      //below is whats called a frag <>, </>
      <> 
      <Header />
        <Main />
    <footer>
      &copy;Brady Camp

    </footer>

    </>
    );
  }
}

export default App;

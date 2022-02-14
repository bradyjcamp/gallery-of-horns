import React from 'react';
import './App.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

class App extends React.Component {
  render(){
    return (
      //below is whats called a frag <>, </>
      <> 
      <Header />
        <Main />
      <Footer />

    </>
    );
  }
}

export default App;

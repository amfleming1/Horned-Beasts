import React from 'react';
import Header from './component/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Main title="uniWhal" />
        <Main title="Rhino Family" />
        <Main title="Unicorn Head" />
        <Footer />
        </div>
  
    )
  };
}

export default App;

(<h1>Horned-Beasts!!!</h1>);
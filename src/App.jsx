import React from 'react';
import Header from './component/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HornedBeasts from './components/HornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';


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


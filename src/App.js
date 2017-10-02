import React, { Component } from 'react';
import './styles/App.css';
import './styles/skills.css';
import './styles/footer.css';
import './styles/header.css';
import './styles/home.css';
import './styles/contact.css';
import './styles/work.css';

import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

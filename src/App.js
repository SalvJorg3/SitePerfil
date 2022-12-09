import React from 'react';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './AboutMe';
import MyLife from './MyLife';
import MyHabilities from './MyHabilities';
import ContactMe from './ContactMe';
import Footer from './Footer';



class App extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
      <AboutMe />
      <MyLife />
      <MyHabilities />
      <ContactMe />
      <Footer />
      </div>
    );
  }
}

export default App;

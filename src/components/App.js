import React from 'react';
import './app/styling/App.scss';
import './app/styling/navigation.scss';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import FirstPage from './app/pages/FirstPage';
import SecondPage from './app/pages/SecondPage';
import Footer from './app/pages/Footer';
import Hamburger from './app/resources/hamburger';
import SpendLess from './app/pages/SpendLess';


const App = () => {
  return (
    <Router>
      <div className="App">
          <Hamburger />
        <section id="main">
          <Switch>
            <Route exact path="/" />
            <Route exact path="/SpendLess" component={SpendLess}/>
            <Route exact path="/Secondpage" component={SecondPage} />
          </Switch>
        </section>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

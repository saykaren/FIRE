import React from 'react';
import './app/styling/App.scss';
import './app/styling/navigation.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './app/pages/Footer';
import Hamburger from './app/resources/hamburger';
import SpendLess from './app/pages/SpendLess';
import RidDebt from './app/pages/RidDebt';
import PayYourSelf from './app/pages/PayYourself';
import InvestingVehicles from './app/pages/InvestingVehicles';
import TippingPoint from './app/pages/TippingPoint';
import Resources from './app/pages/Resources';
import Home from './app/pages/Home';


const App = () => {
  return (
    <Router>
      <div className="App">
          <Hamburger />
        <section id="main">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/SpendLess" component={SpendLess}/>
            <Route exact path="/RidDebt" component={RidDebt} />
            <Route exact path="/PayYourSelf" component={PayYourSelf}/>
            <Route exact path="/InvestingVehicles" component={InvestingVehicles}/>
            <Route exact path="/TippingPoint" component={TippingPoint}/>
            <Route exact path="/Resources" component={Resources}/>
          </Switch>
          <Footer />
        </section>
      </div>

    </Router>
  );
}

export default App;

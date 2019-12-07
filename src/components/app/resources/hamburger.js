import React, {useState} from 'react';
import './../styling/ham.scss';
import {BrowserRouter as Router, Link} from 'react-router-dom';


const Hamburger = () =>{
    const [navigation, setNavigation] = useState(false);
    const activateNavigation = (x) =>{
        navigation ? setNavigation(false) : setNavigation(true);
    }

    let ham1ClassName = "hamburger1";
    let ham2ClassName = "hamburger2";
    let ham3ClassName = "hamburger3";
    let navigationList = "hiddenNavigation";
    let appHeaderNonActive = "App-header-nonActive";

    if(navigation === true){
        ham1ClassName = "changehamburger1";
        ham2ClassName = "changehamburger2";
        ham3ClassName = "changehamburger3";
        navigationList = "activeNavigation";
        appHeaderNonActive = "App-header-active"
    }

 
 
    return(
        <header className={appHeaderNonActive}> 
            <div className="hamContainer" onClick={activateNavigation}>
                <div className={ham1ClassName}></div>
                <div className={ham2ClassName}></div>
                <div className={ham3ClassName}></div>
            </div>
        <ul>
          <li className={navigationList}>
            <Link to="/">Home</Link>
          </li>
          <li className={navigationList}>
            <Link to="/SpendLess">Spend Less</Link>
          </li>
          <li className={navigationList}>
            <Link to="/RidDebt">Rid Your Life of Debt</Link>
          </li>
          <li className={navigationList}>
            <Link className="navA" to="/PayYourSelf">Pay Yourself First</Link>
          </li>
          <li className={navigationList}>
            <Link className="navA" to="/InvestingVehicles">Investing Vehicles</Link>
          </li>
          <li className={navigationList}>
            <Link className="navA" to="/TippingPoint">Tipping Point</Link>
          </li>
          <li className={navigationList}>
            <Link className="navA" to="/Resources">Resources</Link>
          </li>
        </ul>
      </header>

    )
}

export default Hamburger;
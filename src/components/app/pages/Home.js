import React from 'react';
import {useHistory} from 'react-router';
import './../styling/home.scss';

const Home = () =>{
    const history = useHistory();

    const goBackHistory = () =>{
        history.goBack();
    }

    return(
        <>
            <button className="backButton" onClick={goBackHistory}>Back</button>
            <section id="Home" className="main-section">
                {/* <h2 className="home-header">FIRE</h2> */}
                <div className="wrap">
                    <span>FIRE</span>
                </div>
                <div className="sub-section"> 
                    F.I.R.E. stands for Financial Independence, Retire Early. The goal is to save and invest very aggressively so you can have freedom
                    and be able to pursue what lights your heart on fire. 
                </div>
     

            </section>
          
        </>
    );
}

export default Home;



   
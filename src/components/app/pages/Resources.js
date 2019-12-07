import React from 'react';
import {useHistory} from 'react-router';

const Resources = () =>{
    const history = useHistory();

    const goBackHistory = () =>{
        history.goBack();
    }

    return(
        <>
            <button className="backButton" onClick={goBackHistory}>Back</button>
            <section id="Investing_Vehicles" class="main-section">
                <h2 className="section-header">Resources</h2>
                <div className="sub-section"> 
                    <h2>Dave Ramsey</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/h-fcI7W-ucY"  id="video"></iframe>
                    </div>
     
                    <div className="sub-section"> 
                    <h2>Tony Robbins</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kSoO2KjVVG4"></iframe>
                    </div>
                    <div className="sub-section"> 
                        <h2>My Money Wizard</h2>
                        Very interest blog of a man who was able to retire early and how he did it. View his blog at 
                        <a className="link" href="https://mymoneywizard.com/" target="_blank">
                            My Money Wizard
                        </a>
                    </div>
                    <div className="sub-section"> 
                        <h2>Earl Nightingale</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/EFhkdzj-x80"></iframe>
                    </div>
                    <div className="sub-section"> 
                        <h2>TAS by Karen Garcia</h2>
                    <a 
                        className="link"
                        href="https://www.amazon.com/TAS-Started-Investing-Greatest-Potential/dp/1982931051/ref=sr_1_1?ie=UTF8&qid=1545413913&sr=8-1&keywords=tas+karen+garcia" 
                        target="_blank">
                            TAS: How I Lost 25+ Pounds and Started Investing (Helping People Achieve Their Greatest Potential)
                    </a>
                </div>
            </section>
          
        </>
    );
}

export default Resources;


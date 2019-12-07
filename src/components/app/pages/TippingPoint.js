import React from 'react';
import {useHistory} from 'react-router';

const TippingPoint = () =>{
    const history = useHistory();

    const goBackHistory = () =>{
        history.goBack();
    }

    return(
        <>
            <button className="backButton" onClick={goBackHistory}>Back</button>
            <section id="Investing_Vehicles" className="main-section">
                <h2 className="section-header">The Tipping Point</h2>
                <div className="sub-section"> 
                    You are riding your bike up a steep hill pushing and pushing and can see the top of the hill just feet away. Once you hit the top 
                    you feel a rush of relief rain over you as all that hard work just paid off. You now get to sit back and let gravity guide you 
                    down the other side. 
                    </div>
     
                    <div className="sub-section"> 
                        Well that is also true with investments. Your money invested makes money which then inturn makes more money....which in turn 
                        makes more money...until one day you realize all that money in invested in your account is making more than you do with your 
                        salary. That is the magic of compound interest. The more you have invested, along with time, will allow you to have a golden 
                        goose that keeps lying eggs big enough to cover for your yearly expenses.  
                    </div>
                    <div className="sub-section"> 
                        Just like before you need to continue to budget and tell your money where to go. Don't let your lifestyle creep up to a higher
                        and higher level as you might be slowly killing the golden goose. 
                    </div>
            </section>
          
        </>
    );
}

export default TippingPoint;


   
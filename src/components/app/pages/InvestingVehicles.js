import React from 'react';
import {useHistory} from 'react-router';
import './../styling/investingVehicles.scss';

const InvestingVehicles = () =>{
    const history = useHistory();

    const goBackHistory = () =>{
        history.goBack();
    }

    return(
        <>
            <button className="backButton" onClick={goBackHistory}>Back</button>
            <section id="Investing_Vehicles" class="main-section">
                <h2 className="section-header">Investing Vehicles</h2>
                <div className="flex-container">
                    <div className="sub-flex">ETF</div>
                    <div className="sub-flex">Mutual Funds</div>
                    <div className="sub-flex">Individual Stocks</div>
                    <div className="sub-flex">Bonds</div>
                    <div className="sub-flex">Real Estate</div>
                    <div className="sub-flex">Other</div>
                </div>
                <div className="sub-section"> 
                    ETFs - Exchange Traded Funds. While I am still a newbie at investing all the financial books I read mostly says ETFs that 
                    follow the S&P 500 are the way to go. Keep your costs low and follow the market trend.
                </div>
     
                <div className="sub-section"> 
                    Mutual Funds-These are funds managed by an fund manager. The manager works to try and find the secret ingredients to get you a 
                    better rate of return than the S&P 500. The issue is no one truly knows how to beat the S&P 500. An example of this was shown 
                    with the completion of a bet from 
                    <a className="link" 
                        href="https://www.cnbc.com/2018/02/16/warren-buffett-won-2-point-2-million-on-a-bet-and-gave-it-to-girls-inc.html" 
                        target="_blank">
                        Warren Buffett 
                    </a>
                    that hedge fund managers couldn't beat the stock market average over a 10 year period. Warren won and donating the proceeds of 
                    the bet to charity. What we learned from this real life example? Fund managers cannot out beat the stock market so rather than 
                    paying those extra fees for that person's salary, invest in ETF with low expense ratios which follow the S&P 500.  
                </div>
                    <div className="sub-section"> 
                        Individual Stocks- From all that I have read and learned about the finanical market don't invest in single stocks. If you do 
                        want to invest in single stocks keep it very low percentage of your portfolio. The whole point of the game is to diversify. 
                        Buying a single stock, even of a reputable company can ruin your nest egg when that company's stock takes a hit. 
                    </div>
                    <div className="sub-section"> 
                        Bonds-I haven't researched bonds enough to comment on them. They have less risk than stocks but due to the low interest rates 
                         now I don't have much in bonds. 
                    </div>
            </section>
          
        </>
    );
}

export default InvestingVehicles;



   
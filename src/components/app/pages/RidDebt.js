import React from 'react';
import {useHistory} from 'react-router';

const RidDebt = () =>{
    const history = useHistory();

    const goBackHistory = () =>{
        history.goBack();
    }

    return(
        <>
            <button className="backButton" onClick={goBackHistory}>Back</button>
            <section id="Rid_Your_Life_of_Debt" className="main-section">
                <h2 className="section-header">Rid Your Life of Debt</h2>
        
                <div className="sub-section"> 
                    Debt is not your friend. He blindly steals from you promising you instant gratification by siphoning off your income month by month. 
                    Pay off all your debt including student loans, cars, credit cars and YES, even your house as quickly as possible. The sooner you get 
                    control of your income the sooner you can have compound interest work in your favor not to your detriment. 
                </div>
                <div className="sub-section"> 
                    Pay off your mortgage as soon as possible. Until I started looking at our amortization schedule of our mortgage I didn't realize how 
                    much we are paying in interest over the scope of our loan. For example a house costing $250,000 with a $10,000 down payment fixed 30 
                    year loan at 4.33% will cost you approximately $196,969.82 in INTEREST PAYMENTS! YIKES!! 
                </div>
        
                <div className="sub-section"> 
                    Conversely what if with the $250,000 loan you started to put an extra principal payment of $200 each month. That would save you 
                    $49,992.23 in interest payments and cut 6 years off your loan. 
                </div>
                <div className="sub-section"> 
                    What if you just went crazy and added $500 a month to the principal? That would save you $88,301.79 in interest and cut 12, count it 
                    <strong>12 YEARS</strong> off your loan! What if you then took that $1,242 monthly payment + extra $500 to invest for 
                    those 12 years you saved on the house? Assuming a 10% annual return on investments you would have $491,718! 
                </div>
                <div className="sub-section">  
                    Check my math at 
                        <a 
                            className="link" 
                            href="https://www.daveramsey.com/smartvestor/investment-calculator?snid=tools.investingcalc" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Dave Ramsey's website
                        </a> 
                    and try your own numbers to realize how much a few hundred a month can save you over the course of a decade. 
                </div>
                <div className="sub-section"> 
                    Lastly once you are debt free, never go back. Never get another car loan or zero down 0% interest for 12 months loan <b>again</b>. 
                    Being debt free is glorious feeling, don't give it up because you couldn't wait a few months to save up for that item you wanted 
                    right then and there.
                </div>
            </section>
        </>
    );
}

export default RidDebt;
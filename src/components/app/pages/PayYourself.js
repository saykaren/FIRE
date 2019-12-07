
import React from 'react';
import {useHistory} from 'react-router';

const PayYourSelf = () =>{
    const history = useHistory();

    const goBackHistory = () =>{
        history.goBack();
    }

    return(
        <>
            <button className="backButton" onClick={goBackHistory}>Back</button>
            <section id="Pay_Yourself_First" className="main-section">
                 <h2 className="section-header" >Pay Yourself First</h2>
                <div className="sub-section">  
                    Setup monthly and automatic withdrawals from your account to make sure you pay yourself first. By paying yourself first I mean 
                    think about setting aside a certain portion of your paycheck every month to invest for future needs such as retirement, emergency
                     fund, vacation fund, etc. To help with the process make it automated so you don't even notice the money coming out of your account
                      so that your present self cannot ruin your future goals. 
                </div> 
                <div className="sub-section"> 
                    After paying off all your debt (except the house) it is 
                    recommended to put 10%-20% of your paycheck into retirement. You are going to retire someday, why not make sure it is an enjoyable 
                    experience!
                </div>
                <div className="sub-section"> 
                    For your monthly investment for retirement get any match out of your 401k from your employer. If possible invest in a Roth IRA over 
                    a traditional. Especially if you have a few decades before retiring most of your money will be from growth which will be tax free 
                    within a Roth. 
                </div>
     
                <div className="sub-section">  
                    Max out your IRA (Individual Retirement Account). For 2019 the 
                    <a className="link" href="https://www.irs.gov/newsroom/401k-contribution-limit-increases-to-19000-for-2019-ira-limit-increases-to-6000" target="_blank">
                        IRS 
                    </a>
                    has increased the limit to $6,000 a year max to an IRA. 
                </div>
                <div className="sub-section"> 
                    Any remaining percentage go back to your 401k (Roth if available) to finish off your 10%-20%
                </div>
                <div className="sub-section"> 
                    Utilize Roth investment when available as most of your money will be from growth, not contributions (money you gave into the plan).
                     For example Bob is 30 years old and will retire at the age of 59.5 (Weird but you cannot access your retirement until your 59 AND a 
                     half birthday...) He doesn't have anything saved yet and his employer doesn't offer a 401k plan. He decides this is the year to get on 
                     it with his finances. He wants to max out his IRA to $6,000 in 2019 ($500 a month). Assuming 10% return he will have $980,964 in his 
                     retirement. The amount he contributed was $174,000 (18%) the rest which amounts to $806,964 (82%) grew tax free! Good job Bob!
                </div>
            </section>
        </>
    );
}

export default PayYourSelf;


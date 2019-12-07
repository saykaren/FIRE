import React from 'react';
import {useHistory} from 'react-router';

const SpendLess = () =>{
    const history = useHistory();

    const goBackHistory = () =>{
        history.goBack();
    }

    return(
        <>
            <button className="backButton" onClick={goBackHistory}>Back</button>
            <section id="Spending_less_than_you_earn" class="main-section">
                <h2 className="section-header">Spending less than you earn</h2>
                <div className="sub-section"> 
                    The only way to get ahead is to outpace your spending habits. If you make $150,000 a year but spend $145,000 a year you are worse off than 
                    someone making $50,000 a year but only spending $25,000. $150,000-$145,000 = $5,000 versus  $50,000-$25,000=$25,000. 
                    Which one of those scenarios is able to put more into savings or better yet invest it? Yes the one making 1/3 less. You need to learn to act 
                    your wage. You cannot out earn your stupidity, at least in the long run.  
                    </div>
     
                    <div className="sub-section"> 
                     It is very important to know your numbers. Knowing how much you earn is important but even more essential knowledge knows how 
                        much you spend. Making and tracking on a monthly budget will only allow you to ensure your money is going to the most important 
                        areas of your life. Budgets get a bad rap. People think if I am on a budget that is someone else telling me how to spend my money, 
                        I want freedom. WRONG! You make the budget you are being the boss of your own money and ensuring that rather than those precious 
                        dollars going to fast-food they might be put to good use on a fancy vacation or what is most important to you.
                    </div>
                    <div className="sub-section"> 
                         A very sensible trick was taught to me in the last few years is bank any raises I got and continue my current lifestyle. In other 
                         words you are use to spending a certain amount and are content. Then WHOOPEE you get a raise. Most people then start spending that 
                         extra cash and are very happy, for a short time. Then after awhile you get use to living off that amount and are spending the 
                         majority of your raise on a monthly basis, back to your same contentment as before. What if rather than get use to that higher 
                         income you up your automatic savings and/or investing. Make it so you don't even realize that raise by increasing the automatic 
                         investment into your 401k or IRA by at least 80% of that raise. You were already happy before the raise and were able to get by. 
                         Trust me your future self will thank you! 
                    </div>
                    <div className="sub-section"> 
                        Lastly the reason I am working on saving and investing is that one day I will get to the tipping point 
                        (Passive Income > Yearly Income) where my money makes more than I do! 
                    </div>
            </section>
          
        </>
    );
}

export default SpendLess;
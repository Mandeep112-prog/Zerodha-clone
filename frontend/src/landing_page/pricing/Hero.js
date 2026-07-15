import React from 'react';

function Hero(){
    return (
       <div className='container'>
            <div className='text-muted text-center mt-5 mb-5 p-5'>
            <h2>
                Charges
            </h2>
            <p className='text-muted mt-3 fs-4'>List of all charges and taxes</p>
            </div>

            <div className='row text-center fs-5 text-muted'>
                <div className='col-4 p-4'>
                    <img src='Media/images/pricing0.svg' style={{width:"70%"}}/>
                    <h2>Free equity delivery</h2>
                    <p className='mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='Media/images/other-trades.svg' style={{width:"70%"}}/>
                    <h2>Intraday and F&O trades</h2>
                    <p className='mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='Media/images/pricing0.svg' style={{width:"70%"}}/>
                    <h2>Free direct MF</h2>
                    <p className='mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 text-center'>
            <div className='row'>
                <img src='Media/images/homeHero.png' alt="Hero Banner" className='mb-5'/>

            </div>
            <h2 className='mt-5'>Invest in everything</h2>
            <p>Onlion platform to invest in stocks, derivatives, mutual funds, and more</p>
            
            <div className="d-grid gap-2 col-2 mx-auto">
                <button className="btn btn-primary mb-5" type="button">Signup now</button>
            </div>
            
        </div>
     );
}

export default Hero;
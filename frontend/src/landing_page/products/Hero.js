import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom'>
            <div className='text-center mt-5 mb-5 p-5'>
            <h1>
                Zerodha Products
            </h1>
            <p className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</p>
            <p className="text-muted" style={{fontSize:"1.2em"}}>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings →</a></p>
            </div>
        </div>
     );
}

export default Hero;
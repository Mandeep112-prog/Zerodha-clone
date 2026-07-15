import React from 'react';

function KcBanner() {
    return ( 
        <div className='container-fluid text-center bg-body-tertiary mt-5 ' >
            <div className='row pt-3'>
                <div className='col-3 '>
                    <img src='Media\images\kc-logo-landing.svg' alt='kite connect logo' className='pt-2' />
                </div>
                <div className='col-6'>
                    <p>Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more. <a href='sadf' style={{textDecoration:"none"}}>Explore <i class="fa-solid fa-arrow-right-long"></i></a></p>
                </div>
                <div className='col-3'>
                    <img src='Media\images\kc-banner-image.svg' alt='kc banner' className='pt-2'/>
                </div>
            </div>
        </div>
     );
}

export default KcBanner;
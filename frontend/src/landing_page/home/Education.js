import React from 'react';

function Education() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row'>
                <div className='col '>
                    <img src='Media\images\education.svg' alt='education img' style={{width:"70%"}}></img>
                </div>
                <div className='col '>
                    <h3 >Free and open market education</h3>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                    <a href='\log' style={{textDecoration:"none"}} className='mt-3'>Versity <i class="fa-solid fa-arrow-right-long"></i> </a>

                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

                    <a href='\log' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i> </a>
                </div>
            </div>
        </div>
     );
}

export default Education;
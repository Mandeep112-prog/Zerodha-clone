import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5 mt-5 '>
            <div className='row'>
                <div className='col-4'>
                    <h3>Unbeatable pricing</h3>
                    <p className='mt-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                     <a href='\log' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right-long"></i> </a>

                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col border '>
                            <h1>&#8377;0</h1>
                           <br></br>
                           <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col border'>
                            <h1 >&#8377;20</h1>
                           <br></br>
                           <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
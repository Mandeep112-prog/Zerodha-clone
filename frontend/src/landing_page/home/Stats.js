import React from 'react';

function Stats() {
    return ( 
        <div className='container p-5  ' style={{height:"100vh"}}>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5 text-muted'>Trust with confidence</h1>
                    <h3 className='fs-4 text-muted'>Customer-first always</h3>
                    <p className='mb-5 text-muted'>That's why 1.3+crore customers trust Zerodha with &#8377;3.5+ lakh crores worth of equity investments</p>

                    <h3 className='fs-4  text-muted'>No spam or gimmicks</h3>
                    <p className='mb-5  text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. </p>

                    <h3 className='fs-4 text-muted'>The Zerodha universe</h3>
                    <p className='mb-5 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className='fs-4 text-muted'>Do better with money</h3>
                    <p className='mb-5 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>



                </div>

                <div className='col-6 '>
                    <img src='Media/images/ecosystem.png' alt='ecosystem' style={{width:"100%"}} />
                    <div className='text-center '>
                        <a href='\sign' className='mx-5'>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='\log'>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;
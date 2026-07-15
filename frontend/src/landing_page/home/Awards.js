import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6'>
                    <img src='Media/images/largestBroker.svg' alt='largestBroker img'/>

                </div>

                <div className='col-6 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>

                    <div className='row mt-5'>
                        <div className='col-6'>
                        <ul>
                            <li>
                                <p>Futures and Options</p>

                                </li>
                            <li>
                                <p>Commodity derivatives</p>
                                </li>

                            <li>
                                <p>Currency derivatives</p>
                                </li>
                        </ul>
                        </div>

                    

                    <div className='col-6'>
                        <ul>
                            <li>
                                <p>Stocks & IPOs</p>

                                </li>
                            <li>
                                <p>Direct mutual funds</p>
                                </li>

                            <li>
                                <p>Bonds and Govt. Securities</p>
                                </li>
                        </ul>

                    </div>
                    </div>

                    <img className='' src='Media/images/pressLogos.png' alt='pressLogo img' style={{width:"90%"}}/>
                    
                </div>

            </div>

        </div>
     );
}

export default Awards;
import React from 'react';

function Hero() {
    return ( 
        <div className="container-fluid  " id='supportHero'>
      <div className=" p-5 " id='supportWrapper'>
        <h3>Support Portal</h3>
        <a href=''>Track Ticket</a>
      </div>

      <div className="row">
        <div className='col-8 supportSearch' >
            <h2>Search for an answer or browser help topics to create a ticket</h2>
            <input  placeholder='Eg. how do I activate F&O, why is my order getting rejected.'></input><br/><br/>
            <a href=''>Track account opening</a>
            <a href=''>Track segment activation</a>
            <a href=''>Intraday margins</a>
            <a href=''>Kite user manual</a>
        </div>
        <div className='col-4'><h2>Featured</h2>
        <ul>
            <p>1. <a href=''> Current Takeovers and Delisting- January 2024</a></p>
            <p>2. <a href=''> Latest Intraday leverages-MIS & CO</a></p>
        </ul> 
        </div>
        
      </div>
      </div>
     );
}

export default Hero;
import React from 'react';

function RightSection({
  imageUrl,
  productName,
  productDescription,
}) {
    return ( 
        <div className="container">
      <div className="row">
        
        <div
          className="col-6 text-muted "
          style={{
            paddingLeft: "60px",
            paddingRight: "190px",
            marginTop: "130px",
            marginBottom: "80px",
          }}
        >
          <h3>{productName}</h3>
          <br />
          <p className="fs-5">{productDescription}</p>
          <div className="fs-5 ">
            <a href="" style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div
          className="col-6"
          style={{ marginTop: "", marginBottom: "80px" }}
        >
          <img src={imageUrl} style={{ paddingRight: "" }} />
        </div>

      </div>
    </div>
     );
}

export default RightSection;
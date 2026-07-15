import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStor,
}) {
  return (
    <div className="container">
      <div className="row ">
        <div
          className="col-6"
          style={{ marginTop: "100px", marginBottom: "80px" }}
        >
          <img src={imageUrl} style={{ paddingLeft: "60px" }} />
        </div>
        <div
          className="col-6 text-muted "
          style={{
            paddingLeft: "190px",
            paddingRight: "60px",
            marginTop: "150px",
            marginBottom: "80px",
          }}
        >
          <h3>{productName}</h3>
          <br />
          <p className="fs-5">{productDescription}</p>
          <div className="fs-5 ">
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{ marginLeft: "80px",textDecoration:"none" }}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="Media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStor} style={{ marginLeft: "18px" }}>
              <img src="Media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

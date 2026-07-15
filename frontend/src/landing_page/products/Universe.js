import React from "react";

function Universe() {
  return (
    <>
      <div className="container text-center fs-4 mt-5 mb-5">
        <p>
          Want to know more about our technology stack? Check out the{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>
      <div className="container text-center mt-5 p-5">
        <h3>The Zerodha Universe</h3>
        <p className="fs-5 p-4 ">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="container">
        <div className="row text-muted text-center">
            <div className="col-4">
                <img
              style={{ width: "200px" }}
              src="Media/images/zerodhaFundhouse.png"
              alt="ZfundHouse"
            /><br></br><br/>
            <span>
              Our asset management venture
              <br />
              that is creating simple and transparent index
              <br />
              funds to help you save for your goals.
            </span>
            </div>
            <div className="col-4"> <img
              style={{ width: "200px" }}
              src="Media/images/sensibullLogo.svg"
              alt="ZfundHouse"
            />
             <br /><br/>
            <span>
              Options trading platform that lets you
              <br />
              create strategies, analyze positions, and examine
              <br />
              data points like open interest, FII/DII, and more.
            </span>

            </div>
            <div className="col-4"><img
              style={{ width: "160px" }}
              src="Media/images/tijori.svg"
              alt="ZfundHouse"
            />
            <br /><br/>
            <span>
              Investment research platform
              <br />
              that offers detailed insights on stocks,
              <br />
              sectors, supply chains, and more.
            <br/></span>
            </div>
       
        
            <div className="col-4">
                <img
              style={{ width: "200px", marginTop: "90px" }}
              src="Media/images/streakLogo.png"
              alt="ZfundHouse"
            />
            <br />
            <br />
            <span>
              Systematic trading platform
              <br />
              that allows you to create and backtest
              <br />
              strategies without coding.
            </span>
            </div>
            <div className="col-4">
                <img
              style={{ width: "200px", marginTop: "100px" }}
              src="Media/images/smallcaseLogo.png"
              alt="ZfundHouse"
            />
            <br />
            <br />
            <span>
              Thematic investing platform
              <br />
              that helps you invest in diversified
              <br />
              baskets of stocks on ETFs.
            </span>
            </div>
            <div className="col-4 mb-5">
                <img
              style={{ width: "160px", marginTop: "80px" }}
              src="Media/images/dittoLogo.png"
              alt="ZfundHouse"
            />
            <br />
            <br />
            <span>
              Personalized advice on life
              <br />
              and health insurance. No spam
              <br />
              and no mis-selling.
            </span>
            </div>

             <div class="d-grid gap-2 col-2 mx-auto mt-5 mb-5">
                <button class="btn btn-primary mb-5 p-2" type="button">Signup now</button>
            </div>
             </div>
        </div>

    </>
  );
}

export default Universe;

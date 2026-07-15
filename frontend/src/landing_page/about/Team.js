import React from "react";


function Team() {
  return (
    <div className="container mb-5">
      <div className="row text-center ">
        <h2 className="text-muted" style={{marginLeft:"2em"}}>People</h2>
      </div>

      <div
        className="row  p-5 mt-3 "
        style={{ fontSize: "18px", lineHeight: "1.8" }}
      >
        <div className="col ">
          <img
            src="Media/images/mandeep.jpeg"
            alt="image-founder"
            style={{ width: "60%",borderRadius:"100%" }}
          />
          <h4 className="text-muted" style={{marginLeft:"3.8em",marginTop:"1em"}}>Mandeep Kumar</h4>
          <h6 className="text-muted" style={{marginLeft:"5.8em"}}>Full Stack Developer</h6>
        </div>
        <div className="col text-muted">
          <p>
            Hi, I'm{" "}
            <span style={{ color: "#0c82ad", fontWeight: "Bold" }}>
              Mandeep Kumar
            </span>
            , a passionate software developer with a strong interest in building
            scalable and user-friendly web applications. I enjoy developing
            complete web solutions using modern technologies such as React.js,
            Node.js, Express.js, and MongoDB.
          </p>

          <p>
            I continuously improve my skills by working on real-world projects
            and strengthening my knowledge of Data Structures & Algorithms,
            JavaScript, and the MERN Stack.
          </p>

          <p>
            <span style={{ color: "#0c82ad", fontWeight: "Bold" }}>
              This Zerodha Clone is a full-stack project built for learning and
              portfolio purposes
            </span>
            . It includes responsive user interfaces, routing, authentication,
            REST APIs, database integration, and other core features inspired by
            the original Zerodha platform.
          </p>
          <p>
            Connect on{" "}
            <a
              href="https://github.com/Mandeep112-prog"
              style={{ textDecoration: "none" }}
            >
              GitHub<i class="fa-brands fa-github"></i>
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/in/mandeep-kumar-2987a1378?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              style={{ textDecoration: "none" }}
            >
              LinkedIn<i class="fa-brands fa-linkedin"></i>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.instagram.com/mr._deep_112?igsh=MXVrcWt0eW5vazFvcw==" style={{textDecoration:"none"}}>Instagram<i class="fa-brands fa-square-instagram"></i></a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

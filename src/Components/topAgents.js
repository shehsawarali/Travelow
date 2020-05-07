import React from "react";

export default function topAgents() {
  return (
    <div className="agentsContainer">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <div style={{ width: "100%" }}>
        <div className="textContainer">
          Best Rated Travel Agents In Pakistan
        </div>
      </div>

      <div className="agentBox">
      <div className="paddingg1">
        <div className="agentLogo">
        </div>
        <div className="agentName">
            Travel One
        </div>
        <div class="rating">4.5
        <span class="fa fa-star checked"></span></div>
        </div>
      </div>

      <div className="agentBox">
      <div className="paddingg1">
        <div className="agentLogo2"></div>
        <div className="agentName">&nbsp; Pakistan Tours</div>
        <div class="rating">
          3.5
          <span class="fa fa-star checked"></span>
        </div>
      </div>
      </div>
    </div>
  );
}

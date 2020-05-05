import React from "react";

export default function topAgents() {
  return (
    <div className="agentsContainer">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="textContainer">Best Rated Travel Agents In Pakistan</div>
      <div className="subtextContainer">
        You can find ratings and reviews of different travel agents by their
        very own customers.
      </div>
      <div className="agentBox">
        <div className="agentLogo">
        </div>
        <div className="agentName">
            Travel One
        </div>
        <div class="rating">4.5
        <span class="fa fa-star checked"></span></div>
      </div>
      <div className="agentBox2">
      <div className="agentLogo2">
        </div>
        <div className="agentName2">
            Pakistan Tours
        </div>
        <div class="rating">3.5
        <span class="fa fa-star checked"></span></div>
      </div>
    </div>
  );
}

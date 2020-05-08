// Page made by Ayesha
// all the Css code can be found in TravelAgentt.css
import React, { Component } from "react";
import "../OtherCssFiles/TravelAgentt.css";

class Carddd extends Component {

  constructor(props){
    super(props);
    this.state = this.props.agent;
  }
    render() {
        return (
          <div >
            <div class= "TravelAgentName">
              {this.state.companyName}
            </div>
            
            <div class="TravelAgentInfo">
              {this.state.email}
            </div>
          </div>
        );
      }  
    }
export default Carddd;

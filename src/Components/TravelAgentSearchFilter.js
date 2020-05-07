// Page made by Ayesha
// all the Css code can be found in SearchFilterr.css

import React, { Component } from "react";
import "../OtherCssFiles/SearchFilterr.css"

class TravelAgentFilter extends Component {
    render() {
        return (
            <div className="SearchFilterpadding">
                 <div className="BackgroundBox"  >
                    <div className="SearchFilterHeadings">
                        Filter Your search by, <br></br>
                        Rating
                    </div>

                    <div className="SearchFilterText">
                    5 star<br></br>
                    between 4 and 5 star<br></br>
                    between 3 and 4 star<br></br>
                    between 2 and 3 star<br></br>
                    between 1 and 2 star
                    </div>    
                </div>
            </div> 
        );
      }  
    }
export default TravelAgentFilter ;


// Page made by Ayesha
// all the Css code can be found in SearchFilterr.css

import React, { Component } from "react";
import "../OtherCssFiles/SearchFilterr.css"

class Filters extends Component {
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

                    <div className="SearchFilterHeadings">
                        Price
                    </div>

                    <div className="pair">
                        
                                            
                    </div>
                    <div className="SearchFilterInputFeilds">
                        <input size="20px" id="PriceLowerBound" placeholder="min cost" type="number" />
                        </div>
                    <div className="SearchFilterInputFeilds">
                        <input size="20px" id="PriceUpperBound" placeholder="max cost" type="number" />
                        </div> 

                    <div className="SearchFilterHeadings">
                        Number of days
                    </div>
                    <div className="SearchFilterInputFeilds">
                    <input id="NumberofDays" placeholder="5 days" type="number" />                        
                    </div>
                    

                    <div className="SearchFilterHeadings">
                        Departure From
                    </div>
                    <div className="SearchFilterInputFeilds">
                    <input id="DepartureFrom" placeholder="Lahore" type="text" />
                    </div>
                    .
                </div>
            </div>
           
        );
      }  
    }
export default Filters ;

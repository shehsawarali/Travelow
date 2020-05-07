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
                        Minimum Vendor Rating
                    </div>

                    <div className="SearchFilterText">
                        <select id="cars" name="cars">
                            <option value="1star">⭐</option>
                            <option value="2star">⭐⭐</option>
                            <option value="3star">⭐⭐⭐</option>
                            <option value="4star">⭐⭐⭐⭐</option>
                            <option value="5star">⭐⭐⭐⭐⭐</option>
                        </select>
                    </div>    

                    <div className="SearchFilterHeadings">
                        Price
                    </div>

                    <div className="pair">
                        
                                            
                    </div>
                    <div className="SearchFilterInputFeilds">
                        <input size="20px" id="PriceLowerBound" placeholder="min cost" type="number" min="1000"/>
                        </div>
                    <div className="SearchFilterInputFeilds">
                        <input size="20px" id="PriceUpperBound" placeholder="max cost" type="number" min="0"/>
                        </div> 

                    <div className="SearchFilterHeadings">
                        Number of days
                    </div>
                    <div className="SearchFilterInputFeilds">
                    <input id="NumberofDays" placeholder="5 days" type="number" min="0"/>                        
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

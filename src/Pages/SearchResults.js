//page made by Ayesha
//CSS classes can be found in the SearchCard.css


import React from "react";
import NavBar from "../Components/navbar";
import SearchResultbox from "../Components/searchCard";
import Filters from "../Components/Searchfilters";
import "../OtherCssFiles/SearchFilterr.css";
import SearchBar2 from "../Components/SearchBar2"


export default class SearchResults extends React.Component {
/*SHEHSAWAR*/
  constructor(props){
    super(props);
    this.state = props.state;
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.state !== this.state) {
      this.setState(nextProps.state);
    }
  }
/*SHEHSAWAR*/

  render(){
    return (
      <div>
        {/* this code stes up the top of the page */}
        <div class="hero-image-contact">
          <NavBar state={this.state}/>
          <div className="text">SEARCH RESULTS TRIP
          </div>
          <SearchBar2 />
        </div>

      {/* this is the search filter on the page */}
      <div className="TripPageGrid">
        <div className="FilterAlignment">
        <div className="SearchFilterpadding">
                 <div className="BackgroundBox"  >
                    <div className="SearchFilterHeadings">
                        Minimum Vendor Rating
                    </div>
                    {/* DropDown menu for selecting the Travel Agent rating that a user wants to select */}
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
                    {/* input fields for trip price range */}
                    <div className="pair">
                    </div>
                    <div className="SearchFilterInputFeilds">
                        <input size="20px" id="PriceLowerBound" placeholder="min cost" type="number" min="1000"/>
                        </div>
                    <div className="SearchFilterInputFeilds">
                        <input size="20px" id="PriceUpperBound" placeholder="max cost" type="number" min="0"/>
                        </div>

                     
                    {/* input field for trip number of */}
                    <div className="SearchFilterHeadings">
                        Number of days
                    </div>
                    <div className="SearchFilterInputFeilds">
                    <input id="NumberofDays" placeholder="5 days" type="number" min="0"/>                        
                    </div>
                    
                    {/* input field for trip departure from */}
                    <div className="SearchFilterHeadings">
                        Departure From
                    </div>
                    <div className="SearchFilterInputFeilds">
                    <input id="DepartureFrom" placeholder="Lahore" type="text" />
                    </div>
                </div>
            </div>
        </div>
        
        {/* Search result boxes show the card on the trip search page */}
        <div className="SearchResultTrips">
          <SearchResultbox />
          <SearchResultbox />
          <SearchResultbox />
        </div>

       </div>
      </div>
    );
  }
}

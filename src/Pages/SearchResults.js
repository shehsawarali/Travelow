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
        <div class="hero-image-contact">
          <NavBar state={this.state}/>
          <div className="text">SEARCH RESULTS TRIP
          </div>
          <SearchBar2 />
        </div>

        
      <div className="TripPageGrid">
        <div className="FilterAlignment">
        <Filters/>
        </div>
        

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

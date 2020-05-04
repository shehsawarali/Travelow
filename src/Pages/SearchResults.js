import React from "react";
import NavBar from "../Components/navbar";
import SearchResultbox from "../Components/Searchcard";

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
          <div className="text">Search results</div>
        </div>

        <div className="MyReviews">
          <SearchResultbox />
          <SearchResultbox />
          <SearchResultbox />
        </div>
      </div>
    );
  }
}

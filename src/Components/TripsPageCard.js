// Page made by Ayesha
// all the Css code can be found in SearchCard.css

import React, { Component } from "react";
import "../OtherCssFiles/Searchcard.css";
import Card from "./TripsPageSubcard";
import { Link } from "react-router-dom";

class SearchResultbox extends Component {
  
  constructor(props){
    super(props);
    this.state = props.trip;
    this.click = this.click.bind(this);
  }

  click (){
    this.props.history.push({
      pathname: '/tripdetails',
      state: { trip: this.state.location }
    })
  }
  
  render() {
    return (
     
      <div className="TripsSearchCard">
         <Link to={{
           pathname:'/tripdetails',
           state:{trip: this.state}
          }}
          style={{ textDecoration: "none", textTransform: "none"}}
          >

        <div className="CardInfoContainer">

          <img
            className="TripImage"
            src={require("../Images/hunza.png")}
          ></img>

          
            <Card trip={this.state}/>
          
          
          <div className="TripPrice" >
          {this.state.price}
          </div>

          
        </div>
        </Link>

      </div>
      
    );
  }
}

export default SearchResultbox;


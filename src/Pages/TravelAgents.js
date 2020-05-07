import React, { Component } from "react";
import NavBar from "../Components/navbar";
import "../OtherCssFiles/TravelAgentt.css";
import Card from "../Components/TravelAgentCard"
import firebase from "../config/fire";

const database = firebase.firestore().collection("Travel Agent");


export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: props.state,
      data: []
    }

    var queryreturns = [];
    database.orderBy("rating", "desc").limit(30)
    .get()
    .then(function(snapshot) {
      snapshot.forEach(function(doc) {
        var childData = doc.data();
        queryreturns = queryreturns.concat(childData)
      });
    }
    )
    .then(() => this.setState({data: queryreturns}));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.state !== this.state) {
      this.setState(nextProps.state);
    }
  }

  render() {
    return (
      <div>
        <div class="hero-image-contact">
          <NavBar state={this.state} />
          <div className="text">Top Rated Travel Agents</div>
        </div>

        <div className="MyReviews2">
          {this.state.data.map(function(d, idx){
            return (
              <div key={idx}>
                <Card agent={d}/>
              </div>
            )
          })}
        </div>

      </div>
      
    );
  }
}


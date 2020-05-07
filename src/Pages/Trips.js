import React from "react";
import NavBar from "../Components/navbar";
import SearchResultbox from "../Components/Searchcard";
import firebase from "../config/fire";

const database = firebase.firestore().collection("Trips");

export default class Trips extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: props.state,
      data: []
    }

    var queryreturns = [];
    database.orderBy("lastUpdated", "desc").limit(10)
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
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.state !== this.state) {
      this.setState(nextProps.state);
    }
  }

  render(){
    return (
    <div>
      <div class="hero-image-contact">
      <NavBar state={this.state.user} />
      <div className="text">Recently Added Trips</div>
      </div>


      <div className = "MyReviews2">
        {this.state.data.map(function(d, idx){
          return (
            <div key={idx}>
              <SearchResultbox trip={d}/>
            </div>
          )
        })}
      </div>
    </div>
    );
  }
}

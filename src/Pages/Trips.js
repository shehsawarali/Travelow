import React from "react";
import NavBar from "../Components/navbar";
import SearchResultbox from "../Components/Searchcard";
import firebase from "../config/fire";

const database = firebase.firestore().collection("Customer");

export default class Trips extends React.Component {

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

  query(){
    database.orderBy("dob", "desc").limit(10)
    .get()
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var childData = childSnapshot.val();
      });
    })
}

  render(){
    return (
      <div>
        <div class="hero-image-contact">
          <NavBar state={this.state}/>
        </div>

        <div className="MyReviews">
          <SearchResultbox />
          <SearchResultbox />
          <SearchResultbox />
          <SearchResultbox />
        </div>
      </div>
    );
  }
}

import React from "react";
import firebase from "../config/fire";
import { Link } from "react-router-dom";

class search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            query: "",
            querytype: "Destination"
        }

        this.searchHandler = this.searchHandler.bind(this);
        this.handleType = this.handleType.bind(this);
        this.query = this.query.bind(this);
    }

    searchHandler = event => {
        this.setState({query: event.target.value});
    }

    handleType = event => {
        this.setState({querytype: event.target.value});
    }

    query(){
        console.log(this.state);
    }

    logout()
    {
        firebase.auth().signOut()
        .then(() => {
            console.log("Logged out");
            
        })
        .catch((err) => {
            console.log("Error: " + err.toString());
        })
    }


    render(){
        return(

            <div>
                <div>
                    <div className = "searchBar">

                        <input label="Search" icon="search" placeholder={'Search Travelow'} onChange={this.searchHandler} height='10px'></input>

                        <select value={this.state.Destination} onChange={this.handleType}>
                            <option>Destination</option>
                            <option>Travel Agent</option>
                        </select>

                        

                        <Link to="/searchresults">
                            <button className="searchButton" onClick={this.query}><span>Search</span></button>
                        </Link>

                        <button className="searchButton" onClick={this.logout}><span>Logout</span></button>
                    </div>
                </div>
            </div>
        )
    }
}
export default search;

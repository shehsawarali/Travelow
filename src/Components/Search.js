import React from "react";
import firebase from "../config/fire";
import NavBar from "../Components/navbar";


class search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            query: "",
            querytype: "Destination"
        }

        this.searchHandler = this.searchHandler.bind(this);
        this.handleType = this.handleType.bind(this);
    }

    searchHandler = event => {
        this.setState({query: event.target.value});
    }

    handleType = event => {
        this.setState({querytype: event.target.value});
    }

    render(){
        return(

            <div>
                <div>
                    <div className = "searchBar">

                        <input label="Search" icon="search" onChange={this.searchHandler} height='10px'></input>

                        <select value={this.state.Destination} onChange={this.handleType}>
                            <option>Destination</option>
                            <option>Travel Agent</option>
                        </select>

                        <button className="searchButton" onChange={this.searchHandler}><span>Search</span></button>

                    </div>
                </div>
            </div>
        )
    }
}
export default search;
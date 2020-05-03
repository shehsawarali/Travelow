import React from "react";
import NavBar from "../Components/navbar";
import SearchResultbox from "../Components/Searchcard";

export default function UserProfile() {
  return (
    <div>
      <div class="hero-image-contact">
        <NavBar />
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

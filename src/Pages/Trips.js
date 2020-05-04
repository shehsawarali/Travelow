import React from "react";
import NavBar from "../Components/navbar";
import SearchResultbox from "../Components/Searchcard";

export default function Home() {
  return (
    <div>
      <div class="hero-image-contact">
        <NavBar />
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
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png" className="food-munch-logo" alt="Food Munch Logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active" href="#wcuSection">Why Choose Us?</a>
            <a className="nav-link" href="#exploreMenuSection">Explore Menu</a>
            <a className="nav-link" href="#deliveryPaymentSection">Delivery & Payment</a>
            <a className="nav-link" href="#followUsSection">Follow Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

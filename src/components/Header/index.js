
import React from "react";
import "./style.css";
function Header() {
    return (
        <div className="App">
        <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light fixed-top">
      <a className="navbar-brand" href="index.html">MOHAMED AHMED</a>
  
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-link active" href="index.html">Home <span className="sr-only">(current)</span></a>
          <a className="nav-link text-light" href="portfolio.html">Portfolio</a>
          <a className="nav-link text-light" href="contact.html">Contact</a>
        </div>
      </div>
    </nav>
        </header>
      </div>
    );
      
        
  }
  
  export default Header;

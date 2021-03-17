import React from "react";
import "./style.css";
import Header from "../Header";
import Footer from "../Footer";

function Contacts() {
  return (
    <div>
      <Header />
      <div class="row contacts">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="contact-info">
                <h2>Contact Mohamed Ahmed</h2>
                <h3>I would love to hear from you !</h3>
                <div class="row" id="contIcon">
                  <div class="col">
                    <a href="https://www.linkedin.com/in/mohmaed-ahmed-a82230201?
lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_
details%3B2BYdNxOoTP634rMHETJ9lg%3D%3D">
                      <i class="fab fa-linkedin"></i></a> &nbsp;
                    <a href="https://www.facebook.com/mohamed.m.sayed.35/">
                      <i class="fab fa-facebook-square"></i>
                    </a> &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mohamedahmed-1980">
                      <i class="fab fa-github" aria-hidden="true"></i>
                    </a>
                    <p><strong>Email</strong> : mohamedahmed0912@hotmail.com</p>
                    <p> <strog>Phone :</strog> 979 324 9749</p >
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contacts
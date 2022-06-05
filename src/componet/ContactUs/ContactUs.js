import React from "react";
import "./styleContact.css";
import Img1 from "./img1.png";

const ContactUs = () => {
  return (
    <div>
      <div className="section">
        <div class="container">
          <div class="contactinfo">
            <div>
              <h2>Contact Info</h2>
              <ul class="info">
                <li>
                  <span>
                    <img src="placeholder.png" width="40" height="40" />
                  </span>
                  <span>
                    2912 Meadowbrrok Road
                    <br />
                    Los Angeles, CA
                    <br />
                    900147
                  </span>
                </li>
                <li>
                  <span>
                    <img src="email.png" width="40" height="40" />
                  </span>
                  <span>lorem@ipsum.com</span>
                </li>
                <li>
                  <span>
                    <img src="call.png" width="40" height="40" />
                  </span>
                  <span>342-256-9542</span>
                </li>
              </ul>
            </div>
            <ul class="sci">
              <li>
                <a href="#">
                  <img src={Img1} width="30" height="30" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img2.png" width="30" height="30" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img3.png" width="30" height="30" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img4.png" width="30" height="30" />
                </a>
              </li>
            </ul>
          </div>
          <div class="contactForm">
            <h2>Send a Message</h2>
            <div class="formBox">
              <div class="inputBox w50">
                <input type="text" name="" required />
                <span>First Name</span>
              </div>
              <div class="inputBox w50">
                <input type="text" name="" required />
                <span>Last Name</span>
              </div>
              <div class="inputBox w50">
                <input type="text" name="" required />
                <span>
                  Email-address
                  {/* <Email-address /> */}
                </span>
              </div>
              <div class="inputBox w50">
                <input type="text" name="" required />
                <span>Mobile Number</span>
              </div>
              <div class="inputBox w100">
                <textarea name="" required></textarea>
                <span>Write your text here.....</span>
              </div>
              <div class="inputBox w100">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

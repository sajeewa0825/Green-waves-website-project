import React from "react";
import "./styleContact.css";

const ContactUs = () => {
  return (
    <div>
      <div class="container p-3">
        <div className="row">
          <div className="col-md-8 mb-3">
            <h1>Contact us</h1>
            <br></br>
            <br></br>
            <form class="row g-3">
              <div className="row">
                <div class="col">
                  <label for="inputName" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Ex:Jhone"
                    aria-label="Name"
                  />
                </div>
                <div class="col">
                  <label for="inputPhone" class="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="+94-123456789"
                    aria-label="Phone"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label for="inputEmail" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Ex:abc@gmail.com"
                    aria-label="Email"
                  />
                </div>
                <div class="col">
                  <label for="inputSubject" class="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Ex:abc....."
                    aria-label="Subject"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label for="inputSubject" class="form-label">
                    Your Massege
                  </label>
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="contactUsBtn">
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-4 ContactUs_col">
            <div class="contact-in">
              <h1>Contact Info</h1>
              <h2>
                <i class="fa fa-phone" aria-hidden="true"></i> Phone
              </h2>
              <p>123-456-789</p>
              <h2>
                <i class="fa fa-envelope" aria-hidden="true"></i> Email
              </h2>
              <p>info@democompany.com</p>
              <h2>
                <i class="fa fa-map-marker" aria-hidden="true"></i> Address
              </h2>
              <p>Vasant Vihar, Delhi, India</p>
              <ul className="text-center">
                <li>
                  <a href="#">
                    <i class="bi bi-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-google" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

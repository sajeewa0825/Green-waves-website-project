import React from "react";
import "./styleContact.css";

const ContactUs = () => {
  return (
    <div>
      <div class="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Contact us</h1>
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
                <button type="submit" class=" btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4 bg-primary">text</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

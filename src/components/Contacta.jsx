import React from "react";

import pictures from "./call.png";
import "../styles/contacta.scss";

const Contacta = () => {
  return (
    <section className="box">
            

      <div className="div-image">
        <img src={pictures} className="imgcontact" alt="" />
        <div className="contact">
          <div className="styleab">
            <h1>Get in touch</h1>
          </div>
          <div className="contact-us">
            <h3>contact@e-comm.ng</h3>
            <h3>+234556666534</h3>
            <h3>20 Prince Hareme Lakki Phase 1</h3>
          </div>
        </div>
      </div>

      <div class="formdr">
        <div className="formo">
          <label for="name" className="name">
            Full Name
          </label>
          <div>
            <input type="text" placeholder="name" name="Full name" />
          </div>
        </div>
        <div class="formo">
          <label for="name" className="name">
            Email
          </label>
          <div>
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div class="massage">
            <label for="subject" className="subject">
              Massage
            </label>
            <div>
              <textarea
                id="subject"
                name="subject"
                className="subject"
                row="6"
                maxlength="3000"
              ></textarea>
            </div>

            <div class="submit">
              <button className="btn24 btn-primary" type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacta;

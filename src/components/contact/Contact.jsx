import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone_logo.png";
import Email from "../../img/mail_logo.png";
import Addres from "../../img/map_logo.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import tick from "../../img/accept.png";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c3x9fkq",
        "template_3wkxxrv",
        formRef.current,
        "user_eKuhS5BwVojkXVghgM9kV"
      )
      .then(
        (result) => {
          console.log("This is comment", result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9002050779
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              1298shamshad@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Addres} alt="" className="c-icon" />
              Deokota Toll, N.S.Road, Jaigaon. Alipurduar(West Bengal)
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && (
              <div className="response">
                <img src={tick} alt="tick" width="30px" height="30px" />
                <h4>Thankyou! Your response have been submitted!</h4>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

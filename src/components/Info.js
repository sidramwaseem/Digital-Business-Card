import React from "react";
import ProfilePic from "../images/profilePic.jpg";
import emailicon from "../images/Icon.png";

export default function Info() {
  return (
    <section className="info-section">
      <img className="profile-pic" src={ProfilePic} alt="ProfilePic" />
      <h1>Sidra Waseem</h1>
      <p>Frontend Developer</p>
      <a className="email-link" href="mailto:sidraw24@gmail.com" target="_blank" rel="noreferrer">
        <button className="btn">
          <img className="email-icon" src={emailicon} alt="Email-icon" />
          <p>Email</p>
        </button>
      </a>
    </section>
  );
}

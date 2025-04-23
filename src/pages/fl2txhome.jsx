import './fl2txhome.css';
import { useEffect } from "react";

import profpic from '../assets/profpic1.jpg';
import logo from '../assets/state-farm-logo-4.svg';
import email from '../assets/mail.svg';
import message from '../assets/message-circle.svg';
import phone from '../assets/phone-call.svg';
import id from '../assets/user.svg';
import bill from '../assets/credit-card.svg';
import ig from '../assets/instagram.svg';
import fb from '../assets/facebook.svg';
import li from '../assets/linkedin.svg';
import gg from '../assets/chrome.svg';
import x from '../assets/twitter.svg';

const Fl2txhome = () => {
  return (
    <div className="-oneX-body--primary" style={{ fontFamily: "sans-serif" }}>

      {/* Logo (Centered) */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <img
          src={logo}
          alt="State Farm Logo"
          style={{
            width: "300px",
            borderRadius: "10px"
          }}
        />
      </div>

      {/* Hero Section */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem 1rem",
        textAlign: "center"
      }}>
        <h1>Howdy Partner! Welcome to Texas!</h1>
        <p>---</p>
        <p>Have questions about home insurance when moving states?</p>
        <p>Let our relocation experts answer all your questions!</p>
      </div>

      {/* CTA Button */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
        <a
          href="https://schara.net/insurance/homeowners"
          target="_blank"
          rel="noopener noreferrer"
          className="red-oval-button"
        >
          Get a Quote Now!
        </a>
      </div>

      {/* Action Icons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", marginBottom: "3rem" }}>
        {/* Email Agent (contact form) */}
        <a
            href="https://schara.net/#contact-form-tab"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#000", textAlign: "center" }}
        >
            <div style={{ cursor: "pointer" }}>
            <img src={email} alt="Email" style={{ width: "30px" }} />
            <p className="icon-label">Email Agent</p>
            </div>
        </a>

        {/* Text Agent */}
        <a
            href="sms:+12149437500"
            style={{ textDecoration: "none", color: "#000", textAlign: "center" }}
        >
            <div style={{ cursor: "pointer" }}>
            <img src={message} alt="Text" style={{ width: "30px" }} />
            <p className="icon-label">Text Agent</p>
            </div>
        </a>

        {/* Call Agent */}
        <a
            href="tel:+12149437500"
            style={{ textDecoration: "none", color: "#000", textAlign: "center" }}
        >
            <div style={{ cursor: "pointer" }}>
            <img src={phone} alt="Call" style={{ width: "30px" }} />
            <p className="icon-label">Call Agent</p>
            </div>
        </a>

        {/* Pay a Bill */}
        <a
            href="https://financials.statefarm.com/guest-pay/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#000", textAlign: "center" }}
        >
            <div style={{ cursor: "pointer" }}>
            <img src={bill} alt="Pay Bill" style={{ width: "30px" }} />
            <p className="icon-label">Pay a Bill</p>
            </div>
        </a>

        {/* Get ID Card */}
        <a
            href="https://get-id-card.delitess.c1.statefarm/view-insurance-card"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#000", textAlign: "center" }}
        >
            <div style={{ cursor: "pointer" }}>
            <img src={id} alt="ID Card" style={{ width: "30px" }} />
            <p className="icon-label">Get ID Card</p>
            </div>
        </a>
        </div>

      {/* About + Profile */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        padding: ".5rem",
        marginBottom: ".5rem"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: ".5rem",
          padding: ".5rem",
          marginBottom: ".5rem",
          maxWidth: "1000px"
        }}>
          {/* Profile Picture */}
          <img
            src={profpic}
            alt="Profile"
            style={{ width: "300px", borderRadius: "10px" }}
          />

          {/* Bio */}
          <div style={{ maxWidth: "600px", paddingLeft: "1rem" }}>
            {/* Review Widget (centered with soft styling) */}
                <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                    <p style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        color: "#333",
                        textAlign: "center"
                    }}>
                        ⭐️⭐️⭐️⭐️⭐️ 4.9 Stars with 150+ Reviews!
                    </p>
                </div>
            <div style={{ height: "2.5rem" }}></div>
            <h2>About Me</h2>
            <p>+ Licensed State Farm Agent since 2000</p>
            <p>+ Bilingual Insurance Agent Servicing Dallas & San Antonio</p>
            <p>+ Expert in Texas relocations from Florida</p>
            <p>+ Over 120 years family State Farm experience since 1956</p>
            <p>+ Former Spanish teacher in Oak Cliff, Dallas</p>
            <div style={{ height: "2.5rem" }}></div>

              {/* Social Icons */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5rem",
                marginBottom: "3rem"
            }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "3rem" }}>
            {/* Instagram */}
            <a
                href="https://www.instagram.com/sfagenttoddschara"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#000", textAlign: "center" }}
            >
                <div style={{ cursor: "pointer" }}>
                <img src={ig} alt="Instagram" style={{ width: "30px" }} />
                <p className="icon-label">Instagram</p>
                </div>
            </a>

            {/* Facebook */}
            <a
                href="https://www.facebook.com/people/Todd-Schara-State-Farm-Insurance-Agent/100063499721097/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#000", textAlign: "center" }}
            >
                <div style={{ cursor: "pointer" }}>
                <img src={fb} alt="Facebook" style={{ width: "30px" }} />
                <p className="icon-label">Facebook</p>
                </div>
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/todd-schara-24b14018"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#000", textAlign: "center" }}
            >
                <div style={{ cursor: "pointer" }}>
                <img src={li} alt="LinkedIn" style={{ width: "30px" }} />
                <p className="icon-label">LinkedIn</p>
                </div>
            </a>

            {/* Website (Google Chrome Icon) */}
            <a
                href="https://schara.net"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#000", textAlign: "center" }}
            >
                <div style={{ cursor: "pointer" }}>
                <img src={gg} alt="Website" style={{ width: "30px" }} />
                <p className="icon-label">Website</p>
                </div>
            </a>

            {/* Twitter / X */}
            <a
                href="https://twitter.com/@SFAgentTodd"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#000", textAlign: "center" }}
            >
                <div style={{ cursor: "pointer" }}>
                <img src={x} alt="Twitter" style={{ width: "30px" }} />
                <p className="icon-label">Twitter</p>
                </div>
            </a>
            </div>

      </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Fl2txhome;
